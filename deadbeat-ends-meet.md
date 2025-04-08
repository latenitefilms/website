---
title: Deadbeat Ends Meet
layout: project-details
img: gallery/dbem1.jpg
subtitle: Series
type: filter_option1
customExcerpt: "Deadbeat Ends Meet follows housemates Milo (a frill neck lizard) and Indy (a dingo) as they navigate their ambitions and identities whilst reckoning with the cost of living and the pitfalls of the gig economy"
---
{% include relBase.html %}
<style>header{grid-column-start: 1;grid-row-start: 1;color:white;}div#heroImage{grid-row-start: 1;grid-column-start: 1;}div#gallery{display:grid;grid-template-columns:calc(33.3% - 1.3rem) calc(33.3% - 1.3rem) calc(33.3% - 1.3rem);grid-gap:2rem;margin:5rem 0;}div#gallery img, div#heroImage img{width:100%;}section#details article{grid-gap:0;width:80rem;margin:auto;}


.projects #lighton:checked~header .lighton:before {
  background: #fff;
}

.projects #lighton:checked~header .checkbox-circle label:before, .projects #lighton:checked~section .checkbox-circle label:before {
  border-color: #fff;
}

.projects #lighton:checked~header input#overlay-input[type=checkbox]~#overlay-button span, .projects #lighton:checked~header input#overlay-input[type=checkbox]~#overlay-button span:after, .projects #lighton:checked~header input#overlay-input[type=checkbox]~#overlay-button span:before {
  background-color: #fff;
}

.projects #lighton:checked~header #logo svg:nth-child(4) path {
  fill: #fff;
}

.projects #lighton:checked~header #logo svg:nth-child(1), .projects #lighton:checked~header #logo svg:nth-child(2), .projects #lighton:checked~header #logo svg:nth-child(3) {
  mix-blend-mode: lighten;
}

</style>
<div id="heroImage"><img src="{{ relBase }}img/gallery/dbem1.jpg"></div>
 <section id="details">
    <article><span id="main-detail">
      <h1>Deadbeat Ends Meet</h1>
      <p>Deadbeat Ends Meet follows housemates Milo (a frill neck lizard) and Indy (a dingo) as they navigate their ambitions and identities whilst
reckoning with the cost of living and the pitfalls of the gig economy.</p>
    <div id="gallery">
        <img src="{{ relBase }}img/gallery/dbem2.jpg" id="img2">
        <img src="{{ relBase }}img/gallery/dbem3.jpg" id="img3">
        <img src="{{ relBase }}img/gallery/dbem4.jpg" id="img4">
        <img src="{{ relBase }}img/gallery/dbem5.jpg" id="img5">
        <img src="{{ relBase }}img/gallery/dbem6.jpg" id="img6">
        </div>
        </span>  
         <sub>
        <hr>CAST
        <hr>
        <table><tr><td>Indy</td><td>Charlotte Nicdao</td></tr>
        <tr><td>Milo</td><td>Jackson Tozer</td></tr>
        <tr><td>Mould</td><td>Alexei Toliopoulos</td></tr>
        <tr><td>Wolfgang</td><td>Tony Armstrong</td></tr>
        <tr><td>Goblin</td><td>Maria Angelico</td></tr>
        <tr><td colspan="2"><br><hr>CREW
          <hr></td></tr><tr><td>Created & Directed by</td><td>Evie Hilliar</td></tr><tr><td>
        Written by</td><td>Evie Hilliar<br>Mike Greaney<br>Nicholas Collar<br>Holly Tosi</td></tr><tr><td>
          Series Producer</td><td>Nicholas Colla</td></tr><tr><td>
          Producer</td><td>Scarlett Koehne</td></tr><tr><td>
          Executive Producer</td><td>Chris Hocking<br>Evie Hilliar</td></tr><tr><td>
            Animation Director</td><td>Dom Aldis</td></tr><tr><td>
            Editor</td><td>Kevin Luk</td></tr><tr><td>
            Composer</td><td>James Orr</td></tr><tr><td>
            Sound Designer</td><td>Ryan Granger</td></tr></table><br>
        <hr>GENRE
        <hr>
        Fantasy Comedy<br>
        <br>
        <!--<hr>BROADCASTER
        <hr>
        Grouse House<br><br>
        <hr>WATCH
        <hr>
        <a href="https://ltnt.tv/dbem" target="_blank"><img src="{{ relBase }}img/social/youtube.svg" class="youtube"></a>
        <br><br>-->
        <hr>LINKS
        <hr>
        <a href="https://www.imdb.com/title/tt34748315/" target="_blank"><img src="{{ relBase }}img/social/imdb.svg" class="imdb"></a>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        {% assign related1 = site.animation | where: "title", "The Future of Everything" | first %}
          {% assign related2 = site.animation | where: "title", "Munch Rexford" | first %}
          {% assign related3 = site.animation | where: "title", "Weird Times in Hillside" | first %}
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