---
title: Originals
layout: filter
img: projects/tfoe.jpg
---
{% include relBase.html %}
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
       {% for page in site.originals %}
              <li class="{{page.type}}"><a href="{{ relBase }}{{page.id}}"><img src="{{ relBase }}img/{{ page.img }}">
          <h4>{{page.title}}</h4>
          <hr><sub>{{page.subtitle}}</sub>
          <hr></a>
        </li>
        {% endfor %}
      </ul>
    </article>
  </section>