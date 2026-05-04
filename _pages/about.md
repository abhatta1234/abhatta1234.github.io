---
permalink: /
title: "Welcome! I'm happy you found your way here"
excerpt: "About me"
author_profile: true
classes: wide
redirect_from: 
  - /about/
  - /about.html
---
I am a **Machine Learning Scientist** at [Wayfair](https://www.wayfair.com/) in Boston, MA, where I post-train multimodal LLMs for fine-grained retrieval, develop cross-encoder rerankers for catalog deduplication, and design LLM-as-judge pipelines for relevance evaluation — together powering product discovery and catalog automation at scale.

I completed my **Ph.D. in Computer Science and Engineering** at the University of Notre Dame, advised by [Dr. Kevin Bowyer](https://academicweb.nd.edu/~kwb/) at the [Computer Vision Research Lab (CVRL)](https://cvrl.nd.edu/). My doctoral research explored multiple dimensions of face recognition technology, including mitigating bias, optimizing neural networks for efficiency on edge devices, ensuring biometric system security, and improving reliability of face identification search. I also worked on face foundation models with strong text–vision alignment for granular facial attributes. My work has been published at CVPR, ICCV, WACV, FG, IJCB, T-BIOM, and TTS, resulting in 3 patent applications.

I was fortunate to intern at Comcast with the Media Analytics Framework Team under [Dr. Mahmudul Hasan](https://mhasa004.github.io/) in Summer 2024, where I built multimodal models for contextual emotion prediction in video content, leveraging multi-branch transformer architectures, cross-attention mechanisms, and multimodal text encodings.


News
------
<div class="news-scroll" markdown="1">
* 2026/03: 📚 2 papers accepted at CVPR'26 (1 main + 1 workshop).
* 2025/12: 🎓 Successfully defended my PhD dissertation. Officially Dr. Bhatta!
* 2025/08: 🎉 Joined Wayfair as ML Scientist.
* 2025/07: 📚 One paper accepted at CV4BIOM@ICCV'25.
* 2025/06: 🎉 Passed AWS Certified Machine Learning Engineer – Associate Exam. See my [badge!](https://www.credly.com/badges/14ecf3d5-c67d-4195-b2ee-e97a0229ec2f/linked_in?t=sy5x72)
* 2025/02: 📚 3 papers accepted at IEEE FG'25. 
* 2025/01: 📚 1 paper accepted at IEEE TBIOM'25. 
* 2024/12: 🎓 Defended my Oral Candidacy. Officially a PhD Candidate Now!
* 2024/06: 📚 1 paper accepted at IEEE IJCB'24.
* 2024/06: 📚 1 paper accepted at IEEE TTS'24.
* 2024/06: 🎉 Started my Internship at Comcast.
* 2024/03: 📚 1 Paper accepted at CVPRW'24.
* 2024/01: 📚 2 Papers accepted at WACV'24.
* 2023/03: 📚 1 Papers accepted at CVPR'23.
* 2023/01: 📚 1 paper accepted to DVPBA@WACV'23.
* 2021/08: 🎓 Started my PhD in CSE Dept. at University of Notre Dame
* 2021/05: 🎓 Graduate from University of Mississippi with B.S (Hons) in Mechanical Engineering
* 2020/01: 🎉 Continuing my Co-op (part-time) for Spring'20 Semester at ThyssenKrupp AG
* 2019/01: 🎉 Started my full-time Engineering Co-op at ThyssenKrupp AG for a year
</div>

<style>
.experience-timeline {
  position: relative;
  max-width: 880px;
  height: 850px;
  margin: 0.8em auto 1.5em;
  padding: 0;
}
.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  margin-left: -1px;
  background: linear-gradient(to bottom, #2F5E87, #6f9dc7, #2F5E87);
  z-index: 0;
}
.exp-item {
  position: absolute;
  width: calc(50% - 38px);
  top:    calc((var(--total-months) - var(--end))   / var(--total-months) * 100%);
  height: calc((var(--end)         - var(--start)) / var(--total-months) * 100%);
  min-height: 132px;
  box-sizing: border-box;
  z-index: 1;
}
.exp-item.left  { left: 0; }
.exp-item.right { right: 0; }
.exp-item.current::before,
.exp-item.current::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 2px;
  background: #28a745;
  animation: exp-pulse 2s infinite;
}
.exp-item.current.left::before,
.exp-item.current.left::after  { right: -22px; }
.exp-item.current.right::before,
.exp-item.current.right::after { left:  -22px; }
.exp-item.current::before { top: 4px; }
.exp-item.current::after  { bottom: 4px; }
@keyframes exp-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4); }
  50%      { box-shadow: 0 0 0 4px rgba(40, 167, 69, 0.2); }
}
.exp-card {
  height: 100%;
  background: #ffffff;
  border: 1px solid #e6e8eb;
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.exp-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.exp-logo-region {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin-bottom: 6px;
}
.exp-logo {
  max-height: 100%;
  max-width: 72%;
  object-fit: contain;
  display: block;
}
.exp-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
}
.exp-role {
  font-weight: 600;
  font-size: 0.95em;
  color: #2b2b2b;
  line-height: 1.3;
}
.exp-org {
  color: #2F5E87;
  font-weight: 500;
  font-size: 0.9em;
  line-height: 1.3;
}
.exp-dates {
  color: #666;
  font-size: 0.82em;
  margin-top: 2px;
}
@media (max-width: 720px) {
  .experience-timeline {
    height: auto;
    padding: 0.5em 0;
  }
  .experience-timeline::before {
    left: 14px;
  }
  .exp-item {
    position: static;
    width: calc(100% - 40px);
    height: auto;
    min-height: 0;
    margin: 0 0 1.2em 40px !important;
    top: auto;
  }
  .exp-item.left,
  .exp-item.right {
    left: auto;
    right: auto;
  }
  .exp-item::before,
  .exp-item::after {
    display: none;
  }
}

/* ---- Year ticks: prominent inline capsules pinned to the central line ---- */
.year-tick {
  position: absolute;
  left: 50%;
  top: calc((var(--total-months) - var(--y)) / var(--total-months) * 100%);
  transform: translate(-50%, -50%);
  background: #dceaf5;
  border: 1px solid #6f9dc7;
  border-radius: 999px;
  padding: 2px 10px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #2F5E87;
  z-index: 2;
  pointer-events: auto;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(47, 94, 135, 0.10);
  transition: background 0.2s ease, border-color 0.2s ease,
              box-shadow 0.2s ease, transform 0.2s ease;
}
.year-tick:hover {
  background: #b8d4ec;
  border-color: #2F5E87;
  box-shadow: 0 3px 10px rgba(47, 94, 135, 0.22);
  transform: translate(-50%, -50%) scale(1.06);
}
.year-tick::after {
  content: '\2726';
  position: absolute;
  top: -6px;
  right: -8px;
  font-size: 0.9em;
  color: #6f9dc7;
  opacity: 0;
  transform: rotate(0deg) scale(0.6);
  transition: opacity 0.2s ease;
  pointer-events: none;
}
.year-tick:hover::after {
  opacity: 1;
  animation: year-tick-twinkle 1.2s ease-in-out infinite;
}
@keyframes year-tick-twinkle {
  0%, 100% { opacity: 0.4; transform: rotate(0deg)  scale(0.7); }
  50%      { opacity: 1;   transform: rotate(20deg) scale(1.0); }
}
@media (max-width: 720px) {
  .year-tick { display: none; }
}

/* ---- Animated section titles (Experience, News, Selected Publications, Services) ---- */
.page__content > h2 {
  display: block !important;
  width: 100% !important;
  position: relative !important;
  font-size: 1.6em !important;
  font-weight: 700 !important;
  margin-top: 1.0em !important;
  margin-bottom: 0.4em !important;
  padding-bottom: 6px !important;
  letter-spacing: -0.01em !important;
  background: linear-gradient(
    90deg,
    #2F5E87 0%,
    #4a90e2 25%,
    #6f9dc7 50%,
    #4a90e2 75%,
    #2F5E87 100%
  ) !important;
  background-size: 200% auto !important;
  -webkit-background-clip: text !important;
          background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  color: transparent !important;
  animation: section-shimmer 6s linear infinite !important;
}
.page__content > h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #2F5E87, #6f9dc7, transparent);
  transform-origin: left;
  animation: section-underline 1.1s ease-out both;
}
@keyframes section-shimmer {
  0%   { background-position: 0% center; }
  100% { background-position: 200% center; }
}
@keyframes section-underline {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* ---- Services list (elegant pills) ---- */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0.4em 0 1.2em;
  max-width: 880px;
}
.service-row {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 14px 10px 16px;
  background: #fafbfc;
  border: 1px solid #eceff3;
  border-left: 3px solid #2F5E87;
  border-radius: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-left-color 0.2s ease;
}
.service-row:hover {
  transform: translateX(3px);
  box-shadow: 0 2px 10px rgba(47, 94, 135, 0.10);
  border-left-color: #4a90e2;
}
.service-year {
  flex: 0 0 auto;
  min-width: 56px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  font-size: 1.02em;
  color: #2F5E87;
  letter-spacing: 0.02em;
}
.service-venues {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.venue-pill {
  display: inline-block;
  padding: 4px 12px;
  background: #ffffff;
  border: 1px solid #d9dde3;
  border-radius: 999px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.83em;
  font-weight: 500;
  color: #2b2b2b;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}
.venue-pill:hover {
  background: #2F5E87;
  color: #ffffff;
  border-color: #2F5E87;
  transform: translateY(-1px);
}
@media (max-width: 600px) {
  .service-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .service-year {
    min-width: 0;
  }
}
</style>

Timeline
------
<div class="experience-timeline" style="--total-months: 117;">
  <span class="year-tick" style="--y: 113;">2026</span>
  <span class="year-tick" style="--y: 77;">2023</span>
  <span class="year-tick" style="--y: 41;">2020</span>
  <span class="year-tick" style="--y: 5;">2017</span>
  <div class="exp-item left current" style="--start: 108; --end: 117;">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/wayfair.png" alt="Wayfair logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">Machine Learning Scientist</span>
        <span class="exp-org">Wayfair</span>
        <span class="exp-dates">Aug 2025 – Present</span>
      </div>
    </div>
  </div>
  <div class="exp-item right" style="--start: 60; --end: 112;">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/nd.jpeg" alt="University of Notre Dame logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">Ph.D., Computer Science &amp; Engineering</span>
        <span class="exp-org">University of Notre Dame, CVRL</span>
        <span class="exp-dates">Aug 2021 – Dec 2025</span>
      </div>
    </div>
  </div>
  <div class="exp-item left" style="--start: 94; --end: 97;">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/comcast.png" alt="Comcast logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">ML Research Intern</span>
        <span class="exp-org">Comcast, Media Analytics Framework</span>
        <span class="exp-dates">Jun – Aug 2024</span>
      </div>
    </div>
  </div>
  <div class="exp-item right" style="--start: 0; --end: 57;">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/olemiss.webp" alt="University of Mississippi logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">B.S. (Hons), Mechanical Engineering</span>
        <span class="exp-org">University of Mississippi</span>
        <span class="exp-dates">Aug 2016 – May 2021</span>
      </div>
    </div>
  </div>
  <div class="exp-item left" style="--start: 29; --end: 45;">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/thyssenkrupp.png" alt="ThyssenKrupp logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">Engineering Co-op</span>
        <span class="exp-org">ThyssenKrupp AG</span>
        <span class="exp-dates">Jan 2019 – May 2020</span>
      </div>
    </div>
  </div>
</div>

Selected Publications
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/in-out.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>Are you In or Out (of gallery)? Wisdom from the Same-Identity Crowd</strong><br>
    <strong><u>Aman Bhatta</u></strong>, Maria Dhakal, Michael C. King, Kevin W. Bowyer<br>
    <em>IEEE / CVF CV4BIOM @ International Conference on Computer Vision </em> (ICCV), 2025.<br>
    <!-- <a href="[Link to paper]" target="_blank">Paper</a> -->
  </div>
</div>
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/revocable.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>Deep CNN Face Matchers Inherently Support Revocable Biometric Templates</strong><br>
    <strong><u>Aman Bhatta</u></strong>, Michael C. King, Kevin W. Bowyer <br>
    <em> IEEE Automatic Face and Gesture Recognition </em> (FG), 2025. (Oral 🏆)<br>
    <!-- <a href="[Link to paper]" target="_blank">Paper Soon</a> | <a href="https://github.com/abhatta1234/Revocable-Biometrics" target="_blank">Code</a> -->
  </div>
</div>
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/craft.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>CRAFT: Contextual Re-Activation of Filters for face recognition Training</strong><br>
    <strong><u>Aman Bhatta</u></strong>, Domingo Mery, Haiyu Wu, Kevin W. Bowyer<br>
    <em> IEEE Automatic Face and Gesture Recognition </em> (FG), 2025.<br>
    <!-- <a href="https://arxiv.org/pdf/2312.00072" target="_blank">Paper</a> | <a href="https://github.com/abhatta1234/CRAFT" target="_blank">Code</a> -->
  </div>
</div>
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/tbiom.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>What's color got to do with it? Face recognition in grayscale</strong><br>
     <strong><u>Aman Bhatta</u></strong>, Domingo Mery, Haiyu Wu, Joyce Annan, Michael C. King, Kevin W. Bowyer<br>
    <em>IEEE Transactions on Biometrics, Behavior, and Identity Science </em> (T-BIOM), 2025.<br>
    <!-- <a href="https://arxiv.org/pdf/2309.05180" target="_blank">Paper</a> -->
  </div>
</div>
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/ijcb.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>Revisiting Linearization of Spatial Maps in SoTA Face Recognition Backbone</strong><br>
     <strong><u>Aman Bhatta</u></strong>, Haiyu Wu, Kagan Ozturk, Kevin W. Bowyer<br>
    <em>IEEE International Joint Conference on Biometrics </em> (IJCB), 2024.<br>
    <!-- <a href="/papers/ijcb24.pdf" target="_blank">Paper</a> -->
  </div>
</div>
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/tcv.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>Our Deep CNN Face Matchers Have Developed Achromatopsia</strong><br>
     <strong><u>Aman Bhatta</u></strong>, Domingo Mery, Haiyu Wu, Joyce Annan, Michael C. King, Kevin W. Bowyer<br>
    <em>IEEE / CVF TCV @ Conference on Computer Vision and Pattern Recognition </em> (CVPR), 2024.<br>
    <!-- <a href="https://openaccess.thecvf.com/content/CVPR2024W/TCV2024/papers/Bhatta_Our_Deep_CNN_Face_Matchers_Have_Developed_Achromatopsia_CVPRW_2024_paper.pdf" target="_blank">Paper</a> -->
  </div>
</div>
------
<div style="display:flex;align-items:flex-start;" class="publication-entry">
  <img src="/images/paper/logical.png" alt="Publication Thumbnail" style="width:300px;height:auto;object-fit:cover;margin-right:20px;">
  <div>
    <strong>Logical Consistency and Greater Descriptive Power for Facial Hair Attribute
Learning</strong><br>
     Haiyu Wu, Grace Bezold, <strong><u>Aman Bhatta</u></strong>, Kevin W. Bowyer<br>
    <em>IEEE / CVF Computer Vision and Pattern Recognition Conference </em> (CVPR), 2023.<br>
    <!-- <a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Wu_Logical_Consistency_and_Greater_Descriptive_Power_for_Facial_Hair_Attribute_CVPR_2023_paper.pdf" target="_blank">Paper</a> -->
  </div>
</div>
---

Services
------
<div class="services-list">
  <div class="service-row">
    <span class="service-year">2026</span>
    <div class="service-venues">
      <span class="venue-pill">Pattern Recognition</span>
      <span class="venue-pill">CVPR 2026</span>
      <span class="venue-pill">NeurIPS 2026</span>
    </div>
  </div>
  <div class="service-row">
    <span class="service-year">2025</span>
    <div class="service-venues">
      <span class="venue-pill">WACV 2025</span>
      <span class="venue-pill">CVPR 2025</span>
      <span class="venue-pill">ICCV 2025</span>
      <span class="venue-pill">FG 2025</span>
    </div>
  </div>
  <div class="service-row">
    <span class="service-year">2024</span>
    <div class="service-venues">
      <span class="venue-pill">WACV 2024</span>
      <span class="venue-pill">CVPR 2024</span>
      <span class="venue-pill">ECCV 2024</span>
    </div>
  </div>
  <div class="service-row">
    <span class="service-year">2023</span>
    <div class="service-venues">
      <span class="venue-pill">WACV 2023</span>
      <span class="venue-pill">IEEE T-IP 2023</span>
      <span class="venue-pill">IJCB 2023</span>
    </div>
  </div>
  <div class="service-row">
    <span class="service-year">2022</span>
    <div class="service-venues">
      <span class="venue-pill">WACV 2022</span>
      <span class="venue-pill">ICPR 2022</span>
    </div>
  </div>
</div>


