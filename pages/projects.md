---
layout: default
title: Projects
permalink: /projects/

# Legacy
templateEngineOverride: liquid, md
---

<style>
h3 + .pub-list {
  padding-top: 10px;
}

.pub-list li ul { 
  font-size: 80%;

}
</style>

### Data Visualizations

{% assign sorted = site.visualizations | sort: 'date' | reverse | slice: 0, 4 %}

{% for visualization in sorted %}
<div class="card card-full">
  <div class="row">
    <div class="col-12 col-md-3">
      {% if visualization.external-url %}<a href="{{ visualization.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
        {% if visualization.external-img %}
          <img src="{{ visualization.external-img }}" class="img-fluid">
        {% else %}
          <img src="{{ visualization.url }}{{ visualization.social-img }}" class="img-fluid">
        {% endif %}
      </a>
    </div>
    <div class="col-12 col-md-9">
      {% if visualization.external-url %}<a href="{{ visualization.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
        <div class="title">
            {{ visualization.title }}
        </div>
      </a>
      <div class="authors">
        <b>By</b>: {{ visualization.author | array_to_sentence_string }}<br>
        <b>First Published</b>: {{ visualization.date | date: "%B %Y" }}<br>
        {% if visualization.updateNote %}<i>{{ visualization.updateNote }}</i>{% endif %}
      </div>
    </div>
  </div>
</div>
{% endfor %}

<a href="/visualizations/" class="card">
    All Data Visualizations &gt;&gt;
</a>

<hr>

### Open-Access Service for Illinois

<ul class="pub-list">
  <li>
    <a href="https://clicker.cs.illinois.edu/">DISCOVERY Clicker</a>: A tool to provide a modern and scalable classroom response system for large lectures.
  </li>
  <li>
    <a href="https://mastery.cs.illinois.edu/">Mastery Platform</a>: Mastery Platform is an innovative tool developed as a cross-college collaboration at the University of Illinois that places mastery-based learning into practice. When learners work through a mastery-based assessment, they are guided towards mastery through instructor-designed questions that focus on learning instead of grading.
  </li>
  <li>
    <a href="https://d7.cs.illinois.edu/projects/linkedin-banner-image/generate/">Illinois' LinkedIn Banner Image Generator</a>: Used to create Illinois-specific professional banners for LinkedIn profiles.
    <ul>
      <li>As of May 2021, the Illinois LinkedIn Banner Generator has generated 63,583 professional banners (based on an Google Analytics event tracking data). You’ll find students, faculty, and alumni using these banners all over LinkedIn.</li>
    </ul>
  </li>
  <li>
    <a href="https://github.com/illinois/github-repo-creator/">GitHub Educational Repository Creator</a>: Used to create student repositories for coursework on the University of Illinois' GitHub server.  Used by over 5,000 students /year across over a dozen courses.
    <ul>
      <li>
        Created 20,000+ repositories across dozens of courses at The University of Illinois, including CS 210, 225, 233, 240, 241, 296, 420, 421, 423, 427, 461, 463, 491, and 527; ECE 120, 220, 411, 438; STAT 107, 207, 385, 430, 432, 440, 448, and 528; University High School; and Illinois International.
      </li>
    </ul>
  </li>
  <li>
    <a href="https://queue.illinois.edu/">Illinois Open Source Queue</a>: Used to hold office hours, advising meetings for over 8,000 students /semester at The University of Illinois, The University of British Columba (UBC), and at other universities.
    <ul>
      <li>
        As of September 2021, this Illinois Open Source Queue has facilitated 171,676 student questions from 154 unique courses, advising offices, or student groups at The University of Illinois. This has saved thousands of hours of waiting for assistance and streamlined office hours across Illinois.
      </li>
    </ul>
  </li>  
</ul>


<hr>

### Open-Source Tools


<ul class="pub-list">
  <li>
    <a href="https://waf.cs.illinois.edu/tools/Canvas-External-Grade-Import-Tool/">Canvas External Grade Import Tool</a>: A tool to streamline importing grades from external assessments into Canvas.
  </li>
</ul>

<hr>

### Academic Collaborations

<h4>Journals &amp; Conferences</h4>
<p>
  Selected published research in traditional peer-reviewed journals and conferences.
</p>
<ul class="pub-list">
  <li>
    [<a href="pdfs/fagen_heeren_herman_west_asee2015.pdf">PDF</a>]
    &quot;Re-engineering an "Introduction to Computing" course within a College-Wide Community of Practice&quot;
    (July 2015)
    <div class="pub-etc">
      <u>Wade Fagen</u>, <a href="http://cindaheeren.com/">Cinda Heeren</a>, <a href="http://publish.illinois.edu/glherman/">Geoffrey L. Herman</a>, and <a href="http://lagrange.mechse.illinois.edu/">Matthew West</a><br>
      122nd American Society for Engineering Education Annual Conference &amp; Exposition (ASEE 2015)
    </div>
  </li>
  <li>
    [<a href="pdfs/heeren_fagen_asee2015.pdf">PDF</a>]
    &quot;Quantitative Correlation between Student Use of Office Hours and Course Performance&quot;
    (July 2015)
    <div class="pub-etc">
      <a href="http://cindaheeren.com/">Cinda Heeren</a> and <u>Wade Fagen</u><br>
      122nd American Society for Engineering Education Annual Conference &amp; Exposition (ASEE 2015)
    </div>
  </li>
  <li>
    [<a href="pdfs/zilles_et_al_asee2015.pdf">PDF</a>]
    &quot;Computerized Testing: A Vision and Initial Experiences&quot;
    (July 2015)
    <div class="pub-etc">
      <a href="http://zilles.cs.illinois.edu/">Craig Zilles</a>, Robert T. Deloatch, Jacob Bailey, Bhuwan Khattar, <u>Wade Fagen</u>, <a href="http://cindaheeren.com/">Cinda Heeren</a>, David Mussulman, and <a href="http://lagrange.mechse.illinois.edu/">Matthew West</a><br>
      122nd American Society for Engineering Education Annual Conference &amp; Exposition (ASEE 2015)
    </div>
  </li>
  <li>
    [<a href="pdfs/fagen_kamin_sigcse2013.pdf">PDF</a>]
    &quot;Measuring increased engagement using Tablet PCs in a code review class&quot;
    (2013)
    <div class="pub-etc">
      <u>Wade Fagen</u> and <a href="http://kamin.cs.illinois.edu/">Samuel Kamin</a><br>
      Proceeding of the 44th ACM technical symposium on Computer Science Education (SIGCSE 2013)
    </div>
  </li>
</ul>


<h4>Workshops, Posters, and Talks</h4>
<p>
  Selected works &quot;In Progress&quot; or initial research results, presented at
  peer-reviewed venues.
</p>

<ul class="pub-list">
  <li>
    [<a href="https://www.youtube.com/watch?v=X_yjBTcmlkg">YouTube</a>]
    &quot;Beyond PowerPoint: Mobile-first, Dynamic, Trackable Presentations in HTML5&quot;
    (Feb. 2015)
    <div class="pub-etc">
      <u>Wade Fagen</u><br>
      Illinois Learning Sciences Design Laboratory (ILSDL 2015)
    </div>
  </li>

  <li>
    [Poster]
    &quot;Enabling Students through a Modern, Computing-Centric Education&quot;
    (Feb. 2015)
    <div class="pub-etc">
      <u>Wade Fagen</u> and <a href="http://cindaheeren.com/">Cinda Heeren</a><br>
      Illinois Learning Sciences Design Laboratory (ILSDL 2015)
    </div>
  </li>

  <li>
    [Poster]
    &quot;Quantitative Correlation between Student Use of Office Hours and Course Performance&quot;
    (Feb. 2015)
    <div class="pub-etc">
      <a href="http://cindaheeren.com/">Cinda Heeren</a> and <u>Wade Fagen</u><br>
      Illinois Learning Sciences Design Laboratory (ILSDL 2015)
    </div>
  </li>

  <li>
    [<a href="pdfs/kamin_fagen_wiptte2013.pdf">PDF</a>]
    &quot;Tablet PCs in a code review class&quot;
    (2013)
    <div class="pub-etc">
      <a href="http://kamin.cs.illinois.edu/">Samuel Kamin</a> and <u>Wade Fagen</u><br>
      Workshop on the Impact of Pen &amp; Touch Technology on Education (WIPTTE) 2013
    </div>
  </li>
</ul>

<h4>Everything Else</h4>
<p>
  Noteworthy, but doesn't fit anywhere else:
</p>

<ul class="pub-list">
  <li>
    &quot;Crafting Teaching Statements&quot; Panelist, October 2017
    <div class="pub-etc">
        Illinois Female Engineers in Academia Training (iFEAT)
    </div>
  </li>
</ul>


