---
layout: default
title: Canvas Grade Merge
permalink: /canvas-merge/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.1/papaparse.min.js" integrity="sha512-EbdJQSugx0nVWrtyK3JdQQ/03mS3Q1UiAhRtErbwl1YL/+e2hZdlIcSURxxh7WXHTzn83sjlh2rysACoJGfb6g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
var fr_canvas;
var fr_external;
var csv_canvas;
var csv_external; 

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


onCSVReadComplete = function() {
    if (csv_canvas == null || csv_external == null) { return; }

    // Verify canvas file
    let canvas_headers = csv_canvas.meta.fields;


    let result = [];
    let dUIN = {};
    let dNetID = {};
    for (let row of csv_canvas.data) {
        if (row.ID == "") { continue; }
        let d = {};
        for (let i = 0; i < 6; i++) {
            d[ canvas_headers[i] ] = row[ canvas_headers[i] ];
        }
        result.push(d);
        dUIN[ d["Integration ID"] ] = d;
        dNetID[ d["SIS Login ID"] ] = d;
    }



    // Add extra file:
    targetField = "m1-02";
    let external_headers = csv_external.meta.fields;
    for (let header of external_headers) {
        if (header == "UIN") {
            for (let row of csv_external.data) {
                console.log(row);
                if (dUIN[ row["UIN"] ]) {
                    dUIN[ row["UIN"] ][targetField] = row[targetField];
                }
            }            
        }
    }


    let csvForCanvas = Papa.unparse(result);
    console.log(csvForCanvas);

    // Download
    saveData(csvForCanvas, "upload-for-canvas.csv");
}

onload_canvas = function() {
    csv_canvas = Papa.parse(fr_canvas.result, {header: true});
    onCSVReadComplete();
}

onload_external = function() {
    csv_external = Papa.parse(fr_external.result, {header: true});
    onCSVReadComplete();
}

canvas = function() {
    csv_canvas = null;
    csv_external = null;

    let canvasCSV = document.getElementById("canvasCSV");
    if (!canvasCSV || !canvasCSV.files || !canvasCSV.files[0]) {
        alert("You must provide a Canvas file");
        return;
    }

    let externalCSV = document.getElementById("externalCSV");
    if (!externalCSV || !externalCSV.files || !externalCSV.files[0]) {
        alert("You must provide a Canvas file");
        return;
    }

    fr_canvas = new FileReader();
    fr_canvas.onload = onload_canvas;
    fr_canvas.readAsText(canvasCSV.files[0]);

    fr_external = new FileReader();
    fr_external.onload = onload_external;
    fr_external.readAsText(externalCSV.files[0]);


};
</script>

# Overview




<div class="mb-3">
  <label for="formFile" class="form-label">Canvas Gradebook Export</label>
  <input class="form-control" type="file" id="canvasCSV">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">External Assessment</label>
  <input class="form-control" type="file" id="externalCSV">
</div>
<button type="submit" class="btn btn-primary" onclick="javascript:canvas()">Submit</button>

