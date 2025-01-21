---
layout: default
title: Visualizations
permalink: /visualizations/

# Legacy
templateEngineOverride: liquid, md
---

# Visualizations

Interactive visualizations created to inspire, inform, and promote curiosity, often made in collaboration with students from The University of Illinois.

<div class="row">
{% assign sorted = collections.visualization | sort: 'date' | reverse %}
{% for visualization in sorted %}
  <div class="col-md-4 col-12">
    <div class="card vcard" style="border-color: #13294B;">
      <div>
        {%- if visualization.data.external-url -%}
        <a href="{{ visualization.data.external-url }}">
        {%- else -%}
        <a href="{{ visualization.url }}">
        {%- endif -%}
        
        {%- if visualization.data.external-img -%}
          <img src="{{ visualization.data.external-img }}" class="img-fluid">
        {%- else -%}
          <img src="{{ visualization.url }}{{ visualization.data.social-img }}" class="img-fluid">
        {%- endif -%}
        </a>
      </div>
      <div style="background-color: white;">
        {% if visualization.external-url %}<a href="{{ visualization.data.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
          <div class="title">{{ visualization.title }}</div>
        </a>
        <div class="authors">
          <b>By</b>: {{ visualization.data.author | array_to_sentence_string }}<br>
          {% if visualization.data.updated -%}
          <b>Last Updated</b>: {{ visualization.data.updated | date: "%B %Y" }}
          {%- else -%}
          <b>Published</b>: {{ visualization.date | date: "%B %Y" }}
          {%- endif %}
        </div>
      </div>
    </div>
  </div>
{% endfor %}
</div>
