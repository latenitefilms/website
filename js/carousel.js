

document.getElementById("carousel_forward").addEventListener("click", () => { carousel_forward(); window.event.preventDefault(); });
document.getElementById("carousel_backward").addEventListener("click", () => { carousel_backward(); window.event.preventDefault(); });

var imageCount = 1;
var imagePos = 1;
var posList = [];
let carousel_img = document.querySelectorAll("#carousel_img img");
//console.log(carousel_img);
let pagecount = document.getElementById("pagecount");
window.onload = (event) => {
  //console.log('page is fully loaded');
  imageCount = carousel_img.length;
  //getTargetH1Width();

  for (let i = 0; i < imageCount; i++) {
    posList.push(Math.round(carousel_img[i].getBoundingClientRect().left + carousel_container.scrollLeft - carousel_container.getBoundingClientRect().left));
  }
  console.log(posList);
  //updatePagination();
  scrollUpdate();
};

window.addEventListener("resize", getTargetH1Width);

function carousel_backward() {
  if (imagePos == 1) {
    imagePos = imageCount;
    //document.getElementById("carousel_backward").setAttribute('href', '#img' + imageCount);
  }
  else {
    imagePos--;
    //document.getElementById("carousel_backward").setAttribute('href', '#img' + (imagePos-1));
  }
  //document.getElementById("carousel_backward").setAttribute('href', '#img' + imagePos);
  scrollToPos(imagePos);
  updatePagination();
}

function carousel_forward() {
  if (imagePos == imageCount) {
    imagePos = 1;
    //document.getElementById("carousel_backward").setAttribute('href', '#img' + 1);
  }
  else {
    imagePos++;
    //document.getElementById("carousel_forward").setAttribute('href', '#img' + (imagePos+1));
  }
  updatePagination();
  scrollToPos(imagePos);
  //document.getElementById("carousel_forward").setAttribute('href', '#img' + imagePos);
}

function updatePagination() {
  pagecount.innerHTML = "(" + imagePos + "/" + imageCount + ")";
}


let carousel_container = document.querySelector("#carousel_img");

carousel_container.addEventListener("wheel", function () {
  scrollUpdate();
}, { passive: true })

carousel_container.addEventListener("touchmove", function () {
  scrollUpdate();
}, { passive: true })


document.querySelector("body").addEventListener('keydown', (event) => {
  //console.log("keydown");
  if (event.code == "ArrowRight" || event.code == "ArrowLeft") {
    scrollUpdate();
  }
});

var isScrolling;


function scrollUpdate() {
  //console.log("scrollcheck");
  for (let i = imageCount - 1; i >= 0; i--) {
    //console.log("(" + typeof carousel_container.scrollLeft + ")" + carousel_container.scrollLeft + ">=" + "(" + typeof posList[i] + ")" + posList[i]);
    if (carousel_container.scrollLeft >= posList[i]) {
      //console.log("trigger");
      imagePos = i + 1;
      break;
    }
  }

  updatePagination();
}

function getTargetH1Width() {
  //console.log("fit h1: " + getComputedStyle(document.getElementById("img1")).width);
  document.querySelector("#main-detail").style.width = getComputedStyle(document.getElementById("img1")).width;
}

function scrollToPos(x) {
  //console.log(x);
  carousel_container.scrollLeft = posList[x - 1];
  //console.log(posList[x - 1] + "->" + carousel_container.scrollLeft);
}

//https://htmldom.dev/drag-to-scroll/

document.addEventListener('DOMContentLoaded', function () {

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  pos = {
    // The current scroll
    left: carousel_container.scrollLeft,
    top: carousel_container.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };
  //carousel_container.style.cursor = 'grabbing';
  //carousel_container.style.userSelect = 'none';
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;
  //console.log("mousemove");
  // Scroll the element
  carousel_container.scrollTop = pos.top - dy;
  carousel_container.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
  scrollUpdate();
  //console.log("mouseup");
  //carousel_container.style.cursor = 'grab';
  //carousel_container.style.removeProperty('user-select');
};

carousel_container.addEventListener("mousedown", mouseDownHandler);
})