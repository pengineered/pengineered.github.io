---
layout: archive
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
{% assign tagcolor = site.data.tags[tag].color %}
<style>
{% if tagcolor %}
	#{{ tag }}{
				border-bottom-color:#{{ tagcolor }};
				box-shadow:inset 0 -3px 0 #{{ tagcolor }};
			}
			#{{ tag }}:hover, #{{ tag }}:active{
				background:#{{ tagcolor }};
			}
   	{% endif %}
</style>
{% else %}
<p class='notice-brown'>There are no tags.</p>
{% endif %}
