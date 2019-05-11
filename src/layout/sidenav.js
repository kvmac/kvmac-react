import React from 'react';
import '../styles/sidenav.css';
import { Link } from 'react-router-dom';
import headshot from '../img/headshot.png';
import Icon from 'react-eva-icons';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';


export class Sidenav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      sidenavAnimation: 'init'
    };
  }

  handleSidenav = () => this.setState({ isOpen: !this.state.isOpen, sidenavAnimation: !this.state.isOpen ? "open" : "close" });

  render() {
    const { isOpen, sidenavAnimation } = {...this.state};

    return(
      <div className={`sidenav ${sidenavAnimation}`}>
        <div id="hamburger-button" className={isOpen ? "close-button" : ""} onClick={this.handleSidenav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
            <HighLighter />
              {/* <span onMouseOver={}> */}
                <Icon
                  name="home-outline"
                  size="medium"
                  fill="grey"
                  />
                {/* </span> */}
              <Link onClick={this.handleSidenav} to="/">
                  {isOpen ? "Home" : ""}
              </Link>
            </div>
            <div className="link-wrapper">
              {/* <span onMouseOver={}> */}
                <Icon
                  name="code-outline"
                  size="medium"
                  fill="grey"
                  />
              {/* </span> */}
              <Link onClick={this.handleSidenav} to="/tech-skills">
                  {isOpen ? "Tech-Skills" : ""}
              </Link>
            </div>
            <div className="link-wrapper">
              {/* <span onMouseOver={}> */}
                <Icon
                  name="activity-outline"
                  size="medium"
                  fill="grey"
                  />
              {/* </span> */}
              <Link onClick={this.handleSidenav} to="/projects">
                  {isOpen ? "Projects" : ""}
              </Link>
            </div>
            <div className="link-wrapper">
              {/* <span onMouseOver={}> */}<Icon
                  name="file-text-outline"
                  size="medium"
                  fill="grey"
                  />
              {/* </span> */}
              <Link onClick={this.handleSidenav} to="/resume">️
                  {isOpen ? "Resume" : ""}
              </Link>
            </div>
            <div className="link-wrapper">
              {/* <span onMouseOver={}> */}
                <Icon
                  name="message-square-outline"
                  size="medium"
                  fill="grey"
                  />
              {/* </span> */}
              <Link onClick={this.handleSidenav} to="/blog">️
                  {isOpen ? "Blog" : ""}
              </Link>
            </div>
              {/* <Link className="link" to="/blog">Blog</Link> */}
          </div>
          <div className="footer">
            <div className="social">
            <a href="https://github.com/kvmac" target="_blank" rel="noopener noreferrer">
              <Icon
                name="github-outline"
                size="medium"
                />
            </a>
            <a href="https://www.linkedin.com/in/kodee-mcintosh" target="_blank" rel="noopener noreferrer">
              <Icon
                name="linkedin-outline"
                size="medium"
                />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const HighLighter = () => {

  return (
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
  );
}