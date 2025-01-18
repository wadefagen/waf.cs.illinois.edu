---
layout: covid-analysis
author:
- Caitlin Clarke
- Wade Fagen-Ulmschneider

social-img: https://waf.cs.illinois.edu/covid-analysis/social.png

title: Data-Forward Collegiate COVID-19 Analysis
render: False

description: This page presents data-forward collegiate analysis of Big-10 data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.


# Legacy
templateEngineOverride: liquid, md
---

<link rel="stylesheet" href="css.css">

<h1 style="margin-bottom: 0px">Data-Forward Collegiate COVID-19 Analysis</h1>
<p>
  <i>
    <a href="https://waf.cs.illinois.edu/">Wade Fagen-Ulmschenider</a>, with contributions from <a href="https://sociology.illinois.edu/directory/profile/vitosky">Caitlin Clarke</a>
  </i>
</p>

## Individual Campus Visualizations (Updated Daily)

<a href="uiuc/" class="card">
  University of Illinois Visualizations &gt;&gt;
</a>

<!--
For several weeks, we have been tracking the COVID-19 data from every Big Ten Conference University and, for weeks, the story was the same: The University of Illinois’ saliva-based population testing resulted in impressively large number of tests -- including running **2.5% of all tests** in the United States on the first day of classes at Illinois (Monday. August 24):

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<div id="sizer"></div>
{% include "./_charts/tests-UIUC-pctUS.html" %}
</div>

This page presents data-forward collegiate analysis of Big Ten data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.
-->

{% assign sorted = site.covid-analysis | where: "render", "true" | sort: 'date' | reverse | slice: 0, 5 %}
{% for analysis in sorted %}
<br>
{{ analysis.content }}
{% endfor %}


<br>

## Explore More COVID-19 Data

- [Interactive Visualization - COVID-19 Among Big Ten Conference Schools](https://waf.cs.illinois.edu/covid-19/)
- [Interactive Visualization - 91-DIVOC: An interactive visualization of the exponential spread of COVID-19](https://91-divoc.com/pages/covid-visualization/)
- [University of Illinois' COVID-19 Resource Page](https://covid19.illinois.edu/)


<script defer src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js" integrity="sha256-Jvh9+A4HNbbWsWl1Dw7kAzNsU3y8elGIjLnUSUNMtLg=" crossorigin="anonymous"></script>
<script defer src="https://d3js.org/d3.v5.min.js" crossorigin="anonymous"></script>

<script defer src="/static/js/d3-tip.js"></script>
<script defer src="src/updated.js"></script>
<script defer src="src/vis2.js"></script>
