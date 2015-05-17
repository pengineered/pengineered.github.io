---
layout: bare
permalink: /
title: "Justin Lee"
---

<html>
	<head>
		<title>{% if page.title %}{{ page.title }} • {% endif %}{{ site.title }}</title>
    {% if page.excerpt %}<meta name="description" content="{{ page.excerpt | strip_html }}">{% endif %}
    {% if page.tags %}<meta name="keywords" content="{{ page.tags | join: ', ' }}">{% endif %}
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,300italic,400italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Bree+Serif' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{ "/css/acrostic.css" | prepend: site.baseurl }}">
    <link rel="stylesheet" href="{{ "/css/animsition.min.css" | prepend: site.baseurl }}">
    <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
	</head>
	<body>
    <div class='animsition'>
      <div class='wrapper'>
      	<div class='projects center'>
        	<a href='/projects' class='animsition-link'>
          		<div class='pro fade'>pro</div>
          		<div class='j name'>j</div>
          		<div class='ects fade'>ects</div>
        	</a>
      	</div>
      	<div class='u name center'>u</div>
      	<div class='s name center'>s</div>
      	<div class='about center'>
        	<a href='/about' class='animsition-link'>
        		<div class='abou fade'>abou</div>
        		<div class='t name'>t</div>
        	</a>
      	</div>
      	<div class='i name center'>i</div>
      	<div class='contact center'>
        	<a href='/contact' class='animsition-link'>
          		<div class='co fade'>co</div>
          		<div class='n name'>n</div>
          		<div class='tact fade'>tact</div>
        	</a>
      	</div>
      	<div class='blog center'>
        	<a href='/blog' class='animsition-link'>
            	<div class='b fade'>b</div>
                <div class='l name'>l</div>
                <div class='og fade'>og</div>
            </a>
        </div>
      	<div class='e name center'>e</div>
      	<div class='resume center'>
        	<a href='/resume' class='animsition-link'>
          		<div class='r fade'>r</div>
          		<div class='e2 name'>e</div>
          		<div class='sume fade'>sume</div>
        	</a>
      	</div>
      </div>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="{{ "/js/jquery.animsition.min.js" | prepend: site.baseurl }}"></script>
    <script src="{{ "/js/acrostic.js" | prepend: site.baseurl }}"></script>
	</body>
</html>