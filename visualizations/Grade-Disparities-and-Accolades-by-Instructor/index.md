---
title: Grade Disparities and Accolades by Instructor at UIUC
slug: Grade Disparities and Accolades

description: A visualization of grade disparity and accolades of instructors at UIUC
date: 2025-10-08

social-img: 1200-630.png
author:
- Lauren Hyde
- Rittika Adhikari
- Michael Kokkines
- Ophir Sneh
- Caren Zeng
- Wade Fagen-Ulmschneider

layout: viz
tags:
- visualization
- visualization_gpa
---

<link rel="stylesheet" href="css.css" type="text/css" />


<h1>Grade Disparities and Accolades by Instructor at UIUC</h1>
<div style="font-size: 16px; margin-top: -4px; line-height: 16px;">
  <b>By</b>: Lauren Hyde, Rittika Adhikari, Michael Kokkines, Ophir Sneh, Caren Zeng, and Wade Fagen-Ulmschneider<br>
  <b style="background-color: hsla(63, 100%, 90%, 1);">Updated for Spring 2026 Registration on October 8, 2025</b> by Lauren Hyde and Wade Fagen-Ulmschneider
</div>

<hr>


## Introduction

[Past GPA visualizations](/discovery/gpa/) have explored grade disparities.  However, an instructor's grade distribution is not the only factor that students consider when selecting sections.  Instructor quality is an important consideration; many UIUC professors are <b><span style="text-shadow: 0px 0px 5px #ffa">luminaries</span> in their fields</b>, and many are <b>renowned as teachers</b>.

This work attempts to celebrate high-caliber professors while still providing important GPA distribution information.  As shown below, the visualization consists of two major components: the first is a breakdown of an instructor's grades, and the second is a listing of accolades the professor has received.

<ul style="margin-top: -14px;">
  <li><a href="./data-collection/">More information about the awards selected and data collection.</a></li>
</ul>


### Overview of Highlighted Accolades


As an example, IB 435: Critical Evaluation of Herbal Remedies has been taught by several faculty in recent years who have a collection of prestigious awards.  Specifically, [Prof. Berenbaum](https://sib.illinois.edu/directory/profile/maybe) has been honored with:

- <span class="awards awards-td ml-1"><img src="badges/academy.jpg" class="award" /></span> <b>Membership in the National Academies</b>, which is among the most prestigious honor any professor can receive, 
- <span class="awards awards-td awards-span ml-1"><img src="badges/illini.png" class="award" /></span> <b>LAS' Dean's Award for Excellence in Undergraduate Education</b>, a top teaching award at The University of Illinois
- <span class="awards awards-td awards-stars" style="line-height: 15px"><span class="gold">★</span><span class="silver">★</span><span class="silver">★</span></span> <b>Ranked as Outstanding/Excellent by his students</b> at the end-of-semester evaluations,

Other instructors, like [Dr. Daniel Bush](https://sib.illinois.edu/directory/profile/dsbush2), who has started teaching IB 435 only recently we indicate that there's minimal accolades we would be expect to collect:

<!--
- <span class="awards awards-td awards-stars" style="line-height: 15px"><span class="silver">★</span></span> <b>Ranked as Excellent by her students</b> at the end-of-semester evaluations,
-->
- <span class="awards-txt">New Prep</span>, indicating they recently started teaching the course and may have minimal accolades for excellent teaching.

In addition, a breakdown of GPAs is provided for each course and instructor.  <b>This visualization is interactive, tap or mouseover</b> any part of the visualization for more details:

<div id="example_wrapper" style="margin-top: -20px; padding-left: 10px; border-left: solid 2px #aaa; margin-bottom: 40px;">
  <div id="example"></div>
</div>


## Explore All University of Illinois Courses

Select one or more filter and view data about courses at Illinois:

<div style="padding-left: 10px; margin-left: 1px; border-left: solid 4px #13294B">
<div>
  Filter by Subject? <input style="width: 80px;" id="select-subject" type="text" onchange="updateBySubject()" autocomplete="one-time-code" />
  <button class="btn btn-waf" style="padding-top: 4px; padding-bottom: 4px; margin-bottom: 4px; display: none;" onclick="clearSubject()" id="select-subject-clear">Clear</button>
</div>

<div class="mt-2">
  Filter by GenEd?
  <select id="select-gened" onchange="onUserSelectionChange()">
    <option value="none" selected>Show All / No GenEd Filter</option>
    <option disabled>&mdash;</option>
    <option value="ACP">Adv. Composition (ACP)</option>
    <option value="NW">Non-Western Cultures (NW)</option>
    <option value="US">US Minority Cultures (US)</option>
    <option value="WCC">Western/Comp. Cultures (WCC)</option>
    <option value="HUM">Humanities & the Arts (HUM)</option>
    <option value="NAT">Natural Sciences & Tech (NAT)</option>
    <option value="QR">Quantitative Reasoning (QR)</option>
    <option value="SBS">Social & Behavioral (SBS)</option>
  </select>
</div>

<div class="mt-2">
  Sorting and Filters: 
  <select id="select-accolades" onchange="onUserSelectionChange()">
    <option value="none">Alphabetically</option>
    <option disabled>&mdash; Filter By Accolades: &mdash;</option>
    <option value="national">National Awards</option>
    <option value="campus">Campus &amp; College Awards</option>
    <option value="tre">Ranked by Students as Excellent</option>
    <option disabled>&mdash; Sort By Accolades: &mdash;</option>
    <option value="awards" selected>Sort by All Awards</option>
    <option disabled>&mdash; Sort By Instructor Grades: &mdash;</option>
    <option value="pct4">Highest Percentage of 4.0s</option>
    <option value="pct0">Lowest Percentage of 4.0s</option>
    <option value="gpa-high">Highest GPAs</option>
    <option value="gpa-low">Lowest GPAs</option>
    <option disabled>&mdash; Sort By Course Size: &mdash;</option>
    <option value="large">Most Students Taught</option>
    <option value="large-avg">Largest Average Section Size</option>
  </select>
</div>
</div>

<hr>


<div id="tables">
  <div style="text-align: center; margin-top: 20px;">
    <i>...loading data...</i>
  </div>  
</div>

<hr class="mb-5 mt-4">

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="/static/js/d3-tip.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<script type='text/javascript' src="vis.js?v=3"></script>
