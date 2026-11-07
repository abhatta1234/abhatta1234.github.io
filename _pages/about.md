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
I am an **AI Research Scientist** at [Axon Enterprise Inc.](https://www.axon.com/) in Seattle, WA.

Previously, I was a **Machine Learning Scientist** at [Wayfair](https://www.wayfair.com/) in Boston, MA, where I post-trained multimodal LLMs for fine-grained retrieval, developed cross-encoder rerankers for catalog deduplication, and designed LLM-as-judge pipelines for relevance evaluation — efforts that together powered product discovery and catalog automation at scale. I completed my **Ph.D. in Computer Science and Engineering** at the University of Notre Dame, advised by [Dr. Kevin Bowyer](https://academicweb.nd.edu/~kwb/) at the [Computer Vision Research Lab (CVRL)](https://cvrl.nd.edu/). My doctoral research explored multiple dimensions of face recognition technology, including mitigating bias, optimizing neural networks for efficiency on edge devices, ensuring biometric system security, and improving reliability of face identification search. I also worked on face foundation models with strong text–vision alignment for granular facial attributes. My work has been published at CVPR, ICCV, WACV, FG, IJCB, T-BIOM, and TTS, resulting in 3 patent applications.

I was fortunate to intern at Comcast with the Media Analytics Framework Team in Summer 2024, where I built multimodal models for contextual emotion prediction in video content, leveraging multi-branch transformer architectures, cross-attention mechanisms, and multimodal text encodings.


News
------
<div class="news-scroll" markdown="1">
* 2026/08: 🎉 Joined Axon Enterprise Inc. as an AI Research Scientist.
* 2026/06: 🏆 Received the <a class="news-award-pill news-award-link" href="https://www.linkedin.com/feed/update/urn:li:activity:7473018582461906944/">Wayfair Technology Rookie of the Year</a> award.
  <span class="news-award-detail">For contributions to <strong>CaMmo 2.0</strong> (multimodal encoder service) and <strong>Option Grouping</strong> (product grouping service).</span>
  <span class="news-award-note">See my manager's view on this — humbled and honored by this recognition.</span>
* 2026/06: 🏆 Our team received the <span class="news-award-pill">Wayfair Technology Outstanding Technology Team</span> award.  
  Proud to have contributed to the Option Grouping (product grouping) service with this team.
* 2026/03: 📚 2 papers accepted at CVPR'26.
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
.page__content .experience-timeline,
.experience-timeline {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px minmax(0, 1fr);
  gap: 20px 0;
  margin: 0.8em 0 1.5em !important;
  padding: 0 !important;
  list-style: none;
}
.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 12px;
  bottom: 24px;
  width: 2px;
  margin-left: -1px;
  background: #dce5ed;
}
.exp-item { position: relative; min-width: 0; margin: 0 !important; align-self: start; }
.exp-item.work { grid-column: 1; }
.exp-item.education { grid-column: 3; margin-top: 32px !important; }
.exp-item:nth-child(1) { grid-row: 1; }
.exp-item:nth-child(2), .exp-item:nth-child(3) { grid-row: 2; }
.exp-item:nth-child(4), .exp-item:nth-child(5) { grid-row: 3; }
.exp-item:nth-child(6) { grid-row: 4; }
.exp-item::before {
  content: '';
  position: absolute;
  top: 28px;
  right: -36px;
  width: 36px;
  height: 1px;
  background: #9cb5cb;
  transform: rotate(-26.565deg);
  transform-origin: left center;
}
.exp-item.education::before { top: 12px; left: -32px; right: auto; transform: rotate(26.565deg); }
.exp-item::after {
  content: '';
  position: absolute;
  top: 7px;
  right: -37px;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 50%;
  background: #6f9dc7;
}
.exp-item.education::after { left: -37px; right: auto; }
.exp-item.current::after { background: #267541; }
.exp-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  box-sizing: border-box;
  padding: 14px;
  background: #fff;
  border: 1px solid #e0e7ee;
  border-radius: 10px;
}
.exp-item.current .exp-card { border-color: #88bb9b; }
.exp-current { color: #267541; font-size: 0.7em; }
.exp-watermark {
  position: absolute;
  z-index: -1;
  inset: auto 8px 6px auto;
  width: 70%;
  opacity: 0.04;
  text-align: center;
  pointer-events: none;
}
.exp-watermark img { display: block; width: 100%; }
.exp-watermark span { display: block; margin-top: 3px; font-size: 1.1em; font-weight: 700; white-space: nowrap; }
.exp-logo-region { display: flex; align-items: center; justify-content: center; height: 36px; }
.exp-logo { display: block; max-height: 100%; max-width: 100%; object-fit: contain; }
.exp-text { display: flex; flex-direction: column; gap: 5px; }
.exp-role { font-weight: 600; font-size: 0.9em; color: #2b2b2b; line-height: 1.35; }
.exp-org { color: #2F5E87; font-size: 0.8em; line-height: 1.4; }
.exp-dates { color: #666; font-size: 0.72em; line-height: 1.4; margin-top: 3px; }
@media (max-width: 759px) {
  .page__content .experience-timeline,
  .experience-timeline { grid-template-columns: minmax(0, 1fr); gap: 16px; padding-left: 32px !important; }
  .experience-timeline::before { left: 10px; }
  .exp-item:nth-child(n) { grid-column: 1; grid-row: auto; margin-top: 0 !important; }
  .exp-item:nth-child(n)::before { top: 12px; left: -22px; right: auto; width: 22px; transform: none; }
  .exp-item:nth-child(n)::after { left: -27px; right: auto; }
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
<ol class="experience-timeline" id="career-timeline" aria-label="Career timeline, most recent first">
  <li class="exp-item work current">
    <div class="exp-card">
      <div class="exp-watermark" aria-hidden="true"><img src="/images/axon.svg" alt=""><span>Protect Life</span></div>
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/axon.svg" alt="Axon Enterprise Inc. logo">
      </div>
      <div class="exp-text">
        <span class="exp-current">Current</span>
        <span class="exp-role">AI Research Scientist</span>
        <span class="exp-org">Axon Enterprise Inc.</span>
        <span class="exp-dates">Aug 2026 – Present</span>
      </div>
    </div>
  </li>
  <li class="exp-item work">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/wayfair.png" alt="Wayfair logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">Machine Learning Scientist</span>
        <span class="exp-org">Wayfair</span>
        <span class="exp-dates">Aug 2025 – Aug 2026</span>
      </div>
    </div>
  </li>
  <li class="exp-item education">
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
  </li>
  <li class="exp-item work">
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
  </li>
  <li class="exp-item education">
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
  </li>
  <li class="exp-item work">
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
  </li>
</ol>

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


