import React from 'react';
import headshot from '../img/headshot.png';
import Icon from 'react-eva-icons';
import '../styles/about.css';

export class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="about card">
        <div className="about-title">About</div>
        <div className="content">
          <div className="profile-header card">
            <img className="photo" src={headshot} alt="Kodee McIntosh" />
            <div className="profile-info">
              <label>Kodee McIntosh</label>
              <label>Software Engineer @ SQ</label>
              <label>Indianapolis, IN area</label>
            </div>
            <div className="social">
              <a href="https://github.com/kvmac" target="_blank" rel="noopener noreferrer">
                <Icon
                  name="github-outline"
                  size="large"
                  fill="white"
                  />
              </a>
              <a href="https://www.linkedin.com/in/kodee-mcintosh" target="_blank" rel="noopener noreferrer">
                <Icon
                  name="linkedin-outline"
                  size="large"
                  fill="white"
                  />
              </a>
            </div>
          </div>
          <div className="bio card">
            <div className="bio-title">Bio</div>
            <div>Stuff about me</div>
          </div>
        </div>
      </div>
    );
  }
}