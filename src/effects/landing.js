
"use strict";

// var Swipe = require('./swipe.js');


// define(function () {
//   window.addEventListener('onresize', _bounceCheck);
//   bounceCheck();
//   browserCheck();
//   Swipe(logo, _transitionCallback);
// });
function init() {
  window.addEventListener('onresize', bounceCheck);
  bounceCheck();
  browserCheck();
  Swipe(logo, _transitionCallback);
};

init();


function bounceCheck() {
  var width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width < 1200) {
    document.getElementById('landing-logo').classList.add('bounce', 'animated', 'infinite');
  }
}

function browserCheck() {
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  switch (true) {
    case isOpera:
      document.getElementById('Opera').className = 'visible';
    case isIE:
      document.getElementById('IE').className = 'visible';
  }
}

// in charge of setting css transition animations after clicking the landing
function _transitionCallback() {
  document.getElementById('landing-logo').classList.remove('bounce');
  document.getElementById('landing-logo').className = 'fade-logo';
  document.getElementById('canvas').className = 'fade-stars';
  removeLanding();
}

function removeLanding() {
  setTimeout(function() {
    document.getElementById('landing-logo').remove();
    document.getElementById('canvas').remove();
    document.getElementById('landing').remove();
    revealMain();
  // }, 1500);
  }, 5);
}

function revealMain() {
  setTimeout(function() {
    generateSegments();
    document.getElementById('main').className = 'reveal';
  // }, 1000);
  }, 1);
}




















function Swipe(element, callbackFn) {
  var swipe_line = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  }

  var direction = '';
  let deltaMin = 90;

  element.addEventListener('click', function(e){
    callbackFn();
  });

  // touch events for most browsers
  function _touchEvents() {
    element.addEventListener('touchstart',function(e){
      var t = e.touches[0];
      swipe_line.startX = t.screenX; 
      swipe_line.startY = t.screenY;
    },false);

    element.addEventListener('touchmove',function(e){
      e.preventDefault();
      var t = e.touches[0];
      swipe_line.endX = t.screenX;
      swipe_line.endY = t.screenY;
    },false);

    element.addEventListener('touchend',function(e){
      let deltaX = swipe_line.endX - swipe_line.startX;
      let deltaY = swipe_line.endY - swipe_line.startY;

      // Minimum swipe distance
      if (deltaX ** 2 + deltaY ** 2 < deltaMin ** 2) {
        return
      }
      // detect horizontal
      if (deltaY === 0 || Math.abs(deltaX / deltaY) > 1) {
        direction = deltaX > 0 ? 'r' : 'l';
      }
      else {
        direction = deltaY > 0 ? 'u' : 'd';
      }

      if (direction && typeof callback === 'function') {
        callbackFn();
      }

      direction = null;
    },false);  


    // touch events for Firefox
    function _mozTouchEvents() {
      element.addEventListener('MozTouchDown',function(e){
        var t = e.touches[0];
        swipe_line.startX = t.screenX; 
        swipe_line.startY = t.screenY;
      },false);
      element.addEventListener('MozTouchMove',function(e){
        e.preventDefault();
        var t = e.touches[0];
        swipe_line.endX = t.screenX;
        swipe_line.endY = t.screenY;
      },false);
      element.addEventListener('MozTouchUp',function(e){
        let deltaX = swipe_line.endX - swipe_line.startX;
        let deltaY = swipe_line.endY - swipe_line.startY;

        // Minimum swipe distance
        if (deltaX ** 2 + deltaY ** 2 < deltaMin ** 2) {
          return
        }
        // detect horizontal
        if (deltaY === 0 || Math.abs(deltaX / deltaY) > 1) {
          direction = deltaX > 0 ? 'r' : 'l';
        }
        else {
          direction = deltaY > 0 ? 'u' : 'd';
        }

        if (direction && typeof callback === 'function') {
          callbackFn();
        }

        direction = null;
      },false);  
    }

    element.addEventListener('click', function(e){
      e.preventDefault();
      callbackFn();
    });

    _touchEvents();
    _mozTouchEvents();
  }
}
// });
