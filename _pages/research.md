---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

The goal of my research is to understand the driving mechanisms of natural hazards and to provide novel tools for infrastructure resilience design and natural hazard mitigation. To accomplish this, I have used a combination of applied machine learning, computational geomechanics, remote sensing, signal processing, , geospatial analysis, and big data with broad applications in geotechnical earthquake engineering and engineering geology. The applications of my research include full-cycle landslide hazard assessment, neal-real-time liquefaction detection, site response and ground-motion modeling, and remote sensing and geospatial analytics. Summaries of my contributions in the mentioned areas are presented below.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
