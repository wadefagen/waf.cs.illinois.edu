---
layout: home
---

<style>
.ion { margin-right: 3px; }

.main-card {
  border: solid 1px hsl(173, 30%, 50%);
  padding: 10px;
  padding-bottom: 0px;
  background-color: hsl(173, 3%, 97%);
}

</style>

<img alt="Wade Fagen-Ulmschneider" src="/static/images/fagen-ulmschneider.jpg" style="max-height: 200px; float: right; border: solid 1px black; margin-left: 20px; margin-bottom: 20px;">

### Overview

**Prof. Wade Fagen-Ulmschneider** is a Teaching Associate Professor of Computer Science at the University of Illinois at Urbana-Champaign (UIUC). With a passion for data, he often teaches thousands of students each year in his courses on Data Structures, Data Visualization, and Data Science. He was selected as one of the National Academy of Engineering’s Frontiers of Engineering Education scholars, awarded the Collins Award for Innovation Teaching, and has been consistently ranked as an excellent instructor by his students for the past ten years. His work on data visualizations has been used by governors of multiple states, featured by websites including Popular Mechanics and The Verge, and has been viewed by millions of readers. [[Full Curriculum Vitae, PDF]](/static/fagen-ulmschneider-cv.pdf)

#### Social Media and E-Mail

I post updates about my work across various social media and you can follow me on any/all of them for updates: 
<a href="https://twitter.com/profwade_" target="_blank"><i class="ion ion-social-twitter"></i>profwade_</a>, 
<a href="https://www.linkedin.com/in/profwade" target="_blank"><i class="ion ion-social-linkedin"></i>profwade</a>,
<a href="https://instagram.com/profwade" target="_blank"><i class="ion ion-social-instagram"></i>profwade</a>, and
<a href="https://github.com/wadefagen" target="_blank"><i class="ion ion-social-github"></i>wadefagen</a>.
Additionally, I maintain a <a href="https://forms.gle/oLXWdijmr9i2Yxau9">monthly e-mail list</a> where I share updated on all of my work (both Illinois and beyond) that you can subscribe to for a once-monthly update.  Finally, you can also reach me at **waf@**illinois.edu.


<hr style="clear: both">

<div class="row">
  <div class="col-lg-4">
    <div class="main-card">
      <h3>Teaching</h3>
      <p>
        I believe that world-class education is education that is worth creating and worth sharing.  Education should be creative, exploratory, and fun &mdash; all of my courses contain projects with significant &quot;creative components&quot; where you create something original and unique that you can share with others.
      </p>
      <p>
        Additionally, I believe in free, open-access to educational materials and you will find a collection of my course notes and
        videos of lectures on each course website.
      </p>
      <h4>Currently Teaching:</h4>
      <ul>
        <li><a href="https://courses.grainger.illinois.edu/CS240/fa2020/">CS 240: Intro to Computer Systems</a></li>
      </ul>
      <p>
        <a href="/teaching/" class="card">More on Teaching &gt;</a>
      </p>
    </div>
  </div>

  <div class="col-lg-4">
    <div class="main-card">
      <h3>Projects</h3>
      <h4>Data Visualization</h4>
      <ul>
        <li><a href="https://91-divoc.com/">91-DIVOC Project</a></li>
        <li><a href="https://waf.cs.illinois.edu/discovery/gpa/">UIUC GPA Visualizations</a></li>
        <li><a href="https://waf.cs.illinois.edu/visualizations/">More Visualizations &gt;</a></li>
      </ul>
      <h4>Open Source Software</h4>
      <ul>
        <li><a href="https://d7.cs.illinois.edu/projects/linkedin-banner-image/generate/">Illinois LinkedIn Banner Generator</a></li>
        <li><a href="https://queue.illinois.edu/">Illinois Open Source Queue</a></li>
        <li><a href="https://queue.illinois.edu/projects/">More Software &gt;</a></li>
      </ul>
      <h4>Academic Publications</h4>
      <ul>
        <li>Impact of Office Hours on Grades</li>
        <li>Preference-based Team Formation</li>
        <li><a href="/projects/">More Publications &gt;</a></li>
      </ul>
      <p>
        <a href="/projects/" class="card">More on Projects &gt;</a>
      </p>
    </div>
  </div>

  <div class="col-lg-4">
    <div class="main-card">
      <h3>Impact</h3>
      <p>
        I've been privileged to be able to share computer science, data visualization, and data science with thousands of people live, and
        millions of readers through data visualizations.
      </p>
      <h4>Recent Talks</h4>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=xU9pu-H1zHw&feature=youtu.be&t=741">[YouTube] Champaign-Urbana's Data Science Users Group (DSUG)</a></li>
        <li><a href="https://www.youtube.com/watch?v=VOCFq1Wb6tA&lc=UgzEDT0pOiYLzo8aWXt4AaABAg">[YouTube] ExploreCS w/ Women in Computer Science</a></li>
        <li><a href="/about/">More Talks &gt;</a></li>
      </ul>
      <h4>News and Media</h4>
      <ul>
        <li><a href="/impact/">Collection of News and Media &gt;</a></li>
      </ul>
      <p>
        <a href="/about/" class="card">More on Impact &gt;</a>
      </p>
    </div>
  </div>
</div>

<hr>

### Newest Visualization: COVID-19 Among Big Ten Conference Schools

Interactive, data-forward visualization of publicly-reported COVID-19 data from Big Ten schools.  Customizable views of confirmed cases, tests administered,  test positivity, and more.  Updated daily.

<a href="https://91-divoc.com/pages/covid-19-at-big-ten-conference-schools/" class="card">
  View the &quot;COVID-19 Among Big Ten Conference Schools&quot; visualization &gt;&gt;
</a>

<a href="/covid-analysis/" class="card">
  Data-Forward Collegiate COVID-19 Analysis &gt;&gt;
</a>

<hr>

### Latest Projects
 
{% assign sorted = site.visualizations | sort: 'date' | reverse | slice: 0, 4 %}

{% for visualization in sorted %}
<div class="card card-full">
  <div class="row">
    <div class="col-12 col-md-3">
      {% if visualization.external-url %}<a href="{{ visualization.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
        {% if visualization.external-img %}
          <img src="{{ visualization.external-img }}" class="img-fluid">
        {% else %}
          <img src="{{ visualization.url | absolute_url }}{{ visualization.social-img }}" class="img-fluid">
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

<a href="/projects/" class="card">
    Vies All Projects &gt;&gt;
</a>

<hr>

### d7 - Data Science Research Collaborative

I have started organizing my work with students as part of a Data Science Research Collaborative called d7.  We're just getting this collaborative started, but already have some fantastic work and so much more in the pipeline!

<a href="http://d7.cs.illinois.edu/visualizations/" class="card">
  d7: Data Science Research Collaborative &gt;&gt;
</a>

<hr>

<h3>Contact Information</h3>
<p>
  The best way to reach me is by e-mail (<b>waf@</b>illinois.edu).  Alternatively:
</p>
<ul>
  <li><b>Phone</b>: +1 (217) 300-2812</li>
  <li><b>Office</b>: 2215 Siebel Center</li>
  <li>
    <div>
      <b>Physical Address</b>:
      <address style="display: inline-table;">
        2215 Siebel Center M/C 258<br>
        201 N. Goodwin Ave.<br>
        Urbana, IL 61801
      </address>
    </div>
  </li>
</ul>