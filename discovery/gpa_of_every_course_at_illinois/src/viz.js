"use strict";

var _hover_ct = 0;
var generic_json = null;
var cur_width = 0;

$(function() {
  var fileName = "data/generic.json";

  $.getJSON(fileName)
   .done(function (data) {
     generic_json = data;
     visualize(generic_json);
   })
   .fail(function() {
     alert("Failed to load the JSON file: " + fileName);
   });
});


$(window).resize(function () {

  if (generic_json != null) {
    var new_width = $("#charts").width();
    if (cur_width != new_width) {
      $("#charts").html("");
      visualize(generic_json);
    }
  }

});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* Visualize the data in the visualize function */
var visualize = function(data) {
  data.forEach(function (college) {
    var client_width;
    client_width = cur_width = $("#charts").width();

    var margin = { top: 50, right: 20, bottom: 50, left: 40 },
       width = client_width - margin.left - margin.right,
       height = (college.departments.length * 50);

    // ==
    d3.select("#charts")
      .append("h2")
      .style("margin-bottom", "15px")
      .text(college.college)

    // ==
    var svg = d3.select("#charts")
               .append("svg")
               .attr("width", width + margin.left + margin.right)
               .attr("height", height + margin.top + margin.bottom)
               .append("g")
               .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // ==
    var courseMajorScale = d3.scale.ordinal()
                             .domain(college.departments)
                             .rangePoints( [0, height], 0.1 );

    var courseNumberScale = d3.scale.linear()                 // the y-axis scale
                                    .domain([75, 510])    // the course numbers
                                    .range([0, width]);     // on the left side (102, 205, etc.)

    var courseNumberScale = d3.scale.ordinal()                 // the y-axis scale
                                    .domain(d3.range(75, 510))    // the course numbers
                                    .rangePoints([0, width]);     // on the left side (102, 205, etc.)

    // ==


    // ==
    var gpaThresholds = [
      { gpa: 0.00, color: "rgba(108,   0, 138, 0.50)" },
      { gpa: 2.25, color: "rgba(128,  14, 117, 0.50)" },
      { gpa: 2.5,  color: "rgba(149,  27, 107, 0.50)" },
      { gpa: 2.75, color: "rgba(170,  55,  85, 0.50)" },
      { gpa: 3.0,  color: "rgba(192,  82,  64, 0.50)" },
      { gpa: 3.25, color: "rgba(213, 110,  43, 0.50)" },
      { gpa: 3.5,  color: "rgba(234, 138,  21, 0.50)" },
      { gpa: 3.75, color: "rgba(255, 165,   0, 0.50)" }
    ];



    var gpaScale = d3.scale.threshold()
                           .domain( gpaThresholds.map( function(d) { return d.gpa } ).splice(1) )
                           .range( gpaThresholds.map( function(d) { return d.color } ) );

    // ==
    var r_max = d3.max(college.courses, function(d) { return d.sum_students; });

    // ==
    var xAxis = d3.svg.axis()
                      .scale(courseMajorScale)
                      .orient("left")
                      .innerTickSize(-width)
                      .outerTickSize(10)
                      ;

    var yAxis = d3.svg.axis()
                      .scale(courseNumberScale)
                      .orient("bottom")
                      .tickValues([100, 200, 300, 400, 500])
                      .innerTickSize(-(height + 50))
                      .outerTickSize(10)
                      .tickPadding(10);

    svg.append("g")
       .attr("class", "y axis2")
       .call(xAxis);

    svg.append("g")
       .attr("class", "x axis2")
       .attr("transform","translate(0,"+height+")")
       .call(yAxis);

    // ==
    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
      var plus = "";
      if (d.plus) { plus = "<i style=\"font-size: 12px\">at least</i> "; }
      return d.name + ": " + d.title + "<br>" +
             "Avg. GPA: " + d.avg_gpa.toFixed(2) + "<br>" +
             "Avg. Students: <span style=\"font-size: 12px\">&ge;</span>" + numberWithCommas((d.sum_students / 2).toFixed(0) + " /year");
    });
    svg.call(tip);

    // ==
    var yaxis_label = svg.selectAll("yaxis_label")
       .data([
         { place: 150, label_1: "100-level", label_2: "courses" },
         { place: 250, label_1: "200-level", label_2: "courses" },
         { place: 350, label_1: "300-level", label_2: "courses" },
         { place: 450, label_1: "400-level", label_2: "courses" },
       ])
       .enter()

    yaxis_label.append("text")
       .attr("text-anchor", "middle")
       .attr("y", -40)
       .attr("x", function (d) { return courseNumberScale(d.place); })
       .text(function(d) { return d.label_1; })

    yaxis_label.append("text")
       .attr("text-anchor", "middle")
       .attr("y", -30)
       .attr("x", function (d) { return courseNumberScale(d.place); })
       .text(function(d) { return d.label_2; });

    svg.selectAll("circle")
       .data(college.courses)
       .enter()
       .append("circle")
       .attr("class","courses")
       .attr("cy", function (d) { return courseMajorScale(d.subject); } )
       .attr("cx", function (d) { return courseNumberScale(d.number); } )
       .attr("r", function(d) {
         if (d.number < 100 || d.number >= 500) {
           return 0;
         } else {
           return Math.pow(width * 1.5 * (d.sum_students / r_max), 0.5);
         }
       })
       .attr("fill", function(d,i) {
         return gpaScale(d.avg_gpa);
       })
       .on('mouseover', function(d,i){
         tip.offset( [0, 0] );
         tip.show(d,i);
         svg.selectAll(".courses")
            .filter(function(e){
              return (e.name != d.name );
            })
            .transition()
            .style("opacity",0.1);

          ga('send', 'event', 'mouseover', 'course', d.name, _hover_ct);
          _hover_ct++;
        })
       .on('mouseout', function(d,i){
          tip.hide(d,i);

          svg.selectAll(".courses")
             .filter(function(e){
                return (e.name!=d.name);
                })
             .transition()
             .style("opacity",1);
        })

      ;


  });
  // ==
};

var legend_gpa_scale = d3.scale.linear()
  .domain([2,4])
  .range(["rgb(108, 0, 138)", "rgb(255, 210, 128)"]);

var legend_gpa = d3.legend.color()
                   .shapeWidth(30)
                   .cells(6)
                   .orient('horizontal')
                   .scale(legend_gpa_scale);

// ==
d3.select("#legend_gpa")
  .append("g")
  .call(legend_gpa);


var r_scale = d3.scale.pow()
                .exponent(0.35)
                .domain([0, 6462])
                .range([0, 20]);

var legend_size = d3.legend.size()
                   .cells([100, 200, 400, 800, 3000, 6000])
                   //.labels(["100", "200", "400", "800", "3,000", "6,000"])
                   .labels(["", "", "", "", "", ""])
                   .shapePadding(15)
                   .orient('horizontal')
                   .shape('circle')
                   .scale(r_scale);

// ==
d3.select("#legend_size")
  .append("g")
  .attr("transform", "translate(20, 20)")
  .style("fill", "rgba(213, 110, 43, 0.8)")
  .call(legend_size);
