---
layout: home
permalink: /home/
image:
  feature: home-1600x600.jpg
---



<div class="tiles">

{% for post in site.posts offset:0 limit:4  %}
	{% include post-grid.html %}
{% endfor %}

</div><!-- /.tiles -->