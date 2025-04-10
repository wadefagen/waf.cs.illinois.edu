function displayExample() {
  // Render the table
  createVisualization("CHEM 332", "example");

  // Now, overlay the table with lines and boxes explaining the awards
  displayAwardsLegend();
}

$( function() {
  displayExample();
} );

function displayAwardsLegend() {
  return;
  let wrapper = d3.select("#example_wrapper");

  wrapper.append("div")
    .attr("id", "first_down")
    .style("position", "absolute")
    .style("width", "10%")
    .style("border-left", "1px solid black")
  wrapper.append("div")
    .attr("id", "first_across")
    .style("position", "absolute")
    .style("top", "108%")
    .style("left", "11%")
    .style("height", "10%")
    .style("border-top", "1px solid black")
  wrapper.append("div")
    .style("position", "absolute")
    .style("left", "11%")
    .style("width", "10%")
    .style("top", "108%")
    .style("height", "12%")
    .style("border-left", "1px solid black");
  wrapper.append("p")
    .attr("class", "legend")
    .style("position", "absolute")
    .style("left", "2%")
    .style("top", "120%")
    .style("padding-top", ".5%")
    .style("padding-bottom", ".5%")
    .style("padding-left", ".7%")
    .style("padding-right", ".5%")
    .style("width", "20%")
    .style("border", "1px solid #000000")
    .text("Instructor has won the Nobel, Wolf, Pulitzer, or similar Prize.");

  wrapper.append("div")
    .attr("id", "second_down")
    .style("position", "absolute")    
    .style("width", "10%")
    .style("border-left", "1px solid black");
  wrapper.append("div")
    .attr("id", "second_across")
    .style("position", "absolute")
    .style("left", "33%")
    .style("top", "112.5%")
    .style("height", "10%")
    .style("border-top", "1px solid black");
  wrapper.append("div")
    .style("position", "absolute")
    .style("left", "33%")
    .style("top", "112.5%")
    .style("width", "10%")
    .style("height", "7.5%")
    .style("border-left", "1px solid black");
  wrapper.append("p")
    .attr("class", "legend")
    .style("position", "absolute")
    .style("left", "24%")
    .style("top", "120%")
    .style("padding-top", ".5%")
    .style("padding-bottom", ".5%")
    .style("padding-left", ".7%")
    .style("padding-right", ".5%")
    .style("width", "20%")
    .style("border", "1px solid #000000")
    .text("Instructor is a member of one of the National Academies.");

  wrapper.append("div")
    .attr("id", "third_down")
    .style("position", "absolute")
    .style("width", "10%")   
    .style("border-left", "1px solid black");
  wrapper.append("div")
    .attr("id", "third_across")
    .style("position", "absolute")
    .style("left", "55%")
    .style("top", "117%")
    .style("height", "10%")
    .style("border-top", "1px solid black");
  wrapper.append("div")
    .style("position", "absolute")
    .style("left", "55%")
    .style("width", "10%")
    .style("top", "117%")
    .style("height", "3%")
    .style("border-left", "1px solid black");
  wrapper.append("p")
    .attr("class", "legend")
    .style("position", "absolute")
    .style("left", "46%")
    .style("top", "120%")
    .style("padding-top", ".5%")
    .style("padding-bottom", ".5%")
    .style("padding-left", ".7%")
    .style("padding-right", ".5%")
    .style("width", "23%")
    .style("border", "1px solid #000000")
    .text("Instructor rated outstanding (gold) or excellent (silver) by students.");

  wrapper.append("div")
    .attr("id", "fourth_down")
    .style("position", "absolute")
    .style("width", "10%")   
    .style("border-left", "1px solid black");
  wrapper.append("div")
    .attr("id", "fourth_across")
    .style("position", "absolute")
    .style("top", "112.5%")
    .style("height", "10%")
    .style("border-top", "1px solid black");
  wrapper.append("div")
    .style("position", "absolute")
    .style("left", "80%")
    .style("width", "10%")
    .style("top", "112.5%")
    .style("height", "7.5%")
    .style("border-left", "1px solid black");
  wrapper.append("p")
    .attr("class", "legend")
    .style("position", "absolute")
    .style("left", "71%")
    .style("top", "120%")
    .style("padding-top", ".5%")
    .style("padding-bottom", ".5%")
    .style("padding-left", ".7%")
    .style("padding-right", ".5%")
    .style("width", "20%")
    .style("border", "1px solid #000000")
    .text("Instructor has taught shown course two or more times.");

  let not_included = d3.select("#not_included");
  not_included.append("b")
    .style("font-size", "14px")
    .style("margin-left", "1%")
    .text("Not shown");
  not_included.append("br");
  not_included.append("img")
    .attr("src", "./badges/illini.png")
    .style("margin-left", "1%")
    .style("margin-top", "5px")
    .attr("align", "left")
    .attr("width", 16)
    .attr("height", 20);
  not_included.append("p")
    .style("font-size", "14px")
    .style("margin-left", "35px")
    .style("margin-top", "5px")
    .style("margin-bottom", ".5%")
    .text("Instructor has won a campus-wide teaching award.");
  not_included.append("img")
    .attr("align", "left")
    .attr("src", "./badges/rmp_badge.png")
    .style("margin-left", "1%")
    .attr("width", 20)
    .attr("height", 20);
  not_included.append("p")
    .style("font-size", "14px")
    .style("margin-left", "35px")
    .style("margin-bottom", ".5%")
    .text("Instructor has 10+ reviews with an average rating of 4.0 on Rate My Professor.");
  not_included.append("img")
    .attr("align", "left")
    .attr("src", "./badges/five_plus_badge.png")
    .style("margin-left", "1%")
    .attr("width", 20)
    .attr("height", 20);
  not_included.append("p")
    .style("font-size", "14px")
    .style("margin-left", "35px")
    .style("margin-bottom", 0)
    .text("Instructor has taught the given course five or more times.");
}

function searchKeyPress(input, e) {
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13) {
        //d3.selectAll("h4").remove();
        d3.selectAll("#bad_search").remove();
        d3.selectAll(".tables").remove();
        createVisualization(input.value, "tables");
    }
    return true;
}

function createVisualization(search_term, tid) {
    search_term = search_term.toUpperCase();
    search_term = search_term.trim();
    for (var i = 0; i < search_term.length - 1; i++) {
      if (
        (search_term.charAt(i) >= 'A' && search_term.charAt(i) <= 'Z') &&
        (search_term.charAt(i + 1) >= '0' && search_term.charAt(i + 1) <= '9')
      ) {
        search_term = search_term.substr(0, i+1) + " " + search_term.substr(i+1);
        break;
      }
    }

    if (!/\d/.test(search_term)) {
      search_term += " ";
    }

    if (search_term.length < 2) {
      notifyUserOfInvalidSearch();
    } else {
        parseData(search_term).then((data) => {
            if (Object.keys(data).length == 0) {
                notifyUserOfInvalidSearch()
            } else {
                renderData(data, tid);
            }
        });
    }
}

function notifyUserOfInvalidSearch() {
    d3.select("#tables")
        .append("p")
        .text("The subject or course you specified does not exist.")
        .attr("id", "bad_search")
        .style("color", "red")
}

function loadData() {
    return d3.csv('./final.csv');
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

function parseData(search_term) {
  return loadData().then((rawData) => {
    let data = {};
    let prev_course = '';
    let n = rawData.length
    let firstInd = firstOccurrence(rawData, 0, n-1, search_term, n)
    if (firstInd == -1) {
      return data;
    }
    for (var i = firstInd, len = rawData.length; i < len; i++) {
      let row = rawData[i];
      if (row["course"].startsWith(search_term)) {
        if (row["course"] !== prev_course) {
          data[row["course"]] = [];
          data[row["course"]].push(row);
          prev_course = row["course"];
        } else {
          data[row["course"]].push(row);
        }
      } else {
        if (prev_course != '') {
          break;
        }
      }
    }
    return data;
  });  
}

function renderData(data, tid) {
  // Sort the list of classes
  let courses = Object.keys(data).sort();

  // Now, iterate through the classes and render the tables
  for (var j = 0; j < courses.length; j++) {
      let course = courses[j];

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
        data[course][t]["teaching_next_semester"] = data[course][t]["teaching_next_semester"] === "True";

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
}

function createInstructorColumn(tr) {
  tr.append("td").attr("class", "data instructor")
    .style("font-style", function(d) {
      if (d.teaching_next_semester == true) {
        return "italic";
      }
    })
    .text(function(d) { return d.instructor;});
}

function createNumStudentsColumn(tr) {
  tr.append("td")
  .attr("align", "center")
  .attr("class", "data hide")
  .style("font-style", function(d) {
    if (d.teaching_next_semester) {
      return "italic";
    }
  })
  .text(function(d) { return d.num_students })
}

function createNumSectionsColumn(tr) {
  tr.append("td")
  .attr("align", "center")
  .attr("class", "data hide")
  .style("font-style", function(d) {
    if (d.teaching_next_semester) {
      return "italic";
    }
  })
  .text(function(d) { return d.num_sections })
}

function createAvgGpaColumn(tr) {
  tr.append("td")
  .attr("align", "center")
  .attr("class", "data avg_gpa")
  .style("font-style", function(d) {
    if (d.teaching_next_semester) {
      return "italic";
    }
  })
  .text(function(d) { 
    console.log(d);
    return (100 * (d["A"] + d["A+"])).toLocaleString("en-US", {maximumFractionDigits: 0}) + "%";

    let gpa_as_string = d.avg_gpa.toString();
    if (gpa_as_string.length > 2) {
        return gpa_as_string.substring(0, 4);
    } else {
        return gpa_as_string;
    }
  })
}


let d3_tip_html = (d, instructor) => {
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
    .attr("width", width + margin.left + margin.right)
    .attr("height", height)
    .style("width", width + margin.left + margin.right)
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

function addAwardsColumn(data, tr) {
  // We will add the awards, left to right, in order of how prestigous
  // they are: nobel/nobel-equivalents, then pulitzer, then national academies, then teaching excellency awards, and lastly rate my professor awards.
  let badge_width = 20;
  let badge_height = 20;
  table_awards = tr.append("td")
    .attr("id", "awards")
    .attr("class", "data awards awards-td");

  
  table_awards.html((d) => {
    // Render Awards
    console.log(d)

    let national_award = [], uiuc_award = [];
    if (d.national_award) { national_award = JSON.parse(d.national_award.replaceAll("'", "\"") ); }
    if (d.uiuc_award)     { uiuc_award = JSON.parse(d.uiuc_award.replaceAll("'", "\"")); }
    
    let badges = [];
    let html = "";

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
    }


    // == CAMPUS ==
    badges = [];
    for (let award of uiuc_award) {
      badges.push( { award: award, img: "illini.png", priority: 100 } )
    }

    if (badges.length > 0) {
      html += `<span class="awards-span">`;
      for (let badge of badges) {
        html += `<img src="badges/${badge.img}" alt="${badge.award}" class="award">`;
      }
      html += `</span>`;
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

    // == RMP ==
    if (d.rmp_rating >= 4 && d.rmp_num_reviews > 10) {
      html += `<img src="badges/rmp_badge.png" alt="Rate My Professor" class="award">`;
    }

    // == Course Length ==
    if (d.num_semesters >= 5) {
      html += `<img src="badges/five_plus_badge.png" alt="5+ Semesters" class="award">`;
    } else if (d.num_semesters >= 2) {
      html += `<img src="badges/two_plus_badge.png" alt="2+ Semesters" class="award">`;
    } else if (html.length < 100) {
      html += `<span class="awards-txt">New Prep</span>`
    }

    let tip = d3.tip()
    .attr('class', 'd3-tip')
    .html( (d, i) => d3_tip_html(d, d.instructor) );

    //console.log(tip());

    html = `<span class="awards awards-td" style="white-space: nowrap;">${html}</span>`

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

  return;

  // Nobel or Nobel-equivalent
  var nobel = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
    .filter(function (d) {return d.nobel != "" || d.wolf != ""})
    .append("img")
    .attr("class", "award")
    .attr("src", function(d) {return "./badges/nobel.png"})
    .on('mouseover', function(d, i) {
      let data;
      if (d.nobel != "") {
        data = d.instructor + " has won the Nobel Prize.";
      } else {
        data = d.instructor + " has won the Wolf Prize.";
      }
      nobel.transition()
        .duration('50')
        .style("opacity", 1);
      nobel.html(data)
        .style("max-width", '150px')
        .style("left", (d3.event.pageX - 65) + "px")
        .style("top", (d3.event.pageY - 70) + "px");    
    })
    .on('mouseout', function(d, i) {
      nobel.transition()
      .duration('50')
      .style("opacity", 0);
    });

  // Pulitzer
  var pulitzer = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
  .filter(function (d) {return d.pulitzer != ""})
  .append("img")
    .attr("class", "award")
    .attr("src", function(d) {return "./badges/nobel.png"})
    .on('mouseover', function(d, i) {
      let data = d.instructor + " has won the Pulitzer Prize.";
      pulitzer.transition()
        .duration('50')
        .style("opacity", 1);
      pulitzer.html(data)
        .style("max-width", '150px')
        .style("left", (d3.event.pageX - 65) + "px")
        .style("top", (d3.event.pageY - 110) + "px");    
    })
    .on('mouseout', function(d, i) {
      pulitzer.transition()
      .duration('50')
      .style("opacity", 0);
    });

  // National Academy
  var academy = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
    .filter(function (d) {return d.national_academy != ""})
    .append("img")
    .attr("class", "award")
    .attr("src", function(d) {return "./badges/academy.jpg"})
    .on('mouseover', function(d, i) {
      let  data = d.instructor + " is a member of one of the National Academies.";
      academy.transition()
        .duration('50')
        .style("opacity", 1);
      academy.html(data)
        .style("max-width", '150px')
        .style("left", (d3.event.pageX - 65) + "px")
        .style("top", (d3.event.pageY - 90) + "px");    
    })
    .on('mouseout', function(d, i) {
      academy.transition()
      .duration('50')
      .style("opacity", 0);
    });
 
  // Faculty Awards
  var faculty = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
    .filter(function (d) { 
      return (d.total_faculty_awards > 0);
    })
    .append("span")
    .attr("class", "award awards-span")
    .html(function(d, i) {
      text = "";
      for (i = 0; i < d.total_faculty_awards; i++) {
        text += `<img src="./badges/illini.png">`;
      }
      return text;
    })
    .on('mouseover', function(d, i) {
      let awards = [];
      if (d.camp_grad != 0) {
        awards.push("the Campus Award for graduate teaching");
      } 
      if (d.camp_online != 0) {
        awards.push("the Campus Award for online teaching");
      }
      if (d.camp_und_fac != 0) {
        awards.push("the Campus Award for undergraduate teaching")
      }
      if (d.camp_und_inst != 0) {
        awards.push("the Campus Award for undergraduate instruction")
      }
      if (d.grainger_collins != 0) {
        awards.push("the Collins Award")
      }
      if (d.grainger_everitt != 0) {
        awards.push("the Everitt Award")
      }
      if (d.grainger_excellence != 0) {
        awards.push("the Grainger Teaching Award")
      }
      if (d.grainger_rose != 0) {
        awards.push("the Rose Award")
      }
      if (d.las_deans != 0) {
        awards.push("the LAS award for undergraduate teaching")
      } 
      if (d.las_excellence != 0) {
        awards.push("the LAS award for undergraduate instruction")
      }

      let data;
      let top_offset = 80;
      if (awards.length > 2) {
        data = d.instructor + " has won " + awards.join(", ");
        let final_comma = data.lastIndexOf(",");
        top_offset = 130;
        data = data.substring(0, final_comma + 2) + "and" + data.substring(final_comma + 1);
      } else if (awards.length == 2) {
        data = d.instructor + " has won " + awards.join(" and ");
      } else {
        data = d.instructor + " has won " + awards[0];
      }
      data += "."

      academy.transition()
        .duration('50')
        .style("opacity", 1);
      academy.html(data)
        .style("max-width", '200px')
        .style("left", (d3.event.pageX - 65) + "px")
        .style("top", (d3.event.pageY - top_offset) + "px");    
    })
    .on('mouseout', function(d, i) {
      academy.transition()
      .duration('50')
      .style("opacity", 0);
    });
    
  //Teaching Excellency Awards
  var excellence = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
    .filter(function (d) { 
      return (d.num_outstanding_awards > 0 || d.num_excellence_awards> 0) 
    })
    .append("text")
    .attr("class", "award")  
    .html(function(d, i) {
      var i;
      var text = '<span class="awards-stars">'
      for (i = 0; i < d.num_outstanding_awards; i++) {
        text += '<span class="gold">';
        text += "&#9733;";
        text += '</span>'
      }
      for (i = 0; i < d.num_excellence_awards; i++) {
        text += '<span class="silver">';
        text += "&#9733;";
        text += '</span>'
      }
      text += '</span>'
      return text;
    })
    .on('mouseover', function(d, i) {
      var top_offset = 90;
      var data = d.instructor + " has won ";
      if (d.num_outstanding_awards != 0 && d.num_excellence_awards != 0) {
        data += d.num_outstanding_awards.toString()
        if (d.num_outstanding_awards == 1) {
          data += " Outstanding award and "
        } else {
          data += " Outstanding awards and "
        }

        data+= d.num_excellence_awards.toString()
        if (d.num_excellence_awards == 1) {
          data += " Excellence award for teaching"
        } else {
          data += " Excellence awards for teaching"
        }
        top_offset = 110;
      } else if (d.num_excellence_awards != 0) {
        data += d.num_excellence_awards.toString()
        if (d.num_excellence_awards == 1) {
          data += " Excellence award for teaching";
        } else {
          data += " Excellence awards for teaching";
        }
      } else if (d.num_outstanding_awards != 0) {
        data += d.num_outstanding_awards.toString()
        if (d.num_outstanding_awards == 1) {
          data += " Oustanding award for teaching";
        } else {
          data += " Outstanding awards for teaching";
        }
      }
      
      excellence.transition()
        .duration('50')
        .style("opacity", 1);
      excellence.html(data)
        .style("max-width", '150px')
        .style("left", (d3.event.pageX - 65) + "px")
        .style("top", (d3.event.pageY - top_offset) + "px"); 
      //console.log(top_offset)
    })
    .on('mouseout', function(d, i) {
      excellence.transition()
      .duration('50')
      .style("opacity", 0);
    });
 
  // Rate my professor awards
  var rmp = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
    .filter(function (d) {
      return d.rmp_rating > 4 && d.rmp_num_reviews > 15;
    })
    .append("img")  
    .attr("class", "award")
    .attr("src", function(d) {return "./badges/rmp_badge.png";})
    .attr("width", badge_width)
    .attr("height", badge_height)
    .on('mouseover', function(d, i) {
      data = d.instructor + " has a Rate my Professor rating of " + d.rmp_rating.toString() + " with " + d.rmp_num_reviews.toString() + " reviews.";
      rmp.transition()
        .duration('50')
        .style("opacity", 1);
      rmp.html(data)
        .style("max-width", '150px')
        .style("left", (d3.event.pageX - 65) + "px")
        .style("top", (d3.event.pageY - 110) + "px");    
    })
    .on('mouseout', function(d, i) {
      rmp.transition()
      .duration('50')
      .style("opacity", 0);
    });
  
  // Teacher has taught the course multiple times
  var taught_before = d3.select("body").append("div")
    .attr("class", "tooltip-donut")
    .style("opacity", 0);
  table_awards
    .filter(function (d) { return d.num_semesters >= 2})
    .append("img")
    .attr("class", "award")
    .attr("src", function(d) {
      if (d.num_semesters >= 5) {
        return "./badges/five_plus_badge.png";
      } 
      else {
        return "./badges/two_plus_badge.png";
      }
    })
    .attr("width", badge_width)
    .attr("height", badge_height)
    .on('mouseover', function(d, i) {
      let data = d.instructor + " has taught this course " + d.num_semesters.toString();
      if (d.num_semesters == 1) {
        data += " time";
      } else {
        data += " times";
      }
      taught_before.transition()
        .duration('50')
        .style("opacity", 1); 
      taught_before.html(data)
        .style("left", (d3.event.pageX - 100) + "px")
        .style("top", (d3.event.pageY - 40) + "px");
    })
    .on('mouseout', function(d, i) {
      taught_before.transition()
      .duration('50')
      .style("opacity", 0);
    });
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
  totalRow.append("td").attr("align", "center").text(totalNumStudents).attr("class", "data sum hide");
  totalRow.append("td").attr("align", "center").text(totalNumSections).attr("class", "data sum hide");
  totalRow.append("td").attr("align", "center").text(avgGpa.toString().substr(0, 4)).attr("class", "data sum"); 

  tr = totalRow.selectAll(".totalRow")
    .data( [ totalGPABreakdown ] )
    .enter()

  addGpaBarChart(tr, width, height, margin);

  // empty <td> for awards
  totalRow.append("td");

}