---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

The Geosystems Engineering and Intelligence Laboratory (GEI) at UCF study multiple geological hazards, such as earthquakes, landslides, liquefaction, coastal erosion, and their effects on infrastructure systems using a wide range of approaches, including remote sensing, signal processing, geomaterial testing, computational simulation, applied statistics, and machine learning. Main research thrusts include site-specific and regional assessment of earthquake site responses, ground-motion modeling, near-real-time liquefaction hazard assessment, landslide mechanism and mitigation, geospatial surrogate modeling, and uncertainty quantification. Summaries of my contributions in the mentioned areas are presented below.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
