---
title: GPA Visualizations
slug: custom-bc
layout: viz

bc1: visualizations
bc1_url: /visualizations/

permalink: /discovery/gpa/

disableFooter: True

# Legacy
templateEngineOverride: liquid, md
---

<h1>GPA Visualizations</h1>

These works are student-created interactive visualizations that are each the result of data-driven analysis of the ["GPA Dataset"](https://github.com/wadefagen/datasets/tree/master/gpa#data-source). If you find the work inspiring, feel free to share them!

<div class="row">
{% assign sorted = collections.visualization_gpa | sort: 'date' | reverse %}
{% for visualization in sorted %}
  <div class="col-md-4 col-12">
    <div class="card vcard" style="border-color: #13294B;">
      <div>
        {% if visualization.data.external-url %}<a href="{{ visualization.data.external-url }}">{% else %}<a href="{{ visualization.url }}">{% endif %}
        {% if visualization.data.external-img %}
          <img src="{{ visualization.data.external-img }}" class="img-fluid">
        {% else %}
          <img src="{{ visualization.url }}{{ visualization.data.social-img }}" class="img-fluid">
        {% endif %}
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
