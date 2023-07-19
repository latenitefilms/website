---
title: Lambs of God
layout: project-details
img: lambsofgod.jpg
subtitle: Series
type: filter_option1
tags: projects
customExcerpt: gothic tale about three nuns, each a generation apart, Sisters Iphigenia, Margarita and Carla, who are the last remaining members of the enclosed order of St Agnes. Living in an isolated convent by the coast, they have all but forgotten the outside world, until an unwelcome visitor enters their lives and changes their world forever. 
---
{% include relBase.html %}

  <section id="details">
    <div id="carousel">
      <div id="carousel_controls"><span><a href="#" id="carousel_backward">&larr;</a> <a href="#"
            id="carousel_forward">&rarr;</a></span><span id="pagecount">(1/3)</span></div>
      <div id="carousel_img">
        <img src="{{ relBase }}img/gallery/lambsofgod1.jpg" id="img1">
        <img src="{{ relBase }}img/gallery/lambsofgod2.jpg" id="img2">
        <img src="{{ relBase }}img/gallery/lambsofgod3.jpg" id="img3">
        <img src="{{ relBase }}img/gallery/lambsofgod4.jpg" id="img4">
        <img src="{{ relBase }}img/gallery/lambsofgod5.jpg" id="img5">
      </div>
    </div>


    <article><span id="main-detail">
      <h1>Lambs of God</h1><p>A gothic tale about three nuns, each a generation apart, Sisters Iphigenia, Margarita and Carla, who are the last remaining members of the enclosed order of St Agnes. Living in an isolated convent by the coast, they have all but forgotten the outside world, until an unwelcome visitor enters their lives and changes their world forever. 
      </p><p>
        What unfolds is a frightening game of survival; for both the nuns and the intruder, the charming Father Ignatius. Lambs of God explores themes of religion, power, and the consequences of repressed desires.</p>
        <p>LateNite produced the Melbourne based &#39;Fairy Tale Unit&#39; which was directed by regular collaborator Michael Shanks.</p></span>
      <sub>
        <hr>CAST
        <hr><table><tr><td>Sister Iphigenia</td><td>Essie Davis</td></tr>
          <tr><td>Sister Carla</td><td>Jessica Barden</td></tr>
          <tr><td>Sister Margarita</td><td>Ann Dowd</td></tr><tr><td colspan="2"><br><hr>FAIRY TALE UNIT CREW
            <hr></td></tr><tr><td>
        Writer</td><td>Sarah Lambert</td></tr><tr><td>
        Director</td><td>Michael Shanks</td></tr><tr><td>
        Cinematographer</td><td>Marden Dean</td></tr><tr><td>
        Production Designer</td><td>Chris Kennedy</td></tr><tr><td>
        Producers</td><td>Chris Hocking<br>Nicholas Colla</td></tr></table><br>
        <hr>GENRE
        <hr>
        Drama<br>
        <br>
        <hr>BROADCASTER
        <hr>
        Foxtel<br><br>
        <a href="https://www.imdb.com/title/tt8709928/" target="_blank"><img src="{{ relBase }}img/social/imdb.svg" class="imdb"></a>
       <img src="{{ relBase }}img/social/imdb.svg" class="imdb" onclick="popUp()" style="opacity: 0;"">
      </sub>
      <style>
      #popup{
        position: fixed; width:100vw; height:100vh;top:0;left:0;
         visibility: hidden;
         pointer-events: none;
         background-color: rgba(0,0,0,0.5);
      }
      #popup div{
        width:80vw;
        height:80vh;
        position:fixed;
        top: 5vh;
        left:10vw;
        background: none;
      }
      #popup.show {
        pointer-events: initial;
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<script src="https://embed.cloudflarestream.com/embed/sdk.latest.js"></script>
      <div id="popup" onclick="Pauza()">
      <div style="position: relative; padding-top: 56.25%;" onclick="popUp()">
        <iframe
          src="https://customer-2n8dqn7i3032pr6x.cloudflarestream.com/fb943ae8831839d710fa34bccc3bdd57/iframe?poster=https%3A%2F%2Fcustomer-2n8dqn7i3032pr6x.cloudflarestream.com%2Ffb943ae8831839d710fa34bccc3bdd57%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D1m9s%26height%3D600&title=Lambs+of+God+-+Melbourne+Fairytale+Unit&share-link=https%3A%2F%2Flatenitefilms.com%2Fcollaborations%2Flambs-of-god%2F&channel-link=https%3A%2F%2Flatenitefilms.com%2Fcollaborations%2Flambs-of-god%2F&letterboxColor=transparent"
          style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true"
          id="stream-player"
        ></iframe>
        <script>
          const player = Stream(document.getElementById('stream-player'));</script>
      </div>
    </div>
    </article>
<script>
function popUp() {
  player.pause();
  console.log("pop");
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
  player.addEventListener('play', () => {
    console.log('playing!');
  });
  player.addEventListener('pause', () => {
    console.log('paused!');
  });
  player.play().catch(() => {
    console.log('playback failed, muting to try again');
    player.muted = true;
    player.play();
  });
  player.pause();
}
function Pauza() {
  console.log("pause attempt");
    player.pause();
}
</script>
    <div id="related">
      <hr>
      Related Project
      <hr>
      <ul>
        <li><a href="../erinsborough-high/"><img src="{{ relBase }}img/projects/ehigh.jpg">Erinsborough High
          <hr><sub>Series</sub>
          <hr></a>
        </li>
        <li><a href="../the-slot/"><img src="{{ relBase }}img/projects/slot.jpg">The Slot
          <hr><sub>Series</sub>
          <hr></a>
        </li>
        <li><a href="../nekrotronic/"><img src="{{ relBase }}img/projects/nekrotronic.jpg">Nekrotronic
          <hr><sub>Film</sub>
          <hr></a>
        </li>
      </ul>
    </div>
  </section>



  <div id="gradient"></div>
  