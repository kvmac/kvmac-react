import React, { useState, useEffect } from 'react';
import { Particles } from '../effects/particles';

import {
  Logo,
  GlowLogo,
  Cross,
  GlowCross,
  Square,
  GlowSquare,
  Triangle,
  GlowTriangle,
  HollowSquare,
  GlowHollowSquare,
  HollowCircleSmall,
  GlowHollowCircleSmall,
  HollowCircleLarge,
  GlowHollowCircleLarge,
  Zigzag,
  GlowZigzag,
  GlowSquiggle,
  GlowSticks } from '../svg';

import '../styles/landing.css';
import '../styles/background-elements.css';


export function Landing({ closeLanding }) {
  const [dissolve, setDissolve] = useState(false);
  let w = window.innerWidth;
  let h = window.innerHeight;


  useEffect(() => {
    const shapes = [
      // Cross,
      // GlowCross,
      // Square,
      GlowSquare,
      // HollowSquare,
      GlowHollowSquare,
      // Triangle,
      GlowTriangle,
      // HollowCircleSmall,
      GlowHollowCircleSmall,
      // HollowCircleLarge,
      GlowHollowCircleLarge,
      // Zigzag,
      GlowZigzag,
      GlowSquiggle,
      GlowSticks
    ];

    let bg = document.querySelector('.shape-background');

    for (var i = 1; i <= 50; i ++) {
      let node = document.createElement('div');
      node.className = `shape-container--${i}`;
      let img = document.createElement('img');
      img.className = "shape";
      img.src = shapes[i % 5];
      if(i % 3 === 0) {
        img.style = "width: 50px; height: 50px; z-index: 0;";
      } else {
        img.style = "width: 50px; height: 50px; z-index: 3;";
      }

      node.appendChild(img);

      bg.appendChild(node);
    }
  });

  const dissolveLanding = () => {
    setDissolve({ dissolve: true });

    setTimeout(() => closeLanding(), 2000);
  }

  return(
    <div onClick={dissolveLanding} className={!dissolve ? "overlay" : "dissolve"}>
      <div className="shape-background">
      <img className="logo" src={Logo} />
      </div>
      <Particles />
      {/* <canvas id="canvas" className="landing" /> */}
    </div>
  )
}