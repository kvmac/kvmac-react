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
      GlowCross,
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

    for (var i = 1; i <= 1000; i ++) {
      let node = document.createElement('div');
      node.className = `shape-container--${i}`;
      let img = document.createElement('img');
      img.src = shapes[i % 9];
      img.style = "width: 100px; height: 100px; z-index: 10;";

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