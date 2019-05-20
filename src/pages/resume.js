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
    <div className="resume">
      <div className="tech-skills card">
        <div className="title">Tech-Skills</div>
        <div className="skill-container">
          <div className="skill">
          <label>
          SKILL
          </label>
          </div>
          <Circle percent={75} color={"blue"} isActive={true} />
        </div>
        <div className="skill-container">
          <div className="skill">
          <label>
          SKILL
          </label>
          </div>
          <Circle percent={50} color={"purple"} isActive={true} />
        </div>
        <div className="skill-container">
          <div className="skill">
          <label>
          SKILL
          </label>
          </div>
          <Circle percent={25} color={"red"} isActive={true} />
        </div>
        <div className="skill-container">
          <div className="skill">
          <label>
          SKILL
          </label>
          </div>
          <Circle percent={90} color={"orange"} isActive={true} />
        </div>
        <div className="skill-container">
          <div className="skill">
          <label>
          SKILL
          </label>
          </div>
          <Circle percent={60} color={"green"} isActive={true} />
        </div>
        <div className="skill-container">
          <div className="skill">
          <label>
          SKILL
          </label>
          </div>
          <Circle percent={40} color={"green"} isActive={true} />
        </div>
      </div>
      <VisibilitySensor onChange={(e) => handleCircle(e, "react")}>
        <div className="experience card">
          <div className="title">Experience</div>
          <div className="sq">
            <div className="title">
              <a href="https://www.stratospherequality.com">Stratosphere Quality</a>
            </div>
            <div className=""></div>
          </div>
          <div className="availity">
            <div className="title">
              <a href="https://www.availity.com">Availity</a>
            </div>
            <div className=""></div>
          </div>
          <div className="egenuity">
            <div className="title">
              <a href="https://www.egenuity.com">eGenuity</a>
            </div>
            <div className=""></div>
          </div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={(e) => handleCircle(e, "react")}>
        <div className="education card">
          <div className="title">Education</div>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={(e) => handleCircle(e, "react")}>
        <div className="download-btn card">
          <button onClick={handleResume}>Download Resume!</button>
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