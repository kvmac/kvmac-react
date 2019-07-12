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


  return (
    <div className="resume">
      <div className="title">Résumé</div>
      <div className="main-container card">
        <div className="tech-skills card active">
          <div className="title">Tech-Skills</div>
          <div className="card skill-container">
            <div className="skill">
              <label>React</label>
            </div>
            <Circle label={"Sr"} percent={75} color="golang" isActive={true} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>C#</label>
            </div>
            <Circle label={"Mid"} percent={50} color={"c-sharp"} isActive={true} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Golang</label>
            </div>
            <Circle label={"Mid"} percent={50} color={"react"} isActive={true} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Angular</label>
            </div>
            <Circle label={"Jr"} percent={25} color={"angular"} isActive={true} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Node</label>
            </div>
            <Circle label={"Jr"} percent={25} color={"node"} isActive={true} />
          </div>
          <div className="card skill-container">
            <div className="skill">
              <label>Python</label>
            </div>
            <Circle label={"Jr"} percent={25} color={"python"} isActive={true} />
          </div>
        </div>
        <div className="right-container">
          <div className="experience card active">
            <div className="title">Experience</div>
            <div className="card">
              <div className="mobile-content">
                <a href="https://www.stratospherequality.com">Stratosphere Quality</a>
                <div className="description">
                  React & C# mobile
                </div>
              </div>
              <div className="desktop-content">
                <a href="https://www.stratospherequality.com">Stratosphere Quality</a>
                <div className="description">
                  React & C# desktop
                </div>
              </div>
            </div>
            <div className="card">
              <div className="mobile-content">
                <a href="https://www.availity.com">Availity</a>
                <div className="description">
                  Angular & C# mobile
                </div>
              </div>
              <div className="desktop-content">
                <a href="https://www.availity.com">Availity</a>
                <div className="description">
                  Angular & C# desktop
                </div>
              </div>
            </div>
            <div className="card">
              <div className="mobile-content">
                <a href="https://www.egenuity.com">eGenuity</a>
                <div className="description">
                  Angular & C# mobile
                </div>
              </div>
              <div className="desktop-content">
                <a href="https://www.egenuity.com">eGenuity</a>
                <div className="description">
                  Angular & C# desktop
                </div>
              </div>
            </div>
          </div>
          <div className="education card active">
            <div className="title">Education</div>
            <div className="card">
              <div className="mobile-content">
                <a href="https://www.anderson.edu">Anderson University</a>
                <div className="description">
                  Information Systems mobile
                </div>
              </div>
              <div className="desktop-content">
                <a href="https://www.anderson.edu">Anderson University</a>
                <div className="description">
                  Information Systems desktop
                </div>
              </div>
            </div>
            <div className="card">
              <div className="mobile-content">
                <a href="https://www.iub.edu">Indiana University</a>
                <div className="description">
                  Accounting & Finance mobile
                </div>
              </div>
              <div className="desktop-content">
                <a href="https://www.iub.edu">Indiana University</a>
                <div className="description">
                  Accounting & Finance desktop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-btn active">
        <a href="../pdf/McIntosh-Kodee.pdf" download>
          <button onClick={handleResume}>Download Resume!</button>
        </a>
      </div>
    </div>
  );
}