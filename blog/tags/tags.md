---
layout: tagcloud
permalink: /blog/tags/
title: "Tags"
---
{% if site.tags.size > 0 %}
<ul>
	{% capture tags %}
		{% for tag in site.tags %}
			{{ tag[0] }}
		{% endfor %}
	{% endcapture %}
	{% assign sortedtags = tags | split:' ' | sort %}
		{% for tag in sortedtags %}
  			<li><a id = "{{ tag }}" class='t' href="{{ site.url }}/blog/tags/{{ tag }}">{{ site.data.tags[tag].name }}</a></li>
		{% endfor %}
</ul>
{% else %}
<p class='notice-brown'>There are no tags.</p>
{% endif %}
