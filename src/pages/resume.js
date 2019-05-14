import React from 'react';
import { Circle, Divider } from '../shared';
import '../styles/resume.css';
import Border from '../svg/border.svg';
import KodeeResume from '../pdf/McIntosh-Kodee.pdf';

export const Resume = () => {
  const handleResume = () => {
    console.log('resume downloaded');
    return KodeeResume;
  }

  let w = window.innerWidth;
  let h = window.innerHeight;

  return (
    <React.Fragment>
      {/* <div className="svg-wrapper">
        <svg className="border" height={h} width={w} x="50" y="50" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
            <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
            </filter>
        </defs>
          <g filter="url(#glow)">
            <rect x={w > 1200 ? w * .02 : w * .2} y={w > 1200 ? h * .1 : h * .02} height={w > 1200 ? h : h - (h * .04)} width={w > 1200 ? w - (w * .04) : w - (w * .22)} />
          </g>
        </svg>
      </div> */}
      <div className="resume">
        {/* <div className="objective">Objective</div> */}
          <div className="teck-skills card">Tech-Skills
            <div className="flex-wrapper">
              <div className="card">
              <Circle percent={"75"} color={"blue"} />
              </div>
              <div className="card">
              <Circle percent={"50"} color={"purple"} />
              </div>
              <div className="card">
              <Circle percent={"25"} color={"red"} />
              </div>
              <div className="card">
              <Circle percent={"90"} color={"orange"} />
              </div>
              <div className="card">
              <Circle percent={"60"} color={"green"} />
              </div>
              <div className="card">
              <Circle percent={"40"} color={"green"} />
              </div>
            </div>
          </div>
          <div className="experience">Experience</div>
          <div className="education">Education</div>
          <div className="download-btn">
            <button onClick={handleResume}>Download Resume!</button>
        </div>
      </div>
    </React.Fragment>
  );
}

const Section = ({ name, content, color }) => {

  return (
    <div className={name}>
      <label className="section-title">{name}</label>
      <Divider color={color} />
      {content}
    </div>
  );
}