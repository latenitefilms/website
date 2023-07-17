---
title: Originals
layout: default
order: 3
---
<section>
<hr>
    <div id="filter"><label for="filter_options">Filter</label><label for="filter_options">+</label></div>
    <input type="checkbox" id="filter_options" autocomplete="off" class="hidden" />
    <!--Manual inputs for options Entry-->
    <input type="checkbox" id="filter_option1" autocomplete="off" class="hidden filter_checkbox" />
    <input type="checkbox" id="filter_option2" autocomplete="off" class="hidden filter_checkbox" />
    <input type="checkbox" id="filter_option3" autocomplete="off" class="hidden filter_checkbox" />
    <ul class="checkbox-circle filter_options ">
      <!--Manual Loop options Entry-->
      <li><label for="filter_option1" class="filter_option1">Animation</label></li>
      <li><label for="filter_option2" class="filter_option2">Live Action</label></li>
      <li><label for="filter_option3" class="filter_option3">Kids</label></li>
    </ul>
    <hr>
    <article>
      <ul class="projectlist">
       {% for page in site.projects %}
        <li class="{{page.type}}"><a href="{{page.path}}"><img src="{{ relBase }}img/projects/{{ post.img }}">
          <h4>{{page.title}}</h4>
          <hr><sub>{{page.subtitle}}</sub>
          <hr></a>
        </li>
        {% endfor %}
        <li class="filter_option2 filter_option3"><a href="the-legend-of-burnout-barry/"><img
              src="../img/projects/barry.jpg">
            <h4>The Legend of Burnout Barry</h4>
            <hr><sub>TELEVISION</sub>
            <hr>
          </a></li>
        <li class="filter_option1"><a href="rebooted/"><img src="../img/projects/rebooted.jpg">
          <h4>Rebooted</h4>
          <hr><sub>Short</sub>
          <hr></a>
        </li>
        <li class="filter_option1"><a href="goblin-spoon/"><img src="../img/projects/goblinspoon.jpg">
          <h4>Goblin Spoon</h4>
          <hr><sub>Series</sub>
          <hr></a>
        </li>
        <li class="filter_option2"><a href="the-wizards-of-aus/"><img src="../img/projects/wizards.jpg">
          <h4>The Wizards of Aus</h4>
          <hr><sub>Series</sub>
          <hr></a>
        </li>
      </ul>
    </article>
  </section>
  {% include filter.html %}