---
title: R&uuml;f&uuml;s Du Sol - Be With You
layout: project-details
img: projects/bewithyou.jpg
subtitle: Music Video
type: filter_option3
customExcerpt: R&uuml;f&uuml;s Du Sol - Be With You
---

{% include relBase.html %}

<style> #gallery img {aspect-ratio: 16/9;}</style>
 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/bewithyou1.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>R&uuml;f&uuml;s Du Sol - Be With You</h1><p>R&uuml;f&uuml;s Du Sol - Be With You</p>
      <div id="gallery">
        {% for i in (2..7) %}
        <img src="{{ relBase }}img/gallery/bewithyou{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div></span>
      <sub>
        <!--<hr>CAST
        <hr>
        Oli Pizzey-Stratford<br>
        Jade Knight<br>
        Basil Firea<br>
        <br>-->
        <hr>CREW
        <hr><table><tr><td>
        Director</td><td>Daniel & Jared Daperis</td></tr><tr><td>
        Producer</td><td>Chris Hocking</td></tr><tr><td>
        Director Of Photography</td><td>Max Walter</td></tr><tr><td>
        Editor</td><td>Chris Hocking</td></tr></table><br>
        <hr>Artist
        <hr>
        R&uuml;f&uuml;s Du Sol<br><br>
        <hr>WATCH
        <hr>
        <a href="https://www.youtube.com/watch?v=DKH2t5d2Mj0" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        <li><a href="../american-doubles-the-swell/"><img src="{{ relBase }}img/projects/swell.jpg">AMERICAN DOUBLES - THE SWELL
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../guy-pearce-storm/"><img src="{{ relBase }}img/projects/storm.jpg">Guy Pearce - Storm
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../cosmos-midnight-mind-off/"><img src="{{ relBase }}img/projects/mindoff.jpg">Cosmos Midnight - Mind Off
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
      </ul>
    </div>
  </section>

{% for i in (2..7) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/bewithyou{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
