---
title: Grade disparity between sections at UIUC
slug: gpa2
layout: viz

description: A visualization of grade disparity between sections and instructors at UIUC
date: 2023-01-03

social-img: img.png
author:
- Devin Oliver
- Johnny Guo
- Joe Tan
- Jerry Li
- Tina Abraham
- Andy (Tianyue) Mao
- Kara Landolt
- Nathan Cho
- Wade Fagen-Ulmschneider
---

<link href="css.css" rel="stylesheet">

<h1>{{page.title}}</h1>
<div style="font-size: 14px; margin-top: -8px; line-height: 16px;">
  Originally published by Devin Oliver, Johnny Guo, Joe Tan, Jerry Li, Tina Abraham, Andy (Tianyue) Mao, Kara Landolt, Nathan Cho, and Wade Fagen-Ulmschneider<br>
  <b style="background-color: hsla(63, 100%, 90%, 1);">Updated for Fall 2022 Registration on {{ page.date | date: '%B %d, %Y'}}</b> by Wade Fagen-Ulmschneider
</div>


<hr>


### Introduction

One of the most frustrating situations to find yourself in is a coursewhere all of your friends are in the &quot;easier section&quot;.  For most of us, it feels like this happens <i>all of the time</i>.   This visualization is the second in a series of <a href="https://waf.cs.illinois.edu/discovery/gpa/">GPA visualizations</a> created to explore the grades given by courses at The University of Illinois.

Using GPA data from the most recent eight full semesters (Fall 2018 through Spring 2022,
including summers/winters when available), we found the distribution of every section/instructor group
within every course.  For example, Calculus I (MATH 221) has been taught by
seven different primary instructors recently.  We found the following distributions:

<div id="chart_math221"></div>

<div class="row">
  <div class="col-md-6 col-12 text-center" style="line-height: 140%; margin-bottom: 20px;">
    <div>
      <span class="cs205_legend b1"></span> &rarr;
      <span class="cs205_legend p1"></span> &rarr;
      <span class="cs205_legend pr1"></span> &rarr;
      <span class="cs205_legend rp1"></span> &rarr;
      <span class="cs205_legend r1"></span>
    </div>
    <div>
      <span style="font-size: 12px;">(Highest Avg. Grades)</span>
      &rarr;
      <span style="font-size: 12px;">(Lowest Avg. Grades)</span>
    </div>
    <div style="margin-top: 7px; line-height: 110%; font-size: 16px;">
      Instructors with average <b>grades significantly lower</b> than the
      average grade for a course have <b>increasing red hues</b>.
    </div>
  </div>
  <div class="col-md-6 col-12 text-center" style="margin-bottom: 20px;">
    <div class="row">
      <div class="col-2"><span class="cs205_legend b1"></span></div>
      <div class="col-1">&rarr;</div>
      <div class="col-2"><span class="cs205_legend b2"></span></div>
      <div class="col-1">&rarr;</div>
      <div class="col-2"><span class="cs205_legend b3"></span></div>
      <div class="col-1">&rarr;</div>
      <div class="col-2"><span class="cs205_legend b4"></span></div>
    </div>
    <div class="row" style="font-size: 12px; line-height: 100%;">
      <div class="col-2">Middle<br>50%-tile</div>
      <div class="col-1"></div>
      <div class="col-2">Next<br>12.5%-tile</div>
      <div class="col-1"></div>
      <div class="col-2">Next<br>7.5%-tile</div>
      <div class="col-1"></div>
      <div class="col-2">Final 5%<br>(95%/5%)</div>
    </div>
    <div class="row">
      <div class="col-2"><span class="cs205_legend r1"></span></div>
      <div class="col-1">&rarr;</div>
      <div class="col-2"><span class="cs205_legend r2"></span></div>
      <div class="col-1">&rarr;</div>
      <div class="col-2"><span class="cs205_legend r3"></span></div>
      <div class="col-1">&rarr;</div>
      <div class="col-2"><span class="cs205_legend r4"></span></div>
    </div>
    <div style="line-height: 110%; margin-top: 5px; font-size: 16px;">
      The darkest <b>shading</b> shows the median grades in a course, with each
      lighter showing grades further from the median.
    </div>
  </div>
</div>


<h3>External Impact</h3>
<p>
  In the preparation of this work, we found other factors &mdash; including the time of day of the lecture and
  if the course was in-person or online &mdash; also have a major contribution to the final grades in a
  course.  We hope others will dive deeper into these factors in the future.
</p>

<hr>

<h2 id="findCourse">Find Your Course</h2>
<p>
  Type the subject for any course at UIUC (eg: CS for Computer Science) to
  find the disparity of grades between different sections of a course:
</p>
<div id="checkboxes" class="cs205checkbox">
  <label for="tags">Course Subject: </label>
  <input id="tags">
</div>

<!--
<a href="https://courses.illinois.edu/schedule/2019/fall/STAT/107">
  <div style="color: black; background-color: hsla(204, 100%, 90%, 1); margin-bottom: 15px; display: block; text-align: center; border: solid 1px black; margin-left: 40px; margin-right: 40px; padding: 2px;">
    Interested in Data Science? Try the new math gened: <b>Data Science Discovery</b> (STAT 107)
    <div style="margin-top: 0px; font-size: 12px;">
      Co-taught and created by the professor of this visualization -- no prereqs!
    </div>
  </div>
</a>
-->

<div id="chart"></div>

<div style="text-align: center; display: none;" id="findCourseButton">
  <a href="#findCourse" style="padding: 5px 30px; border: solid 1px #666; border-radius: 10px; color: #222;">Find Another Course</a>
</div>

<div class="row"><div class="col-6" id="sizer"></div></div>

<style>.social-hide { display: none; }</style>
<img class="social-hide" itemprop="image" src="http://waf.cs.illinois.edu/discovery/grade_disparity_between_sections_at_uiuc/web/ss_social.png">



<script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
<script src="https://d3js.org/d3.v4.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js" crossorigin="anonymous"></script>
<script src="src/d3-tip-iphone.js"></script>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<script src="src/vis.js?v=4"></script>
