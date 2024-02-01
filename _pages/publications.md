---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


<<<<<<< HEAD
Full list of publications see [Google Scholar] (https://scholar.google.com/citations?user=4qUWQVAAAAAJ&hl=en).
=======
Full list of publications see Google Scholar (https://scholar.google.com/citations?user=4qUWQVAAAAAJ&hl=en).
>>>>>>> 8c6f69a8ab734ed0fdc3d29b46af95ab528c3ad9

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<sup>*</sup> Corresponding author