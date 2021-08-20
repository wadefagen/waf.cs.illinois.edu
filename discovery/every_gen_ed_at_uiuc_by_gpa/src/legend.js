var margin = { top: 0, right: 0, bottom: 0, left: 0 },
   width = 200,
   height = 35;

var svg = d3.select("#legend2")
            .append("svg")
            .attr("width", width + margin.left + margin.right + 100)
            .attr("height", height + margin.top + margin.bottom)
            .style("width", width + margin.left + margin.right + 100)
            .style("height", height + margin.top + margin.bottom)
            .append("g");


var color = d3.scaleLinear()
                    .range(["hsla(360, 95%, 41%, 0.77)", "hsla(199, 77%, 41%, 0.77)"])
                    .interpolate(d3.interpolateHcl);

var points = [
  { "cx": 20 + 50, "fill": color(1), "text": "4.0 / 100%" },
  { "cx": 60 + 50, "fill": color(0.85) },
  { "cx": 100 + 50, "fill": color(0.7) },
  { "cx": 140 + 50, "fill": color(0.55) },
  { "cx": 180 + 50, "fill": color(0.4), "text": "2.0 / 0%" },
];


points.forEach(function (d) {
  svg.append("circle")
     .attr("cx", d.cx)
     .attr("cy", 10)
     .attr("r", 10)
     .attr("fill", d.fill);

  if (d.text) {
    svg.append("text")
       .attr("x", d.cx)
       .attr("y", 35)
       .attr("text-anchor", "middle")
       .text(d.text);
   }
});



// --
height = 45;
var svg2 = d3.select("#legend1")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("width", width)
            .style("height", height)
            .append("g");

svg2.append("circle")
    .attr("cx", 20)
    .attr("cy", 14)
    .attr("r", 6)
    .attr("fill", "hsla(199, 77%, 41%, 0.77)");

svg2.append("circle")
    .attr("cx", 60)
    .attr("cy", 14)
    .attr("r", 8)
    .attr("fill", "hsla(199, 77%, 41%, 0.77)");


svg2.append("circle")
    .attr("cx", 100)
    .attr("cy", 14)
    .attr("r", 10)
    .attr("fill", "hsla(199, 77%, 41%, 0.77)");

// --
svg2.append("circle")
    .attr("cx", 140)
    .attr("cy", 14)
    .attr("r", 12)
    .attr("fill", "hsla(199, 77%, 41%, 0.77)");

// --
svg2.append("circle")
    .attr("cx", 180)
    .attr("cy", 14)
    .attr("r", 14)
    .attr("fill", "hsla(199, 77%, 41%, 0.77)");


svg2.append("text")
   .attr("x", 45)
   .attr("y", 40)
   .attr("text-anchor", "middle")
   .text("Small Courses");

svg2.append("text")
   .attr("x", 155)
   .attr("y", 40)
   .attr("text-anchor", "middle")
   .text("Large Courses");
