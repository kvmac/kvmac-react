import React from 'react';
import { Circle, Divider } from '../shared';
import '../styles/resume.css';
import VisibilitySensor from 'react-visibility-sensor';
import Border from '../svg/border.svg';
import KodeeResume from '../pdf/McIntosh-Kodee.pdf';

export const Resume = () => {
  const [ activeCircles, activateCircle ] = React.useState({});
  
  const handleResume = () => {
    console.log('resume downloaded');
    return KodeeResume;
  }

  const handleCircle = (visibility, id) => {
    console.log('handle circle:   ', {[id]: visibility});
    activateCircle({ ...activeCircles, [id]: visibility });
  }
  console.log('active:   ', activeCircles, "    ", activeCircles["React"], activeCircles["Golang"], activeCircles["C#"], activeCircles["Python"], activateCircle["Node"], activeCircles["Angular"]);

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
          <div className="tech-skills">
              <div className="title">Tech-Skills</div>
              <div className="card">
                {/* <i className="devicons devicons-react"></i>
                <button id="react" onClick={handleCircle}></button> */}
                <VisibilitySensor onChange={(e) => handleCircle(e, "react")}>
                  <Circle percent={75} color={"blue"} isActive={activeCircles["react"]} />
                </VisibilitySensor>
              </div>
              <div className="card">
                {/* <i className="devicons devicons-go"></i> */}
                {/* <button id="golang" onClick={handleCircle}></button> */}
                <VisibilitySensor onChange={(e) => handleCircle(e, "golang")}>
                  <Circle percent={50} color={"purple"} isActive={activeCircles["golang"]} />
                </VisibilitySensor>
              </div>
              <div className="card">
                {/* <i className="devicons devicons-dotnet"></i>
                <button id="c-sharp" onClick={handleCircle}></button> */}
                <VisibilitySensor onChange={(e) => handleCircle(e, "c-sharp")}>
                  <Circle percent={25} color={"red"} isActive={activeCircles["c-sharp"]} />
                </VisibilitySensor>
              </div>
              <div className="card">
                {/* <i className="devicons devicons-python"></i>
                <button id="python" onClick={handleCircle}></button> */}
                <VisibilitySensor onChange={(e) => handleCircle(e, "python")}>
                  <Circle percent={90} color={"orange"} isActive={activeCircles["python"]} />
                </VisibilitySensor>
              </div>
              <div className="card">
                {/* <i className="devicons devicons-nodejs_small"></i>
                <button id="node" onClick={handleCircle}></button> */}
                <VisibilitySensor onChange={(e) => handleCircle(e, "node")}>
                  <Circle percent={60} color={"green"} isActive={activeCircles["node"]} />
                </VisibilitySensor>
              </div>
              <div className="card">
                {/* <i className="devicons devicons-angular"></i>
                <button id="angular" onClick={handleCircle}></button> */}
                <VisibilitySensor onChange={(e) => handleCircle(e, "angular")}>
                  <Circle percent={40} color={"green"} isActive={activeCircles["angular"]} />
                </VisibilitySensor>
              </div>
            </div>
          <div className="experience">
            <div className="title">Experience</div>
            <div className="sq card">
              <div className="title">
                <a href="https://www.stratospherequality.com">Stratosphere Quality</a>
              </div>
              <div className=""></div>
            </div>
            <div className="availity card">
              <div className="title">
                <a href="https://www.availity.com">Availity</a>
              </div>
              <div className=""></div>
            </div>
            <div className="egenuity card">
              <div className="title">
                <a href="https://www.egenuity.com">eGenuity</a>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="education">
          <div className="title">Education</div>
          </div>
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