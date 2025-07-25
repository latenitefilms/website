---
title: Weird Times in Hillside
layout: project-details
img: projects/WeirdTimes.jpg
subtitle: Series
type: filter_option1
customExcerpt:
---

{% include relBase.html %}

<div id="heroImage">
        <img src="{{ relBase }}img/gallery/WeirdTimes_001.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Weird Times in Hillside</h1>
      <p>Matt, Amber and Jake are three teenagers growing up in ‘weird times.’ The dead are rising, magic is returning, and mythical creatures walk the Earth. Unfortunately for them, none of these things are happening dramatically enough to disrupt the flow of life in their outer suburban town.</p>
      <div id="gallery">
              {% for i in (2..7) %}
              <img src="{{ relBase }}img/gallery/WeirdTimes_00{{ i }}.jpg" data-hystmodal="#myModal{{ i }}">
              {% endfor %}
      </div>
</span>   <sub>
        <hr>CAST
        <hr>
        <table><tr><td>Jake</td><td>Mike Greaney</td></tr>
        <tr><td>Matt</td><td>Nicholas Colla</td></tr>
        <tr><td>Amber</td><td>Sarah Walker</td></tr>
        <tr><td>Kel</td><td>Nicolette Minster</td></tr>
        <tr><td>Johnno</td><td>Dan Brumm</td></tr>
        <tr><td colspan="2"><br><hr>CREW
          <hr></td></tr><tr><td>Created, Written & Directed by</td><td>Mike Greaney</td></tr><tr><td>
          Executive Produced by </td><td>Nicholas Colla</td></tr></table><br>
        <hr>GENRE
        <hr>
        Fantasy Comedy<br>
        <br>
        <hr>PLATFORM
        <hr>
        A Studio Digital<br><br><!--
        <hr>WATCH
        <hr>
        <a href="https://ltnt.tv/dbem" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
        <br><br>-->
        <hr>LINKS
        <hr><a href="https://ltnt.tv/weird-witch" target="_blank"><img src="{{ relBase }}img/social/instagram.svg" class="instagram"></a>
        <a href="https://ltnt.tv/weird-gap" target="_blank"><img src="{{ relBase }}img/social/instagram.svg" class="instagram"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        {% assign related1 = site.animation | where: "title", "The Future of Everything" | first %}
          {% assign related2 = site.animation | where: "title", "Munch Rexford" | first %}
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

{% for i in (2..7) %}
<div class="hystmodal" id="myModal{{ i }}" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <!-- Your modal HTML markup -->
            <img src="{{ relBase }}img/gallery/WeirdTimes_00{{ i }}.jpg">
        </div>
    </div>
</div>
{% endfor %}

  <div id="gradient"></div>
