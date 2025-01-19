---
title: Trends in High School GPAs among Incoming Freshman Class
slug: Trends in High School GPAs among Incoming Freshman Class

description: How do we perceive the difference between "probable" and "likely"?
date: 2025-01-20

social-img: img/1200-630.png
author:
- Wade Fagen-Ulmschneider
- Louisa Zhang

permalink: /visualizations/Trends-in-High-School-GPAs-of-Incoming-Freshman/

layout: default

# tags: visualization
---

<h1>Trends in High School GPAs among Incoming Freshman Classes of Big Ten Schools</h1>
<div style="font-size: 14px; margin-top: -4px; line-height: 16px;">
  <b>By</b>:  Wade Fagen-Ulmschneider and Louisa Zhang (Illinois '26)<br>
  <b>Published</b>: January 20, 2025
</div>

<hr>

## Overview

In Fall 2023, the University of Wisconsin-Madison reported a record <b>83.8%</b> of their incoming,
first-semester freshman class reported an unweighted high school GPA of at least 3.75.  Among those
students, nearly half (47.8%) of the incoming freshman class reported a perfect 4.00 GPA.

Several research papers have studied the multi-decade trend of GPAs increasing over time, but we found
no widely available data exploring the impact of the Big Ten.  This work explores the first-semester freshman demographics published by all sixteen Big Ten schools.

Specifically, this work primarily focused on the percentage of students in each <b>freshman class that have high school GPA of at least 3.75</b>.  For example, visually representing the high school GPAs of the incoming Fall 2023 class of freshman at the University of Wisconsin-Madison:

<div id="chart-1" style="margin-bottom: 2px; margin-top: -10px;"></div>

<style>
.box {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, .2);
  position: relative;
  top: 2px;
}

.legend {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}

svg .tick {
  font-size: 14px;
  font-family: Lato, sans-serif;
}

.d3-tip {
  max-width: 300px;
}
</style>

<div style="text-align: center">
<div class="legend"><div class="box" style="background-color: hsl(216 59.6% 18.4%);"></div> - Perfect 4.00 GPA</div>
<div class="legend"><div class="box" style="background-color: hsl(216 59.6% 28.4%);"></div> - 3.75 - 3.99 GPA</div>
<div class="legend"><div class="box" style="background-color: hsl(311 33.3% 27.6%);"></div> - 3.50 - 3.74 GPA</div>
<div class="legend"><div class="box" style="background-color: hsl(311 33.3% 37.6%);"></div> - 3.25 - 3.49 GPA</div>
<div class="legend"><div class="box" style="background-color: hsl(311 33.3% 47.6%);"></div> - 3.00 - 3.24 GPA</div>
<div class="legend"><div class="box" style="background-color: hsl(311 33.3% 57.6%);"></div> - Less than 3.00 GPA</div>
</div>

<div style="clear: both; margin-bottom: 5px;"></div>

<div style="font-style: italic; text-align: center; background-color: hsl(173, 30%, 90%); margin-bottom: 30px;">
  <b>Interact</b>: Tap/hover over any graphical element to view the raw data.
</div>


## Freshman Class Demographics Over Time by University

Among all Big Ten Universities, ten schools have consistently reported GPA cohorts of their freshman classes.  Below, you can select and view each of the Universities individually:

University: 
<select id="uni-selection" onchange="uniChange()">
  <option value="University of Wisconsin-Madison">University of Wisconsin-Madison</option>
  <option value="University of Washington (Seattle)">University of Washington (Seattle)</option>
  <option value="USC">USC</option>
  <option value="Purdue">Purdue</option>
  <option value="University of Oregon">University of Oregon</option>
  <option value="Michigan State">Michigan State</option>
  <option value="University of Michigan">University of Michigan</option>
  <option value="University of Iowa">University of Iowa</option>
  <option value="Indiana (Bloomington)">Indiana (Bloomington)</option>
  <option value="UCLA">UCLA</option>
</select>

<div id="chart" style="margin-bottom: 5px"></div>

<div style="font-size: 12px; margin-bottom: 30px; text-align: right;">
  [1]: Beginning in Fall 2019, universities began reporting 4.00 GPAs separately from the students with above 3.75 high school GPAs.
</div>


## Freshman Class Incoming GPA Across the Big Ten

After nerding out with each University individually, the plot below graphs the <b>percentage of each University's freshman class that had a high school GPA of 3.75 or higher.</b>  Additionally, the average of all schools with data for a given year is plotted as the "B1G Average":

<div id="chart-line" style="margin-bottom: 30px"></div>


### Average High School GPA

In addition to reporting the percentage of students with GPAs above 3.75, a freshman class <b>average high school GPA</b> (among all incoming freshman at each University) is reported for reach University:

<div id="chart-line-gpa" style="margin-bottom: 30px"></div>


## Analysis

Despite the wide geographical area of the Big Ten system, with each school pulling a large portion of their students from in-state high schools with diverse state standards and state educational boards, the trend of the freshman class high school GPA has increased with very few exceptions.

- The average high school GPA, and the proportion of incoming freshman with 3.75+ GPAs, among Big Ten Schools has significantly increased in the past 20 years,
- The proportion of students with a 3.75 GPA or higher increased from less than 40% of the incoming freshman class in 2005, on average, to over 70% in 2023; the average incoming freshman high school GPA similarly increased from 3.58 to 3.84 from 2005 to 2023.
- Surprising to me, there is nothing in the data to suggest that the pandemic has had a significant impact on the trend of high school GPAs in the recent incoming freshman classes of students.


### Data Set

The data presented in this work was gathered by Wade Fagen-Ulmschneider and Louisa Zhang (Illinois '26) in January 2025 by analyzing 286 reports to source Questions C11 and C12 in the Common Data Sets.  The reports accessed in this work are published publicly by each University:

<div style="font-size: 14px; margin-top: -10px;">

- University of Illinois (Urbana-Champaign), [https://www.dmi.illinois.edu/stuenr/index.htm#CDS](https://www.dmi.illinois.edu/stuenr/index.htm#CDS)
- UCLA - University of California (Los Angeles), [https://apb.ucla.edu/campus-statistics/common-data-set-undergraduate-profile](https://apb.ucla.edu/campus-statistics/common-data-set-undergraduate-profile)
- Indiana (Bloomington), [https://iuia.iu.edu/apps/cds/](https://iuia.iu.edu/apps/cds/)
- University of Iowa, [https://provost.uiowa.edu/data-and-reports/common-data-set](https://provost.uiowa.edu/data-and-reports/common-data-set)
- University of Maryland (College Park), [https://www.irpa.umd.edu/InstitutionalData/cds.html](https://www.irpa.umd.edu/InstitutionalData/cds.html)
- University of Michigan, [https://obp.umich.edu/campus-statistics/common-data-set/](https://obp.umich.edu/campus-statistics/common-data-set/)
- Michigan State, [https://ir.msu.edu/cds](https://ir.msu.edu/cds)
- University of Minnesota (Twin Cities), [https://idr.umn.edu/institutional-metrics-compliance-reporting/twin-cities-campus-factbook](https://idr.umn.edu/institutional-metrics-compliance-reporting/twin-cities-campus-factbook)
- Northwestern, [https://www.enrollment.northwestern.edu/data/common-data-set.html](https://www.enrollment.northwestern.edu/data/common-data-set.html)
- Ohio State University (Columbus), [https://irp.osu.edu/institutional-data-and-reports](https://irp.osu.edu/institutional-data-and-reports)
- University of Oregon, [https://ir.uoregon.edu/uo-overview/common-data-set](https://ir.uoregon.edu/uo-overview/common-data-set)
- Penn State (University Park), [https://opair.psu.edu/institutional-research/projects/cds/](https://opair.psu.edu/institutional-research/projects/cds/)
- Purdue, [https://www.purdue.edu/idata/products-services/common-data-set.php](https://www.purdue.edu/idata/products-services/common-data-set.php)
- Rutgers (New Brunswick), [https://oirap.rutgers.edu/ReportingCommonDataSet.html](https://oirap.rutgers.edu/ReportingCommonDataSet.html)
- University of Southern California (USC), [https://oir.usc.edu/statistics-data-visualization/common-data-set/](https://oir.usc.edu/statistics-data-visualization/common-data-set/)
- University of Washington (Seattle), [https://www.washington.edu/opb/uw-data/external-reporting/common-data-set/](https://www.washington.edu/opb/uw-data/external-reporting/common-data-set/)
- University of Wisconsin-Madison, [https://data.wisc.edu/common-data-set-and-rankings/](https://data.wisc.edu/common-data-set-and-rankings/)

Rutgers, Ohio State, Northwestern, Minnesota, and Illinois reported no data for Question C11 in any available Common Data Sets.  Ohio State's links to Common Data Sets before 2022 were broken and reports were inaccessible.  The University of Maryland did not provided unweighted GPAs and was excluded for not having comparable data (in Fall 2023, Maryland reported 93.64% of students had at least a 4.00 GPA and their average freshman class GPA was a 4.45 GPA).  Finally, Penn State reported data for Question C11 in only Fall 2022 and Fall 2023 and was excluded for having too few data points.

</div>








<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.9.7/d3.min.js"></script>
<script src="/static/js/d3-tip.js"></script>
<script src="viz.js"></script>
