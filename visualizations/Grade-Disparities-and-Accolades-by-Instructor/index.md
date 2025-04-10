---
title: Grade Disparities and Accolades by Instructor at UIUC
slug: Grade Disparities and Accolades

description: A visualization of grade disparity and accolades of instructors at UIUC
date: 2025-04-10

social-img: 1200-630.png
author:
- Lauren Hyde
- Wade Fagen-Ulmschneider

layout: viz
tags: visualization
---

<link rel="stylesheet" href="css.css" type="text/css" />

<h1>Grade Disparities and Accolades by Instructor at UIUC</h1>
<div style="font-size: 16px; margin-top: -4px; line-height: 16px;">
  <b>By</b>: Lauren Hyde, Rittika Adhikari, Michael Kokkines, Ophir Sneh, Caren Zeng, and Wade Fagen-Ulmschneider<br>
  <b>Published</b>: April 10, 2025
</div>

<hr>

## Introduction

[Past GPA visualizations](/discovery/gpa/) have explored grade disparities.  However, an instructor's grade distribution is not the only factor that students consider when selecting sections.  Instructor quality is an important consideration; many UIUC professors are luminaries in their fields, and some are renowned as teachers.

This work attempts to celebrate high-caliber professors while still providing important GPA distribution information.  As shown below, the visualization consists of two major components: the first is a breakdown of an instructor's grades, and the second is a listing of accolades the professor has received.

<ul style="margin-top: -14px;">
  <li><a href="./data-collection/">More information about the awards selected and data collection.</a></li>
</ul>


### Overview of Highlighted Accolades

As an example, CHEM 332: Elementary Organic Chem II has been taught by several faculty in recent years who have a collection of prestigious awards.  Specifically, [Professor Jeffrey Moore](https://chemistry.illinois.edu/jsmoore) has been honored with:

- <span class="awards awards-td ml-1"><img src="badges/academy.jpg" class="award" /></span> <b>Membership in the National Academies</b>, which is among the most prestigious honor any professor can receive, 
- <span class="awards awards-td awards-span ml-1"><img src="badges/illini.png" class="award" /></span> <b>Campus Award for Excellence in Undergraduate Education</b>, a top teaching award at The University of Illinois
- <span class="awards awards-td awards-stars"><span class="gold">★</span><span class="gold">★</span><span class="silver">★</span></span> <b>Ranked as Outstanding/Excellent by his students</b> at the end-of-semester evaluations,

Other instructors, like [Dr. Smitha Pillai](https://chemistry.illinois.edu/directory/profile/stpillai), who has taught CHEM 332 only once and we indicate that there's minimal accolades we would be expect to collect:

- <span class="awards awards-td awards-stars"><span class="silver">★</span></span> <b>Ranked as Excellent by her students</b> at the end-of-semester evaluations,
- <span class="awards-txt">New Prep</span>, indicating that she has taught the course fewer than two times

In addition, a breakdown of GPAs is provided for each course and instructor:

<div id="example_wrapper" style="margin-top: -20px; padding-left: 10px; border-left: solid 2px #333; margin-bottom: 30px;">
  <div id="example"></div>
</div>


## Explore Illinois Courses

<div id="checkboxes" class="cs205checkbox">
  <label for="tags"></label>
  <input placeholder="Search subjects or courses" type="text" class="search_bar" id="tags" onkeypress="return searchKeyPress(this, event)">
</div>
<div id="tables"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js" integrity="sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js" integrity="sha512-vc58qvvBdrDR4etbxMdlTt4GBQk1qjvyORR2nrsPsFPyrs+/u5c3+1Ct6upOgdZoIl7eq6k3a1UPDSNAQi/32A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
-->
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="/static/js/d3-tip.js"></script>
<script type='text/javascript' src="vis.js"></script>

