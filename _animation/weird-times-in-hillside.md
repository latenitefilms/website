---
title: Weird Times in Hillside
layout: project-details
img: projects/WeirdTimes.jpg
subtitle: Series
type: filter_option1
customExcerpt: 
---
{% include relBase.html %}
 <section id="details">
    <div id="carousel">
      <div id="carousel_controls"><span><a href="#" id="carousel_backward">&larr;</a> <a href="#"
            id="carousel_forward">&rarr;</a></span><span id="pagecount">(1/3)</span></div>
      <div id="carousel_img">
        <img src="{{ relBase }}img/gallery/WeirdTimes_001.jpg" id="img1">
        <img src="{{ relBase }}img/gallery/WeirdTimes_002.jpg" id="img2">
        <img src="{{ relBase }}img/gallery/WeirdTimes_003.jpg" id="img3">
        <img src="{{ relBase }}img/gallery/WeirdTimes_004.jpg" id="img4">
        <img src="{{ relBase }}img/gallery/WeirdTimes_005.jpg" id="img5">
        <img src="{{ relBase }}img/gallery/WeirdTimes_006.jpg" id="img6">
      </div>
    </div>
    <article><span id="main-detail">
      <h1>Weird Times in Hillside</h1>
      <p>Matt, Amber and Jake are three teenagers growing up in ‘weird times.’ The dead are rising, magic is returning, and mythical creatures walk the Earth. Unfortunately for them, none of these things are happening dramatically enough to disrupt the flow of life in their outer suburban town.</p>
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
        <br><br>
        <hr>LINKS
        <hr>
        <a href="https://www.imdb.com/title/tt34748315/" target="_blank"><img src="{{ relBase }}img/social/imdb.svg" class="imdb"></a><a href="https://www.youtube.com/watch?v=eDtyB863J9Q" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>-->
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

  <div id="gradient"></div>