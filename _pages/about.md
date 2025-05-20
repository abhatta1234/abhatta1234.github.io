---
permalink: /
title: "Aman Bhatta - Personal Page"
excerpt: "General introduction, research interests, publications, news, and services of Aman Bhatta."
layout: single # Minimal Mistakes single layout is flexible
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## About Me & Research Interests
Hello and Welcome to my webpage. I hope you are doing well!! 😀😀 <br><br>
I am a third year Computer Science and Engineering PhD student at the University of Notre Dame. I am advised by Dr. Kevin Bowyer and a member of Computer Vision Research Laboratory([CVRL](https://cvrl.nd.edu/)). I received my Bachelor's Degree with Honors in Mechanical Engineering from the University of Mississippi. 

I have a broad interest in research topics related to deep learning and computer vision. Specifically, in the long run, I aim to pursue a research career focused on **long-range video understanding and generation**. I believe this is only possible using multi-modality by harnessing the features from text, videos, and audios combined. My current PhD research projects primarily concentrate on face recognition, with a particular emphasis on uncovering and addressing accuracy differentials among demographic groups to promote fairness in AI systems.

---
<section id="publications">
  ## Publications
  <div id="publications-container" class="entries-grid">
    <!-- Publications will be loaded here by JavaScript -->
    <p><em>Loading publications...</em></p>
  </div>
  <p><em>For a sleek, movable block, JavaScript is used. Further enhancements for drag/drop or carousels can be added later.</em></p>
</section>

---
<section id="news">
  ## News
  {% assign posts_sorted = site.posts | sort: 'date' | reverse %}
  <div class="entries-list">
    {% for post in posts_sorted limit:5 %}
      {% include archive-single.html type="list" %}
    {% else %}
      <p>No news items found yet. Please add some to the <code>_posts</code> folder.</p>
    {% endfor %}
  </div>
  {% if site.posts.size > 5 %}
    <p><a href="/year-archive/">View all news...</a></p> {# Assumes you might want a year archive page later #}
  {% endif %}
</section>

---
<section id="services">
  ## Services
  <ul>
    <li>Reviewer - ICPR 2022, WACV 2022, WACV 2023, WACV 2024, TIP 2023, IJCB 2023, CVPR 2024</li>
    <!-- Add other services here as <li> elements -->
    <!-- Example: <li><i class="fas fa-chalkboard-teacher"></i> Mentored students for X program (2023)</li> -->
  </ul>
</section>

