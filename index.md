---
layout: home
---

<style>
.ion { margin-right: 3px; }
</style>

### Overview

I teach in the Department of Computer Science at The University of Illinois.  I am a teacher first, who also loves to understand and share data through interactive data visualizations and providing data through accessible data sets.  My passions are at the intersections of interactive computing, data science, and design -- I teach, work, and dream at this intersection.  My website is divided into three major areas:

- [**Teaching**](/teaching/) includes all of my classes that I teach, both on-campus at The University of Illinois and online via the Coursea platform.  I believe in free, open-access to educational materials and you will find a collection of my course notes and videos of lectures on each course website.

- [**Projects**](/projects/) includes all of my data visualizations, open-source software, datasets, and academic collaborations.  I am proud to have collaborated with hundreds students individually in creating this work, though independent studies, senior projects, and their senior thesis, to help build the next generation of experts.

- My [**about page**](/about/) includes a short bio, my CV, picture, and other bits I find cringe to write about, but it's expected on a website such as this.

I post updates about my work across various social media and you can follow me on any/all of them for updates: 
<a href="https://twitter.com/profwade_" target="_blank"><i class="ion ion-social-twitter"></i>profwade_</a>, 
<a href="https://www.linkedin.com/in/profwade" target="_blank"><i class="ion ion-social-linkedin"></i>profwade</a>,
<a href="https://instagram.com/profwade" target="_blank"><i class="ion ion-social-instagram"></i>profwade</a>, and
<a href="https://github.com/wadefagen" target="_blank"><i class="ion ion-social-github"></i>wadefagen</a>.
Finally, I maintain a <a href="https://forms.gle/oLXWdijmr9i2Yxau9">monthly e-mail list</a> where I share updated on all of my work (both Illinois and beyond) that you can subscribe to for a once-monthly update.

<hr>

### Newest Visualization: COVID-19 Among Big Ten Conference Schools

Interactive, data-forward visualization of publicly-reported COVID-19 data from Big Ten schools.  Customizable views of confirmed cases, tests administered,  test positivity, and more.  Updated daily.

<a href="/covid-19/" class="card">
  View the &quot;COVID-19 Among Big Ten Conference Schools&quot; visualization &gt;&gt;
</a>

<hr>

### Latest Projects
 
{% assign sorted = site.visualizations | sort: 'date' | reverse | slice: 0, 2 %}

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