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

    let bg1 = document.querySelector('.shape-background-top');
    let bg2 = document.querySelector('.shape-background-bottom');

    for (var i = 1; i <= 20; i ++) {
      let node1 = document.createElement('div');
      let node2 = document.createElement('div');

      node1.className = `shape-container--${i}`;
      node2.className = `shape-container--${i}`;

      let img1 = document.createElement('img');
      let img2 = document.createElement('img');

      img1.className = "shape";
      img2.className = "shape";

      img1.src = shapes[i % 6];
      img2.src = shapes[i % 6];

      if(i % 2 === 0) {
        img1.style = w < 1200 ? "width: 75px; height: 75px" : "width: 150px; height: 150px;";
        img2.style = w < 1200 ? "width: 75px; height: 75px;" : "width: 150px; height: 150px;";
      } else {
        img1.style = w < 1200 ? "width: 25px; height: 25px" : "width: 75px; height: 75px;";
        img2.style = w < 1200 ? "width: 25px; height: 25px;" : "width: 75px; height: 75px;";
      }

      node1.appendChild(img1);
      node2.appendChild(img2);

      bg1.appendChild(node1);
      bg2.appendChild(node2);
    }
  });

  const dissolveLanding = () => {
    setDissolve({ dissolve: true });

    setTimeout(() => closeLanding(), 1500);
  }

  return(
    <div onClick={dissolveLanding} className={!dissolve ? "overlay" : "dissolve"}>
      <div className="shape-background-top"></div>
        <Particles />
      <div className="shape-background-bottom"></div>
      <img className="logo" src={Logo} />
      {/* <canvas id="canvas" className="landing" /> */}
    </div>
  )
}