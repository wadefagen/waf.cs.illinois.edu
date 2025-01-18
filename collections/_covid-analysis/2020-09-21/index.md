---
layout: covid-analysis
author:
- Wade Fagen-Ulmschneider

date: 2020-09-21
render: False

title: Mid-September Big Ten Update

description: This page presents data-forward collegiate analysis of Big-10 data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.

social-img: https://waf.cs.illinois.edu/covid-analysis/social.png

# Legacy
templateEngineOverride: liquid, md
---

<link rel="stylesheet" href="../css.css">

## {{page.title}}

<p style="margin-top: -5px; font-size: 12px;">
  <i>
    {{page.date | date: "%A %B %-d, %Y" }} |
    <a href="https://waf.cs.illinois.edu/">Wade Fagen-Ulmschenider</a>
  </i>
</p>







<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<section id="cases-daily7-Indiana">
  <div class="chart-header" style="margin-top: 20px;" id="countries">
    <h3>New Cases /Day (7-Day Avg.) of COVID-19 at Indiana University</h3>
  </div>
  <div id="chart-cases-daily7-Indiana" class="chart-viz">
    <div class="text-center divoc-graph-loading">
      <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span> </div>
      <div>Loading Visualization...</div>
    </div>
  </div>
</section>
</div>


<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<section id="cases-daily7-Madison">
  <div class="chart-header" style="margin-top: 20px;" id="countries">
    <h3>New Cases /Day (7-Day Avg.) of COVID-19 at Univ. of Wisconsin-Madison</h3>
  </div>
  <div id="chart-cases-daily7-Madison" class="chart-viz">
    <div class="text-center divoc-graph-loading">
      <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span> </div>
      <div>Loading Visualization...</div>
    </div>
  </div>
</section>
</div>

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<section id="cases-daily7-OhioState">
  <div class="chart-header" style="margin-top: 20px;" id="countries">
    <h3>New Cases /Day (7-Day Avg.) of COVID-19 at The Ohio State University</h3>
  </div>
  <div id="chart-cases-daily7-OhioState" class="chart-viz">
    <div class="text-center divoc-graph-loading">
      <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span> </div>
      <div>Loading Visualization...</div>
    </div>
  </div>
</section>
</div>

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<section id="cases-daily7-PennState">
  <div class="chart-header" style="margin-top: 20px;" id="countries">
    <h3>New Cases /Day (7-Day Avg.) of COVID-19 at The Penn State University</h3>
  </div>
  <div id="chart-cases-daily7-PennState" class="chart-viz">
    <div class="text-center divoc-graph-loading">
      <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span> </div>
      <div>Loading Visualization...</div>
    </div>
  </div>
</section>
</div>

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<div id="sizer"></div>
{% include "./_charts/cases-daily7-UIUC.html" %}
</div>



<script defer src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js" integrity="sha256-Jvh9+A4HNbbWsWl1Dw7kAzNsU3y8elGIjLnUSUNMtLg=" crossorigin="anonymous"></script>
<script defer src="https://d3js.org/d3.v5.min.js" crossorigin="anonymous"></script>

{% assign path = page.path | split: "/" %}
{% assign path_len = path | size | minus: 1 %}
{% assign path = path | slice: 0, path_len | join: "/" | slice: 1, 10000 | prepend: "/" %}

<script defer src="/static/js/d3-tip.js"></script>
<script defer src="{{path}}/src/updated.js"></script>
<script defer src="{{path}}/src/vis.js"></script>
