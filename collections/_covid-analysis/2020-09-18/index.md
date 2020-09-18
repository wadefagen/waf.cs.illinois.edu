---
layout: covid-analysis
author:
- Caitlin Clarke
- Wade Fagen-Ulmschneider

date: 2020-09-18
render: False

title: Data-Forward Collegiate COVID-19 Analysis

description: This page presents data-forward collegiate analysis of Big-10 data in a way that allows you to nerd out with the underlying data while providing context to the on-going pandemic that is impacting college campuses everywhere.

social-img: https://waf.cs.illinois.edu/covid-analysis/social.png
---

<link rel="stylesheet" href="../css.css">


## Illinois' "Lockdown" Shows Strong Reversal in COVID-19 Spread
<p>
  <i>
    <a href="https://sociology.illinois.edu/directory/profile/vitosky">Caitlin Clarke</a> and <a href="https://waf.cs.illinois.edu/">Wade Fagen-Ulmschenider</a>
  </i>
</p>

On Wednesday, Sept. 2, the University of Illinois administrator [wrote to the campus community](https://massmail.illinois.edu/massmail/1405637420.html) to initiate a two-week "lockdown" for undergraduate students:

<blockquote>Starting today at 5 p.m., for the next two weeks for their own protection, we expect all undergraduate students to limit their in-person interactions to only the most essential activities. These include things like taking twice weekly COVID-19 tests, attending class, purchasing groceries and food, going to work, engaging in individual outdoor activity, attending religious services and seeking medical attention.</blockquote>

Today, Illinois released the latest testing data from the last day of the "lockdown" (Sept. 16):

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<div id="sizer"></div>
{% include_relative _charts/cases-UIUC.html %}
</div>

The data indicates that University of Illinois undergraduate students have respected the imposed "lockdown" measures over the two weeks.  We see the same trend in the reported test positivity:

<div style="margin-left: 3%; margin-right: 5%; padding-left: 2%;  border-left: solid 2px hsl(173, 30%, 20%); ">
<div id="sizer"></div>
{% include_relative _charts/testPositivity-UIUC.html %}
</div>


The key takeaway here is not only that the measures are working but that other schools experiencing spikes should consider similar measures alongside robust testing, contact tracing, and required preventive measures like masks, distancing, and handwashing.  (We see that the University of Wisconsin has followed University of Illinois' lead with a [similar two-week lockdown that was initiated earlier this week](https://chancellor.wisc.edu/blog/update-on-covid-19-response/).)

The data in this visualization demonstrates that after a major spike in positive cases, the use of robust testing, contact tracing, required preventive measures (masks, distancing, and handwashing), and "lockdown" as mandated by the University of Illinois administration on helped Illinois students successfully reduce the spread.


<script defer src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js" integrity="sha256-Jvh9+A4HNbbWsWl1Dw7kAzNsU3y8elGIjLnUSUNMtLg=" crossorigin="anonymous"></script>
<script defer src="https://d3js.org/d3.v5.min.js" crossorigin="anonymous"></script>

{% assign path = page.path | split: "/" %}
{% assign path_len = path | size | minus: 1 %}
{% assign path = path | slice: 0, path_len | join: "/" | slice: 1, 10000 | prepend: "/" %}

<script defer src="/static/js/d3-tip.js"></script>
<script defer src="{{path}}/src/updated.js"></script>
<script defer src="{{path}}/src/vis2.js"></script>
