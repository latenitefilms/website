---
title: Munch Rexford
layout: project-details
img: gallery/Munch_001.jpg
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
        <img src="{{ relBase }}img/gallery/Munch_001.jpg" id="img1">
        <img src="{{ relBase }}img/gallery/Munch_002.jpg" id="img2">
        <img src="{{ relBase }}img/gallery/Munch_003.jpg" id="img3">
        <img src="{{ relBase }}img/gallery/Munch_004.jpg" id="img4">
        <img src="{{ relBase }}img/gallery/Munch_005.jpg" id="img5">
        <img src="{{ relBase }}img/gallery/Munch_006.jpg" id="img6">
      </div>
    </div>
    <article><span id="main-detail">
      <h1>Munch Rexford</h1>
      <p>When Munch Rexford was a small and skinny boy of eight, he was bitten by a German Shepherd.</p><p>

Feeling responsible, his twin sister, Miriam, hoped that with a bit of love and encouragement, he would eventually move past the incident… Instead, Munch vowed to kill one of every animal. A reverse Noah’s Arc, if you will. It started off easy; the cow, the bald eagle, the humble worm. Now, Munch has his sights on more legendary prey. Moby Dick. Icarus. The Minotaur.</p><p>

With his caddy/best-friend by his side (a horrid creature called Peter) and a whole world at his fingertips — nothing and no one can stop him.</p>
</span>   <sub>
        <hr>CAST
        <hr>
        <table><tr><td>Munch</td><td>Tom Burton</td></tr>
        <tr><td>Miriam</td><td>Haley Alea Erickson</td></tr>
        <tr><td>Mould</td><td>Alexei Toliopoulos</td></tr>
        <tr><td>Peter</td><td>Mark Samual Bonanno</td></tr>
        <tr><td>Bucky</td><td>Lizzy Hoo</td></tr>
        <tr><td colspan="2"><br><hr>CREW
          <hr></td></tr><tr><td>Created by </td><td>Millie Holten</td></tr><tr><td>
        Written & Directed by </td><td>Millie Holten</td></tr><tr><td>
          Executive Producer</td><td>Nicholas Colla</td></tr><tr><td>
          Design</td><td>Millie Holten & Sammy Lewis</td></tr><tr><td>
            Animation Director</td><td>Dale Anderson</td></tr><tr><td>
            Editor</td><td>Kevin Luk</td></tr></table><br>
        <hr>GENRE
        <hr>
        Adventure Comedy<br>
        <br>
        <hr>BROADCASTER
        <hr>
        Adult Swim<br><br><!--
        <hr>WATCH
        <hr>
        <a href="https://ltnt.tv/dbem" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
        <br><br>-->
        <hr>LINKS
        <hr>
        <!--<a href="https://www.imdb.com/title/tt34748315/" target="_blank"><img src="{{ relBase }}img/social/imdb.svg" class="imdb"></a>--><a href="https://www.youtube.com/watch?v=eDtyB863J9Q" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        {% assign related1 = site.animation | where: "title", "The Future of Everything" | first %}
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

  <div id="gradient"></div>