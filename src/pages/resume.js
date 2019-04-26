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
        <svg>
          <rectangle>
          </rectangle>
        </svg>
        <div className="header">
          <div className="flex-wrapper" />Header</div>
        <div className="divider">
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
        <div className="objective">Objective</div>
        <div className="teck-skills">Tech Skills
          <div className="flex-wrapper">
            <Circle percent={"75"} color={"blue"} />
            <Circle percent={"50"} color={"purple"} />
            <Circle percent={"25"} color={"red"} />
            <Circle percent={"90"} color={"orange"} />
            <Circle percent={"60"} color={"green"} />
          </div>
        </div>
        <div className="experience">Experience</div>
        <div className="education">Education</div>
      </div>
    );
  }
}