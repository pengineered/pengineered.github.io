---
layout: archive
permalink: /blog/
title: "Blog"
---
{% if site.categories.blog %}
<div class="tiles">
	{% for post in site.categories.blog %}
		{% include post-grid.html %}
	{% endfor %}
</div><!-- /.tiles -->
{% else %}
<p class='notice-brown'>No posts... yet!</p>
{% endif %}