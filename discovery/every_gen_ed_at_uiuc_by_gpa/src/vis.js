var cur_width = 0;
var _data = null;
var svg = null;
var sizeScale = null;
var last_filters = null;

var updateByCheckboxes = function(forced) {
  try {
    // Update CSS classes
    $('input[type="checkbox"]:not(:checked)').parent().parent().removeClass("sel");
    $('input[type="checkbox"]:checked').parent().parent().addClass("sel");

    // Update visualization, if changed
    var filters = $('input[type="checkbox"]:checked').map(function() { return $(this).data("filter"); } ).get();
    if (last_filters == filters.toString() && forced != true) { return; }
    last_filters = filters.toString();

    var filtered = _.filter(_data, function(d) {
      var containsAll = true;
      filters.forEach(function(f) {
        if ( _.indexOf(d["GenedRequirement"], f) == -1 ) { containsAll = false; }
        //if (!d["GenedRequirement"].includes(f)) { containsAll = false; }
      })
      return containsAll;
    });

    if (filtered.length == 0) {
      $("#noresult").show();
    } else {
      $("#noresult").hide();
    }

    svg.selectAll(".gened_circle")
       .attr("r", function (d) {
         var containsAll = true;
         filters.forEach(function(f) {
           if ( _.indexOf(d["GenedRequirement"], f) == -1 ) { containsAll = false; }
           //if (!d["GenedRequirement"].includes(f)) { containsAll = false; }
         })

         if (containsAll) {
           return sizeScale(d["Total"]);
         } else {
           return 0;
         }
       });

     ga('send', 'event', 'mouseover', 'filter', last_filters);

  } catch (e) {
    alert("Checkbox Exception: " + e);
  }
};


$('input[type="checkbox"]').click(updateByCheckboxes);
$('input[type="checkbox"]').change(updateByCheckboxes);

$(window).resize(function () {
  if (_data != null) {
    var new_width = $("#chart").width();
    if (cur_width != new_width) {
      $("#chart").html("");
      $("div.d3-tip").remove();
      v2(_data);
    }
  }
});

/*
 * # Boilerplate jQuery
 * This code loads the file `res/scores.json` and calls the `visualize` function
 * as soon as the JSON file is loaded.
 */
$(function() {
 $.getJSON("data/all_gened.json")
  .done(function (data) {
    _data = data;
    try { v2(_data); }
    catch (e) { alert("Exception: " + e); }
  })
  .fail(function() { alert("Failed to load the JSON file!\n(Did your Python run?)"); });
});

/*
var preload_f = function () {
  alert("in preload");
  if (typeof(d3) == "undefined" || typeof(_) == "undefined") { setTimeout(preload_f, 1000); }
  else { v2(_data); }
}
*/

var v2 = function (data) {
  sizeScale = d3.scalePow()
                .exponent(0.3)
                .domain( [1, _.max(data, "Total")["Total"]] )
                .range([1, 20]);


  var client_width;
  client_width = cur_width = $("#chart").width();

  var margin = { top: 20, right: 20, bottom: 20, left: 30 },
     width = client_width - margin.left - margin.right,
     height = 1000; // - margin.top - margin.bottom;

  // --
  svg = d3.select("#chart")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .style("width", width + margin.left + margin.right)
              .style("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //color function
  var color = d3.scaleLinear()
                .range(["hsla(360, 95%, 41%, 0.77)", "hsla(199, 77%, 41%, 0.77)"])
                .interpolate(d3.interpolateHcl);

  // show function with specific ID
  var maxA = _.max(data, "pct_As")["pct_As"];
  var minA = _.min(data, "pct_As")["pct_As"];

  var PctAScale = d3.scaleLinear()
                    .domain( [1, minA] )
                    .range( [width, 0] );

  var PctAAxis = d3.axisTop()
                   .tickFormat(d3.format(".0%"))
                   .scale(PctAScale);


  // Element #2 - avg_gpa scale
  var maxgpa = _.max(data, "avg_gpa")["avg_gpa"]
  var mingpa = _.min(data, "avg_gpa")["avg_gpa"]

  var gpaScale = d3.scaleLinear()
                   .domain( [4, mingpa] )
                   .range(  [0, height] );

  // x
  var gridlines = d3.axisLeft()        // Same orientation as the axis that needs gridlines
                  .tickFormat("")    // (1): Disable the text for the gridlines
                  .tickSize(-width)  // (2): Extend the tick `width` amount, negative
                  .tickValues([3.8, 3.6, 3.4, 3.2, 3, 2.8, 2.6, 2.4, 2.2, 2])
                 .scale(gpaScale);     // Same scale as the axis that needs gridlines


   svg.append("g")
      .attr("class", "grid")   // (3): Add a CSS class
      .call(gridlines);

    var gridlines2 = d3.axisTop()        // Same orientation as the axis that needs gridlines
                    .tickFormat("")    // (1): Disable the text for the gridlines
                    .tickSize(-height)  // (2): Extend the tick `width` amount, negative
                   .scale(PctAScale);     // Same scale as the axis that needs gridlines

     svg.append("g")
        .attr("class", "grid")   // (3): Add a CSS class
        .call(gridlines2);

        svg.append("g")
           .call(PctAAxis);


           var tip = d3.tip()
           .attr('class', 'd3-tip')
           .html(function(d) {

             /*
             return
               d.title;

               //"<div>" + d.title + "</div>";


             console.log(this);
             return d.name + ": " + d.title + "<br>" +
                    "Average GPA: " +  d.avg_gpa.toFixed(2) + "<br>" +
                    "Received 4.0: " + (100 * d.pct_As).toFixed(2) + "%<br>" +
                    "Size: " + '<span style="font-size: 12px;">&ge;</span>' + ((d.Total / 2)).toFixed(0) + " students /year<br>" +
                    "Filfills: " + d.GenedRequirement.join(", ");

                    */

             return "<div>" + d.name + ": " + d.title + "</div>" +
                    '<div class="row" style="text-align: center; margin-top: 5px; padding-top: 5px; margin-bottom: 5px; padding-bottom: 5px; border-top: dotted 1px black; border-bottom: dotted 1px black;">' +
                    '<div class="col xs-6">' +
                       '<span style="font-size: 28px;">' + d.avg_gpa.toFixed(2) + '</span><br>' +
                       '<span style="font-size: 14px;">' + "Average GPA" + '</span>' +
                    '</div>' +
                    '<div class="col xs-6">' +
                       '<span style="font-size: 28px;">' + (100 * d.pct_As).toFixed(2) + '%</span><br>' +
                       '<span style="font-size: 14px;">' + "Received 4.0" + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div style="margin-bottom: 5px; padding-bottom: 5px; border-bottom: dotted 1px black; font-size: 14px; text-align: center;">' +
                    _.uniq(d.GenedRequirement).join("<br>") +
                    '</div>' +
                    '<span style="font-size: 12px;">&ge;</span>' + ((d.Total / 2)).toFixed(0) + " students/year"

             return d.name + ": " + d.title + "<br>" +
                    "Avg. GPA: " + d.avg_gpa.toFixed(2) + "<br>" +
                    "A and A+ Percentage: " + (100 * d.pct_As).toFixed(2)+"%" + "<br>" +
                    "Gened: "+ d.GenedRequirement;
                    /*
             */
           });
           svg.call(tip);


  // --
  var gpaAxis = d3.axisLeft()
                     .scale(gpaScale);

  svg.append("g")
     .call(gpaAxis);

  // --
  svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width - 5)
    .attr("y", 14)
    .text("Percentage of 4.0s given (A+/A)")
    .attr("fill", "black")
    .attr("font-size", "14px")

  // --
  svg.append("text")
    .attr("text-anchor", "start")
    .attr("x", gpaScale(3.8) + 2)
    .attr("y", -2)
    .text("Average GPA")
    .attr("fill", "black")
    .attr("font-size", "14px")
    .attr("transform", "rotate(90)")

  svg.append("rect")
     .attr("x", 0)
     .attr("y", 0)
     .attr("width", width)
     .attr("height", height)
     .attr("fill", "transparent")
     .on("click", function() {
       tip.hide();
       svg.selectAll(".gened_circle")
          .transition()
          .style("opacity",1);
     })

  // --
  var filters = $('input[type="checkbox"]:checked').map(function() { return $(this).data("filter"); } ).get();
  svg.selectAll("grade")
     .data(data)
     .enter()
     .append("circle")
     .attr("class", "gened_circle")
     .attr("r", function(d, i){
       var containsAll = true;
       filters.forEach(function(f) {
         if ( _.indexOf(d["GenedRequirement"], f) == -1 ) { containsAll = false; }
       })

       if (containsAll) {
         return sizeScale(d["Total"]);
       } else {
         return 0;
       }
     })
     .attr("cx", function(d, i) {
       return PctAScale( d["pct_As"] );
     })
     .attr("cy", function(d, i){
       return gpaScale( d["avg_gpa"] );
     })
     .attr("fill", function(d, i){
        return color(d["compre"])
     })
     .on('mouseover', function(d,i){
         //tip.offset( [0, 0] );
         if (d["pct_As"] < 0.3) {
           tip.direction("e");
         } else if (d["pct_As"] > 0.7) {
           tip.direction("w");
         } else {
           tip.direction("n");
         }
         tip.show(d);

         svg.selectAll(".gened_circle")
            .filter(function(e){
              return (e.name != d.name );
            })
            .transition()
            .style("opacity",0.1);

          ga('send', 'event', 'mouseover', 'course', d["name"]);
        })
       .on('mouseout', function(d,i){
          tip.hide(d,i);

          svg.selectAll(".gened_circle")
             .filter(function(e){
                return (e.name!=d.name);
                })
             .transition()
             .style("opacity",1);
        })
   ;

};
