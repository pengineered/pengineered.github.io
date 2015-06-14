---
layout: archive
permalink: /blog/tags/
title: "Tags"
---
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <a href="{{ site.url }}/blog/tags/{{ tag }}">{{ site.data.tags[tag].name }}</a>
{% endfor %}