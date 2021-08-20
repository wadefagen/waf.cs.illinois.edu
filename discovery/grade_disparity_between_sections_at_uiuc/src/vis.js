"use strict";

// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var cur_width = 0;
var _data = null;
var last_filters = null;
var _course = null;

var updateBySubject = function(subject, course = null) {
  //console.log(" --> " + subject);
  subject = subject.toUpperCase();
  //console.log(_data);
  var filtered = _.filter(_data, function(d) {
    return subject == d.instructors[0]["Course Subject"];
  });

  //alert(filtered);
  visualize(filtered, "#chart");
  $("#findCourseButton").show();
  ga('send', 'event', 'search', 'subject', subject);
};

var show_math221 = function() {
  var filtered = _.filter(_data, function(d) {
    return "MATH 221" == d["course"];
  });

  visualize(filtered, "#chart_math221");
};

$(window).resize(function () {
  if (_data != null) {
    var new_width = $("#sizer").width();
    if (cur_width != new_width) {
      //tip.hide();
      show_math221();
      updateBySubject($("#tags").val());
    }
  }
});


/* Boilerplate jQuery */
$(function() {
  $.getJSON("data/out_full.json")
   .done(function (data) {
     _data = data;
     show_math221();

     var subj = getParameterByName("subj");
     if (subj) { subj = subj.toUpperCase(); }
     var course = getParameterByName("course");
     if (subj) {
       var subj_el = $("#findCourse");

       $( "#tags" ).val(subj);
       updateBySubject(subj, course);
       if (subj && course) {
         var tag = '.' + subj + course;
         var el = $(tag);
         if (el.length) { el[0].scrollIntoView(); }
         else           { subj_el[0].scrollIntoView(); }
       } else {
        subj_el[0].scrollIntoView();
       }
     }

   })
  .fail(function(e) {
     alert("Failed to load CSV file!");
  });

  var subjList = ["AAS","ABE","ACCY","ACE","ACES","ADV","AE","AFRO","AFST","AGCM","AGED","AHS","AIS","ALEC","ANSC","ANTH","ARAB","ARCH","ART","ARTD","ARTE","ARTF","ARTH","ARTS","ASRM","ASTR","ATMS","BADM","BCOG","BCS","BDI","BIOC","BIOE","BIOP","BTW","BUS","CEE","CHBE","CHEM","CHLH","CHP","CI","CLCV","CMN","CPSC","CS","CW","CWL","DANC","EALC","ECE","ECON","EDUC","EIL","ENG","ENGL","ENSU","ENVS","EOL","EPOL","EPS","EPSY","ESE","EURO","FAA","FIN","FR","FSHN","GCL","GE","GEOG","GEOL","GER","GLBL","GRKM","GS","GWS","HDFS","HIST","HORT","HRD","IB","IE","IHLT","INFO","IS","ITAL","JAPN","JOUR","JS","KIN","KOR","LA","LAS","LAST","LAW","LEAD","LER","LING","LLS","MACS","MATH","MBA","MCB","MDIA","ME","MILS","MSE","MUS","MUSC","MUSE","NPRE","NRES","NS","NUTR","PATH","PHIL","PHYS","PLPA","POL","PS","PSM","PSYC","REES","REHB","REL","RHET","RLST","RST","RUSS","SBC","SCAN","SE","SHS","SLAV","SLCL","SOC","SOCW","SPAN","SPED","STAT","TAM","TE","THEA","TRST","TSM","UP","VCM","VM","YDSH"]

  $( "#tags" ).autocomplete({
    source: subjList,
    autoFocus: true,
    select: function(e, ui) {
      var subject = ui.item.value;
      updateBySubject(subject);
    }
  });

});

var visualize = function(data, divId) {
  var tip = d3.tip()
              .attr('class', 'd3-tip')
              .html(function (d, i) {
                ga('send', 'event', 'mouseover', d["course"], d.instructor);
                var a_pct = ((d.gpaDist[0]) / d.countGPA * 100).toFixed(1);
                var b_pct = ((d.gpaDist[1]) / d.countGPA * 100).toFixed(1);
                var c_pct = ((d.gpaDist[2]) / d.countGPA * 100).toFixed(1);
                var d_pct = ((d.gpaDist[3]) / d.countGPA * 100).toFixed(1);
                var f_pct = ((d.gpaDist[4]) / d.countGPA * 100).toFixed(1);
                var html = "<div style=\"font-size: 18px\">";

                if (d.course.indexOf(":") == -1) {
                  html += d["course"] + ": " + d["Course Title"];
                } else {
                  html += d["course"];
                }

                html += '<br>' + d.instructor + '</div>' +
                  '<div style="line-height: 110%; text-align: center; margin-top: 5px; padding-top: 5px; border-top: dotted 1px black; padding-bottom: 5px; border-bottom: dotted 1px black; margin-bottom: 5px;">' +
                    '<div style="font-size: 18px">Average GPA: ' + d.avgGPA.toFixed(2) + '</div>';

                if (d.instructor == "All Sections") {

                } else if (d.stddevDiff > 0) {
                  html += '<div style="font-size: 12px; line-height: 110%;">+' + d.stddevDiff.toFixed(2) + '&sigma; higher than overall course average</div>';
                } else if (d.stddevDiff < 0) {
                  html += '<div style="font-size: 12px; line-height: 110%;">-' + d.stddevDiff.toFixed(2) + '&sigma; from than overall course average</div>';
                } else {
                  html += '<div style="font-size: 12px; line-height: 110%;">Same as overall course average</div>';
                }

                html += '<div style="margin-top: 5px; font-weight: normal; font-size: 12px; line-height: 110%;">Data on ' + d.countGPA + ' students across ' + d.sections + ' section(s)</div>';
                html += '</div>';

                html += '<table style="font-size: 12px; cell-padding: 2px; text-align: center; width: 100%;">' +
                        '<tr>' +
                          '<td>As</td>' +
                          '<td>Bs</td>' +
                          '<td>Cs</td>' +
                          '<td>Ds</td>' +
                          '<td>Fs</td>' +
                        '</tr>' +
                        '<tr>' +
                          '<td>' + a_pct + '%</td>' +
                          '<td>' + b_pct + '%</td>' +
                          '<td>' + c_pct + '%</td>' +
                          '<td>' + d_pct + '%</td>' +
                          '<td>' + f_pct + '%</td>' +
                        '</tr>' +
                        '</table>';
                return html;
              });

  $(divId).empty();

  var viz = d3.select(divId);

  var g_courses =
    viz.selectAll("courses")
       .data(data)
       .enter()
       .append("div")
       .attr("class", function (d) {
         var classTag = d.course.replace(" ", "");
         return "cs205viz " + classTag;
       });

   g_courses.append("h3")
    .text(function (d, i) {
      if (d["course"].indexOf(":") == -1)
        return d["course"] + ": " + d.instructors[0]["Course Title"];
      else
        return d["course"];
    })

  var g_insts = g_courses;

  var g_inst =
    g_insts.selectAll("s")
    .data(function (d) {
      return d["instructors"];
    })
    .enter()
    .append("div")
    .attr("class", function (d, i) {
      if (d.instructor == "All Sections") { return "row cs205-headerRow"; }
      else        { return "row"; }
    });


  var g_preViz = g_inst.append("div")
    .attr("class", "col-3")
    .append("div")
    .attr("class", "row");

  g_preViz.append("div")
    .attr("class", "col-12 col-md-6")
    .style("overflow", "hidden")
    .style("white-space", "nowrap")
    .style("text-overflow", "ellipsis")
    .style("text-align", "left")
    .style("padding-right", "0px")
    .html(function (d, i) {
      var s = "";
      if (i == 0) {
        s += "<h6>Instructor</h6>";
      }

      if (d.instructor == "All Sections") {
        s += '<b><span class="d-none d-md-block">All Sections</span><span class="d-md-none">Overall</span></b>';
      } else {
        s += d["instructor"];
      }
      return s;
    });

  g_preViz.append("div")
    .attr("class", "col-3 d-none d-md-block")
    .style("margin-left", "-15px")
    .html(function (d, i) {
      var s = "";
      if (i == 0) { s += '<h6>Students</h6>'; }
      s += d["countGPA"];
      return s;
    });

    g_preViz.append("div")
    .attr("class", "col-3 d-none d-md-block")
    .html(function (d, i) {
      var s = "";
      if (i == 0) { s += "<h6>Sections</h6>"; }
      s += d.sections;
      return s;
    });



  var margin = { top: 21, right: 10, bottom: 0, left: 10 };
  var cur_width = $("#sizer").width();
  var width = cur_width - margin.right - margin.left;
  var height = 10;

  var colorScale = d3.scaleLinear()
                     .domain([99999, 0, -0.25, -0.25, -2])
                     .range([241, 241, 290, 350, 360]);

  var gpaScale = d3.scaleLinear()
                   .domain([0, 4])

                   .range([0, width]);

  var gpaAxis = d3.axisTop(gpaScale)
                  .tickValues([0, 1, 2, 3, 4]);


  var inst_svg = g_inst.append("div")
    .attr("class", "col-6")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", function (d, i) {
      if (i == 0) { return height + margin.top + margin.bottom; }
      return height;
    })
    .style("width", width + margin.left + margin.right)
    .style("height", function (d, i) {
      if (i == 0) { return height + margin.top + margin.bottom; }
      return height;
    })
    .append("g")
    .attr("transform", function (d, i) {
      if (i == 0) {
        return "translate(" + margin.left + "," + margin.top + ")";
      } else {
        return "translate(" + margin.left + "," + 0 + ")";
      }
    });

  //gpaAxis(inst_svg.append("g"));
  inst_svg.call(tip);

  inst_svg.filter(function (d, i) { return i == 0; /* return d["instructor"] == "All Sections" */})
          .append("g")
          .attr("transform", "translate(" + 0 + "," + "-4" + ")")
          .attr("class", "axis")
          .call(gpaAxis);

  var gpaColor = "hsla(241, 100%, 76%, 0.2)";

  var drawGPABox = function(low, high, a) {
    inst_svg.append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("x", function (d) {
        return gpaScale(d[low]) - 5;
      })
      .attr("width", function (d) {
        return gpaScale(d[high]) - gpaScale(d[low]) + 10;
      })
      .attr("height", height)
      .attr("fill", function (d) {
        var h = colorScale(d["stddevDiff"]);
        return "hsla(" + h + ", 100%, 76%, " + a + ")";

      })
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)
      ;
  };

  drawGPABox("gpa_bottom", "gpa_top", 0.2);
  drawGPABox("gpa_7_8", "gpa_1_8", 0.2);
  drawGPABox("gpa_5_6", "gpa_1_6", 0.2);
  drawGPABox("bottomQuartGPA", "topQuartGPA", 0.6);




  inst_svg.append("rect")
    .attr("x", function (d) {
      return gpaScale(d["avgGPA"]) - 1;
    })
    .attr("width", function (d) {
      return 3;
    })
    .attr("height", height)
    .attr("fill", "black");


  var g_postViz = g_inst.append("div")
    .attr("class", "col-3")
    .append("div")
    .attr("class", "row");

  g_postViz.append("div")
    .attr("class", "col-6")
    .html(function (d, i) {
      if (i == 0) {
        return "<h6>&Delta;&sigma;</h6>&ndash;"
      }
      var value = d["stddevDiff"].toFixed(2);

      if (value < 0)
        return value;
      else if (value == 0)
        return "+0.00"
      else
        return "+" + value;
    })

    g_postViz.append("div")
      .attr("class", "col-6")
    .html(function (d, i) {
      var s = "";
      if (i == 0) { s += "<h6>GPA</h6>"; }
      s += d["avgGPA"].toFixed(2);
      return s;
    });

};
