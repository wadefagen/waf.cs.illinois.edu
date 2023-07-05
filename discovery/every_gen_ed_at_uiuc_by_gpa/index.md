---
title: Every Gen Ed at UIUC, by GPA
slug: gpa1
layout: viz

description: A visualization of every general education course at The University of Illinois, organized by category and GPA
date: 2023-07-05

social-img: img.png
author:
- Kexin (Fiona) Fei
- Caroline Breckenfelder
- Wade Fagen-Ulmschneider
---

<link href="css.css" rel="stylesheet">

<h1>{{page.title}}</h1>
<div style="font-size: 14px; margin-top: -8px; line-height: 16px;">
  Originally published by Kexin (Fiona) Fei, Caroline Breckenfelder, and Wade Fagen-Ulmschneider<br>
  <b style="background-color: hsla(63, 100%, 90%, 1);">Updated for Fall 2023 Registration on {{ page.date | date: '%B %d, %Y'}}</b> by Wade Fagen-Ulmschneider
</div>



<hr>

<p>
  This visualization is the second in a series of <a href="https://waf.cs.illinois.edu/discovery/gpa/">GPA visualizations</a>
  created to explore the grades given by courses at The University of Illinois.  This visualization aims to allow for
  an exploration of courses for general education credit, using data from Fall 2018 through Spring 2022.
</p>

<div class="row" style="text-align: center;">
  <div class="col-md-6" style="margin-bottom: 15px;">
    <div id="legend1"></div>
    The larger the course, the larger the radius of the circle.
  </div>

  <div class="col-md-6" style="margin-bottom: 15px;">
    <div id="legend2" style="margin-top: 7px; margin-bottom: 3px;"></div>
    The lower the average GPA or the percentage of As, the more red
    hue is added to the color.
  </div>
</div>


<h2>General Education Categories</h2>
<p>
  Choose a gen ed category to narrow the visualization below to only courses matching <b>all</b> gen eds selected.
  Multiple gen eds may be selected to view courses that meet multiple gen ed categories.
</p>

<div class="gened_selection">
  <span class="form-group">
    <label for="adv_comp"><input data-filter="Advanced Composition" type="checkbox" id="adv_comp"> Advanced Composition</label>
  </span>

  <span class="form-group">
    <label for="western"><input data-filter="Western/Comparative Culture" type="checkbox" id="western"> Western/Comparative Culture</label>
  </span>

  <span class="form-group">
    <label for="nonwestern"><input data-filter="Non-Western Culture" type="checkbox" id="nonwestern"> Non-Western Culture</label>
  </span>

  <span class="form-group">
    <label for="usminority"><input data-filter="US Minority Culture" type="checkbox" id="usminority"> US Minority Culture</label>
  </span>
    
  <span class="form-group">
    <label for="humanities"><input data-filter="Humanities & the Arts" type="checkbox" id="humanities"> Humanities &amp; the Arts</label>
  </span>

  <!--
  <span class="form-group">
    <label for="comp"><input data-filter="Composition 1" type="checkbox" id="comp"> Composition 1</label>
  </span>
  -->

  <span class="form-group">
    <label for="natsci"><input data-filter="Natural Science & Technology" type="checkbox" id="natsci"> Natural Science &amp; Technology</label>
  </span>

  <span class="form-group">
    <label for="qr"><input data-filter="Quantitative Reasoning" type="checkbox" id="qr"> Quantitative Reasoning</label>
  </span>

  <span class="form-group">
    <label for="socbehav"><input data-filter="Social & Behavioral Sciences" type="checkbox" id="socbehav"> Social &amp; Behavioral Sciences</label>
  </span>
</div>

<!--
<a href="https://courses.illinois.edu/schedule/2019/fall/STAT/107">
  <div style="color: black; background-color: hsla(204, 100%, 90%, 1); margin-bottom: 15px; display: block; text-align: center; border: solid 1px black; margin-left: 40px; margin-right: 40px; padding: 2px;">
    Interested in Data Science? Try the new QR1 gened: <b>Data Science Discovery</b> (STAT 107)
    <div style="margin-top: 0px; font-size: 12px;">
      Co-taught and created by the professor of this visualization -- no prereqs!
    </div>
  </div>
</a>
-->


<div id="noresult" style="text-align: center; display: none;">
  No courses fulfill selected categories. :(
</div>
<div id="chart" style="text-align: center;">
</div>

<script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
<script src="https://d3js.org/d3.v4.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js" crossorigin="anonymous"></script>
<script src="src/d3-tip-iphone.js"></script>
<script src="src/legend.js"></script>
<script src="src/vis.js"></script>
<style>.social-hide { display: none; }</style>
<img class="social-hide" itemprop="image" src="http://waf.cs.illinois.edu/discovery/every_gen_ed_at_uiuc_by_gpa/web/gened.png">