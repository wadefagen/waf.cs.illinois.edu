var data_ = null;
var client_width_rendered_ = null;
var data_by_school = null;

// -- onload function --
$(function() {
  d3.csv("cds.csv").then(function(data) {
    data_by_school = {};

    data.forEach(function (d) {
      d.gpa_400 = +d["4.0 GPA"];
      d.gpa_375 = +d["3.75-3.99"];
      d.gpa_350 = +d["3.50-3.74"];
      d.gpa_325 = +d["3.25-3.49"];
      d.gpa_300 = +d["3.00-3.24"];
      d.gpa_250 = +d["2.5-2.99"];
      d.gpa_200 = +d["2.0-2.49"];
      d.gpa_100 = +d["1.0-1.99"];
      d.gpa_000 = +d["<1.00"];
      d.gpa_avg = +d["Avg."];
      d.year = +d["Year (Fall)"];
      
      d.gpa_gte_375 = (d.gpa_400 ? d.gpa_400 : 0)  + d.gpa_375;
      d.gpa_gte_350 = d.gpa_gte_375 + d.gpa_350;

      d.v1_375 = d.gpa_375;
      d.v1_400 = d.gpa_gte_375;
      d.v1_350 = -(d.gpa_350);
      d.v1_325 = -(d.gpa_350 + d.gpa_325);
      d.v1_300 = -(d.gpa_350 + d.gpa_325 + d.gpa_300);
      d.v1_250 = -(d.gpa_350 + d.gpa_325 + d.gpa_300 + d.gpa_250);
      d.v1_200 = -(d.gpa_350 + d.gpa_325 + d.gpa_300 + d.gpa_250 + d.gpa_200);
      d.v1_100 = -(d.gpa_350 + d.gpa_325 + d.gpa_300 + d.gpa_250 + d.gpa_200 + d.gpa_100);

      if (d.School && d.School != "") {
        let school = d.School;
        let year = d.year;
        if (year) {
          if (!(school in data_by_school)) { data_by_school[school] = []; }
          console.log(school + " " + year)
          data_by_school[school].push(d);
        }
      }
    })
    data_ = data;

    console.log(data);
    console.log(data_by_school);

    visualize();
  })
})


// -- resize --
$(window).resize(function () {
  if (data_ != null) {
    var new_width = $("#chart").width();
    if (client_width_rendered_ != new_width) {
      $("#chart").html("");
      //$("div.d3-tip").remove();
      visualize();
    }
  }
});

var visualize = function() {
  visualize_bar("#chart-1", 2005, 2023);
  visualize_bar("#chart", 2005, 2005);
  visualize_chart();
  visualize_chart_gpa();
}

var uni = "University of Wisconsin-Madison";
var uni_minYear = 2005;
var uni_minYear_dict = {
  "University of Wisconsin-Madison": 2005,
  "University of Washington (Seattle)": 2008,
  "USC": 2011,
  "Purdue": 2013,
  "University of Oregon": 2005,
  "Michigan State": 2006,
  "University of Michigan": 2007,
  "University of Iowa": 2005,
  "Indiana (Bloomington)": 2006,
  "UCLA": 2017,
};

var uni_color_dict = {
  "University of Wisconsin-Madison": "#C5050C",
  "University of Washington (Seattle)": "#32006e",
  "USC": "#990000",
  "Purdue": "#cfb991",
  "University of Oregon": "#007030",
  "Michigan State": "#18453B",
  "University of Michigan": "#00274C",
  "University of Iowa": "#FFCD00",
  "Indiana (Bloomington)": "#990000",
  "UCLA": "#2774AE",
};


var uni_short_dict = {
  "University of Wisconsin-Madison": "Wisconsin",
  "University of Washington (Seattle)": "Washington",
  "USC": "USC",
  "Purdue": "Purdue",
  "University of Oregon": "Oregon",
  "Michigan State": "Mich. State",
  "University of Michigan": "U. Michigan",
  "University of Iowa": "Iowa",
  "Indiana (Bloomington)": "Indiana",
  "UCLA": "UCLA",
};



var uniChange = function() {
  let e = document.getElementById("uni-selection");

  let newUni = e.selectedOptions[0].value;
  if (newUni != uni) {
    uni = newUni;
    visualize_bar("#chart", -1, -1);
  }
}


var visualize_bar = function(id, minYear_data, minYear_display) {
  //var data = data_;
  let og;
  if (id == "#chart-1") {
    og = data_by_school["University of Wisconsin-Madison"];
  } else {
    console.log(uni);
    og = data_by_school[uni];
    console.log(og);
    minYear_data = uni_minYear_dict[uni];
    minYear_display = uni_minYear_dict[uni];
  }

  let data = [];
  for (let d of og) {
    if (d.year >= minYear_data && d.year <= 2023) {
      data.push(d);
    }
  }

  let max = data[0].v1_400, min = data[0].v1_100;
  for (let i = 1; i < data.length; i++) {
    if (data[i].v1_400 > max) { max = data[i].v1_400; }
    if (data[i].v1_100 < min) { min = data[i].v1_100; }
  }

  data = [];
  for (let d of og) {
    if (d.year >= minYear_display && d.year <= 2023) {
      data.push(d);
    }
  }

  // == d3.js boilerplate ==
  var client_width = $(id).width();
  client_width_rendered_ = client_width;

  var margin = { top: 45, right: 50, bottom: 50, left: 40 };

  var width = client_width - margin.left - margin.right,
     height = (30 * data.length);

  d3.select(id).html("");
  var svg = d3.select(id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("width", width + margin.left + margin.right)
    .style("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  

  var x = d3.scaleLinear()
    .domain([min, max])
    .range([0, width]);
  /*
  var y = d3.scaleLinear()
    .domain([2023, 2004])
    .range([0, height + 4]);
  */
 y = (year) => {
  let offset = 2023 - year;
  return (offset * 30);
 }


  // == d3-tip ==
  var tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
    let val = Math.round(d.gpa_gte_375 * 10) / 10;
    let s = `
    <div style="text-align: center; font-weight: bold; border-bottom: solid 1px black;">${d.School}, Fall ${d.year}</div>
    <div style="font-size: 14px; padding-top: 3px;">
    The incoming first-semester freshman class at ${d.School} had the following high school GPA breakdown for the incoming class of Fall ${d.year}:
    </div>`;

    s += `<div style="font-size: 14px; margin-top: 3px;">`;
    if (d.gpa_400) { let v = Math.round(d.gpa_400 * 10) / 10;  s += `&bullet; 4.00 GPA: <b>${v}%</b><br>`; }
    if (d.gpa_400 && d.gpa_375) { let v = Math.round(d.gpa_375 * 10) / 10;  s += `&bullet; 3.75 - 3.99 GPA: <b>${v}%</b><br>`; }
    if (!d.gpa_400 && d.gpa_375) { let v = Math.round(d.gpa_375 * 10) / 10;  s += `&bullet; 3.75 - 4.00 GPA: <b>${v}%</b><br>`; }
    if (d.gpa_350) { let v = Math.round(d.gpa_350 * 10) / 10;  s += `&bullet; 3.50 - 3.74 GPA: <b>${v}%</b><br>`; }
    if (d.gpa_325) { let v = Math.round(d.gpa_325 * 10) / 10;  s += `&bullet; 3.25 - 3.49 GPA: <b>${v}%</b><br>`; }
    if (d.gpa_300) { let v = Math.round(d.gpa_300 * 10) / 10;  s += `&bullet; 3.00 - 3.24 GPA: <b>${v}%</b><br>`; }
    if (d.gpa_250) { let v = Math.round(d.gpa_250 * 10) / 10;  s += `&bullet; 2.50 - 2.99 GPA: <b>${v}%</b><br>`; }
    if (d.gpa_200) { let v = Math.round(d.gpa_200 * 10) / 10;  s += `&bullet; 2.00 - 2.49 GPA: <b>${v}%</b><br>`; }

    s += "</div>";


    return s;
  });
  svg.call(tip); 


  var years = svg.selectAll("years")
    .data(data)
    .enter()
    .append("g")
    .attr('transform', function (d, i) {
      return 'translate(0, ' + y(d.year) + ')';
    });



  let GPA_BAR_HEIGHT = 30;

  x_ticks = [];
  x_labels = [];
  for (i = 0; i < max; i += 20) {
    x_ticks.push(i);
    x_labels.push(i);
    if (i + 20 < max) {
    }
  }
  x_ticks.push(max);

  
  nx_ticks = [];
  nx_labels = [];
  for (i = 0; i > min; i += -20) {
    nx_ticks.push(i);
    nx_labels.push(i);
  }
  nx_ticks.push(min);
  if (nx_labels.length == 1) {
    nx_labels.push(Math.round(min * 10) / 10);
  }



  for (let x_tick of x_labels) {
    svg.append("text")
    .attr("x", x(x_tick))
    .attr("y", -14)
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .text(`${x_tick}%`)
  }
  
  for (let x_tick of x_ticks) {
    svg.append("line")
    .attr("x1", x(x_tick))
    .attr("y1", -10)
    .attr("x2", x(x_tick))
    .attr("y2", -4)
    .attr("stroke", "black")

    svg.append("line")
    .attr("x1", x(x_tick))
    .attr("y1", -4)
    .attr("x2", x(x_tick))
    .attr("y2", height)
    .attr("stroke", `rgba(0, 0, 0, 0.1)`);
  }


  for (let x_tick of nx_labels) {
    svg.append("text")
    .attr("x", x(x_tick))
    .attr("y", height + 24)
    .attr("fill", "hsl(311 33.3% 27.6%)")
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .text(`${-x_tick}%`)
  }
  
  for (let x_tick of nx_ticks) {
    svg.append("line")
    .attr("x1", x(x_tick))
    .attr("y1", height + 10)
    .attr("x2", x(x_tick))
    .attr("y2", height + 4)
    .attr("stroke", "black");

    svg.append("line")
    .attr("x1", x(x_tick))
    .attr("y1", 0)
    .attr("x2", x(x_tick))
    .attr("y2", height + 4)
    .attr("stroke", `rgba(0, 0, 0, 0.1)`);
  }


  svg.append("line")
  .attr("x1", 0)
  .attr("y1", -4)
  .attr("x2", x(max))
  .attr("y2", -4)
  .attr("stroke", "black");


  svg.append("line")
  .attr("x1", 0)
  .attr("y1", height + 4)
  .attr("x2", x(max))
  .attr("y2", height + 4)
  .attr("stroke", "black");


  svg.append("text")
  .attr("x", x(max))
  .attr("y", -30)
  .attr("fill", "black")
  .attr("text-anchor", "end")
  .attr("font-size", "14px")
  //.attr("font-weight", "bold")
  .text((width > 400) ? `Percentage of First-Semester Freshman with >= 3.75 High School GPA` : `% Freshman with >= 3.75 High School GPA`)


  svg.append("text")
  .attr("x", x(min))
  .attr("y", height + 40)
  .attr("fill", "hsl(311 33.3% 27.6%)")
  //.attr("text-anchor", "end")
  .attr("font-size", "14px")
  .text((width > 400) ? `Percentage of First-Semester Freshman with < 3.75 High School GPA` : `% Freshman with < 3.75 High School GPA`)


    /*
  var x_grid = d3.axisTop(x)
  .ticks(ticks)
  .tickSize(-height)
  .tickFormat("");

svg.append('g').attr('class', 'axis-gridline').call(x_grid);

  // -- axis liens --
  var x_axis = d3.axisTop(x)
    .tickFormat(function (d) {
      return d + "%";
    })
    .ticks(ticks);
  svg.append('g').attr('class', 'axis').call(x_axis);
    */



  // 4
  years.append("rect")
  .attr("x", (d) => x(d.v1_375) )
  .attr("width", (d) => x(d.v1_400)- x(d.v1_375) )
  .attr("y", (d) => { return 0; } )
  .attr("height", GPA_BAR_HEIGHT )
  .attr("fill", "hsl(216 59.6% 18.4%)")
  .on('mouseover', function (d, i) { tip.show(d, i); })
  .on('mouseout', function (d, i) { tip.hide(d, i); })

  /*
  years.append("text")
  .attr("x", (d) => x(d.v1_375) + ((x(d.v1_400)- x(d.v1_375)) / 2))
  .attr("y", 14)
  .attr("fill", "white")
  .attr("text-anchor", "middle")
  .attr("font-size", "14px")
  .attr("font-weight", "bold")
  .text((d) => `${d.gpa_400}%`)
  */

  years.append("text")
  .attr("x", (d) => x(d.v1_375) + ((x(d.v1_400)- x(d.v1_375)) / 2))
  .attr("y", 19)
  .attr("fill", "#ccf")
  .attr("text-anchor", "middle")
  .attr("font-size", "12px")
  .text((d) => {
    if (!d.gpa_400) { return ""; }
    let eleWidth = x(d.v1_400)- x(d.v1_375);
    if (eleWidth < 40) { return ""; }
    else if (eleWidth < 60) { return "4.00"; }
    else { return "4.00 GPA"; }
  });



  // 3.75
  years.append("rect")
    .attr("x", (d) => x(0) )
    .attr("width", (d) => x(d.v1_375) - x(0))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    .attr("fill", (d) => (d.gpa_400) ? "hsl(216 59.6% 28.4%)" : "hsl(216 59.6% 23.4%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    // years.append("text")
    // .attr("x", (d) => x(0) + ((x(d.v1_375) - x(0)) / 2))
    // .attr("y", 14)
    // .attr("fill", "white")
    // .attr("text-anchor", "middle")
    // .attr("font-size", "14px")
    // .attr("font-weight", "bold")
    // .text((d) => `${d.gpa_375}%`)
  
    years.append("text")
    .attr("x", (d) => x(0) + ((x(d.v1_375) - x(0)) / 2))
    .attr("y", 19)
    .attr("fill", "#ccf")
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .text((d) => {
      let eleWidth = x(d.v1_375) - x(0);
      if (d.gpa_400) {
        if (eleWidth < 64) { return ""; }
        else if (eleWidth < 100) { return "3.75 - 3.99"; }
        else { return "3.75 - 3.99 GPA"; }
      } else if (d.gpa_375) {
        if (eleWidth < 40) { return ""; }
        else if (eleWidth < 60) { return "3.75+"; }
        else { return "3.75+ GPA"; }
      } else {
        return "";
      }
    })
    .on('mouseover', function (d, i) { tip.show(d, i); })
  .on('mouseout', function (d, i) { tip.hide(d, i); })


    // years.append("text")
    // .attr("x", (d) => x(0) + 10)
    // .attr("y", 14)
    // .attr("fill", "white")
    // .attr("font-size", "14px")
    // .attr("font-weight", "bold")
    // .text((d) => `${d.gpa_gte_375}%`)
  
    // years.append("text")
    // .attr("x", (d) => x(0) + 10)
    // .attr("y", 26)
    // .attr("fill", "#ccf")
    // .attr("font-size", "10px")
    // .text((d) => `Incoming freshman w/ high school GPA >= 3.75`)


    years.append("text")
    .attr("x", (d) => x(d.v1_400) + 3)
    .attr("y", 21)
    .attr("fill", "black")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .text((d) => (d.gpa_gte_375) ? `${Math.round(d.gpa_gte_375 * 10) / 10}%` : "")
  

    years.append("text")
    .attr("x", (d) => -40)
    .attr("y", 21)
    .attr("fill", "black")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .text((d) => `${d.year} -`)

    years.append("rect")
    .attr("x", (d) => x(d.v1_350) )
    .attr("width", (d) => x(0) - x(d.v1_350))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    //.attr("fill", "hsl(250 100% 54%)")
    .attr("fill", "hsl(311 33.3% 27.6%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    years.append("rect")
    .attr("x", (d) => x(d.v1_325) )
    .attr("width", (d) => x(d.v1_350) - x(d.v1_325))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    //.attr("fill", "hsl(250 100% 66%)")
    .attr("fill", "hsl(311 33.3% 37.6%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    years.append("rect")
    .attr("x", (d) => x(d.v1_300) )
    .attr("width", (d) => x(d.v1_325) - x(d.v1_300))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    //.attr("fill", "hsl(250 100% 78%)")
    .attr("fill", "hsl(311 33.3% 47.6%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    years.append("rect")
    .attr("x", (d) => x(d.v1_250) )
    .attr("width", (d) => x(d.v1_300) - x(d.v1_250))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    //.attr("fill", "hsl(56 100% 40%)")
    .attr("fill", "hsl(311 33.3% 57.6%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    years.append("rect")
    .attr("x", (d) => x(d.v1_200) )
    .attr("width", (d) => x(d.v1_250) - x(d.v1_200))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    .attr("fill", "hsl(311 33.3% 67.6%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    years.append("rect")
    .attr("x", (d) => x(d.v1_100) )
    .attr("width", (d) => x(d.v1_200) - x(d.v1_100))
    .attr("y", (d) => { return 0; } )
    .attr("height", GPA_BAR_HEIGHT )
    .attr("fill", "hsl(311 33.3% 77.6%)")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })
  
    svg.append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", -10 )
    .attr("y2", height + 10)
    .attr("stroke", "black")
    .attr("stroke-width", "3px")

    if (uni != "UCLA") {
      svg.append("line")
      .attr("x1", x(0) + 2)
      .attr("x2", x(max))
      .attr("y1", y(2018) )
      .attr("y2", y(2018) )
      .attr("stroke", "#eef")
      .attr("stroke-dasharray", "8")
      .attr("stroke-width", "1px");


      svg.append("text")
      .attr("x", x(0) + 3)
      .attr("y", y(2018) + 12)
      .attr("fill", "#eef")
      .attr("font-size", "10px")
      .text((d) => `[1]`)
    }

    if (uni == "USC") {
      svg.append("text")
      .attr("x", x(0) + 5)
      .attr("y", y(2018) - 10)
      .attr("fill", "#111")
      .attr("font-size", "12px")
      .text((d) => {
        if (width > 600) { return `USC did not report incoming freshman class GPAs for Fall 2019`; }
        else if (width > 300) { return `No data reported for Fall 2019`; }
        else if (width > 100) { return `No data`; }
        return "";
      })
    }


    // years.append("rect")
    // .attr("x", (d) => x(-(d.gpa_325 + d.gpa_350)) )
    // .attr("width", (d) =>  x(-(d.gpa_325 + d.gpa_350)) -   )
    // .attr("y", (d) => { console.log(d); return 0; } )
    // .attr("height", 40 )
    // .attr("fill", "pink")

}




var visualize_chart = () => {
  let id = "#chart-line";
  let client_width = $(id).width();
  client_width_rendered_ = client_width;

  let margin = { top: 10, right: 80, bottom: 30, left: 50 };

  if (client_width < 730) {
    margin.bottom += 20;
  }

  let width = client_width - margin.left - margin.right,
     height = 400;

  d3.select(id).html("");
  let svg = d3.select(id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("width", width + margin.left + margin.right)
    .style("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  

  // let x = d3.scaleLinear()
  //   .domain([2005, 2023])
  //   .range([0, width]);

    let x = d3.scaleTime()
    .domain([new Date(2005, 0, 1), new Date(2023, 0, 1)])
    .range([0, width]);

  let y = d3.scaleLinear()
    .domain([0, 1])
    .range([height, 0]);

    let ticks_ct = 20;
    if (width < 400) {
      ticks_ct = 10;
    }
    let year_ticks = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(ticks_ct))
  
    if (width < 600) {
      year_ticks
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");
    }

    svg.append("g")
      .call(d3.axisLeft(y).tickFormat( d3.format(".0%")));        

    // -- grid lines --
    var x_grid = d3.axisBottom(x)
    .ticks(ticks_ct)
    .tickSize(-height)
    .tickFormat("");

    svg.append('g')
    .attr("transform", "translate(0," + height + ")")
    .attr('class', 'axis-gridline').call(x_grid);    


  let year_avg = {};
  let year_ct = {};
  let data = [];

  // == d3-tip ==
  var tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
    let val = Math.round(d.gpa_gte_375 * 10) / 10;
    let s = `
    <div style="text-align: center; font-weight: bold; border-bottom: solid 1px black;">${val}%</div>
    `;

    if (!d.School) {
      s += `<div style="font-size: 14px; padding-top: 3px;">
      Unweighted average percentage of incoming Big Ten freshman classes that have a high school GPA of 3.75 or higher.
      </div>`;
      return s;
    }

    s += `<div style="font-size: 14px; padding-top: 3px;">
    <b>${val}%</b> of the first-semester freshman class at <b>${d.School}</b> in <b>Fall ${d.year}</b> had a high school GPA of 3.75 or higher.  Full breakdown:
    </div>`;

    s += `<div style="font-size: 14px; margin-top: 2px;">`;
    if (d.gpa_400) { let v = Math.round(d.gpa_400 * 10) / 10;  s += `&bullet; ${v}% had a 4.00 GPA<br>`; }
    if (d.gpa_400 && d.gpa_375) { let v = Math.round(d.gpa_375 * 10) / 10;  s += `&bullet; ${v}% had a 3.75 - 3.99 GPA<br>`; }
    if (!d.gpa_400 && d.gpa_375) { let v = Math.round(d.gpa_375 * 10) / 10;  s += `&bullet; ${v}% had a 3.75 - 4.00 GPA<br>`; }
    if (d.gpa_350) { let v = Math.round(d.gpa_350 * 10) / 10;  s += `&bullet; ${v}% had a 3.50 - 3.74 GPA<br>`; }
    if (d.gpa_325) { let v = Math.round(d.gpa_325 * 10) / 10;  s += `&bullet; ${v}% had a 3.25 - 3.49 GPA<br>`; }
    if (d.gpa_300) { let v = Math.round(d.gpa_300 * 10) / 10;  s += `&bullet; ${v}% had a 3.00 - 3.24 GPA<br>`; }
    if (d.gpa_250) { let v = Math.round(d.gpa_250 * 10) / 10;  s += `&bullet; ${v}% had a 2.50 - 2.99 GPA<br>`; }
    if (d.gpa_200) { let v = Math.round(d.gpa_200 * 10) / 10;  s += `&bullet; ${v}% had a 2.00 - 2.49 GPA<br>`; }
    s += "</div>";

    return s;
  });
  svg.call(tip);

  for (let u of Object.keys(uni_minYear_dict)) {
    data = [];
    for (let d of data_by_school[u]) {
      if (d.gpa_gte_375 && d.year <= 2023 && d.year >= uni_minYear_dict[u]) {
        data.push(d);

        if (!year_avg[d.year]) {
          year_avg[d.year] = 0;
          year_ct[d.year] = 0;
        }
        year_avg[d.year] += d.gpa_gte_375;
        year_ct[d.year]++;
      }
    }

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", uni_color_dict[u])
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
        .x(function(d) { return x(new Date(d.year, 0, 1)) })
        .y(function(d) { return y(d.gpa_gte_375 / 100) })
        )
    
        let uni_delta_dict = {
          "University of Wisconsin-Madison": 0,
          "University of Washington (Seattle)": 2,
          "USC": 0,
          "Purdue": -5,
          "University of Oregon": 5,
          "Michigan State": -3,
          "University of Michigan": 4,
          "University of Iowa": 4,
          "Indiana (Bloomington)": 2,
          "UCLA": -4,
        };
        
    
    svg.append("text")
    .attr("x", width + 5)
    .attr("y", y(data[0].gpa_gte_375 / 100) + 3 + uni_delta_dict[u])
    .attr("font-size", "13px")
    .attr("stroke", uni_color_dict[u])
    .attr("opacity", 0.5)
    .text(uni_short_dict[u]);

    svg.selectAll("circles")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(new Date(d.year, 0, 1)))
    .attr("cy", (d) => y(d.gpa_gte_375 / 100))
    .attr("r", 3.5)
    .attr("opacity", 0.5)
    .attr("fill", uni_color_dict[u])
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })

  }

  data = [];
  for (let d of Object.keys(year_avg)) {
    data.push({
      year: d,
      gpa_gte_375: year_avg[d] / year_ct[d]
    });
  }

  svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .attr("d", d3.line()
    .x(function(d) { return x(new Date(d.year, 0, 1)) })
    .y(function(d) { return y(d.gpa_gte_375 / 100) })
    )

    svg.append("text")
    .attr("x", width + 5)
    .attr("y", y(data[data.length - 1].gpa_gte_375 / 100) + 3)
    .attr("font-size", "13px")
    .attr("stroke", "black")
    .text("B1G Average");   

    svg.selectAll("circles")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(new Date(d.year, 0, 1)))
    .attr("cy", (d) => y(d.gpa_gte_375 / 100))
    .attr("r", 4.5)
    .attr("fill", "black")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })

    
    svg.append("text")
    .attr("x", 10)
    .attr("y", 12)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .style("font-weight", "bold")
    .text("Percentage of first-semester");   

    svg.append("text")
    .attr("x", 10)
    .attr("y", 28)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .style("font-weight", "bold")
    .text(" incoming freshman with high");

    svg.append("text")
    .attr("x", 10)
    .attr("y", 44)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .style("font-weight", "bold")
    .text("school GPA of 3.75 or higher");

    svg.append("text")
    .attr("x", width - 5)
    .attr("y", height - 7)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .attr("text-anchor", "end")
    .style("font-weight", "bold")
    .text("Freshman Class Entry Year (Fall)");
};





var visualize_chart_gpa = () => {
  let id = "#chart-line-gpa";
  let client_width = $(id).width();
  client_width_rendered_ = client_width;

  let margin = { top: 10, right: 80, bottom: 30, left: 50 };

  if (client_width < 730) {
    margin.bottom += 20;
  }

  let width = client_width - margin.left - margin.right,
     height = 400;

  d3.select(id).html("");
  let svg = d3.select(id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("width", width + margin.left + margin.right)
    .style("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  

  // let x = d3.scaleLinear()
  //   .domain([2005, 2023])
  //   .range([0, width]);

    let x = d3.scaleTime()
    .domain([new Date(2005, 0, 1), new Date(2023, 0, 1)])
    .range([0, width]);

  let y = d3.scaleLinear()
    .domain([3.4, 4])
    .range([height, 0]);

  let ticks_ct = 20;
  if (width < 400) {
    ticks_ct = 10;
  }
  let year_ticks = svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(ticks_ct))

  if (width < 600) {
    year_ticks
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)");
  }

    svg.append("g")
      .call(d3.axisLeft(y));

    // -- grid lines --
    var x_grid = d3.axisBottom(x)
    .ticks(ticks_ct)
    .tickSize(-height)
    .tickFormat("");

    svg.append('g')
    .attr("transform", "translate(0," + height + ")")
    .attr('class', 'axis-gridline').call(x_grid);    


  let year_avg = {};
  let year_ct = {};
  let data = [];

  // == d3-tip ==
  var tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
    let val = Math.round(d.gpa_avg * 100) / 100;


    let s = `
    <div style="text-align: center; font-weight: bold; border-bottom: solid 1px black;">Average GPA: ${val}</div>
    <div style="font-size: 14px; padding-top: 3px; text-align: center;">
    `;

    if (d.School) {
      s += `High school GPA of incoming first-semester freshman at ${d.School} in Fall ${d.year}.`;
    } else {
      s += `Unweighted average high school GPA of all incoming Fall ${d.year} freshman classes across all Big Ten Universities reporting data.`
    }

    s += `</div>`

    return s;
  });
  svg.call(tip);

  for (let u of Object.keys(uni_minYear_dict)) {
    data = [];
    for (let d of data_by_school[u]) {
      if (d.gpa_avg && d.year <= 2023 && d.year >= uni_minYear_dict[u]) {
        data.push(d);

        if (!year_avg[d.year]) {
          year_avg[d.year] = 0;
          year_ct[d.year] = 0;
        }
        year_avg[d.year] += d.gpa_avg;
        year_ct[d.year]++;
      }
    }

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", uni_color_dict[u])
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
        .x(function(d) { return x(new Date(d.year, 0, 1)) })
        .y(function(d) { return y(d.gpa_avg) })
        )
    
        let uni_delta_dict = {
          "UCLA": 0,
          "University of Michigan": -6,
          "University of Wisconsin-Madison": 6,
          "USC": 0,
          "University of Iowa": 4,
          "University of Washington (Seattle)": -4,
          "Michigan State": 5,

          "Purdue": 15,
          "Indiana (Bloomington)": 12,
          "University of Oregon": 4,
        };
        
    
    svg.append("text")
    .attr("x", width + 5)
    .attr("y", y(data[0].gpa_avg) + 3 + uni_delta_dict[u])
    .attr("font-size", "13px")
    .attr("stroke", uni_color_dict[u])
    .attr("opacity", 0.5)
    .text(uni_short_dict[u]);

    svg.selectAll("circles")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(new Date(d.year, 0, 1)))
    .attr("cy", (d) => y(d.gpa_avg))
    .attr("r", 3.5)
    .attr("opacity", 0.5)
    .attr("fill", uni_color_dict[u])
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })

  }

  data = [];
  for (let d of Object.keys(year_avg)) {
    data.push({
      year: d,
      gpa_avg: year_avg[d] / year_ct[d]
    });
  }

  // data = [
  //   { year: 2010, gpa_avg: 3.2239903731897863 },
  //   { year: 2011, gpa_avg: 3.2374124486504785 },
  //   { year: 2012, gpa_avg: 3.2423759757532644 },
  //   { year: 2013, gpa_avg: 3.2462462420264404 },
  //   { year: 2014, gpa_avg: 3.245397714001831 },
  //   { year: 2015, gpa_avg: 3.2773066030276463 },
  //   { year: 2016, gpa_avg: 3.276256630090085 },
  //   { year: 2017, gpa_avg: 3.322061788797417 },
  //   { year: 2018, gpa_avg: 3.3338506589555323 },
  //   { year: 2019, gpa_avg: 3.4141122328379105 },
  //   { year: 2020, gpa_avg: 3.445629671906594 },
  //   { year: 2021, gpa_avg: 3.419153518702475 },
  //   { year: 2022, gpa_avg: 3.4781513328366676 },
  //   { year: 2023, gpa_avg: 3.513533224211286 },    
  // ]

  svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .attr("d", d3.line()
    .x(function(d) { return x(new Date(d.year, 0, 1)) })
    .y(function(d) { return y(d.gpa_avg) })
    )

    svg.selectAll("circles")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(new Date(d.year, 0, 1)))
    .attr("cy", (d) => y(d.gpa_avg))
    .attr("r", 4.5)
    .attr("fill", "black")
    .on('mouseover', function (d, i) { tip.show(d, i); })
    .on('mouseout', function (d, i) { tip.hide(d, i); })


    svg.append("text")
    .attr("x", width + 5)
    .attr("y", y(data[data.length - 1].gpa_avg))
    .attr("font-size", "13px")
    .attr("stroke", "black")
    .text("B1G Average");   

    
    svg.append("text")
    .attr("x", 10)
    .attr("y", 12)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .style("font-weight", "bold")
    .text("Average unweighted high school");   

    svg.append("text")
    .attr("x", 10)
    .attr("y", 28)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .style("font-weight", "bold")
    .text("GPA of incoming freshman class");

    svg.append("text")
    .attr("x", 10)
    .attr("y", 44)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .style("font-weight", "bold")
    .text("(GPAs unweighted, out of 4.00)");

    svg.append("text")
    .attr("x", width - 5)
    .attr("y", height - 7)
    .attr("font-size", "14px")
    .attr("fill", "black")
    .attr("text-anchor", "end")
    .style("font-weight", "bold")
    .text("Freshman Class Entry Year (Fall)");
};

