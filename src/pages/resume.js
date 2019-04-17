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
        <div className="header">Header</div>
        <div className="divider">
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
        <div className="objective">Objective</div>
        <div className="teck-skills">Tech Skills
          <div>
            <Circle percent={"50%"} color={"yellow"} />
          </div>
        </div>
        <div className="experience">Experience</div>
        <div className="education">Education</div>
      </div>
    );
  }
}