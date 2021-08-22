const fs = require("fs");
const parse = require('csv-parse/lib/sync')
const _ = require("lodash");

var processData = function(data) {
  var cleanData = [];

  data.forEach(function (d) {
    if (d["YearTerm"] < "2017-fa") { return; }
    cleanData.push(d);
  });
  data = cleanData; 

  data.forEach(function (d) {
    d["Course"] = d["Subject"] + " " + d["Number"];
    d["CourseFull"] = d["Subject"] + " " + d["Number"] + " - " + d["Course Title"];
    var namePieces = d["Primary Instructor"].split(",");
    if (namePieces.length < 2) {
      d["Name"] = d["Primary Instructor"];
    } else {
      d["Name"] = namePieces[0].trim() + ", " + namePieces[1].trim()[0] + ".";
    }
  });

  var groupByObj = _.groupBy(data, "CourseFull");

  var courses = [];
  _.each(groupByObj, function (v, k) {
    /*
    if (v[0]["Course"] == "INFO 490") {
      console.log(v);
    }
    */
    courses.push({
      course: v[0]["Course"],
      data: v
    });
  });

  courses.forEach(function (d) {
    //console.log(d);
    var instGroup = _.groupBy(d["data"], "Name");

    d["instructors"] = [];
    _.each(instGroup, function(data, instructor) {
      d["instructors"].push({
        instructor: data[0]["Name"],
        data: data
      })
    });
  });

  var coursesWithMultipleSections = [];
  courses.forEach(function (course) {
    if (course.instructors.length > 1) {
      coursesWithMultipleSections.push(course);

      course["instructors"].unshift({
        instructor: "All Sections",
        data: course.data,
        top: true
      })
    }
  });


  var gradeLetterGPAs = {
    "A+": 4.00, "A": 4.00, "A-": 3.67,
    "B+": 3.33, "B": 3.00, "B-": 2.67,
    "C+": 2.33, "C": 2.00, "C-": 1.67,
    "D+": 1.33, "D": 1.00, "D-": 0.67,
    "F": 0
  };
  var gradeLetters = _.keys(gradeLetterGPAs);

  courses.forEach(function (course) {
    course["instructors"].forEach(function (instructor) {
      gradeLetters.forEach(function (gradeLetter) {
        instructor[gradeLetter] = 0;
      });

      // Sum each grade letter
      instructor.data.forEach(function (sectionData) {
        gradeLetters.forEach(function (gradeLetter) {
          instructor[gradeLetter] += parseInt(sectionData[gradeLetter]);
        })
      });

      // Compute the GPA
      instructor["sumGPA"] = 0;
      instructor["countGPA"] = 0;
      gradeLetters.forEach(function (gradeLetter) {
        instructor["sumGPA"] += instructor[gradeLetter] * gradeLetterGPAs[gradeLetter];
        instructor["countGPA"] += instructor[gradeLetter];
      });
      instructor["avgGPA"] = instructor["sumGPA"] / instructor["countGPA"];

      // Compute the stddev
      instructor["sumSqDev"] = 0;
      gradeLetters.forEach(function (gradeLetter) {
        var diff = Math.pow(gradeLetterGPAs[gradeLetter] - instructor["avgGPA"], 2);
        instructor["sumSqDev"] += diff * instructor[gradeLetter];
      });

      instructor["varGPA"] = instructor["sumSqDev"] / instructor["countGPA"];
      instructor["stddevGPA"] = Math.pow(instructor["varGPA"], 0.5);

      // Compute quartiles
      var grades = [];
      gradeLetters.forEach(function (gradeLetter) {
        for (var i = 0; i < instructor[gradeLetter]; i++) { grades.push(gradeLetter); }
      });

      //console.log(grades[ Math.floor(grades.length * 3 / 4) ]);


      instructor["gpa_1_8"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 1 / 8) ] ];
      instructor["gpa_1_6"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 1 / 6) ] ];

      instructor["topQuartGPA"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 1 / 4) ] ];
      instructor["medianGPA"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 2 / 4) ] ];
      instructor["bottomQuartGPA"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 3 / 4) ] ];

      instructor["gpa_5_6"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 5 / 6) ] ];
      instructor["gpa_7_8"] = gradeLetterGPAs[ grades[ Math.floor(grades.length * 7 / 8) ] ];

      instructor["gpa_top"] = gradeLetterGPAs[ grades[ 0 ] ];
      instructor["gpa_bottom"] = gradeLetterGPAs[ grades[ grades.length - 1 ] ];

    });

    // Compute diff in stddev
    course["instructors"].forEach(function (instructor) {
      if (instructor.instructor == "All Sections") {
        instructor["stddevDiff"] = 99999; // always be first
      } else {
        instructor["gpaAvgDiff"] = instructor["avgGPA"] - course["instructors"][0]["avgGPA"];
        instructor["stddevDiff"] = instructor["gpaAvgDiff"] / course["instructors"][0]["stddevGPA"];
      }
    });

    course["instructors"] = _.reverse(_.sortBy(course["instructors"], "stddevDiff"));



  });

  coursesWithMultipleSections.forEach(function (course) {
    var easiestProf = course["instructors"][1]["stddevDiff"];
    var hardestProf = course["instructors"][course["instructors"].length - 1]["stddevDiff"];
    course["stdDevSpread"] = hardestProf - easiestProf;

    var weightedVar = 0;
    course["instructors"].forEach(function (instructor) {
      if (instructor.instructor == "All Sections") { return; }
      weightedVar += Math.abs(instructor["stddevDiff"] * instructor["countGPA"]);
    });
    weightedVar /= course["instructors"][0]["countGPA"];
    course["averageVar"] = weightedVar;
    //console.log(weightedVar);

  });



  //coursesWithMultipleSections = _.reverse(_.sortBy(coursesWithMultipleSections, "averageVar"));
  courses = _.sortBy(courses, (d) => {
    return d["course"] + " - " + d.instructors[0].data[0]["Course Title"];
  });
  //console.log(coursesWithMultipleSections);

  //console.log(coursesWithMultipleSections);
  return courses;
};




var rows = parse( fs.readFileSync("../../../datasets/gpa/uiuc-gpa-dataset.csv"), {columns: true} );
var result = processData(rows);

result.forEach(function (d) {
  d["Course Subject"] = d["Subject"];
  delete d["data"];

  d.instructors.forEach(function (inst) {
    inst["sections"] = inst["data"].length;
    inst["course"] = inst.data[0]["Subject"] + " " + inst.data[0]["Number"];
    inst["Course Title"] = inst.data[0]["Course Title"];
    inst["Course Subject"] = inst.data[0]["Subject"];
    inst["gpaDist"] = [
      inst["A+"] + inst["A"] + inst["A-"],
      inst["B+"] + inst["B"] + inst["B-"],
      inst["C+"] + inst["C"] + inst["C-"],
      inst["D+"] + inst["D"] + inst["D-"],
      inst["F"]
    ];
  
    delete inst["data"];
    delete inst["A+"];
    delete inst["A"];
    delete inst["A-"];
    delete inst["B+"];
    delete inst["B"];
    delete inst["B-"];
    delete inst["C+"];
    delete inst["C"];
    delete inst["C-"];
    delete inst["D+"];
    delete inst["D"];
    delete inst["D-"];
    delete inst["F"];
    delete inst["sumSqDev"];
    delete inst["sumGPA"];
    delete inst["varGPA"];
    delete inst["stddevGPA"];
    delete inst["gpaAvgDiff"];
    delete inst["top"];
    delete inst["CourseFull"];
  });
});

var x = _.map(result, (d) => { return d.instructors[0]["Course Subject"]; });
x = _.uniqBy(x);


console.log(JSON.stringify(x));

fs.writeFileSync("out_full.json",  JSON.stringify(result));
