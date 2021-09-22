---
title: Capturing Audiences with Data Visualization Systems and Pre-attentive Features
venue: September 2021 Workshop
org: Illinois Webmasters


shortTitle: Perception of Party Words

layout: slides2

parentURL: /slides/web21/
parentName:  Capturing Audiences with Data Visualization (Illinois WebMasters)

date: 2021-09-22
---

# Perception of Party Words

<style>
/* == https://rawgit.com/Caged/d3-tip/master/examples/example-styles.css ==  */
.d3-tip {
  line-height: 1;
  padding: 4px;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  border-radius: 2px;
  pointer-events: none;
  border: solid 1px black;
}

/* Creates a small triangle extender for the tooltip */
.d3-tip:after {
  box-sizing: border-box;
  display: inline;
  font-size: 10px;
  width: 100%;
  line-height: 1;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  pointer-events: none;
}

blockquote {
  margin-left: 15px;
  border-left: solid 2px #ccc;
  padding-left: 10px;
  font-style: italic;
}

.axis {
  font-size: 16px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
}

.axis-small {
  font-size: 10px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
}

.axis-gridline line {
  stroke: hsl(173, 30%, 90%);
}
</style>

<div class="authors mb-1">
  Part of "Capturing Audiences with Data Visualization Systems and Pre-attentive Features" Illinois Webmasters Workshop
</div>

<hr />

<h2>Overview</h2>

<div style="font-style: italic; text-align: center; background-color: hsl(274, 30%, 90%);">
  <b>Interact</b>: Tap/hover over any circle to view a single person's response to every phrase.
</div>

<div id="chart"></div>


<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.9.7/d3.min.js"></script>
<script src="d3-tip.js"></script>
<script src="v.js">