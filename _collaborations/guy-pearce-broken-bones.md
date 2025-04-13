---
title: Guy Pearce - Broken Bones
layout: project-details
img: projects/brokenbones.jpg
subtitle: Music Video
type: filter_option3
customExcerpt: So, after many years of keeping things to myself I&#39;m very pleased to be releasing my first record - "Broken Bones". - Guy Pearce
---

{% include relBase.html %}

 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/brokenbones2.png"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Guy Pearce - Broken Bones</h1><p>So, after many years of keeping things to myself I&#39;m very pleased to be releasing my first record - "Broken Bones". - Guy Pearce</p>      
<div id="gallery">
        <img src="{{ relBase }}img/gallery/brokenbones4.jpg" id="img2" data-hystmodal="#myModal4">
        <img src="{{ relBase }}img/gallery/brokenbones3.jpg" id="img3" data-hystmodal="#myModal3">
        <img src="{{ relBase }}img/gallery/brokenbones1.jpg" data-hystmodal="#myModal1">
        {% for i in (5..7) %}
        <img src="{{ relBase }}img/gallery/brokenbones{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div></span>
      <sub>
        <hr>CAST
        <hr>
        Guy Pearce<br>
        <br>
        <hr>CREW
        <hr><table><tr><td>
        Director & Visual Effects</td><td>Michael Shanks</td></tr><tr><td>
Producer</td><td>Chris Hocking</td></tr><tr><td>
Cinematographer</td><td><a href="http://benjaminhidalgob.com/" rel="noopener noreferrer"  target="_blank">Hidalgo De La Barrera</a> </td></tr><tr><td>
Production Assistants</td><td>Jared & Daniel Daperis</td></tr><tr><td>
Additional Visual Effects</td><td>David Fromholtz</td></tr></table>
        <br>
        <hr>ARTIST
        <hr>
        Guy Pearce<br><br>
        <hr>WATCH
        <hr>
        <a href="https://www.youtube.com/watch?v=s5I62aD6qsE" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
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

<div class="hystmodal" id="myModal3" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/brokenbones3.jpg" id="img3">
        </div>
    </div>
</div>
<div class="hystmodal" id="myModal4" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/brokenbones4.jpg" id="img4">
        </div>
    </div>
</div>
<div class="hystmodal" id="myModal1" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/brokenbones1.jpg" id="img41">
        </div>
    </div>
</div>

{% for i in (5..7) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/brokenbones{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
