---
title: Jürgen
layout: project-details
img: gallery/jurgen0.jpg
subtitle: Series
type: filter_option1
customExcerpt:
---

{% include relBase.html %}

<div id="heroImage">
        <img src="{{ relBase }}img/gallery/jurgen3.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Jürgen</h1>
      <p>A 300 year old German elf moves to a small town and befriends a group of misfit teens, desperate for the complete ‘coming of age’ experience. Jürgen is a show about discovering who you are, and humiliating yourself in the process.</p>

<div id="gallery">
        <img src="{{ relBase }}img/gallery/jurgen4.jpg" id="img2" data-hystmodal="#myModal2">
        <img src="{{ relBase }}img/gallery/jurgen2.jpg" id="img2" data-hystmodal="#myModal3">
        <img src="{{ relBase }}img/gallery/jurgen1.jpg" id="img2" data-hystmodal="#myModal4">
        <img src="{{ relBase }}img/gallery/jurgen6.jpg" id="img2" data-hystmodal="#myModal5">
        <img src="{{ relBase }}img/gallery/jurgen5.jpg" id="img6" data-hystmodal="#myModal6">
        <img src="{{ relBase }}img/gallery/jurgen7.jpg" id="img6" data-hystmodal="#myModal7">
      </div>
</span>   <sub>
        <hr>CAST
        <hr>
        <table><tr><td>Jürgen</td><td>Kate Dehnert</td></tr>
        <tr><td>Lacey</td><td>Millie Holten</td></tr>
        <tr><td>Coach</td><td>Matt Jenner</td></tr>
        <tr><td>Player</td><td>Matt Jackson</td></tr>
        <tr><td colspan="2"><br><hr>CREW
          <hr></td></tr><tr><td>Created, Written & Directed by</td><td>Millie Holten</td></tr><tr><td>
        Producer</td><td>Nicholas Colla</td></tr><tr><td>
          Boards / Animation</td><td>Dale Anderson</td></tr><tr><td>
          Design</td><td>Millie Holten & Evie Hilliar</td></tr></table><br>
        <hr>GENRE
        <hr>
        Adult Comedy<br>
        <br>
        <hr>BROADCASTER
        <hr>
        A Studio Digital<br><br><!--
        <hr>WATCH
        <hr>
        <a href="https://ltnt.tv/dbem" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
        <br><br>-->
        <hr>LINKS
        <hr>
        <!--<a href="https://www.imdb.com/title/tt34748315/" target="_blank"><img src="{{ relBase }}img/social/imdb.svg" class="imdb"></a>--><a href="https://youtu.be/-wTG_8b7a_w?si=Q3Ot1sw_AU-fEP_Z" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a><a href="https://youtu.be/tdc5hMBVwWA?si=7PzH4L5vxA_MwCqG" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        {% assign related1 = site.animation | where: "title", "Munch Rexford" | first %}
          {% assign related2 = site.animation | where: "title", "Weird Times in Hillside" | first %}
          {% assign related3 = site.animation | where: "title", "Deadbeat Ends Meet" | first %}
          <li>
            <a href="{{ related1.url | relative_url }}">
              <img src="{{ relBase }}img/{{ related1.img }}" alt="{{ related1.title }}">
              {{ related1.title }}
              <hr>
              <sub>{{ related1.subtitle }}</sub>
            </a>
          </li>
          <li>
            <a href="{{ related2.url | relative_url }}">
              <img src="{{ relBase }}img/{{ related2.img }}" alt="{{ related2.title }}">
              {{ related2.title }}
              <hr>
              <sub>{{ related2.subtitle }}</sub>
            </a>
          </li>
          <li>
            <a href="{{ related3.url | relative_url }}">
              <img src="{{ relBase }}img/{{ related3.img }}" alt="{{ related3.title }}">
              {{ related3.title }}
              <hr>
              <sub>{{ related3.subtitle }}</sub>
            </a>
          </li>
      </ul>
    </div>
  </section>

<div class="hystmodal" id="myModal2" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/Munch_002.jpg" id="img2">
        </div>
    </div>
</div>

<div class="hystmodal" id="myModal3" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/Munch_003.jpg" id="img3">
        </div>
    </div>
</div>
<div class="hystmodal" id="myModal4" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/Munch_004.jpg" id="img4">
        </div>
    </div>
</div>
<div class="hystmodal" id="myModal5" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/Munch_005.jpg" id="img5">
        </div>
    </div>
</div>
<div class="hystmodal" id="myModal6" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/Munch_006.jpg" id="img6">
        </div>
    </div>
</div>
<div class="hystmodal" id="myModal7" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/Munch_007.jpg" id="img7">
        </div>
    </div>
</div>
  <div id="gradient"></div>
