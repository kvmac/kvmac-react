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
  });

  const dissolveLanding = () => {
    setDissolve({ dissolve: true });

    setTimeout(() => closeLanding(), 2000);
  }

  return(
    <div className={!dissolve ? "overlay" : "dissolve"}>
      <Particles content={
        <img className="logo" src={Logo} />
      }/>
      {/* <canvas id="canvas" className="landing" /> */}
    </div>
  )
}