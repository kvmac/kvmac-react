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

import '../style/landing.css';


export function Landing({ closeLanding }) {
  const [dissolve, setDissolve] = useState(false);


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
      img.src = shapes[i % 6];
      if(i % 3 === 0) {
        img.style = "width: 50px; height: 50px; z-index: 0; display: inline;";
      } else {
        img.style = "width: 50px; height: 50px; z-index: 3; display: inline;";
      }

      node.appendChild(img);

      bg.appendChild(node);
    }
  });

  const dissolveLanding = () => {
    setDissolve({ dissolve: true });

    setTimeout(() => closeLanding(), 1500);
  }

  return(
    <div onClick={dissolveLanding} className={!dissolve ? "overlay" : "dissolve"}>
      <div className="shape-background"></div>
      <img className="logo" src={Logo} />
      {/* <canvas id="canvas" className="landing" /> */}
      <Particles />
    </div>
  )
}