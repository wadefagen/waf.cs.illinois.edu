var data_ = null;
var client_width_rendered_ = null;

// -- onload function --
$(function() {
  d3.csv("data/viz.csv").then(function(data) {
    data.forEach(function (d) {
      d.q0 = +d.q0;
      d.q1 = +d.q1;
      d.q2 = +d.q2;
      d.q3 = +d.q3;
      d.q4 = +d.q4;
    })
    data_ = data;
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
  var data = data_;

  words = [];
  for (var i = 0; i < data.length; i++) { words.push( data[i].word ); }

  // == d3.js boilerplate ==
  var client_width = $("#chart").width();
  client_width_rendered_ = client_width;

  var margin = { top: 45, right: 50, bottom: 20, left: 200 };

  if (client_width < 500) {
    margin.left = 100;
  }

  var width = client_width - margin.left - margin.right,
     height = 40 * data.length;

  var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("width", width + margin.left + margin.right)
    .style("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  
  
  // == visualization scales ==
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

  var color = d3.scaleLinear()
    .domain([0, 100])
    .range(['hsla(360, 95%, 31%, 0.5)', 'hsla(199, 77%, 61%, 0.5)'])
    .interpolate(d3.interpolateHcl);

  var y = d3.scaleBand()
    .domain(words)
    .range([0, height])
    .paddingInner(0.3)
    .paddingOuter(0.5);

  // == axis ==
  var ticks = 10;
  if (width < 500) { ticks = 4; }
  
  // -- grid lines --
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

  var y_axis = d3.axisLeft(y);
  svg.append('g')
     .attr('class', function (d) {
       if (width < 500) { return 'axis-small'; }
       else { return 'axis'; }
     })
     .call(y_axis);


  // == d3-tip ==
  var tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
    return "<b>" + d.word + "</b> was perceived to be " + d.value + "%." +
      '<div class="caption">This same user\'s responses to each word is circled in the visualization.</div>';
  });
  svg.call(tip);


  // == viz ==
  svg.append('text')
    .text('Probability Perception')
    .attr('text-anchor', 'middle')
    .style('font-weight', 'bold')
    .style('font-size', 12)
    .attr('x', x(50))
    .attr('y', -25);

  var box_enter = svg.selectAll('boxplots')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
      return 'translate(0, ' + y(d.word) + ')';
    });

  // Box
  box_enter.append('rect')
    .attr('x', function (d) { return x(d.q1) })
    .attr('y', 0)
    .attr('width', function (d) { return x(d.q3) - x(d.q1); })
    .attr('height', y.bandwidth() )
    .attr('fill', function (d) { return color(d.q2); })
    .attr('stroke', 'black')

  // all values
  box_enter.selectAll('outliers')
    .data(function (d) {
      var arr = d.all_values.split(',');
      var r = [];
      for (var i = 0; i < arr.length; i++) {
        r.push( {word: d.word, value: parseInt(arr[i]), q2: d.q2, i: i } );
      }
      return r;
    })
    .enter()
    .append('circle')
    .attr('class', function (d, i) { return 'person person-' + i; })
    .attr('cx', function (d) { return x(d.value); })
    .attr('cy', function (d, i) { return (i % (y.bandwidth() - 16)) + 8; })
    .attr('r', 4)
    .attr('fill', function (d, i) { return color(d.q2); })
    .on('mouseover', function (d, i) {
      tip.show(d, i);
      var className = '.person-' + i;

      d3.selectAll('.person')
        .filter(function (e) {
          return (e.i != i);
        })
        .style('opacity', 0.1)
        .attr('stroke-width', 0);

      d3.selectAll(className)
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    })
    .on('mouseout', function (d, i) {
      tip.hide(d, i);
      var className = '.person-' + i;

      d3.selectAll('.person')
        .filter(function (e) {
          return (e.i != i);
        })
        .style('opacity', 1)
        .attr('stroke-width', 0);

      d3.selectAll(className)
        .attr('stroke-width', 0);
    })


  // q2
  box_enter.append('line')
    .attr('x1', function (d) { return x(d.q2); })
    .attr('x2', function (d) { return x(d.q2); })
    .attr('y1', function (d) { return 0; })
    .attr('y2', function (d) { return y.bandwidth(); })
    .attr('stroke', 'black')
    .attr('stroke-width', 3)

  // q0-q1
  box_enter.append('line')
    .attr('x1', function (d) { return x(d.q0); })
    .attr('x2', function (d) { return x(d.q1); })
    .attr('y1', function (d) { return y.bandwidth() / 2; })
    .attr('y2', function (d) { return y.bandwidth() / 2; })
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

  box_enter.append('line')
    .attr('x1', function (d) { return x(d.q0); })
    .attr('x2', function (d) { return x(d.q0); })
    .attr('y1', function (d) { return 0; })
    .attr('y2', function (d) { return y.bandwidth(); })
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
  
  // q3-q4
  box_enter.append('line')
    .attr('x1', function (d) { return x(d.q3); })
    .attr('x2', function (d) { return x(d.q4); })
    .attr('y1', function (d) { return y.bandwidth() / 2; })
    .attr('y2', function (d) { return y.bandwidth() / 2; })
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

  box_enter.append('line')
    .attr('x1', function (d) { return x(d.q4); })
    .attr('x2', function (d) { return x(d.q4); })
    .attr('y1', function (d) { return 0; })
    .attr('y2', function (d) { return y.bandwidth(); })
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
};