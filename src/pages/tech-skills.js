import React from 'react';
import { Circle } from '../shared/circle';
import '../style/tech-skills.css';

export class TechSkills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="tech-skills">
        <div className="teck-skills">Tech Skills
          <div className="flex-wrapper">
            <span></span>
            <Circle percent={"75"} color={"blue"} />
          </div>
          <div className="flex-wrapper">
            <span></span>
            <Circle percent={"50"} color={"purple"} />
          </div>
          <div className="flex-wrapper">
            <span></span>
            <Circle percent={"25"} color={"red"} />
          </div>
          <div className="flex-wrapper">
            <span></span>
            <Circle percent={"90"} color={"orange"} />
          </div>
          <div className="flex-wrapper">
            <span></span>
            <Circle percent={"60"} color={"green"} />
          </div>
        </div>
      </div>
    );
  }
}