---
title: GPAs of Every Course at The University of Illinois
slug: gpa3
layout: viz

description: A visualization of GPAs for every course at The University of Illinois!
date: 2022-04-13

social-img: img.png
author:
- Justin Lee
- Nate Claussen
- Wade Fagen-Ulmschneider
- Cinda Heeren

---

<link href="css.css" rel="stylesheet">

<h1>{{page.title}}</h1>
<div style="font-size: 14px; margin-top: -8px; line-height: 16px;">
  Originally published on May 13, 2017 by Justin Lee, Nate Claussen, Wade Fagen-Ulmschneider, and Cinda Heeren<br>
  <b style="background-color: hsla(63, 100%, 90%, 1);">Updated for Fall 2022 Registration on {{ page.date | date: '%B %d, %Y'}}</b> by Wade Fagen-Ulmschneider
</div>


<hr>

This visualization is the second in a series of <a href="https://waf.cs.illinois.edu/discovery/gpa/">GPA visualizations</a> created to explore the grades given by courses at The University of Illinois.  This visualization was the very first one that began the ongoing exploration.


<h3>GPA Visualization</h3>
<div class="row" style="margin-top: 30px; text-align: center;">
  <div class="col-sm-6" style="margin-bottom: 20px;">
    <div>
      <svg id="legend_gpa" style="width: 200px; height: 35px;"></svg>
    </div>
    <i>The worse the GPA, the more purple hue we add to the color.</i>
  </div>
  <div class="col-sm-6" style="margin-bottom: 20px;">
    <div>
      <svg id="legend_size" style="width: 300px; height: 40px;"></svg>
    </div>
    <i style="line-height: 100%;">
      <div>The larger the course, the larger the radius of the circle.</div>
      <div style="font-size: 11px;">(Circle sizes are relative to each college's largest course, not between colleges.)</div>
    </i>
  </div>
</div>


<div id="charts"></div>


<script src="src/jquery-2.2.0.js"></script>
<script src="src/d3.min.js"></script>
<script src="src/d3-legend.min.js"></script>
<script src="src/d3.tip.min.js"></script>
<script src="src/viz.js"></script>

<style>.social-hide { display: none; }</style>
<img class="social-hide" itemprop="image" src="http://waf.cs.illinois.edu/discovery/gpa_of_every_course_at_illinois/img_21.png">
