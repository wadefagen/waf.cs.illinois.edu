---
layout: default
title: Visualizations
permalink: /visualizations/
---

## Visualizations

Interactive visualizations created to inspire, inform, and promote curiosity, often made in collaboration with students
from The University of Illinois.

<div class="row">
{% assign sorted = site.visualizations | sort: 'date' | reverse %}
{% for visualization in sorted %}
  <div class="col-md-4 col-12">
    <div class="card vcard">
      <div>
        {% if visualization.external-url %}<a href="{{ visualization.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
        {% if visualization.external-img %}
          <img src="{{ visualization.external-img }}" class="img-fluid">
        {% else %}
          <img src="{{ visualization.url | absolute_url }}{{ visualization.social-img }}" class="img-fluid">
        {% endif %}
        </a>
      </div>
      <div style="background-color: hsl(173, 30%, 95%);">
        {% if visualization.external-url %}<a href="{{ visualization.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
          <div class="title">{{ visualization.title }}</div>
        </a>
        <div class="authors">
          <b>By</b>: {{ visualization.author | array_to_sentence_string }}<br>
          <b>Published</b>: {{ visualization.date | date: "%B %Y" }}
        </div>
      </div>
    </div>
  </div>
{% endfor %}
</div>
