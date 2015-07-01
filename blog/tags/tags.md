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

<ul>
{% for tag in sortedtags %}
  <li><a id = "{{ tag }}" class='t' href="{{ site.url }}/blog/tags/{{ tag }}">{{ site.data.tags[tag].name }}</a></li>
{% endfor %}
</ul>