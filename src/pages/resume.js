import React from 'react';
import { Circle, Divider } from '../shared';
import { Document, Page } from 'react-pdf';
import '../styles/resume.css';
import VisibilitySensor from 'react-visibility-sensor';
import Border from '../svg/border.svg';
import KodeeResume from '../pdf/McIntosh-Kodee.pdf';

export const Resume = () => {
  // const [ activeCircles, activateCircle ] = React.useState({});
  const [ activeSections, activateSection ] = React.useState({ "tech": true });
  
  const handleResume = () => {
    console.log('resume downloaded');
    // return KodeeResume;
  }

  // const handleCircle = (visibility, id) => {
  //   console.log('handle circle:   ', {[id]: visibility});
  //   activateCircle({ ...activeCircles, [id]: visibility });
  // }
  const handleSection = (visibility, id) => {
    if(!visibility) {
      return;
    }

    activateSection({ ...activeSections, [id]: visibility});
  }
  // console.log('active:   ', activeCircles, "    ", activeCircles["React"], activeCircles["Golang"], activeCircles["C#"], activeCircles["Python"], activateCircle["Node"], activeCircles["Angular"]);

  let w = window.innerWidth;
  let h = window.innerHeight;

  return (
    <div className="resume">
      <VisibilitySensor onChange={(e) => handleSection(e, "tech")}>
        <div className={`tech-skills card ${activeSections["tech"] ? "active" : "fade"}`}>
          <div className="title">Tech-Skills</div>
          <div className="card skill-container">
            <div className="skill">
              <label>React.js</label>
            </div>
            <Circle label={"Sr"} percent={75} color={"golang"} isActive={activeSections["tech"]} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>C#</label>
            </div>
            <Circle label={"Mid"} percent={50} color={"c-sharp"} isActive={activeSections["tech"]} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Golang</label>
            </div>
            <Circle label={"Mid"} percent={50} color={"react"} isActive={activeSections["tech"]} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Angular</label>
            </div>
            <Circle label={"Jr"} percent={25} color={"angular"} isActive={activeSections["tech"]} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Node</label>
            </div>
            <Circle label={"Jr"} percent={25} color={"node"} isActive={activeSections["tech"]} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Python</label>
            </div>
            <Circle label={"Jr"} percent={25} color={"python"} isActive={activeSections["tech"]} />
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={(e) => handleSection(e, "exp")}>
        <div className={`experience card ${activeSections["exp"] ? "active" : "fade"}`}>
          <div className="title">Experience</div>
          <div className="sq card">
            <a href="https://www.stratospherequality.com">Stratosphere Quality</a>
            <div className="">
              did stuff here
            </div>
          </div>
          <div className="availity card">
            <a href="https://www.availity.com">Availity</a>
            <div className="card">
              did stuff here
            </div>
          </div>
          <div className="egenuity card">
            <a href="https://www.egenuity.com">eGenuity</a>
            <div className="card">
              did stuff here
            </div>
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={(e) => handleSection(e, "edu")}>
        <div className={`education card ${activeSections["edu"] ? "active" : "fade"}`}>
          <div className="title">Education</div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={(e) => handleSection(e, "download-btn")}>
        <div className={`download-btn card ${activeSections["download-btn"] ? "active" : "fade"}`}>
          <a href="../pdf/McIntosh-Kodee.pdf" download>
            <button onClick={handleResume}>Download Resume!</button>
          </a>
        </div>
      </VisibilitySensor>
    </div>
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