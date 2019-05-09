import React from 'react';
import { Circle } from '../shared/circle';
import '../style/resume.css';
import Border from '../svg/border.svg';

export class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    return (
      <div className="resume">
        <div className="svg-wrapper">
          <svg className="border" height={h} width={w} xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <div className="header">
          <div className="flex-wrapper" />Header</div>
        <div className="divider">
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
        <div className="objective">Objective</div>
        {window.innerWidth < 1200 ||
          <div className="teck-skills">
            <div className="flex-wrapper">
                <Circle percent={"75"} color={"blue"} />
                <Circle percent={"50"} color={"purple"} />
                <Circle percent={"25"} color={"red"} />
                <Circle percent={"90"} color={"orange"} />
                <Circle percent={"60"} color={"green"} />
            </div>
          </div>
        }
        <div className="experience">Experience</div>
        <div className="education">Education</div>
      </div>
    );
  }
}