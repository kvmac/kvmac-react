import React, { useState, useEffect } from 'react';

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
  HollowCircle,
  GlowHollowCircle,
  Zigzag,
  GlowZigzag } from '../svg';

import '../style/landing.css';


export function Landing({ closeLanding }) {
  const [dissolve, setDissolve] = useState(false);


  useEffect(() => {
  });

  const dissolveLanding = () => {
    setDissolve({ dissolve: true });

    setTimeout(() => closeLanding(), 1500);
  }

  return(
    <div onClick={dissolveLanding} className={!dissolve ? "overlay" : "dissolve"}>
      <img className="logo" src={Logo} />
      <canvas id="canvas" className="landing" />
    </div>
  )
}