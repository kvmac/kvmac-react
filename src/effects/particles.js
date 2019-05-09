import React, { useEffect } from 'react';

import '../styles/landing.css';

export function Particles() {

  useEffect(() => {
    const _createClass = (function () {
      function defineProperties (target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) {
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) {
          defineProperties(Constructor.prototype, protoProps)
        }

        if (staticProps) {
          defineProperties(Constructor, staticProps); return Constructor
        }
      }
    })();

    function _classCallCheck (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }

    // Ref canvas & context
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Variables
    // let color = '#CCCCCC';
    let color = '#26e9ff';
    let maxParticles = 25;
    let rads = [0.25, 0.75, 1, 1.25, 2, 2.25];
    let particles = [];
    let cx = void 0;
    let cy = void 0;
    // Tracking mouse position
    canvas.addEventListener('mousemove', function (e) {
      cx = e.clientX;
      cy = e.clientY;
    }, false);
    // Particle class

    const Particle = (function () {
      function Particle (x, y, radius) {
        _classCallCheck(this, Particle);

        this.x = x;
        this.y = y;
        this.radius = radius;
      }

      _createClass(Particle, [{
        key: 'move',
        value: function move (cx, cy) {
          // Move particles
          this.x += Math.sin(this.y / 30) * Math.cos(this.y / 30);
          this.y += Math.sin(this.x / 30) * Math.cos(this.x / 30);

          if (this.x - cx > 0) {
            this.x += 0.25;
          }
          if (this.y - cy > 0) {
            this.y += 0.5;
          }
          if (this.x - cx < 0) {
            this.x -= 0.75;
          }
          if (this.x - cx < 0) {
            this.y -= 1;
          }

          if (this.x < 0 || this.x > width) {
            this.x = cx;
          }
          if (this.y < 0 || this.y > height) {
            this.y = cy;
          }
        }
      }, {
        key: 'draw',
        value: function draw(ctx) {
          ctx.beginPath();
          // adjust particle size here
          ctx.arc(this.x, this.y, this.radius, 0, .5 * Math.PI, false);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }]);

      return Particle;
    })();
    // Create particles & push to array
    for (let i = 0; i < maxParticles; i++) {
      let p = new Particle(Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),
        rads[Math.floor(Math.random() * rads.length)])
      particles.push(p);
    }
    // Animation loop
    function loop () {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      // Draw & move particles
      let _iteratorNormalCompletion = true;
      let _didIteratorError = false;
      let _iteratorError = '';

      try {
        for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          let particle = _step.value;

          particle.draw(ctx);
          particle.move(cx, cy);
        }
        // Animation frame
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            _iteratorError.return();
          }
        }
      }

      requestAnimationFrame(loop);
    }
    // First call to loop
    loop();
  });

  return(
    <canvas id="canvas" className="particles" />
  )
}