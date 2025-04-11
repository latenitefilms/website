---
title: The Slot
layout: project-details
img: projects/slot.jpg
subtitle: Series
type: filter_option3
customExcerpt: An original Foxtel series, The Slot presents emerging and experimental short form comedy from Australia's most successful online comedy content creators. Each episode follows hosts Christiaan Van Vuuren (Bondi Hipsters) and Adele Vuko (Skit Box), and the unorthodox encounters they conjure with this new wave of Australian viral classics.
---

{% include relBase.html %}

<style> #gallery img {aspect-ratio: 4/3;}</style>
 <div id="heroImage">
        <img src="{{ relBase }}img/gallery/slot1.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>The Slot</h1><p>An original Foxtel series, The Slot presents emerging and experimental short form comedy from Australia&#39;s most successful online comedy content creators. Each episode follows hosts Christiaan Van Vuuren (Bondi Hipsters) and Adele Vuko (Skit Box), and the unorthodox encounters they conjure with this new wave of Australian viral classics.
</p><p>
        Featuring SketchShe, Troy Kinne, RackaRacka, Aunty Donna, Skit Box, Michael Cusack, Superwog, Michael Shanks, Bondi Hipsters and Natalie Tran - no comedic boundary is left untouched.
      </p><p>
        Between them they&#39;ve amassed billions of views with their captivating, weird, hilarious and at times absurd comedy never before seen on TV. They&#39;re not asking permission, they&#39;ve rewritten the rulebook.
      </p><p>
        LateNite produced the Michael Shanks content.</p>
<div id="gallery">
        <img src="{{ relBase }}img/gallery/slot2.jpg" id="img2" data-hystmodal="#myModal2">
        {% for i in (4..7) %}
        <img src="{{ relBase }}img/gallery/slot{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
        {% endfor %}
      </div></span>
      <sub>
        <hr>CAST
        <hr>
        Nicholas Issell<br>
        Nicholas Colla<br>
        <br>
        <hr>CREW
        <hr><table>
          <tr><td>Writer/Director</td><td>Michael Shanks</td></tr>
          <tr><td>Sketch Producers</td><td>Chris Hocking<br>Nicholas Colla</td></tr>
          <tr><td>Executive Producers</td><td>Paul Walton<br>Emma Fitzsimons</td></tr></table><br>
        <hr>GENRE
        <hr>
        Comedy<br>
        <br>
        <hr>BROADCASTER
        <hr>
        Foxtel<br><br>
        <hr>LINKS
        <hr>
        <a href="https://www.imdb.com/title/tt7362280/" target="_blank"><img src="{{ relBase }}img/social/imdb.svg" class="imdb"></a>
      </sub>
    </article>
  </section>

<div class="hystmodal" id="myModal2" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- You modal HTML markup -->
        <img src="{{ relBase }}img/gallery/slot2.jpg" id="img2">
        </div>
    </div>
</div>

{% for i in (4..7) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/slot{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
