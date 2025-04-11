var _data, _subjectDict;

$( async function() {
  _data = await loadData();  


  $("#select-subject").autocomplete({
    source: Object.keys(_subjectDict),
    autoFocus: true,
    select: function(e, ui) {
      var subject = ui.item.value;
      updateBySubject(subject);
    }
  });

  displayExample();
} );



function displayExample() {
  chem332 = _data.filter((d) => d.course.startsWith("CHEM 332"));
  renderData(chem332, "example");
}

function clearSubject() {
  document.getElementById("select-subject").value = "";
  document.getElementById("select-subject-clear").style.display = "none";
  
  onUserSelectionChange();
  
}

function onUserSelectionChange() {
  // Check UI:
  let accoladeFilter = document.getElementById("select-accolades").value;
  let genedFilter = document.getElementById("select-gened").value;
  let subjectFilter = document.getElementById("select-subject").value;

  let filters = [];
  let hasAdvancedFilter = false;
  let filterMethod = "default";



  if (accoladeFilter == "national") {
    filters.push( (d) => d.national_award );
    hasAdvancedFilter = true;
    filterMethod = "national-awards";
  } else if (accoladeFilter == "campus") {
    filters.push( (d) => d.national_award || d.uiuc_award );
    hasAdvancedFilter = true;
    filterMethod = "campus-awards";
  } else if (accoladeFilter == "tre") {
    filters.push( (d) => d.national_award || d.uiuc_award || d.num_excellence_awards > 0 || d.num_outstanding_awards > 0 );
    hasAdvancedFilter = true;
    filterMethod = "tre-awards";
  }

  if (genedFilter != "none") {
    filters.push( (d) => d.geneds.includes(genedFilter) );
    hasAdvancedFilter = true;
  }

  if (subjectFilter != "") {
    console.log(`Filter: [subject == ${subjectFilter}]`)
    filters.push( (d) => d.course.startsWith(subjectFilter.trim().toUpperCase()) );
  }
  
  if (filters.length > 0) {
    let filteredData = _data.filter((d) => {
      for (let filter of filters) {
        if (!filter(d)) { return false; }
      }
      return true;
    })

    // Show all courses where any course matches the filter:
    if (hasAdvancedFilter) {
      let courseList = {};
      for (let d of filteredData) {
        if (!courseList[d.course]) { courseList[d.course] = []; }
        courseList[d.course].push(d);
      }

      let courses = Object.keys(courseList);
      filteredData = _data.filter((d) => {
        return courses.includes(d.course);
      });
    }

    renderData(filteredData, "tables", filterMethod);
  } else {
    document.getElementById("tables").setHTMLUnsafe(`
<div style="text-align: center; margin-top: 20px;">
  <i>Select at least one filter criteria to view courses.</i>
</div>`);
  }
}

var updateBySubject = function(subject) {
  document.getElementById("select-subject").value = subject;
  document.getElementById("select-subject-clear").style.display = "inline-block";

  onUserSelectionChange();
};

async function loadData() {
  let data = await d3.csv('./final.csv');
  
  _subjectDict = {};
  for (let d of data) {
    let subject = d.course.substring(0, d.course.indexOf(" "));
    if (!_subjectDict[subject]) { _subjectDict[subject] = []; }
    _subjectDict[subject].push(d);

    if (d.national_award == "[]") {
      d.national_award = undefined;
    } else {
      let awards = d.national_award.substring(1, d.national_award.length - 1).split(",");
      let awardList = [];
      for (let award of awards) {
        award = award.trim();
        awardList.push(award.substring(1, award.length - 1));
      }
      d.national_award = awardList;
    }

    if (d.uiuc_award == "[]") {
      d.uiuc_award = undefined;
    } else {
      let awards = d.uiuc_award.substring(1, d.uiuc_award.length - 1).split(",");
      let awardList = [];
      for (let award of awards) {
        award = award.trim();
        awardList.push(award.substring(1, award.length - 1));
      }
      d.uiuc_award = awardList;
    }

    d.teaching_next_semester = (d.teaching_next_semester == "True");

    d.num_excellence_awards = +d.num_excellence_awards;
    d.num_outstanding_awards = +d.num_outstanding_awards;
    d.num_sections = +d.num_sections;
    d.num_semesters = +d.num_semesters;
    d.num_students = +d.num_students;
    d.rmp_num_reviews = +d.rmp_num_reviews;
    d.total_faculty_awards = +d.total_faculty_awards;
    d.avg_gpa = +d.avg_gpa;
    for (let grade of ALL_GRADES_ARRAY) {
      d[grade] = +d[grade];
    }
    
    d.geneds = [];
    if (d.gened.length > 0) {
      let geneds = d.gened.split(",");
      for (let gened of geneds) {
        switch (gened.trim()) {
          case "Cultural Studies - US Minority": d.geneds.push("US"); break;
          case "US Minority Culture(s)": d.geneds.push("US"); break;
          case "Cultural Studies - Western": d.geneds.push("WCC"); break;
          case "Western Compartv Cult": d.geneds.push("WCC"); break;
          case "Cultural Studies - Non-West": d.geneds.push("NW"); break;
          case "Non-Western Cultures": d.geneds.push("NW"); break;

          case "Nat Sci & Tech - Life Sciences": d.geneds.push("NAT"); break;
          case "Nat Sci & Tech - Phys Sciences": d.geneds.push("NAT"); break;
          case "Physical Sciences": d.geneds.push("NAT"); break;

          case "Social & Beh Sci - Soc Sci": d.geneds.push("SBS"); break;
          case "Social & Beh Sci - Beh Sci": d.geneds.push("SBS"); break;
          case "Social Sciences": d.geneds.push("SBS"); break;

          case "Advanced Composition": d.geneds.push("ACP"); break;
          
          case "Composition I": d.geneds.push("COMP"); break;

          case "Humanities - Lit & Arts": d.geneds.push("HUM"); break;
          case "Humanities - Hist & Phil": d.geneds.push("HUM"); break;
          case "Literature and the Arts": d.geneds.push("HUM"); break;
          case "Hist&Philosoph Perspect": d.geneds.push("HUM"); break;

          case "Quantitative Reasoning I": d.geneds.push("QR"); break;
          case "Quantitative Reasoning II": d.geneds.push("QR"); break;
          case "Quant Reasoning I": d.geneds.push("QR"); break;
          case "Quant Reasoning II": d.geneds.push("QR"); break;

          case "Camp Honors/Chanc Schol": d.geneds.push("HONORS"); break;
          case "James Scholars": d.geneds.push("HONORS"); break;

          //default: console.log(gened); break;
        }
      }
    }
  }

  return data;
}

function firstOccurrence(arr, low, high, x, n) { 
    if (high >= low) {
      mid = Math.floor(low + (high - low) / 2)
      if( ( mid == 0 || x > arr[mid - 1]["course"]) && arr[mid]["course"].startsWith(x)) {
        return mid 
      } 
      else if (x > arr[mid]["course"]) {
        return firstOccurrence(arr, (mid + 1), high, x, n) 
      } 
      else {
        return firstOccurrence(arr, low, (mid - 1), x, n) 
      } 
    }
    return -1;
}


let _current_render_courses;
let _current_data;
let _render_ct;

function _doRender(data, tid, startIndex, endIndex) {

  // Now, iterate through the classes and render the tables
  for (var j = 0; j < _render_ct; j++) {
      let course = _current_render_courses[j];

      // Sort the professors for the course by average GPA
      data[course].sort((a, b) => ((a["A+"] + a["A"] + a["A-"]) < (b["A+"] + b["A"] + b["A-"]) ? 1 : -1))
      // Create the label above the chart (i.e. the course name)
      var label = d3.select("#" + tid).append("h4").text(course)
        .attr("margin", 10)
        .attr("class", "course_name "+ tid);
      if (data[course][0]["gened"].length > 0) {
        var gened_label = d3.select("#" + tid).append("p").text("General Education: " + data[course][0]["gened"])
        .attr("margin", 10)
        .attr("class", "gened_name "+ tid);
      }

      // Create the table and the column headers
      var table = d3.select("#" + tid).append("table").attr("margin", 20).style("table-layout", "fixed").attr("width", "100%").attr("class", tid);
      table.append('col').attr("width", "10%").attr("class", tid.concat(" header_1"));
      table.append('col').attr("width", "7%").attr("class", tid.concat(" header_2"));
      table.append('col').attr("width", "7%").attr("class", tid.concat(" header_3"));
      table.append('col').attr("width", "6%").attr("class", tid.concat(" header_4"));
      table.append('col').attr("width", "30%").attr("class", tid.concat(" header_5"));
      table.append('col').attr("width", "36%").attr("class", tid.concat(" header_6"));
      var columns = ["Instructor", "Students", "Sections", "%4.0s", "GPA Breakdown", "Instructor Awards"]
      table.append('thead').append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(title) {return title;})
        .style("text-align", function(col) {
          if (col == "Instructor" || col == "Instructor Awards") {
            return "left";
          } else {
            return "center";
          }
        })
        .style("width", "100px")
        .attr("class", function(col) {
          if (col == "Students" || col == "Sections") {
            return "hide";
          }
        })
      
      // Create a table with rows and bind a data row to each table row
      for (var t = 0; t < data[course].length; t++) {
        data[course][t]["avg_gpa"] = parseFloat(data[course][t]["avg_gpa"]);
        data[course][t]["num_students"] = parseInt(data[course][t]["num_students"]);
        data[course][t]["num_semesters"] = parseInt(data[course][t]["num_semesters"]);
        data[course][t]["num_sections"] = parseInt(data[course][t]["num_sections"]);
        data[course][t]["num_outstanding_awards"] = parseInt(data[course][t]["num_outstanding_awards"]);
        data[course][t]["num_excellence_awards"] = parseInt(data[course][t]["num_excellence_awards"]);
        data[course][t]["rmp_num_reviews"] = parseInt(data[course][t]["rmp_num_reviews"]);
        data[course][t]["rmp_rating"] = parseFloat(data[course][t]["rmp_rating"]);
        //data[course][t]["teaching_next_semester"] = data[course][t]["teaching_next_semester"] === "True";

        data[course][t]["totalGrades"] = 0;
        for (var grade of ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]) {
          data[course][t][grade] = parseFloat(data[course][t][grade]);
          data[course][t]["totalGrades"] += data[course][t][grade];
        }

        data[course][t]["pctA"] = (data[course][t]["A+"] + data[course][t]["A"] + data[course][t]["A-"]) / data[course][t]["totalGrades"];
      }

      data[course].sort((a, b) => ((a["A+"] + a["A"] + a["A-"]) < (b["A+"] + b["A"] + b["A-"]) ? 1 : -1))

      var tr = table.selectAll("tr.data")
        .data(data[course])
        .enter()
        .append("tr")
        .attr("height", "10px")
        .attr("class", "datarow")
        
      
      // Set the even columns to be lighter than the odd columns
      d3.selectAll(".datarow").filter(":nth-child(even)").attr("class", "datarow even")
      
      // Get cross-function parameters
      var margin = { top: 21, right: 10, bottom: 0, left: 10 };
      var width = "30%";
      var height = 17;


    // Now, create the columns with the data
    createInstructorColumn(tr);
    createNumStudentsColumn(tr);
    createNumSectionsColumn(tr);
    createAvgGpaColumn(tr);
    addGpaBarChart(tr, width, height, margin, COLOR_MAP);
    addAwardsColumn(table, tr);
    
    // Lastly, create the total row at the bottom of the table
    addTotalRow(data[course], table, width, height, margin, COLOR_MAP);
  }

  if (_current_render_courses.length > _render_ct) {
    d3.select("#" + tid).append("div").attr("class", "waf-show-more").html(`
      <div class="mt-5 text-center">
        <button class="btn" style="background-color: #13294B; color: white;" onclick="showMore()">Show More Courses (Currently showing ${_render_ct} / ${_current_render_courses.length})</button>
      </div>
    `)
  }
}


function renderData(dataList, tid, filterMethod = "default") {
  let data = {};
  for (let d of dataList) {
    if (!data[d.course]) { data[d.course] = []; }
    data[d.course].push(d);
    // console.log(d);
  }

  let totalCourses = Object.keys(data).length;


  let resultHtml = `
<div style="text-align: center">
  There are <b>${totalCourses}</b> different courses that matches your filters.
</div>`;
  
  if (totalCourses == 1) { resultHtml = resultHtml.replaceAll("different courses", "course").replaceAll("are", "is") };
  if (tid == "example") { resultHtml = ""; }

  if (totalCourses == 0) {
    resultHtml = `
<div style="text-align: center; padding: 10px; border: solid 1px red; color: red; background-color: #fee;">
  There are <b>zero</b> courses that matches your filters. :(<br>
  Select different filters to find a course.
</div>`;
  }
  d3.select("#" + tid).html(`${resultHtml}`);


  // Sort the list of classes
  let courses;
  if (filterMethod == "default") {
    courses = Object.keys(data).sort();
  } else {
    let courseSort = {};
    for (let courseName of Object.keys(data)) {
      let sortValue = -1;
      for (let d of data[courseName]) {
        let value = -1;
        switch (filterMethod) {
          case "national-awards": value = (d.national_award || []).length; break;
          case "campus-awards": value = (d.uiuc_award || []).length; break;
          case "tre-awards": value = d.num_excellence_awards + d.num_outstanding_awards; break;
        }
        if (value > sortValue) { sortValue = value; }
      }
      courseSort[courseName] = sortValue;
    }

    courses = Object.keys(courseSort).sort((a, b) => {
      return courseSort[b] - courseSort[a];
    });
  }

  
  _current_render_courses = courses;
  _current_data = data;
  _render_ct = courses.length;
  if (_render_ct > 100) {
    _render_ct = 100;
  }

  _doRender(_current_data, tid, 0, _render_ct);
}

function showMore() {
  let start = _render_ct;
  let end = start + 100;
  if (end > _current_render_courses.length) {
    end = _current_render_courses.length;
  }

  _render_ct = end;

  document.querySelector(".waf-show-more").remove();

  _doRender(_current_data, "tables", start, end);

}

function createInstructorColumn(tr) {
  tr.append("td").attr("class", "data instructor")
    .html(function(d) {
      if (d.teaching_next_semester) {
        return `<abbr title="${d.instructor} is currently scheduled to teach this course in Fall 2025">»</abbr> ${d.instructor}`
      }
      return d.instructor;
    });
}

function createNumStudentsColumn(tr) {
  tr.append("td")
  .attr("align", "center")
  .attr("class", "data hide")
  .text(function(d) { return d.num_students })
}

function createNumSectionsColumn(tr) {
  tr.append("td")
  .attr("align", "center")
  .attr("class", "data hide")
  .text(function(d) { return d.num_sections })
}

function createAvgGpaColumn(tr) {
  tr.append("td")
  .attr("align", "center")
  .attr("class", "data avg_gpa")
  .text(function(d) { 
    return (100 * (d["A"] + d["A+"])).toLocaleString("en-US", {maximumFractionDigits: 0}) + "%";
  })
}


let d3_tip_html = (d, instructor) => {
  console.log(d);
  let ct_4 = d["A+"] + d["A"],
      ct_ap = d["A+"],
      ct_a = d["A"],
      ct_am = d["A-"],
      ct_b = d["B+"] + d["B"] + d["B-"],
      ct_c = d["C+"] + d["C"] + d["C-"],
      ct_d = d["D+"] + d["D"] + d["D-"],
      ct_f = d["F"];

  let pct_4 = (ct_4 * 100).toFixed(0),
      pct_ap = (ct_ap * 100).toFixed(0),
      pct_a = (ct_a * 100).toFixed(0),
      pct_am = (ct_am * 100).toFixed(0),
      pct_b = (ct_b * 100).toFixed(0),
      pct_c = (ct_c * 100).toFixed(0),
      pct_d = (ct_d * 100).toFixed(0),
      pct_f = (ct_f * 100).toFixed(0);

  let num_students = d.num_students;
  ct_4 = Math.round(ct_4 * num_students);
  ct_ap = Math.round(ct_ap * num_students);
  ct_a = Math.round(ct_a * num_students);
  ct_am = Math.round(ct_am * num_students);
  ct_b = Math.round(ct_b * num_students);
  ct_c = Math.round(ct_c * num_students);
  ct_d = Math.round(ct_d * num_students);
  ct_f = Math.round(ct_f * num_students);

  let instructor_html;
  if (instructor) {
    instructor_html = `<b>Instructor:</b> ${instructor}`;
  } else {
    instructor_html = `<b>All Instructor Combined</b>`;
  }

  return `
<div style="border-bottom: dashed 1px black; line-height: 22px; padding-bottom: 3px;">
  <b>${d.course}</b><br>
  ${instructor_html}
</div>
<div style="border-bottom: dashed 1px black">
  <table style="text-align: center; width: 100%;" class="waf-d3-tip-gpa-table">
    <tr>
      <th style="border-bottom: solid 1px #232b43; background-color: hsl(225 31.4% 86%);">A/A+</th>
      <th style="border-bottom: solid 1px #354065; background-color: hsl(226 31.2% 90%);">A-</th>
      <th style="border-bottom: solid 1px #808ebc; background-color: hsl(226 30.9% 94%);">B</th>
      <th style="border-bottom: solid 1px #DDCB93; background-color: hsl(45 52.1% 96%);">C</th>
      <th style="border-bottom: solid 1px #e3876d; background-color: hsl(13 67.8% 94%);">D</th>
      <th style="border-bottom: solid 1px #C2492F; background-color: hsl(11 61% 92%);">F</th>
    </tr>
    <tr>
      <td>${pct_4}%</td>
      <td>${pct_am}%</td>
      <td>${pct_b}%</td>
      <td>${pct_c}%</td>
      <td>${pct_d}%</td>
      <td>${pct_f}%</td>
    </tr>    
    <tr class="waf-tr-small">
      <td>(${ct_4})</td>
      <td>(${ct_am})</td>
      <td>(${ct_b})</td>
      <td>(${ct_c})</td>
      <td>(${ct_d})</td>
      <td>(${ct_f})</td>
    </tr>    
  </table>
</div>
<div style="margin-top: 2px; padding-top: 2px;">
  <b>Average GPA</b>: ${d.avg_gpa.toFixed(2)}
</div>
`;
};





function addGpaBarChart(tr,  width,  height,  margin) {

  let tip = d3.tip()
    .attr('class', 'd3-tip')
    .html( (d, i) => d3_tip_html(d, d.instructor) );

  // Create the SVG for the GPA visualization
  var svg = tr.append("td").append("div")
    .append("svg")
    //.attr("width", width + margin.left + margin.right)
    .attr("width", "100%")
    .attr("height", height)
    //.attr("width", width + margin.left + margin.right)
    //.attr("width", width)
    .style("height", height)
    .style("vertical-align", "middle")
    .attr("class", "gpa-breakdown-svg")
    .append("g")
    //.attr("transform", "translate(" + margin.left + "," + 0 + ")")
    .call(tip).on("mouseover", tip.show).on("mouseout", tip.hide);

  // Now, draw the GPA boxes
  drawingData = { firstDrawn: true }

  drawGPABox("A+", svg, height);
  drawGPABox("A-", svg, height);
  drawGPABox("B", svg, height);
  drawGPABox("C", svg, height);
  drawGPABox("D", svg, height);
  drawGPABox("F", svg, height);
}

function drawGPABox(grade, svg, height) {
  let percentToWidthMultiple = 100;
  svg.append("rect")
  .attr("x", function (d) {
    let pct = 0.0;
    switch (grade) {
      case "A+":
        pct = 0;
        break;

      case "A-":
        pct = (d["A+"] + d["A"]);
        break;

      case "B":
        pct = (d["A+"] + d["A"] + d["A-"]);
        break;

      case "C":
        pct = (d["A+"] + d["A"] + d["A-"] + d["B+"] + d["B"] + d["B-"]);
        break;

      case "D":
        pct = (d["A+"] + d["A"] + d["A-"] + d["B+"] + d["B"] + d["B-"] + d["C+"] + d["C"] + d["C-"]);
        break;

      case "F":
        pct = (d["A+"] + d["A"] + d["A-"] + d["B+"] + d["B"] + d["B-"] + d["C+"] + d["C"] + d["C-"] + d["D+"] + d["D"] + d["D-"]);
        break;
    }

    pct *= percentToWidthMultiple;
    return pct.toString() + "%";
  })
  .attr("width", function (d) {
    let pct = 0.0;
    if (grade.startsWith("A")) {
      pct = (d["A+"] + d["A"] + d["A-"]) * percentToWidthMultiple;
    } else if (grade.startsWith("B")) {
      pct = (d["B+"] + d["B"] + d["B-"]) * percentToWidthMultiple;
    } else if (grade.startsWith("C")) {
      pct = (d["C+"] + d["C"] + d["C-"]) * percentToWidthMultiple;
    } else if (grade.startsWith("D")) {
      pct = (d["D+"] + d["D"] + d["D-"]) * percentToWidthMultiple;
    } else {
      pct = d["F"] * percentToWidthMultiple;
    }  
    return pct.toString() + "%";
  })
  .attr("height", height)
  .attr("fill", function (d) {
      return COLOR_MAP[grade];
  })
}

let awards_tip;

function addAwardsColumn(data, tr) {
  // We will add the awards, left to right, in order of how prestigous
  // they are: nobel/nobel-equivalents, then pulitzer, then national academies, then teaching excellency awards, and lastly rate my professor awards.
  let badge_width = 20;
  let badge_height = 20;
  table_awards = tr.append("td")
    .attr("id", "awards")
    .attr("class", "data awards awards-td");

  awards_tip = d3.tip()
    .attr('class', 'd3-tip')
    .html( (d, i) => {
      console.log(d);
      return "OK";
    } );

  table_awards.html((d) => {
    // Render Awards
    let national_award = d.national_award || [], uiuc_award = d.uiuc_award || [];

    let badges = [];
    let html = "";
    let mouseOverHTML = "";

    // == NATIONAL == 
    for (let award of national_award) {
      if (award == "National Academy of Sciences") {
        badges.push( { award: award, img: "academy.jpg", priority: 10 } )
      }

      if (award == "National Academy of Engineering") {
        badges.push( { award: award, img: "academy.jpg", priority: 10 } )
      }      
    }


    for (let badge of badges) {
      html += `<img src="badges/${badge.img}" alt="${badge.award}" class="award">`;
      mouseOverHTML += `<div><span class="awards awards-td"><img src="badges/${badge.img}" alt="${badge.award}" class="award"></span>: ${d.instructor} is a member of the ${badge.award}</div>`;
    }


    // == CAMPUS ==
    badges = [];
    for (let award of uiuc_award) {
      badges.push( { award: award, img: "illini.png", priority: 100 } )
    }

    if (badges.length > 0) {

      let badgeHtml = "";
      badgeHtml += `<span class="awards-span">`;
      for (let badge of badges) {
        let imgTag = `<img src="badges/${badge.img}" alt="${badge.award}" class="award">`

        badgeHtml += imgTag;
        mouseOverHTML += `<div><span class="awards awards-span">${imgTag}</span>: ${d.instructor} was awarded the ${badge.award}</div>`;
      }
      badgeHtml += `</span>`;

      html += badgeHtml;

    }

    // == TRE ==
    html += `<span class="awards-stars">`;
    for (i = 0; i < d.num_outstanding_awards; i++) {
      html += `<span class="gold">&#9733;</span>`;
    }
    for (i = 0; i < d.num_excellence_awards; i++) {
      html += `<span class="silver">&#9733;</span>`;
    }
    html += `</span>`;

    if (d.num_outstanding_awards == 1) {
      mouseOverHTML += `<div><span class="awards awards-stars"><span class="gold">&#9733;</span></span>: ${d.instructor} was ranked as outstanding by students in their course.</div>`;
    } else if (d.num_outstanding_awards > 1) {
      mouseOverHTML += `<div><span class="awards awards-stars"><span class="gold">&#9733;</span></span><b>&times;${d.num_outstanding_awards}</b>: ${d.instructor} was ranked as outstanding by students in their course ${d.num_outstanding_awards} times.</div>`;
    }

    if (d.num_excellence_awards == 1) {
      mouseOverHTML += `<div><span class="awards awards-stars"><span class="silver">&#9733;</span></span>: ${d.instructor} was ranked as excellent by students in their course.</div>`;
    } else if (d.num_excellence_awards > 1) {
      mouseOverHTML += `<div><span class="awards awards-stars"><span class="silver">&#9733;</span></span><b>&times;${d.num_excellence_awards}</b>: ${d.instructor} was ranked as excellent by students in their course ${d.num_excellence_awards} times.</div>`;
    }

    // == RMP ==
    if (d.rmp_rating >= 4.5 && d.rmp_num_reviews > 10) {
      html += `<img src="badges/rmp2.png" alt="Rate My Professor" class="award">`;
      mouseOverHTML += `<div><span class="awards awards-td"><img src="badges/rmp2.png" alt="Rate My Professor" class="award"></span>: ${d.instructor} is highly ranked on Rate My Professor.</div>`;
    }


    // == Course Length ==
    html += `<span class="awards-length">`;
    if (d.num_semesters >= 5) {
      html += `<span class="purple2">5+</span>`;
      mouseOverHTML += `<div><span class="awards awards-length"><span class="purple2">5+</span></span>: Our dataset has GPA and campus data about ${d.instructor} teaching this course 5 or more semesters.</div>`;
    } else if (d.num_semesters >= 2) {
      html += `<span class="purple">2+</span>`;
      mouseOverHTML += `<div><span class="awards awards-length"><span class="purple">2+</span></span>: Our dataset has GPA and campus data about ${d.instructor} teaching this course 2 or more semesters.</div>`;
    } else if (html.length < 150) {
      html += `<span class="awards-txt">New Prep</span>`
      mouseOverHTML += `<div><span class="awards awards-length"><span class="awards-txt">New Prep</span></span>: ${d.instructor} has only started teaching this course recently and may not have many awards for excellent teaching yet.</div>`;
    }
    html += `</span>`;


    mouseOverHTML = `<div style="text-align: left;" class="d3-waf">${mouseOverHTML}</div>`;
    /*
    //console.log(tip(tr));

    //html = `<span class="awards awards-td" style="white-space: nowrap;">${html}</span>`
    */
    html = `
<span class="awards awards-td" style="white-space: nowrap;" data-mouseover="${escape_str(mouseOverHTML)}" onmouseover="waf_inject(this)" onmouseout="waf_uninject()">${html}</span>
`.trim();


    /*

  // Create the SVG for the GPA visualization
  var svg = tr.append("td").append("div")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height)
    .style("width", width + margin.left + margin.right)
    .style("height", height)
    .style("vertical-align", "middle")
    .attr("class", "gpa-breakdown-svg")
    .append("g")
    //.attr("transform", "translate(" + margin.left + "," + 0 + ")")
    .call(tip).on("mouseover", tip.show).on("mouseout", tip.hide);
    */

    return html;
  });
}

function escape_str(s) {
  return s.replaceAll("<", "&lt;")
   .replaceAll(">", "&gt;")
   .replaceAll("\"", "&quot;");
}

function waf_inject(el) {
  const rect = el.getBoundingClientRect();
  let left = rect.left + window.scrollX;
  let top = rect.top + window.scrollY + 16;
  let html = el.dataset.mouseover;

  console.log(window.innerWidth);
  console.log(window)
  if (left + 350 > window.innerWidth) {
    left = window.innerWidth - 350;
    if (left < 0) {
      left = 0;
    }
  }

  let tip = document.querySelector(".d3-tip");
  tip.style.opacity = 1;
  tip.style.top = `${top}px`;
  tip.style.left = `${left}px`;
  tip.setHTMLUnsafe(html);
}

function waf_uninject() {
  let tip = document.querySelector(".d3-tip");
  tip.style.opacity = 0;
}

const ALL_GRADES_ARRAY = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
const COLOR_MAP = {
  "A+": "#232b43", 
  //"A+": "#ffff00",
  "A": "#354065", 
  "A-": "#354065",  
  "B+": "#808ebc",
  "B": "#808ebc",
  "B-": "#808ebc", 
  "C+": "#DDCB93",
  "C": "#DDCB93",
  "C-": "#DDCB93",
  "D+":"#e3876d",
  "D": "#e3876d",
  "D-": "#e3876d", 
  "F": "#C2492F"
}

function addTotalRow(data, table, width, height, margin) {
  // First, calculate the total for the row
  let totalNumStudents = 0;
  let totalNumSections = 0;
  let totalGpa = 0;
  let avgGpa = 0;

  let totalGPABreakdown = {};
  for (let grade of ALL_GRADES_ARRAY) {
    totalGPABreakdown[grade] = 0;
  }

  for (var k = 0; k < data.length; k++) {
    course_data = data[k];

    totalNumStudents += course_data.num_students;
    totalNumSections += course_data.num_sections;
    totalGpa += course_data.num_students * course_data.avg_gpa;
    if (totalNumStudents != 0) {
      avgGpa = totalGpa / totalNumStudents;
    }
    
    for (let grade of ALL_GRADES_ARRAY) {
      totalGPABreakdown[grade] += course_data[grade] * course_data.num_students;
    }
  }

  for (let grade of ALL_GRADES_ARRAY) {
    totalGPABreakdown[grade] /= totalNumStudents;
  }  

  totalGPABreakdown["course"] = course_data.course;
  totalGPABreakdown["num_students"] = totalNumStudents;
  totalGPABreakdown["avg_gpa"] = avgGpa;

  let html = d3_tip_html(totalGPABreakdown);

  let total_tip = d3.tip()
      .attr('class', 'd3-tip')
      .html(html)

  // Now, actually create the total row
  let totalRow = table.append("tr");
  if (data.length % 2 == 0) {
    totalRow.attr("class", "odd");
  }
  totalRow.append("td").text("Total").attr("class", "data sum");
  totalRow.append("td").attr("align", "center").text("").attr("class", "data sum hide");
  totalRow.append("td").attr("align", "center").text("").attr("class", "data sum hide");
  totalRow.append("td").attr("align", "center").text("").attr("class", "data sum");
  //totalRow.append("td").attr("align", "center").text(avgGpa.toString().substr(0, 4)).attr("class", "data sum"); 

  tr = totalRow.selectAll(".totalRow")
    .data( [ totalGPABreakdown ] )
    .enter()

  addGpaBarChart(tr, width, height, margin);

  // empty <td> for awards
  totalRow.append("td");
}