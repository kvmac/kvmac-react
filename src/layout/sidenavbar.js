import React from 'react';
import '../styles/sidenavbar.css';
import { Link } from 'react-router-dom';
import headshot from '../img/headshot.png';
import Icon from 'react-eva-icons';
import { GlowHomeIcon } from '../svg';
import { HomeElement, PulseElement, CodeElement, FileElement, MessageElement, EmailElement } from '../shared';


export class SideNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      sidenavAnimation: 'init'
    };
  }

  handleSidenav = () => this.setState({ isOpen: !this.state.isOpen, sidenavAnimation: !this.state.isOpen ? "open" : "close" });

  closeSidenav = () => !this.state.isOpen || this.setState({ isOpen: false, sidenavAnimation: "close" });

  render() {
    const { isOpen, sidenavAnimation } = {...this.state};

    return(
      <React.Fragment>
        <div className="sidenavbar-overlay">
          <div id="hamburger-button" className={isOpen ? "close-btn" : ""} onClick={this.handleSidenav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`sidenavbar ${sidenavAnimation}`}>
          <div className={`contents ${isOpen ? "visible" : "invisible"}`}>
            <div className="profile-header">
              <img className="photo" src={headshot} alt="Kodee McIntosh" />
            </div>
            <div className="profile-info">
              <div>Kodee McIntosh</div>
              <div>Software Engineer <Icon
                  name="at-outline"
                  size="small"
                  fill="grey"
                /> SQ</div>
              <div>
                <Icon
                  name="pin-outline"
                  size="small"
                  fill="grey"
                /> Indianapolis, IN area</div>
            </div>
            <div className="nav">
              <div className="link-wrapper">
                {/* <span onMouseOver={}> */}
                  {/* </span> */}
                <Link onClick={this.closeSidenav} to="/">
                  {/* <HighLighter /> */}

                  {/* <i><img src={GlowHomeIcon} /></i> */}
                  <Icon
                    name="home-outline"
                    size="medium"
                    fill="white"
                    />
                    {!isOpen || <label>Home</label>}
                </Link>
              </div>
              <div className="link-wrapper">
                {/* <span onMouseOver={}> */}
                {/* </span> */}
                <Link onClick={this.closeSidenav} to="/projects">
                {/* <CodeElement /> */}
                  <Icon
                    name="code-outline"
                    size="medium"
                    fill="white"
                    />
                    {/* <PulseElement /> */}
                    {!isOpen || <label>Projects</label>}
                </Link>
              </div>
              <div className="link-wrapper">
                {/* <span onMouseOver={}> */}
                {/* </span> */}
                <Link onClick={this.closeSidenav} to="/resume">️
                  <Icon
                    name="file-text-outline"
                    size="medium"
                    fill="white"
                    />
                    {/* <FileElement /> */}
                    {!isOpen || <label>Resume</label>}
                </Link>
              </div>
              {/* <div className="link-wrapper">
                <Link onClick={this.closeSidenav} to="/blog">️
                  <Icon
                    name="message-square-outline"
                    size="medium"
                    fill="white"
                    />
                    {!isOpen || <label>Blog</label>}
                </Link>
              </div> */}
              <div className="link-wrapper">
                {/* <span onMouseOver={}> */}
                {/* </span> */}
                <Link onClick={this.closeSidenav} to="/contact">️
                  <Icon
                    name="email-outline"
                    size="medium"
                    fill="white"
                    />
                    {/* <EmailElement /> */}
                    {!isOpen || <label>Contact</label>}
                </Link>
              </div>
            </div>
            <div className="social">
              <span className="divide"></span>
              <a className="github" href="https://github.com/kvmac" target="_blank" rel="noopener noreferrer">
                <Icon
                  name="github-outline"
                  size="large"
                  fill="white"
                  />
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/kodee-mcintosh" target="_blank" rel="noopener noreferrer">
                <Icon
                  name="linkedin-outline"
                  size="large"
                  fill="white"
                  />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const HighLighter = () => {

  return (
    <div className="highlighter">
      <svg viewBox="0 0 50 50">
        <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="4"></feGaussianBlur>
            <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
            </filter>
        </defs>
        <path x1="0" y1="0" x2="0" y2="10" stroke="#26e9ff" stroke-width="2" />
      </svg>
    </div>
  );
}