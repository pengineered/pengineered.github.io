---
layout: archive
permalink: /projects/
title: "Projects"
---
{% if site.categories.project %}
<div class="tiles">
	{% for post in site.categories.project %}
		{% include post-grid.html %}
	{% endfor %}
</div><!-- /.tiles -->
{% else %}
<p class='notice-brown'>No projects... yet!</p>
{% endif %}