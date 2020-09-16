---
layout: covid-analysis
author:
- Caitlin Clarke
- Wade Fagen-Ulmschneider

social-img: https://waf.cs.illinois.edu/covid-analysis/social.png

title: Data-Forward Collegiate COVID-19 Analysis

description: This page presents data-forward collegiate analysis of Big-10 data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.

---

<link rel="stylesheet" href="css.css">

<h1 style="margin-bottom: 0px">Data-Forward Collegiate COVID-19 Analysis</h1>
<p>
  <i>
  Sept. 16, 2020 | <a href="https://sociology.illinois.edu/directory/profile/vitosky">Caitlin Clarke</a> and <a href="https://waf.cs.illinois.edu/">Wade Fagen-Ulmschenider</a>
  </i>
</p>

For several weeks, we have been tracking the COVID-19 data from every Big Ten Conference University and, for weeks, the story was the same: The University of Illinois’ saliva-based population testing resulted in impressively large number of tests -- including running **2.5% of all tests** in the United States on the first day of classes at Illinois (Monday. August 24):


<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
{% include_relative _charts/tests-UIUC-pctUS.html %}
</div>

This page presents data-forward collegiate analysis of Big Ten data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.

<br>

## Big Ten Announces Plans to Resume College Football

Nebraska continues to have a small testing program (~200 tests /day, over the recent 7-days) and leads the Big Ten in Test Positivity:

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<div id="sizer"></div>
{% include_relative _charts/tests-Big10-Nebraska-testPositivity.html %}
</div>

This is a concerning new trend considering that Nebraska appears to be a part of the contingent pushing for Big Ten athletics to reconsider opening the football season. According to [ESPN](https://www.espn.com/college-football/story/_/id/29036650/the-coronavirus-college-sports-ncaa-reopening-plans-latest-news-program-cuts-more), Nebraska leaked information about an announcement that came late yesterday of Big Ten football beginning on Oct 23 ([Big Ten Network](https://bigten.org/news/2020/9/16/the-big-ten-conference-adopts-stringent-medical-protocols-football-season-to-resume-october-23-24-2020.aspx)).

Big Ten administration, faculty, staff, and students should carefully review the testing, contact tracing, and prevention measures currently in place at each conference school before jumping back into in-person seasons. These numbers raise more concerns regarding the extent to which conferences and individual athletics programs can reasonably protect their athletes. Nebraska claimed on September 12th to have implemented [new rapid testing](https://saturdaytradition.com/nebraska-football/report-nebraska-secures-own-rapid-response-covid-19-tests/) but it remains unclear about the extent to which this will be implemented for the entire campus or only for athletes. It is concerning to see that the two schools in the conference with the highest number of test positivity and positive cases - Nebraska and Ohio State - appear to be the two pushing hardest for reopening the fall season.

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
{% include_relative _charts/tests-Big10-OhioState-cases.html %}
</div>

Put differently, while the [SEC Commissioner](https://www.espn.com/college-football/story/_/id/29578644/sec-tells-football-players-positive-coronavirus-tests-all-teams-given) told players that positive cases were "a given," the majority of the [LSU Football](https://www.espn.com/college-football/story/_/id/29892180/lsu-coach-ed-orgeron-most-team-contracted-coronavirus) has tested positive for COVD-19 prior to the planned start of the [SEC football season on September 25th](https://www.secsports.com/article/29682732/sec-announces-new-2020-football-schedule#:~:text=Last%20month%2C%20the%20SEC%20established,developments%20related%20to%20COVID%2D19.). However, none of these conversations, SEC or Big Ten, appear to account for the data that suggests 87% of those who recover from COVD-19 experience at least 1 persistent symptom ([Carfi et al., 2020](https://jamanetwork.com/journals/jama/fullarticle/2768351)). Similarly, the data demonstrating the increased racial health inequalities during COVID-19 should concern athletes in sports with larger representation of BIPOC athletes including football and basketball ([Alcendor 2020](https://www.mdpi.com/2077-0383/9/8/2442)). Even if Black student athletes were not at higher risk for COVID-19 complications, their family members are. Black and Latinx populations already experience severe health inequalities and significantly higher risk for hypertension, diabetes, and chronic lung conditions such as asthma ([Williams & Sternthal, 2010](https://journals.sagepub.com/doi/abs/10.1177/0022146510383838)), all of which are associated with severe COVID-19 symptoms ([Apicella 2020](https://www.mdpi.com/2077-0383/9/8/2442), [Liu et al. 2020](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(20)30215-7/fulltext)).  Yet the continued pressure to return to play without clear demonstration of testing, tracing, and prevention measures demonstrates the conference, and the sport as a whole, is not prepared for -or perhaps simply does not care about - the consequences for these athletes or their family members as more teams will continue to see increased positive cases. 

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
<script defer src="src/vis.js"></script>
<script defer src="src/vis2.js"></script>
