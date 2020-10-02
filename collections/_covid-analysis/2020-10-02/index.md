---
layout: covid-analysis
author:
- Wade Fagen-Ulmschneider

date: 2020-10-02
render: False

title: Undergraduate Positivity Rate at Illinois

description: This page presents data-forward collegiate analysis of Big-10 data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.

social-img: https://waf.cs.illinois.edu/covid-analysis/social.png
---

<link rel="stylesheet" href="../css.css">

## {{page.title}}

<p style="margin-top: -5px; font-size: 12px;">
  <i>
    {{page.date | date: "%A %B %-d, %Y" }} |
    <a href="https://waf.cs.illinois.edu/">Wade Fagen-Ulmschenider</a>
  </i>
</p>

With the latest bits of data we've learned about the testing around COVID-19 at The University of Illinois, it appears that around 10% of the undergraduate population has likely been infected with COVID-19.

Most of this analysis begins with an article written by Ethan Simmons in The Daily Illini (["Nearly 5% of UI tested population has been infected as COVID-19 spread continues"](https://dailyillini.com/covid-10/2020/09/28/5-ui-testers-infected-covid-19-spread-continues/)), who compiled two key bits of information that has been shared by the University of Illinois and the Champaign-Urbana Public Health District:

<blockquote>
[UIUC spokesperson Robin] Kaler said [...] about 35,000 students are living on and around campus. 
</blockquote>

<blockquote>
Awais Vaid of the Champaign-Urbana Public Health District previously said over 95% of all campus cases have been from undergraduate students.
</blockquote>

### Calculations

The University of Illinois does not release the number of <b>undergraduate</b> students living around campus, but we can make a reasonable assumption from the Fall 2019 numbers. Among the 51,196 students enrolled at The University of Illinois, 66.1% (33,850) are undergraduate students.  We can reasonable assume that 70% (± 10%) of the students having been tested are undergraduate students.

###### Calculation #1 &ndash; Undergraduate Students on Campus:
<blockquote>
<b>35,000</b> students on campus × <b>70%</b> <i>(±10%)</i> undergraduates = <b>24,500</b> undergraduate students on/around campus <i>(± 3,500 students)</i>
</blockquote>

###### Calculation #2 &ndash; Undergraduate Cases of COVID-19:
<blockquote>
<b>2,511</b> total unique cases of COVID-19 at UIUC × over <b>95%</b> of cases are undergraduate student = at least <b>2,385</b> undergraduate cases
</blockquote>

###### Calculation #3 &ndash; Undergraduate Student COVID-19 Positivity Rate:
<blockquote>
<b>2,385</b> undergraduate cases / <b>24,500</b> undergraduate students <i>(±3,500 students)</i> = <b>9.73%</b> <i>(8.5% - 11.3%)</i>.
</blockquote>

This is a seriously alarming number -- around **10%** of all undergraduates at The University of Illinois has a confirmed case of COVID-19.  When we compare geographical regions, we look at case rates normalized by the population as cases per 100,000 or 1,000,000 people.  At 9,730 cases per 100,000 people (9.73%), this rate is:

- Larger than any country in the world (Bahrain, the country with the most confirmed cases per person, has 4,600 cases /100k).
- Larger than any state in the United States (Louisiana, the state the most confirmed cases per person, has 3,580 cases /100k).
- Approximately as large as the most impacted areas in the United States (ex: New York City).


### Visualization

Below is a data-forward, interactive visualization showing the growth of this number, using the calculation outlined above, followed by a few caveats about this analysis:

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<div id="sizer"></div>
{% include_relative _charts/cases-daily7-UIUC.html %}
</div>


### Caveats

The University of Illinois rarely discloses the total number of **people** tested, instead focusing on just the number of **tests**.  The best information I could found was also in Simmons' article:

<blockquote>
According to [UIUC spokesperson Robin] Kaler, 48,605 students, faculty and staff have tested with on-campus saliva tests since they were introduced on July 6. 
</blockquote>

There is no information available about who those 48,605 people are or how often they have been tested.  Given that 35,000 people who test weekly, there are over 13,000 people who have been tested by The University of Illinois -- this could change the underlying "undergraduate positive rate" significantly if we had more information about those people.


### More Information

- [Prof. Wade's collection of data-forward visualization on UIUC](https://waf.cs.illinois.edu/covid-analysis/uiuc/)
- [COVID-19 at Big Ten Conference Schools](https://91-divoc.com/pages/covid-19-at-big-ten-conference-schools/)
- Daily Illini: ["Nearly 5% of UI tested population has been infected as COVID-19 spread continues"](https://dailyillini.com/covid-10/2020/09/28/5-ui-testers-infected-covid-19-spread-continues/)



<script defer src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js" integrity="sha256-Jvh9+A4HNbbWsWl1Dw7kAzNsU3y8elGIjLnUSUNMtLg=" crossorigin="anonymous"></script>
<script defer src="https://d3js.org/d3.v5.min.js" crossorigin="anonymous"></script>

{% assign path = page.path | split: "/" %}
{% assign path_len = path | size | minus: 1 %}
{% assign path = path | slice: 0, path_len | join: "/" | slice: 1, 10000 | prepend: "/" %}

<script defer src="/static/js/d3-tip.js"></script>
<script defer src="{{path}}/src/updated.js"></script>
<script defer src="{{path}}/src/vv-oct.js"></script>

