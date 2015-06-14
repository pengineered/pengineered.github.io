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
  <h3 id="{{ tag }}"><a href="{{ site.url }}/blog/tags/{{ tag }}">{{ site.data.tags[tag].name }}</a></h3>
{% endfor %}