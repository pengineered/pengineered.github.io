---
layout: archive
permalink: /blog/tags/
---
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 id="{{ tag }}">{{ tag }}</h3>
  <ul>
  {% for tag in site.tags[tag] %}
    <li><a href="{{ site.url }}/blog/tags/{{ tag }}">{{ site.data.tags[tag].name }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}