---
title: Vera Blue - Like I Remember You
layout: project-details
img: projects/liry.jpg
subtitle: Music Video
type: filter_option3
customExcerpt: Like I Remember You is Vera Blue&#39;s exclusive new single produced in collaboration with Greenpeace to protect the Great Australian Bight from oil drilling. Stand with Vera and do your bit to stop risky oil drilling.
---

{% include relBase.html %}

<style> #gallery img {aspect-ratio: 16/9;}</style>
 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/liry4.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Vera Blue - Like I Remember You</h1><p>Like I Remember You is Vera Blue&#39;s exclusive new single produced in collaboration with Greenpeace to protect the Great Australian Bight from oil drilling. Stand with Vera and do your bit to stop risky oil drilling.</p>
      <div id="gallery">
        <img src="{{ relBase }}img/gallery/liry2.jpg" id="img2" data-hystmodal="#myModal2">
        <img src="{{ relBase }}img/gallery/liry1.jpg" id="img3" data-hystmodal="#myModal1">
        {% for i in (5..8) %}
        <img src="{{ relBase }}img/gallery/liry{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div>
      </span>
      <sub>
        <br>
        <hr>CREW
        <hr><table><tr><td>
        Director</td><td>Nicholas Colla</td></tr><tr><td>
        Producers</td><td>Chris Hocking<br>Nicholas Colla</td></tr><tr><td>
        Director Of Photography</td><td>Aaron Farrugia</td></tr><tr><td>
        Editor</td><td>Chris Hocking</td></tr></table><br>
        <hr>ARTIST
        <hr>
        Vera Blue<br>
        <br>
        <hr>LABEL
        <hr>
        Universal<br><br>
        <hr>WATCH
        <hr>
        <a href="https://www.youtube.com/watch?v=IkMqDLOrmXw" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        <li><a href="../gang-of-youths-the-deepest-sighs-the-frankest-shadows/"><img src="{{ relBase }}img/projects/sighs.jpg">GANG OF YOUTHS - THE DEEPEST SIGHS, THE FRANKEST SHADOWS
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../american-doubles-the-swell/"><img src="{{ relBase }}img/projects/swell.jpg">AMERICAN DOUBLES - THE SWELL
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
        <li><a href="../peking-duk-let-you-down/"><img src="{{ relBase }}img/projects/letyoudown.jpg">PEKING DUK - LET YOU DOWN
          <hr><sub>Music Video</sub>
          <hr></a>
        </li>
      </ul>
    </div>
  </section>

<div class="hystmodal" id="myModal2" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/liry2.jpg" id="img2">
        </div>
    </div>
</div>

<div class="hystmodal" id="myModal1" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/liry1.jpg" id="img1">
        </div>
    </div>
</div>

{% for i in (5..8) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/liry{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
