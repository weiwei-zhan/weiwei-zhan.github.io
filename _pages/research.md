---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
header:
  og_image: "research/ecdf.png"
---

The goal of my research is to understand the driving mechanisms of natural hazards and to provide novel tools for infrastructure resilience design and natural hazard mitigation. To accomplish this, I have used a combination of applied machine learning, computational geomechanics, remote sensing, and signal processing with broad applications in geotechnical earthquake engineering and engineering geology. The applications of my research span from full-cycle landslide hazard assessment to data-driven seismic site response assessment, and to earthquake hazards mitigation via data-driven and physics-based methods. Summaries of my contributions in the mentioned areas are presented below.

My academic research falls into two main areas: understanding the influence of
geography on actor behavior before, during, and after civil conflict, and
developing new tools to improve the study of institutions (both formal and
informal) in peace and conflict. One strand of research in this first area
explores how the territories that ethnic groups inhabit shape rebel group
formation and condition their relationship with the state. My interest in
geography also informs projects on active conflicts including the targeting of
UN peacekeepers by insurgent groups, civilian victimization after rebel
territorial conquest, and communal violence in fragile settings.

My other main research agenda uses advanced methods to develop new measures of
institutions. One project uses Bayesian item response theory to measure the
strength of peace agreements as a latent variable and free researchers from
post-treatment bias caused by using the duration of agreements as a proxy for
their strength. In others, I apply unsupervised learning techniques to over a
billion observations of product-level international trade data to measure
economic interdependence and illicit economic exchange.

In a new avenue of research, I leverage social media data to explore
participation in extremist movements across multiple contexts, gaining insight
into the early stages of radicalization.

<nbsp>

{% include base_path %}

{% assign ordered_pages = site.research | sort:"order_number" %}

{% for post in ordered_pages %}
  {% include archive-single.html type="grid" %}
{% endfor %}
