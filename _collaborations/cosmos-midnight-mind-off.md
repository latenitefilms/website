---
title: Cosmos Midnight - Mind Off
layout: project-details
img: projects/mindoff.jpg
subtitle: Music Video
type: filter_option3
customExcerpt: Music Video for Cosmo's Midnight.
---

{% include relBase.html %}

<style> #gallery img {aspect-ratio: 4/3;}</style>
 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/mindoff1.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Cosmos Midnight - Mind Off</h1><p>Music Video for Cosmo&#39;s Midnight</p>
      <div id="gallery">
        {% for i in (2..4) %}
        <img src="{{ relBase }}img/gallery/mindoff{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
        {% for i in (6..8) %}
        <img src="{{ relBase }}img/gallery/mindoff{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div></span>
      <sub>
        <hr>CAST
        <hr>
        <table>
          <tr><td>Chauffer</td><td>Rhys Mitchell</td></tr>
          <tr><td>Woman in Painting</td><td>Summer Kane</td></tr>
          <tr><td colspan="2"><br><hr>CREW
          <hr></td></tr><tr><td>
        Executive Producers</td><td>Chris Hocking <br> Nicholas Colla</td></tr><tr><td>
Producers</td><td>Tom Davies <br> Madison Lee</td></tr><tr><td>
Director</td><td>Nicholas Colla</td></tr><tr><td>
Art Director</td><td>Nicolette Minster</td></tr><tr><td>
Cinematographer</td><td>Aaron Farrugia</td></tr><tr><td>
1st AC</td><td>Austin Haigh</td></tr><tr><td>
Gaffer</td><td>Jared Fish</td></tr><tr><td>
Hair & Makeup</td><td>Lia Jackson</td></tr><tr><td>
Choreographer</td><td>Mia Dabkowski-Chandler</td></tr><tr><td>
Artist</td><td>Rene Vino</td></tr><tr><td>
Production Assist</td><td>Jordan Devine</td></tr><tr><td>
Editor</td><td>Nicholas Colla</td></tr><tr><td>
VFX</td><td>Michael Shanks</td></tr><tr><td>
Colourist</td><td>Chris Tomkins</td></tr></table><br>
        <hr>ARTIST
        <hr>
        Cosmo&#39;s Midnight<br>
        <br>
        <hr>Label
        <hr>
        Sony<br><br>
        <hr>WATCH
        <hr>
        <a href="https://www.youtube.com/watch?v=5LvO-K_0BNA" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
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
        <li><a href="../peking-duk-let-you-down/"><img src="{{ relBase }}img/projects/letyoudown.jpg">PEKING DUK - LET YOU DOWN
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../rufus-du-sol-be-with-you/"><img src="{{ relBase }}img/projects/bewithyou.jpg">R&uuml;f&uuml;s Du Sol - Be With You
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
      </ul>
    </div>
  </section>

{% for i in (2..4) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/mindoff{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

{% for i in (4..8) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/mindoff{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
