import React from 'react';
import headshot from '../img/headshot.png';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';
import '../style/about.css';

export class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="about">
        <div className="page-header">About</div>
          <div className="profile-header">
            <img className="photo" src={headshot} alt="Kodee McIntosh" />
            <div className="social">
            <a href="https://github.com/kvmac" target="_blank" rel="noopener noreferrer"><img className="github" src={github} /></a>
            <a href="https://www.linkedin.com/in/kodee-mcintosh" target="_blank" rel="noopener noreferrer"><img className="linkedin" src={linkedin} /></a>
            </div>
          </div>
          <div className="profile-info">
            <label>Kodee McIntosh</label>
            <label>Software Engineer @ SQ</label>
            <label>Indianapolis, IN area</label>
          </div>
        <div className="item-header"></div>
      </div>
    );
  }
}