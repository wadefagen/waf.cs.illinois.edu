---
layout: tool
title: Canvas External Grade Import Tool

date: 2021-09-20
---
<script src="papaparse-5.3.1.min.js"></script>

<script>
var fr_canvas;
var fr_external;
var csv_canvas = null;
var csv_external = null; 

// https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link/19328891#19328891
var saveData = (function () {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (data, fileName) {
      
    var blob = new Blob([data], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
}());

let dUIN = {};
let dNetID = {};
let dEMail = {};
let column_order = [];

downloadCSV = function() {
  onCSVReadComplete();

  let result = [];
  let result_map = {};

  // Find exported fields:
  for (let i = 0; i < csv_external.meta.fields.length; i++) {
    let header = csv_external.meta.fields[i];

    let el = document.getElementById(`col${i}`);
    if (!el || !el.checked) { continue; }

    // Scaling
    let scale = false;
    let scale_orig = NaN, scale_new = NaN;

    el = document.getElementById(`col${i}-canvas`);
    if (el && el.value.length > 0) {
      scale_new = +el.value;

      let el2 = document.getElementById(`col${i}-max`);
      if (el2 && el2.value.length > 0) {
        scale_orig = +el2.value;
      }
    }

    if (!isNaN(scale_orig) && !isNaN(scale_new)) {
      scale = true;
    }


    // Add `header` to the export:
    id_col = external_id_option.field;
    id_match = external_id_option.data;

    dID = null;
    if (id_match == "UIN") {
      dID = dUIN;
    } else if (id_match == "NetID") {
      dID = dNetID;
    } else if (id_match == "email") {
      dID = dEMail;
    }


    // Auto-fill zeros:
    let autofill_option = document.getElementById('autofill-zero');
    if (autofill_option && autofill_option.checked) {
      for (let id in dID) {
        dID[id][header] = 0;
        if (!result_map[id]) {
          result_map[id] = dID[id];
          result.push(dID[id]);
        }
      }
    }


    for (let row of csv_external.data) {
      let val = row[header];

      // Scaling:
      if (scale) {
        val = +val;
        if (isNaN(val)) {
          val = row[header];
        } else {
          val = val * scale_new / scale_orig;
        }
      }

      // Add Data:
      id = row[id_col];
      if (dID[id]) {
        dID[id][header] = val;

        if (!result_map[id]) {
          result_map[id] = dID[id];
          result.push(dID[id]);
        }
      }
    }

    column_order.push(header);
  }

  let csvForCanvas = Papa.unparse(result, {columns: column_order});

  // Download
  saveData(csvForCanvas, "upload-for-canvas.csv");


};

onCSVReadComplete = function() {
  dUIN = {};
  dNetID = {};
  dEMail = {};
  result = [];
  column_order = [];

  if (csv_canvas == null || csv_external == null) {
    document.getElementById("assessment-area").style.display = "none";
    return;
  }


  // Populate from Canvas:
  for (let header of required_canvas_fields) {
    column_order.push(header);
  }

  let canvas_headers = csv_canvas.meta.fields;
  for (let row of csv_canvas.data) {
    if (row.ID == "") { continue; }
    let d = {};
    for (let i = 0; i < required_canvas_fields.length; i++) {
      d[ canvas_headers[i] ] = row[ canvas_headers[i] ];
    }
    dUIN[ d["Integration ID"] ] = d;
    dNetID[ d["SIS Login ID"] ] = d;
    dEMail[ d["SIS Login ID"] + "@illinois.edu" ] = d;
    d["__matched_canvas_record"] = false;
  }

  // Check external file:
  let dID = null;
  let id_match = external_id_option.data;
  if (id_match == "UIN") {
    dID = dUIN;
  } else if (id_match == "NetID") {
    dID = dNetID;
  } else if (id_match == "email") {
    dID = dEMail;
  }

  let id_col = external_id_option.field;
  let warnings = [];
  for (let row of csv_external.data) {
    let id = row[id_col];
    if (!dID[id]) {
      let extraStudentIDs = [];
      for (let key in external_id_options) {
        if (external_id_options[key] == external_id_option) { continue; }
        extraStudentIDs.push( "<b>" + row[external_id_options[key].field] + "</b>" );
      }

      let extraStudentIDs_str = "";
      if (extraStudentIDs.length > 0) {
        extraStudentIDs_str = ` (${extraStudentIDs.join(", ")})`;
      }

      warnings.push(`Unable to find Canvas data for <b>${id}</b>${extraStudentIDs_str} so their scores will not appear in the output. <i>(Is this person enrolled in Canvas?)</i>`);
    } else {
      dID[id]["__matched_canvas_record"] = true;
    }
  }

  if (warnings.length > 0) {
    warnings.unshift(`<i class="waf-canvas-warning"><b>${warnings.length}</b> unique IDs appeared in the external assessment data but not in Canvas data</i>:`);
    warnings.push("");
  }
  

  // Check canvas:
  let warnings2 = [];
  for (let d of result) {
    if (!d["__matched_canvas_record"]) {
      warnings2.push(`Unable to find external assessment data for <b>${d["Student"]}</b> (<b>${d["SIS Login ID"]}</b>, <b>${d["Integration ID"]}</b>) so their scores will not appear in the output. <i>(Is this person enrolled in the external tool?)</i>`);
    } else {
      delete d["__matched_canvas_record"];
    }
  }

  if (warnings2.length > 0) {
    warnings2.unshift(`<i class="waf-canvas-warning"><b>${warnings2.length}</b> unique IDs appeared in the Canvas data but not in external assessment data</i>:`);
  }

  warnings = warnings.concat(warnings2);


  if (warnings.length > 0) {
    document.getElementById("warnings").innerHTML = warnings.join("<br>");
    document.getElementById("warnings").style.display = "block";
  } else {
    document.getElementById("warnings").style.display = "none";
  }

  document.getElementById("assessment-area").style.display = "block";
}

const required_canvas_fields = ["Student", "ID", "SIS User ID", "SIS Login ID", "Integration ID", "Section"];

onload_canvas = function() {
  csv_canvas = Papa.parse(fr_canvas.result, {header: true});

  // Verify canvas file
  let canvas_headers = csv_canvas.meta.fields;

  if (canvas_headers.length < required_canvas_fields.length) {
    document.getElementById("canvasResult").innerHTML = `❌ Not a canvas gradebook export (detected columns: ${canvas_headers.length}).`;
    csv_canvas = null;
    onCSVReadComplete();
    return;
  }

  for (let i = 0; i < required_canvas_fields.length; i++) {
    if (required_canvas_fields[i] != canvas_headers[i]) {
      document.getElementById("canvasResult").innerHTML = `❌ Not a canvas gradebook export (missing column \`${required_canvas_fields[i]}\`).`;
      csv_canvas = null;
      onCSVReadComplete();
      return;
    }
  }

  document.getElementById("canvasResult").innerHTML = `✔️ Found ${csv_canvas.data.length - 1} students.`;

  onCSVReadComplete();
}

var external_id_options = {};
var external_column_options = {};
var external_id_option = null;

onload_external = function() {
  csv_external = Papa.parse(fr_external.result, {header: true});
  let headers = csv_external.meta.fields;

  // Lon Capa Detection:
  if (csv_external.data.length >= 4 && headers.length > 0 && csv_external.data[3][headers[0]] == "username") {
    // Chop the top three lines off the file:
    let s = fr_external.result;
    for (let i = 0; i < 3; i++) {
      s = s.substring(s.indexOf("\n") + 1);
    }
    s = "username" + s;

    // Re-parse it:
    csv_external = Papa.parse(s, {header: true});
    headers = csv_external.meta.fields;
    csv_external.data.shift();
  }

  external_id_options = {};
  external_grade_columns = {};
  for (let header of headers) {
    if (header == "UIN") {
      if (csv_external.data[0][header].length == 9) {
        external_id_options["UIN"] = { "field": header, "data": "UIN" }
      }
    } else if (header == "UID" || header.toLowerCase() == "username" || header.toLowerCase() == "email" || header.toLowerCase() == "netid" || header.toLowerCase() == "user id") {
      if (csv_external.data[0][header].indexOf("@illinois.edu") != -1) {
        external_id_options["email"] = { "field": header, "data": "email" }
      } else if (csv_external.data[0][header].indexOf("@") == -1) {
        external_id_options["NetID"] = { "field": header, "data": "NetID" }
      }
    } else if (header == "Name") {
      external_id_options["name"] = { "field": header, "data": "name" }
    } else if (header != "") {
      external_grade_columns[header] = { "field": header, "max": 0 }
    }
  }

  if (external_id_options["UIN"]) {
    external_id_option = external_id_options["UIN"];
  } else if (external_id_options["email"]) {
    external_id_option = external_id_options["email"];
  } else if (external_id_options["NetID"]) {
    external_id_option = external_id_options["NetID"];
  } else {

    // Check if canvas file:
    let isCanvasFile = false;
    if (headers.length >= required_canvas_fields.length) {
      for (let i = 0; i < required_canvas_fields.length; i++) {
        if (required_canvas_fields[i] != headers[i]) {
          break;
        }
      }
      isCanvasFile = true;
    }

    if (isCanvasFile) {
      document.getElementById("externalResult").innerHTML = `⚠️ This file is a Canvas gradebook export and not an external tool CSV export.  Use this file in the <b>Export of Canvas Gradebook</b>.`;
    } else if (headers.length < 2) {
      document.getElementById("externalResult").innerHTML = `❌ No identification field found and very few columns found -- is this a CSV file?`;
    } else {
      document.getElementById("externalResult").innerHTML = `❌ No identification field found. See <a href="faq.html#my-external-csv-does-not-work">FAQ: &quot;My external CSV does not work&quot;</a> for information on how get me the format so I can add a new CSV format added to this tool.`;
    }


    csv_external = null;
    onCSVReadComplete();
    return;
  }

  if (external_grade_columns.length == 0) {
    document.getElementById("externalResult").innerHTML = `❌ No assessments fields found.`;
    csv_external = null;
    onCSVReadComplete();
    return;
  }

  let html = `<table class="table table-striped waf-canvas-table"><thead><tr><th>Export?</th><th>Assessment</th><th>Scale Value?</th></tr></thead><tbody>`;

  for (let i = 0; i < headers.length; i++) {
    let header = headers[i];
    if (external_grade_columns[header]) {
      let gc = external_grade_columns[header];

      // Calculate max value
      for (let d of csv_external.data) {
        let val = +d[header];
        if (!isNaN(val) && val > gc.max) { gc.max = val; }
      }

      html += `<tr>`;
      html += `<td><input type="checkbox" data-column-index="${i}" id="col${i}"></td>`;
      html += `<td><label for="col${i}">${gc.field}</label></td>`
      html += `<td>
      Scale from #/<input type="text" style="max-width: 50px;" value="${gc.max}" id="col${i}-max"> to #/<input type="text" style="max-width: 50px;" id="col${i}-canvas" onchange="javascript:ensureCheck(${i})"> for Canvas.
      <div class="small"><i>The maximum value found in the column data was ${gc.max}.</i></div>
      </td>`
      html += `</tr>`;
    }
  }

  html += `</tbody></table>`;


  document.getElementById("assignments").innerHTML = html;

  document.getElementById("externalResult").innerHTML = `✔️ Found ${csv_external.data.length - 1} students and using \`${external_id_option.field}\` column for identification.`;
  onCSVReadComplete();

}

ensureCheck = function(i) {
  document.getElementById(`col${i}`).checked = true;
};

canvas = function() {
};

canvasCSV_change = function() {
  let canvasCSV = document.getElementById("canvasCSV");
  if (!canvasCSV || !canvasCSV.files || !canvasCSV.files[0]) {
    document.getElementById("canvasResult").innerHTML = `❌ No file selected.`;
    csv_canvas = null;
    onCSVReadComplete();
    return;
  }

  fr_canvas = new FileReader();
  fr_canvas.onload = onload_canvas;
  fr_canvas.readAsText(canvasCSV.files[0]);
}

externalCSV_change = function() {
  let externalCSV = document.getElementById("externalCSV");
  if (!externalCSV || !externalCSV.files || !externalCSV.files[0]) {
    document.getElementById("canvasResult").innerHTML = `❌ No file selected.`;
    csv_external = null;
    onCSVReadComplete();
    return;
  }

  fr_external = new FileReader();
  fr_external.onload = onload_external;
  fr_external.readAsText(externalCSV.files[0]);
}


</script>


# Canvas External Grade Import Tool
<div style="font-size: 14px; margin-top: -8px; line-height: 16px;">
  by Wade Fagen-Ulmschneider and Karle Flanagan; Last Updated: {{ page.date | date: '%B %d, %Y'}}
</div>

<hr>

### Overview

The transition to Canvas has made it much harder to import grades from external tools (like PrairieLearn, Lon Capa, etc).  Specifically, to import grades into Canvas, a series of six columns must be present for each row.  This client-side tool creates a CSV file ready to be imported into Canvas by matching a single identifier from an external tool to your Canvas gradebook.

As a client-side tool, no data in this tool is ever sent over the Internet.  [Read the FAQ here.](faq.html)



<hr>

<style>
.waf-csv-select label, .waf-csv-select h3 {
  margin-bottom: 0px;
}

.waf-csv-select .form-control {
  line-height: 120%;
}

.waf-canvas-table {
  background-color: white;
  border: solid 1px black;
}

.waf-canvas-table thead, .waf-canvas-table th {
  border-top: solid 1px black !important;
}

body {
  font-size: 18px;
}

.waf-canvas-warning {
  background-color: lightyellow;
}

</style>

<div class="row waf-csv-select">
  <div class="mb-3 col-6">
    <h3><label for="externalCSV" class="form-label">CSV Export of External Tool</label></h3>
    Export a CSV from your external tool and select it here:
    <input class="form-control" onchange="javascript:externalCSV_change()" type="file" id="externalCSV">
    <div class="small ml-1" id="externalResult">❌ No file selected.</div>
  </div>
  <div class="mb-3 col-6">
    <h3><label for="canvasCSV" class="form-label">Export of Canvas Gradebook</label></h3>
    Export your Canvas Gradebook select it here:
    <input class="form-control" onchange="javascript:canvasCSV_change()" type="file" id="canvasCSV">
    <div class="small ml-1" id="canvasResult">❌ No file selected.</div>
  </div>
</div>


<div id="assessment-area" style="display: none;">
<div id="warnings" class="small mt-1" style="padding: 3px; max-height: 200px; overflow: hidden; overflow: auto; border: dashed 1px black; background-color: white;"></div>

<hr>

<h3>Assessment Selection and Scaling</h3>

<div id="assignments"></div>


<h3 class="mb-3">Download CSV for Canvas</h3>

<div>
  <button type="submit" class="btn btn-primary" onclick="javascript:downloadCSV()">Download Canvas-formatted CSV</button>
</div>


<!--
<h3>Advanced Options</h3>

<div>
  <input type="checkbox" id="autofill-zero"> <label for="autofill-zero">Auto-fill zeros for all students in the Canvas gradebook who are missing or have no grade on the assessment.</label>
</div>
-->

<div class="margin-bottom: 30px">&nbsp;</div>


</div>
