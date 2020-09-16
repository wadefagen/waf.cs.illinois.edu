---
title: COVID-19 Among Big Ten Conference Schools
# slug: Perception of Probability Words

description: Daily Update of COVID-19 Data from Big Ten Schools
date: 2019-08-28

social-img: https://waf.cs.illinois.edu/covid-19/social.png
author:
- Wade Fagen-Ulmschneider

permalink: /covid-19/
---

<link rel="stylesheet" href="css.css">

<h1>COVID-19 Among Big Ten Conference Schools</h1>
<div class="lead" style="margin-top: -20px;">
Interactive, data-forward visualization of publicly-reported COVID-19 data from Big Ten schools.  Customizable views of confirmed cases, tests administered,  test positivity, and more. Updated daily. <i id="jhu-updated"></i>
</div>

<hr>



<div id="sizer"></div>
{% include_relative _chart.html %}


<hr>

<h3>Analysis</h3>

Several faculty and I are collaborating on analysis of this data and related collegiate COVID-19 data, you can view the analysis COVID-19 trends at in our <a href="/covid-analysis/">Data-Forward Collegiate COVID-19 Analysis</a> website.

<a href="/covid-analysis/" class="card">
  Data-Forward Collegiate COVID-19 Analysis &gt;&gt;
</a>

<hr>

<h3>Visualization Overview</h3>

This visualization was built on the <a href="https://91-divoc.com/">91-DIVOC platform</a> that I developed to create data-forward interactive visualizations to help myself and others understand the spread of <a href="https://91-divoc.com/pages/covid-visualization/#countries">COVID-19 across the world</a>, <a href="https://91-divoc.com/pages/covid-visualization/#states">across the United States</a>, and <a href="https://91-divoc.com/pages/coronavirus-contribution-by-state/">each state's contribution to the spread of COVID-19</a>. Instead of using data from Johns Hopkins (as I do on 91-DIVOC), this visualization sources data from the publicly available dashboards from Big Ten conference universities:

- University of Illinois, [https://go.illinois.edu/COVIDTestingData](https://go.illinois.edu/COVIDTestingData)
- Indiana University, [https://iuhealth.org/thrive/iu-health-covid-19-data](https://iuhealth.org/thrive/iu-health-covid-19-data)
- Maryland, [https://umd.edu/covid-19-dashboard](https://umd.edu/covid-19-dashboard)
- Michigan, [https://campusblueprint.umich.edu/dashboard/](https://campusblueprint.umich.edu/dashboard/)
- Michigan State, *(No publicly available COVID-19 testing data found)*
- Ohio State, [https://safeandhealthy.osu.edu/dashboard](https://safeandhealthy.osu.edu/dashboard)
- Penn State, [https://virusinfo.psu.edu/covid-19-dashboard](https://virusinfo.psu.edu/covid-19-dashboard)
- Rutgers, [https://coronavirus.rutgers.edu/health-and-safety/testing-program-dashboard/](https://coronavirus.rutgers.edu/health-and-safety/testing-program-dashboard/)
- Nebraska, [https://covid19.unl.edu/unl-covid-19-dashboard](https://covid19.unl.edu/unl-covid-19-dashboard)
- Minnesota, [https://safe-campus.umn.edu/return-campus/covid-19-dashboard](https://safe-campus.umn.edu/return-campus/covid-19-dashboard)
- Iowa, [https://coronavirus.uiowa.edu/covid-19-numbers](https://coronavirus.uiowa.edu/covid-19-numbers)
- Northwestern, [https://www.northwestern.edu/coronavirus-covid-19-updates/developments/confirmed-cases.html](https://www.northwestern.edu/coronavirus-covid-19-updates/developments/confirmed-cases.html)
- Purdue, [https://protect.purdue.edu/dashboard/](https://protect.purdue.edu/dashboard/)
- UW-Madison, [https://smartrestart.wisc.edu/dashboard/](https://smartrestart.wisc.edu/dashboard/)

Each day, I am updating the data for this visualization between midnight and 8:00am (central time zone) to publish a new version of this page each morning by 9:00am with the latest data.  The latest raw data is also always [provided on my github](https://github.com/wadefagen/waf.cs.illinois.edu/blob/master/covid-19/data/data.csv).


<h4>Data Collection</h4>

This visualization currently shows the total number of cases among **all members of each campus** -- students, faculty, and staff.  Some dashboards split this data into various segments (ex: students and faculty/staff individually) and, in those cases, the data from all groups are added together.  Indiana University only reports the number of tests processed by their hospital system, which certainly includes far more than just the campus, and is not included in this visualization.

The collection of data for this visualization started on Wednesday, Aug. 26.  Some schools (ex: Ohio State) only appear in the raw data and will appear in the visualization when at least two data points become available.

Due to the technology and &quot;data privacy&quot; settings used by many of the dashboards, there is no easy/reliable/robust automation of downloading of raw data files. Therefore, all data was recorded by hand.  I double check each data point, as well as verify the previous week of entries each time the data is updated (both for correctness and to update any cases that may have been added), but please notify me if you spot any errors.  As noted earlier, the data is updated once daily and collected between 12:00am-8:00am (central time).

If you have any ideas for this data visualization or know of other sources of data, feel free to reach out to me at <b>waf@illinois.edu</b>! :)


<h4>Other COVID-19 Work at Illinois</h4>

Other colleagues and faculty at the University of Illinois are also exploring COVID-19 data at University.  Here is a short list of links to some of their work:

- Prof. Martin Burke [talks about COVID-19 saliva-based testing](https://chemistry.illinois.edu/news/2020-08-11/martin-burke-talks-about-covid-19-saliva-based-testing-national-media)
- Prof. Nigel Goldenfeld and Prof. Sergei Maslov [developed the COVID-19 software model being used to predict cases at Illinois](https://news.illinois.edu/view/6367/1987403071)
- Prof. Daniel Simons writes about ["Illinois Covid Data re-plotted and tallied"](http://dansimons.com/Illinois_covid_info.html?fbclid=IwAR0yZC1LKHgjbZ4NnZKE45d8AOi0nz6twalfG7F2mWdhajLAYvbNymhC8fA)
- My visualizations of COVID-19 data as part of my [91-DIVOC Project](https://91-divoc.com/)



<script defer src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js" integrity="sha256-Jvh9+A4HNbbWsWl1Dw7kAzNsU3y8elGIjLnUSUNMtLg=" crossorigin="anonymous"></script>
<script defer src="https://d3js.org/d3.v5.min.js" crossorigin="anonymous"></script>

<script defer src="/static/js/d3-tip.js"></script>
<script defer src="src/updated.js"></script>
<script defer src="src/vis.js"></script>
