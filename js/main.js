const cursorRounded = document.getElementById("cursor");


const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

window.addEventListener('mousemove', moveCursor)
window.addEventListener('mouseleave', moveCursor)


let mobilelightswitch = document.querySelector("nav li.mobileonly label");
//console.log(mobilelightswitch);
let lighton = document.getElementById("lighton");
let lightoff = document.getElementById("lightoff");

lightoff.addEventListener("click", () => { setPrefs(false); });
lighton.addEventListener("click", () => { setPrefs(true); });
mobilelightswitch.addEventListener("click", () => { MobileSwitch(true); });

function MobileSwitch(click) {

  console.log("mobile switching");

  if (window.getComputedStyle(mobilelightswitch).getPropertyValue('display') != "none") {
    //console.log("mobile display on");
    if (lighton.checked) {
      mobilelightswitch.classList.add('checked');
      mobilelightswitch.setAttribute("for", "lightoff");
      if (click) { setPrefs(false); };
    }
    else {
      mobilelightswitch.classList.remove('checked');
      mobilelightswitch.setAttribute("for", "lighton");
      if (click) { setPrefs(true); };
    }
  }
}

function setPrefs(x) {
  localStorage.setItem("light", x);
  if (x) {
    document.getElementsByTagName('body')[0].style.backgroundColor = "#fff";
  }
  else {
    document.getElementsByTagName('body')[0].style.backgroundColor = "#000";
  }
}

function getPrefs() {
  console.log("getting prefs");
  if (localStorage.getItem("light") == "true") {
    console.log("pref on");
    /*mobilelightswitch.classList.add('checked');
    lightswitch.classList.add('checked');
    mobilelightswitch.setAttribute("for", "lightoff");  */
    document.getElementsByTagName('body')[0].style.backgroundColor = "#fff";
  }
  else {
    console.log("pref off");
    //mobilelightswitch.classList.remove('checked');
    lighton.checked = false;
    lightoff.checked = true;
    //mobilelightswitch.setAttribute("for", "lighton");  
  };
}
/*
window.onload = function() {//= (event) => {
  console.log('page is fully loaded');
  getPrefs();
  MobileSwitch(false);
};
*/

var dppx = false;
var dpi = false;
var orientation = 0;
var screenW = false;
var screenH = false;
var windowW = false;
var windowH = false;

// use window.matchMedia and loop downwards to find the pixel multiplier.
// we use dppx becuase iOS only supports -webkit-min-device-pixel-ratio, 
// which doesn't allow dpi units (shame, that would have told an iPad from an iPad mini)
var calcDPpx = function () {

  if (typeof window.devicePixelRatio !== 'undefined') {
    dppx = window.devicePixelRatio.toFixed(2);
  } else {
    // fallback
    for (var i = 5; i >= 1; i = (i - 0.05).toFixed(2)) {
      if (window.matchMedia("(-webkit-min-device-pixel-ratio: " + i + ")").matches
        || window.matchMedia("(min-resolution: " + i + "dppx)").matches) {
        dppx = i;
        break;
      }
    }
  }

  console.log("dppx is " + dppx);

};


var calcDpi = function () {
  if (window.matchMedia("(min-resolution: 10dpi)").matches) {
    for (var i = 650; i >= 1; i = (i - 1)) {
      if (window.matchMedia("(min-resolution: " + i + "dpi)").matches) {
        dpi = i;
        break;
      }
    }
  }
  console.log("dpi is " + dpi);
}

// calculate the orientation (iOS way vs chrome)
var calcOrientation = function () {
  if (typeof screen.orientation !== 'undefined') {
    orientation = screen.orientation.angle;
  } else {
    orientation = window.orientation;
  }
}

// calculate the screen and the viewport sizes. If you don't know the difference... hmmm.
var calcScreen = function () {

  screenW = Math.max(screen.width || 0);
  screenH = Math.max(screen.height || 0);
  windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

};

// do some edge case processing and print stuff to screen
var display = function () {
  // weird bug in iOS where the screen size is set in one orientation, not the currently viewed one.
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (orientation + '' === '90' || orientation + '' === '-90') && screenH > screenW) {
    var temp = screenH;
    screenH = screenW;
    screenW = temp;
  }

  /*document.querySelector('[data-js-dppx]').innerHTML = dppx + '<span class="actor__suffix">dppx</span>';
  if (dpi) { 
    document.querySelector('[data-js-dpi]').innerText = dpi + 'dpi (CSSinch)';
  }
  document.querySelector('[data-js-orientation]').innerText = orientation;
  document.querySelector('[data-js-viewport-v]').innerText = windowW + 'x' + windowH + 'px';
  document.querySelector('[data-js-viewport-a]').innerText = ( windowW * dppx ) + 'x' + ( windowH * dppx  ) + 'px';  
  document.querySelector('[data-js-screen-v]').innerText = screenW + 'x' + screenH + 'px '; 
  document.querySelector('[data-js-screen-a]').innerText = ( screenW * dppx ) + 'x' + ( screenH * dppx  ) + 'px';
  */
}

// recalculate on resize and turning a device
var reOrient = function () {
  window.addEventListener('orientationchange', function () {
    calcDPpx();
    calcDpi();
    calcOrientation();
    calcScreen();
    display();
  });
  window.addEventListener('resize', function () {
    calcDPpx();
    calcDpi();
    calcScreen();
    display();
  });
};


// on page ready, initialise all the things.
(function ready(fn) {/*
  if (document.readyState != 'loading') {
    calcDPpx();
    calcDpi();
    calcOrientation();
    calcScreen();
    display();
    reOrient();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      calcDPpx();
      calcDpi();
      calcOrientation();
      calcScreen();
      display();
      reOrient();
    });
  }*/
  console.log('page is fully loaded');
  getPrefs();
  MobileSwitch(false);
})();

window.addEventListener('pageshow', (event) => {
  getPrefs();
  MobileSwitch(false);
})
