---
title: Guy Pearce - What Makes You Think
layout: project-details
img: projects/wmyt.jpg
subtitle: Music Video
type: filter_option3
customExcerpt: A music video for Guy Pearce's single "What Makes You Think" from his album "The Nomad"
---

{% include relBase.html %}

<style> #gallery img {aspect-ratio: 4/3;}</style>
 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/wmyt1.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Guy Pearce - What Makes You Think</h1><p>A music video for Guy Pearce&#39;s single &#39;What Makes You Think&#39; from his album &#39;The Nomad&#39;.</p>
<div id="gallery">
        {% for i in (2..7) %}
        <img src="{{ relBase }}img/gallery/wmyt{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div>
      </span>
      <sub>
        <hr>CAST
        <hr>
        Guy Pearce<br>
        <br>
        <hr>CREW
        <hr><table><tr><td>
        Director</td><td>Guy Pearce<br>Michael Shanks</td></tr><tr><td>
        Producers</td><td>Chris Hocking<br>Nick Colla</td></tr><tr><td>
        Director Of Photography</td><td>Max Walter</td></tr><tr><td>
        Editor</td><td>Kevin Luk</td></tr></table><br>
        <hr>ARTIST
        <hr>
        Guy Pearce
        <br><br>
        <hr>WATCH
        <hr>
        <a href="https://www.youtube.com/watch?v=KcXrf-eHQeE" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        <li><a href="../guy-pearce-storm/"><img src="{{ relBase }}img/projects/storm.jpg">Guy Pearce - Storm
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../dappled-cities-stone-men/"><img src="{{ relBase }}img/projects/stonemen.jpg">Dappled Cities - Stone Men
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
            <img src="{{ relBase }}img/gallery/wmyt{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
