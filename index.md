---
layout: home
---


### Spring 2020: Data Science Discovery

I am passionate about bringing an understanding of computing and data to the world!  This is, without a doubt, the best course I have ever built.  If you're at The University of Illinois, join me in Spring 2020 in STAT/CS/IS 107:

<a href="http://courses.las.illinois.edu/fall2019/stat107/" class="card">
    Find out more about Data Science Discovery (STAT 107) &gt;&gt;
</a>

<hr>

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
        <b>Published</b>: {{ visualization.date | date: "%B %Y" }}
      </div>
    </div>
  </div>
</div>
{% endfor %}

<a href="{{ absolute_url }}/visualizations/" class="card">
    All Data Visualizations &gt;&gt;
</a>

<hr>

### Teaching

#### Current & Recently Courses Taught

<ul>
  <li>
    STAT 107 / CS 107 / IS 107: Data Science Discovery [<a href="http://courses.las.illinois.edu/fall2019/stat107/"><b>Fall 2019</b></a>,
    <a href="http://courses.las.illinois.edu/spring2019/stat107/">Spring 2019</a>]
  </li>
  <li>
    Three-course Specialization (Online MOOCs with Coursera) <a href="https://www.coursera.org/specializations/cs-fundamentals">Accelerated Computer Science Fundamentals</a>:
    <ul>
      <li>Course #1: <a href="https://www.coursera.org/learn/cs-fundamentals-1">Object-Oriented Data Structures in C++</a>; <i>a month-long course (4.8/5.0 from 250+ reviews)</i></li>
      <li>Course #2: <a href="https://www.coursera.org/learn/cs-fundamentals-2">Ordered Data Structures</a>; <i>a month-long course (4.8/5.0 from 100+ reviews)</i></li>
      <li>Course #3: <a href="https://www.coursera.org/learn/cs-fundamentals-3">Unordered Data Structures</a>; <i>a month-long course (4.9/5.0 from 70+ reviews)</i></li>
    </ul>
  </li>
  <li>
    CS 225: Data Structures [<a href="https://courses.engr.illinois.edu/cs225/sp2019/">Spring 2019</a>,
    <a href="https://courses.engr.illinois.edu/cs225/fa2018/">Fall 2018</a>,
    <a href="https://courses.engr.illinois.edu/cs225/sp2018/">Spring 2018</a>,
    <a href="https://courses.engr.illinois.edu/cs225/fa2017/">Fall 2017</a>,
    <a href="https://courses.engr.illinois.edu/cs225/sp2017/">Spring 2017</a>]
  </li>
  <li>
    CS 305: Data Driven Discovery
    [<a href="https://courses.engr.illinois.edu/cs199205/sp2017/">Spring 2017</a>,
    <a href="https://courses.engr.illinois.edu/cs199205/fa2016/">Fall 2016</a>,
    <a href="https://courses.engr.illinois.edu/cs199205/sp2016/">Spring 2016</a>,
    <a href="https://courses.engr.illinois.edu/cs199205/fa2015/">Fall 2015</a>]
  </li>
  <li>
    CS 105: Intro to Computer Science (Non-Majors)
    [<a href="https://courses.engr.illinois.edu/cs105/fa2015/">Fall 2015</a>,
    <a href="https://courses.engr.illinois.edu/cs105/sp2015/">Spring 2015</a>,
    <a href="https://courses.engr.illinois.edu/cs105/fa2014/">Fall 2014</a>,
    <a href="https://courses.engr.illinois.edu/cs105/sp2014/">Spring 2014</a>]
  </li>
  <li>
    CS 241: System Programming
    [<a href="https://courses.engr.illinois.edu/cs241/fa2013/">Fall 2013</a>]
  </li>
</ul>


#### Teaching Philosophy

I believe that world-class education is education that is worth sharing. If you are going through your life sharing the meals you eat, the sunset in the evening, and other ordinary things, your educational experience should be *at least* among those experiences (and, hopefully, exceptionally better).

Toward that end, classes I teach contain major components that are a sharable experience. More on this soon. :)


#### Independent Study / Senior Thesis

I believe the best education experience is a small group experience. When I advise an independent study or senior thesis, I am making a commitment to you to work with you as we explore something new and interesting. Similarly, I expect you to be fully committed to the project.

If you have completed CS 205 (non-CS major) or CS 225 (CS major) and are interested in working on an independent study, let's chat about it!


<h4>Accolades</h4>
<p>
  <ul class="pub-list">
    <li>
      Scott H. Fisher Computer Science Teaching Award; 2019
      <div class="pub-etc">
        The top-most teaching honor given by the Department of Computer Science at The University of Illinois, in recognition of Scott H. Fisher
      </div>
    </li>  
    <li>
      Chi Omega’s Outstanding Faculty Award; 2018
      <div class="pub-etc">
        <i>&quot;A University-level award for excellence in teaching and mentoring.&quot;</i> &ndash; Chi Omega National Chapter
      </div>
    </li>
    <li>
      Engineering Council’s Award for Excellence in Advising; 2018
      <div class="pub-etc">
        College of Engineering at The University of Illinois at Urbana-Champaign
      </div>
    </li>
    <li>
      Collins Award for Innovative Teaching; 2017
      <div class="pub-etc">
        <i>&quot;This award recognizes outstanding development or use of new and innovative teaching methods.&quot;</i> &ndash; The University of Illinois' College of Engineering
      </div>
    </li>
    <li>
      Invited Guest:
      <a href="https://www.naefoee.org/symposia/currentsymposium/17139/18685.aspx">National Academy of Engineering's Frontiers of Engineering Education (FOEE)</a>; 2016
      <div class="pub-etc">
        <i>&quot;The Frontiers of Engineering Education (FOEE) Symposium brings together some of the nation’s most engaged and innovative engineering educators in order to recognize, reward, and promote effective, substantive, and inspirational engineering education.&quot;</i> &ndash; National Academy of Engineering
      </div>
    </li>
    <li>
      Teachers Ranked as Excellent by Their Students; 2019, 2018, 2017, 2016, 2013, 2012, 2011, 2010, 2008
      <div class="pub-etc">
        Center for Innovation in Teaching &amp; Learning at The University of Illinois
      </div>
    </li>
  </ul>
</p>

<hr>
<h3>Recent Impact, Media, and Research</h3>

<h4>Invited Talks</h4>
<p>I love sharing my passion of Computer Science and inspiring others to do amazing things.  A few recent talks I have been honored to be invited to give:</p>
<ul class="pub-list">
  <li>
    Professional development with <a href="http://apo-aa.org/">Alpha Phi Omega (APO)</a>, October 2019
    <div class="pub-etc">
      &bullet; Live Visualization Creation: <a href="http://d7.cs.illinois.edu/projects/apo-group-size/">Perception of Words Describing Sizes of Groups</a>
    </div>
  </li>
  <li>
    Data Science SPRINT with <a href="http://get.illinois.edu/">Illinois International's Global Education & Training</a>, August 2019
    <div class="pub-etc">
      &bullet; The best of Data Science and Visualization all within 2.5 hours, co-taught with Karle Flanagan
    </div>
  </li>
  <li>
    Monthly membership meeting with <a href="http://illinoisbusinesscouncil.com/home/">Illinois Business Council (BC)</a>, April 2019
    <div class="pub-etc">
      &bullet; Title: <i>Data Science and The University of Illinois</i>
    </div>
  </li>
  <li>
    <a href="https://calendars.illinois.edu/detail/1439/33330023">Statistics Seminar</a> with the Department of Statistics, March 2019
    <div class="pub-etc">
      &bullet; Title: <i>Data Visualization, Storytelling, and Data Science at The University of Illinois</i>
    </div>
  </li>
  <li>
    Monthly Data Science Meetup with the <a href="https://www.meetup.com/CU-DSUG/">Champaign-Urbana Data Science User Group</a>, February 2019
    <div class="pub-etc">
      &bullet; Title: <i>Data Visualization and Storytelling</i> [<a href="https://docs.google.com/presentation/d/1YXyv4UuJeyyQy8frGtt_DnLOtpuxcjBeSb_32xQEGQA/edit?usp=sharing">Slides</a>]
    </div>
  </li>
</ul>


<h4>Media Coverage</h4>
<p>A collection of some recent media coverage of some of the things I've worked on:</p>
<ul class="pub-list">
  <li>
    [Department News]:
    <a href="https://business.illinois.edu/news/badm/2018/10/oliver-rises-competition-data-visualization-contest/" target="_blank">
      <i>Oliver rises above competition in data-visualization contest</i></a>, College of Business, October 2018
  </li>
  <li>
    [Campus-wide Media]:
    <a href="https://www.library.illinois.edu/sc/events/viz-competition/" target="_blank">
      <i>2018 Data Visualization Competition Winners</i></a>, Scholarly Commons, October 2018
  </li>    
  <li>
    [Podcast]:
    <a href="https://dailyillini.com/news/2017/10/16/weekly-illini-october-16-2017/" target="_blank">
      <i>Weekly Illini</i></a>, October 2017
  </li>
  <li>
    [Newspaper]:
    <a href="https://dailyillini.com/news/campus/2017/10/17/college-of-engineering-pushing-to-narrow-gender-discrepancy/" target="_blank">
      <i>College of Engineering pushing to narrow gender discrepancy</i></a>, Daily Illini, October 2017
  </li>
  <li>
    [Newspaper]:
    <a href="https://dailyillini.com/news/campus/2017/10/16/data-shows-grade-disparities-university-multi-section-courses/" target="_blank">
      <i>Data shows grade disparities between University multi-section courses</i></a>, Daily Illini, October 2017
  </li>
</ul>

<h4>Data Driven Discoveries</h4>
<p>
  Student-created work published online, designed to create high impact and engagement.  In 2016,
  work in this category had over 18,000,000 interactions, including users from all 50 states and over 100 countries.
</p>
<ul class="pub-list">
  <li>
    <a href="http://waf.cs.illinois.edu/discovery/every_gen_ed_at_uiuc_by_gpa/" target="_blank">&quot;Every Gen Ed at UIUC, by GPA&quot;</a> (Nov. 2016); &gt;2,500,000 interactions
  </li>
  <li>
    <a href="http://waf.cs.illinois.edu/discovery/illini_nation_through_120_years_of_illini_football/" target="_blank">&quot;Illini Nation through 120+ Years of Illini Football&quot;</a> (Oct. 2016); &gt;10,000 interactions
  </li>
  <li>
    <a href="http://waf.cs.illinois.edu/discovery/120_years_of_illini_football_by_coach/" target="_blank">&quot;120 Years of Illini Football, By Coach&quot;</a> (Oct. 2016); &gt;10,000 interactions
  </li>
  <li>
    <a href="http://waf.cs.illinois.edu/discovery/gpa_of_every_course_at_illinois/" target="_blank">&quot;GPAs of Every Course at The University of Illinois&quot;</a> (Apr. 2016); &gt;7,000,000 interactions
  </li>
  <li>
    <a href="discovery/">...or see all Data Driven Discoveries</a>
  </li>
</ul>


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
  <!-- 2013 -->
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

<hr>

<h3>Contact Me</h3>
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