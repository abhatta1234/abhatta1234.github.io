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

I completed my **Ph.D. in Computer Science and Engineering** at the University of Notre Dame, advised by [Dr. Kevin Bowyer](https://www3.nd.edu/~kwb/) at the [Computer Vision Research Lab (CVRL)](https://cvrl.nd.edu/). My doctoral research explored multiple dimensions of face recognition technology, including mitigating bias, optimizing neural networks for efficiency on edge devices, ensuring biometric system security, and improving reliability of face identification search. I also worked on face foundation models with strong text–vision alignment for granular facial attributes. My work has been published at CVPR, ICCV, WACV, FG, IJCB, T-BIOM, and TTS, resulting in 3 patent applications.

I was fortunate to intern at Comcast with the Media Analytics Framework Team under [Dr. Mahmudul Hasan](https://mhasa004.github.io/) in Summer 2024, where I built multimodal models for contextual emotion prediction in video content, leveraging multi-branch transformer architectures, cross-attention mechanisms, and multimodal text encodings.


News
------
<div class="news-scroll" markdown="1">
* 2026/03: 📚 2 papers accepted at CVPR'26 (1 main + 1 workshop).
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
  max-width: 820px;
  margin: 1em auto 2em;
  padding: 0.5em 0;
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
  position: relative;
  width: calc(50% - 32px);
  margin: 0 0 1.5em 0 !important;
  box-sizing: border-box;
  z-index: 1;
}
.exp-item.left {
  margin-left: 0 !important;
  margin-right: auto !important;
}
.exp-item.right {
  margin-left: auto !important;
  margin-right: 0 !important;
}
.exp-item::after {
  content: '';
  position: absolute;
  top: 28px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #6f9dc7;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #2F5E87;
}
.exp-item.left::after {
  right: -39px;
}
.exp-item.right::after {
  left: -39px;
}
.exp-item.current::after {
  background: #28a745;
  box-shadow: 0 0 0 2px #28a745;
  animation: exp-pulse 2s infinite;
}
@keyframes exp-pulse {
  0%, 100% { box-shadow: 0 0 0 2px #28a745; }
  50%      { box-shadow: 0 0 0 6px rgba(40, 167, 69, 0.25); }
}
.exp-card {
  background: #ffffff;
  border: 1px solid #e6e8eb;
  border-radius: 10px;
  padding: 14px 16px 16px;
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
  height: 64px;
  margin-bottom: 10px;
}
.exp-logo {
  max-height: 100%;
  max-width: 78%;
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
  font-size: 1em;
  color: #2b2b2b;
  line-height: 1.3;
}
.exp-org {
  color: #2F5E87;
  font-weight: 500;
  font-size: 0.95em;
  line-height: 1.3;
}
.exp-dates {
  color: #666;
  font-size: 0.85em;
  margin-top: 2px;
}
@media (max-width: 600px) {
  .experience-timeline::before {
    left: 14px;
  }
  .exp-item.left,
  .exp-item.right {
    width: calc(100% - 40px);
    margin-left: 40px !important;
    margin-right: 0 !important;
  }
  .exp-item.left::after,
  .exp-item.right::after {
    left: -32px;
    right: auto;
  }
}
</style>

Experience
------
<div class="experience-timeline">
  <div class="exp-item left">
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
  <div class="exp-item right">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/olemiss.webp" alt="University of Mississippi logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">B.S. (Hons), Mechanical Engineering</span>
        <span class="exp-org">University of Mississippi</span>
        <span class="exp-dates">Graduated May 2021</span>
      </div>
    </div>
  </div>
  <div class="exp-item right">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/nd.jpeg" alt="University of Notre Dame logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">Ph.D., Computer Science &amp; Engineering</span>
        <span class="exp-org">University of Notre Dame, CVRL</span>
        <span class="exp-dates">Aug 2021 – 2025</span>
      </div>
    </div>
  </div>
  <div class="exp-item left">
    <div class="exp-card">
      <div class="exp-logo-region">
        <img class="exp-logo" src="/images/comcast.png" alt="Comcast logo">
      </div>
      <div class="exp-text">
        <span class="exp-role">ML Research Intern</span>
        <span class="exp-org">Comcast, Media Analytics Framework</span>
        <span class="exp-dates">Summer 2024</span>
      </div>
    </div>
  </div>
  <div class="exp-item left current">
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
    <em>IEEE / CVF Computer Vision and Pattern Recognition Conference </em> (TCV@CVPR), 2024.<br>
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

| Year  | Reviewed Conferences & Journals                                  |
|:-----:|:-----------------------------------------------------------------|
| **2025** | WACV 2025 · CVPR 2025 · ICCV 2025 · FG 2025                   |
| **2024** | WACV 2024 · CVPR 2024 · ECCV 2024                            |
| **2023** | WACV 2023 · IEEE T-IP 2023 · IJCB 2023                       |
| **2022** | WACV 2022 · ICPR 2022                                        |


