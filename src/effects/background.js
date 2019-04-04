"use strict";


function generateSegments() {
  let base = 0;

  for(let x = 0; x < 30; x++) {
    let end = false;
    let prevLine = [];
    let widthCount = 0;

    let prevSeg = { 
      left: 0,
      width: 0
    };

    for(let y = 0; !end; y++) {
      let allow = true;

      let segment = { 
        left: 0,
        width: 0,
        color: null
      };

      function _setWidth(max, spacing) {
        let newWidth = _widthGenerator();

        segment.width = newWidth;
        widthCount += newWidth + spacing;
        if (widthCount > max) {
          widthCount -= newWidth + spacing;
          allow = false;
          y--;
          if (max - widthCount <= 20) {
            end = true;
          }
        } else {
          segment.left += prevSeg.width + prevSeg.left + spacing;
        }
      }

      function _setColor() {
        segment.color = _colorGenerator();
      }

      function _setAllow() {
        if(allow) {
          prevLine.push(segment);
          prevSeg = segment;
        }
      }

      // _setWidth([max width percentage], [spacing percentage between segments]);
      _setWidth(90, 3);
      _setColor();
      _setAllow();

    }
    base += .075;

    let line = document.createElement('div');
    line.className = 'line';

    // line.style.opacity = 0;
    line.style.animation = `write .25s ease-in ${base}s 1 forwards`;
    line.style.webkitAnimation = `write .25s ease-in ${base}s 1 forwards`;
    line.style.mozWebkitAnimation = `write .25s ease-in ${base}s 1 forwards`;

    prevLine.forEach(function(seg) {
      let el = document.createElement('div');

      let style = `width: ${seg.width}%;`;
      style += 'height: 100%;';
      style += `left: ${seg.left}%;`;
      style += "position: absolute;";
      style += 'border-radius: 7em;';

      el.setAttribute('style', style);
      el.classList.add(seg.color, 'seg-shadow');

      line.appendChild(el);
    });
    document.getElementById('segments').appendChild(line);
  }

  document.getElementById('segments').className = 'reveal';
  document.getElementById('main').style.opacity = '1';
}
function _widthGenerator() {
  var num = Math.floor(Math.random() * 10) % 10;

  switch (num) {

    case 0:
      return 5;
    case 1:
      return 5;
    case 2:
      return 10;
    case 3:
      return 10;
    case 4:
      return 15;
    case 5:
      return 20;
    case 6:
      return 25;
    case 7:
      return 30;
    case 8:
      return 40;
    case 9:
    return 60;
  }
}

function _colorGenerator() {

  // var num = Math.floor(Math.random() * 10) % 10;
  var num = (Math.floor(Math.random() * 10) % 5);
  switch (num) {

    // darks
    // case 0:
    //   return 'blue-primary';
    // case 1:
    //   return 'purple-primary';
    // case 2:
    //   return 'red-primary';
    // case 3:
    //   return 'orange-primary';
    // case 4:
    //   return 'green-primary';

    // lights
    // case 5:
    //   return 'blue-secondary';
    // case 6:
    //   return 'purple-secondary';
    // case 7:
    //   return 'red-secondary';
    // case 8:
    //   return 'orange-secondary';
    // case 9:
    //   return 'green-secondary';
    case 0:
      return 'blue-secondary';
    case 1:
      return 'purple-secondary';
    case 2:
      return 'red-secondary';
    case 3:
      return 'orange-secondary';
    case 4:
      return 'green-secondary';
    case 5:
      return 'white';
  }
}
