---
title: Ruby Rai P.I.
layout: project-details
img: projects/rubyrai.jpg
subtitle: Series
type: filter_option2
customExcerpt: Ruby Rai is a down-and-out Private Investigator... which is exactly how she likes it. But it’s not easy being your best hard-boiled self when inept co- workers, meddlesome family, and the endless weirdos (clients and ex lovers) of the big city are waiting to thwart your every turn...
---

{% include relBase.html %}

  <section id="details">
    <div id="carousel">
      <div id="carousel_controls"><span><a href="#" id="carousel_backward">&larr;</a> <a href="#"
            id="carousel_forward">&rarr;</a></span><span id="pagecount">(1/3)</span></div>
      <div id="carousel_img">
        <img src="{{ relBase }}img/gallery/rubyrai1.jpg" id="img1">
        <img src="{{ relBase }}img/gallery/rubyrai2.jpg" id="img2">
        <img src="{{ relBase }}img/gallery/rubyrai3.jpg" id="img3">
        <img src="{{ relBase }}img/gallery/rubyrai4.jpg" id="img4">
      </div>
    </div>
    <article><span id="main-detail">
      <h1>Ruby Rai P.I.</h1><p>Ruby Rai is a down-and-out Private Investigator... which is exactly how she likes it. But it’s not easy being your best hard-boiled self when inept co- workers, meddlesome family, and the endless weirdos (clients and ex lovers) of the big city are waiting to thwart your every turn...</p>&nbsp;<br>     
</span>
      <sub>
        <hr>CAST
        <hr class="margin_bottom">
        <table>
          <tr>
            <td>ruby</td>
            <td>vidya rajan</td>
          </tr>
          <tr>
            <td>beamshine</td>
            <td>elyce phillips</td>
          </tr>
          <tr>
            <td>squalene</td>
            <td>ella lawry</td>
          </tr>
          <tr>
            <td>chi chi</td>
            <td>nicolette minster</td>
          </tr>
          <tr>
            <td>gobbo</td>
            <td>lee beckhurst</td>
          </tr>
          <tr>
            <td>scott</td>
            <td>pedro cooray</td>
          </tr>
          <tr>
            <td>uncle</td>
            <td>kumar eliezer</td>
          </tr>
          <tr>
            <td colspan="2">
                <br />
                <hr>CREW<hr>
            </td>
          </tr>
          <tr>
            <td>writer/creator</td>
            <td>vidya rajan</td>
          </tr>
          <tr>
            <td>Co-Writer</td>
            <td>elyce phillips</td>
          </tr>
          <tr>
            <td>director</td>
            <td>jesse vogelaar</td>
          </tr>
          <tr>
            <td>producer</td>
            <td>nicholas colla</td>
          </tr>
          <tr>
            <td>associate producer</td>
            <td>nicolette minster</td>
          </tr>
          <tr>
            <td>Executive Producer</td>
            <td>Vidya Rajan<br>Chris Hocking</td>
          </tr>
          <tr>
            <td>director of photography</td>
            <td>michael lincoln</td>
          </tr>
          <tr>
            <td>production designer</td>
            <td>rennie watson</td>
          </tr>
          <tr>
            <td>costume designer</td>
            <td>matilda woodroofe<br></td>
          </tr>
          <tr>
            <td>make up & hair designer</td>
            <td>marie princi</td>
          </tr>
          <tr>
            <td>gaffer</td>
            <td>christiaan abernethy</td>
          </tr>
          <tr>
            <td>sound recordist</td>
            <td>ryan granger<br></td>
          </tr>
          <tr>
            <td>editor</td>
            <td>kevin luk<br></td>
          </tr>
          <tr>
            <td>audio post by</td>
            <td>dead on sound<br></td>
          </tr>
          <tr>
            <td>sound designer</td>
            <td>ryan granger<br></td>
          </tr>
          <tr>
            <td>visual effects</td>
            <td>kevin luk</td>
          </tr>
          <tr>
            <td>colourist</td>
            <td>moodlab<br>daniel witt<br>CJ dobson<br></td>
          </tr>
          <tr>
            <td>legal & business affairs</td>
            <td>jenny lalor</td>
          </tr>
        </table>
        <br><hr>GENRE
        <hr class="margin_bottom">
        Comedy<br>
        <br>
        <hr>BROADCASTER
        <hr class="margin_bottom">
        ABC<br><br>
      </sub>
    </article>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
      {% assign related1 = site.live-action | where: "title", "Rebooted" | first %}
      {% assign related2 = site.live-action | where: "title", "The Wizards of Aus" | first %}
      {% assign related3 = site.live-action | where: "title", "The Legend of Burnout Barry" | first %}
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
