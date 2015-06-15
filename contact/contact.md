---
layout: article
permalink: /contact/
title: "Contact"
share: false
---

<form action="http://formspree.io/leejustinwill@gmail.com" method="post">

  <input type='hidden' name='_next' value='https://pengineered.github.io/contact/success/' />

  <h3>Name</h3>
  <input type='text' name='name' placeholder="Name"/>

  <h3>E-mail</h3>
  <input type='email' name='email' placeholder="E-mail"/>

  <h3>Message</h3>
  <textarea name='message' placeholder="Message"></textarea>

  <!-- Spam filter -->
  <input type="text" name="_gotcha" style="display:none" />

  <!-- Subject -->
  <input type="hidden" name="_subject" value="New submission from contact form!" />

  <input type='submit' value='Submit' />
</form>

Note: The contact form uses a service called [Formspree](http://formspree.io/), which directly sends user input to my inbox without storing any information. More information can be found [here]({{ site.url }}/terms/).

###Alternate methods
Currently, the best way to contact me is by email:

leejustinwill at [that mail service by google](gmail.com)