---
layout: covid-analysis
author:
- Wade Fagen-Ulmschneider

render: False

title: Data-Forward Visualizations of COVID-19 Data at The University of Illinois

description: This page presents an annotated view COVID-19 data at The University of Illinois. This data is sourced from “COVID-19 Among Big Ten Conference Schools” visualization and is updated daily from the official university COVID-19 dashboard.

social-img: https://waf.cs.illinois.edu/covid-analysis/social.png

# Legacy
templateEngineOverride: liquid, md
---

<link rel="stylesheet" href="../css.css">

# {{page.title}}

<p style="margin-top: -20px; font-size: 12px;">
  <i>
    Updated Daily <span id="jhu-updated"></span> |
    <a href="https://waf.cs.illinois.edu/">Wade Fagen-Ulmschenider</a>
  </i>
</p>


This page presents an annotated view COVID-19 data at The University of Illinois.  This data is sourced from ["COVID-19 Among Big Ten Conference Schools"](https://waf.cs.illinois.edu/covid-19/) visualization and is updated daily from the official university COVID-19 dashboard.


<div id="sizer"></div>
{% include "./_charts/cases-UIUC.html" %}

{% include "./_charts/testPositivity-UIUC.html" %}



## More COVID-19 Data Visualizations

- [COVID-19 Among Big Ten Conference Schools](https://waf.cs.illinois.edu/covid-19/)
- [Data-Forward Collegiate COVID-19 Analysis](https://waf.cs.illinois.edu/covid-analysis/)
- [91-DIVOC: An interactive visualization of the exponential spread of COVID-19](https://91-divoc.com/pages/covid-visualization/)
- [UIUC COVID-19 Dashboard](https://go.illinois.edu/COVIDTestingData)


<script defer src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js" integrity="sha256-Jvh9+A4HNbbWsWl1Dw7kAzNsU3y8elGIjLnUSUNMtLg=" crossorigin="anonymous"></script>
<script defer src="https://d3js.org/d3.v5.min.js" crossorigin="anonymous"></script>

{% assign path = page.path | split: "/" %}
{% assign path_len = path | size | minus: 1 %}
{% assign path = path | slice: 0, path_len | join: "/" | slice: 1, 10000 | prepend: "/" %}

<script defer src="/static/js/d3-tip.js"></script>
<script defer src="/covid-19/src/updated.js"></script>
<script defer src="{{path}}/src/vv.js"></script>
