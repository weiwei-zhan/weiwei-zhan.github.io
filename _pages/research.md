---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

The goal of my research is to understand the driving mechanisms of natural hazards and to provide novel tools for infrastructure resilience design and natural hazard mitigation. To accomplish this, I have used a combination of applied machine learning, computational geomechanics, remote sensing, and signal processing with broad applications in geotechnical earthquake engineering and engineering geology. The applications of my research span from full-cycle landslide hazard assessment to data-driven seismic site response assessment, and to earthquake hazards mitigation via data-driven and physics-based methods. Summaries of my contributions in the mentioned areas are presented below.


<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
