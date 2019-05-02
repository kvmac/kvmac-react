import React from 'react';
import { Circle } from '../shared/circle';
import '../style/resume.css';

export class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="resume">
        <svg height={window.innerHeight} width={window.innerWidth} xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height={window.innerHeight} width={window.innerWidth} />
        </svg>
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
              <div className="circle-container">
                <Circle percent={"75"} color={"blue"} />
              </div>
              <div className="circle-container">
                <Circle percent={"50"} color={"purple"} />
              </div>
              <div className="circle-container">
                <Circle percent={"25"} color={"red"} />
              </div>
              <div className="circle-container">
                <Circle percent={"90"} color={"orange"} />
              </div>
              <div className="circle-container">
                <Circle percent={"60"} color={"green"} />
              </div>
            </div>
          </div>
        }
        <div className="experience">Experience</div>
        <div className="education">Education</div>
      </div>
    );
  }
}