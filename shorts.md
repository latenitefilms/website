---
title: Collaborations
layout: filter
img: projects/lambsofgod.jpg
---
{% include relBase.html %}
<section>
       <article>
      <ul class="projectlist">
       {% for page in site.shorts %}
              <li class="{{page.type}}"><a href="{{ relBase }}{{page.id}}"><img src="{{ relBase }}img/{{ page.img }}">
          <h4>{{page.title}}</h4>
          <hr><sub>{{page.subtitle}}</sub>
          <hr></a>
        </li>
        {% endfor %}
      </ul>
    </article>
  </section>