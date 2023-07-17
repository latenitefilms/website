---
title: Originals
layout: filter
order: 3
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
       {% assign sorted_page = page[1] | sort: 'order'  %}
        <li class="{{sorted_page.type}}"><a href="{{ relBase }}{{sorted_page.id}}"><img src="{{ relBase }}img/projects/{{ sorted_page.img }}">
          <h4>{{sorted_page.title}}</h4>
          <hr><sub>{{sorted_page.subtitle}}</sub>
          <hr></a>
        </li>
        {% endfor %}
      </ul>
    </article>
  </section>
    <script>

    let checkbox = document.getElementsByClassName("filter_checkbox");
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener("change", () => { filterall(); });
    }

    window.onload = (event) => {
      //console.log('page is fully loaded');
      filterall();
    };

    function filterall() {
      var x = 0;
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == false)
          x++;
      }
      //console.log(checkbox.length);
      //console.log(x);
      if (x == checkbox.length) {
        document.getElementById("filter").classList.add('showall');
      }
      else {
        document.getElementById("filter").classList.remove('showall');
      }
    }
  </script>