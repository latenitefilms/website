---
title: Guy Pearce - Storm
layout: project-details
img: projects/storm.jpg
subtitle: Music Video
type: filter_option3
customExcerpt: From gale force winds to lurid multi-coloured lightning, it follows Guy on a private exodus; traversing a swelling storm of surreal destruction. With a unique fusion of real-time and high speed cinematography, Storm aims to dazzle the eye with dreamlike, distinctive imagery.
---

{% include relBase.html %}

<style> #gallery img {aspect-ratio: 4/3;}</style>
 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/storm1.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Guy Pearce - Storm</h1><p>From gale force winds to lurid multi-coloured lightning, it follows Guy on a private exodus; traversing a swelling storm of surreal destruction. With a unique fusion of real-time and high speed cinematography, Storm aims to dazzle the eye with dreamlike, distinctive imagery.</p><p>Storm is the debut single from actor/musician Guy Pearce.</p>
      <div id="gallery">
        {% for i in (2..7) %}
        <img src="{{ relBase }}img/gallery/storm{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div>
      </span>
      <sub>
        <hr>CAST
        <hr>
        Guy Pearce<br><br>
        <hr>CREW
        <hr><table><tr><td>Director</td><td>Michael Shanks</td></tr><tr><td>
        Producer</td><td>Nicholas Colla</td></tr><tr><td>
        Co-Producer</td><td>Lucy Hayes</td></tr><tr><td>
        Post Producer</td><td>Chris Hocking</td></tr><tr><td>
        Cinematographer</td><td>Edward Goldner</td></tr><tr><td>
        Production Design</td><td>Rennie Watson<br>Elissa Hullah</td></tr><tr><td>
        Wardrobe & Makeup</td><td>Gursel Ali</td></tr><tr><td>
        1st AD</td><td>Daniel Daperis</td></tr><tr><td>
        Editor & Visual Effects</td><td>Michael Shanks</td></tr><tr><td>
        Colourist</td><td>CJ Dobson</td></tr><tr><td>
        Phantom Operator</td><td>James Macgregor</td></tr></table><br>
        <hr>ARTIST
        <hr>
        Guy Pearce<br><br>
        <hr>WATCH
        <hr>
        <a href="https://www.youtube.com/watch?v=h9IJS9uvvdY" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        <li><a href="../dappled-cities-stone-men/"><img src="{{ relBase }}img/projects/stonemen.jpg">Dappled Cities - Stone Men
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../guy-pearce-what-makes-you-think/"><img src="{{ relBase }}img/projects/wmyt.jpg">Guy Pearce - What Makes You Think
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../guy-pearce-broken-bones/"><img src="{{ relBase }}img/projects/brokenbones.jpg">Guy Pearce - Broken Bones
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
            <img src="{{ relBase }}img/gallery/storm{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}
  <div id="gradient"></div>
