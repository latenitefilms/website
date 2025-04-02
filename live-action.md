---
title: Live Action
layout: filter
img: projects/rubyrai.jpg
---
{% include relBase.html %}
<section> <div id="filter"><label for="filter_options"></label><label for="filter_options"></label></div>
<input type="checkbox" id="filter_options" autocomplete="off" class="hidden" />
       <article>
      <ul class="projectlist">
       {% for page in site.ani %}
              <li class="{{page.type}}"><a href="{{ relBase }}{{page.id}}"><img src="{{ relBase }}img/{{ page.img }}">
          <h4>{{page.title}}</h4>
          <hr><sub>{{page.subtitle}}</sub>
          <hr></a>
        </li>
        {% endfor %}
      </ul>
    </article>
  </section>