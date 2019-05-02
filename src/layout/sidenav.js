import React from 'react';
import '../style/sidenav.css';
import { Link } from 'react-router-dom';
import headshot from '../img/headshot.png';
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
          <div className="nav">
            <div className="links">
              <Link className="link" onClick={this.handleSidenav} to="/">Home</Link>
              <Link className="link" onClick={this.handleSidenav} to="/about">About</Link>
              <Link className="link" onClick={this.handleSidenav} to="/tech-skills">Tech-Skills</Link>
              <Link className="link" onClick={this.handleSidenav} to="/projects">Projects</Link>
              <Link className="link" onClick={this.handleSidenav} to="/resume">Resume️</Link>
              {/* <Link className="link" to="/blog">Blog</Link> */}
            </div>
          </div>
        </div>
        {/* <Link to="/blog">Blog</Link> */}
      </div>
    );
  }
}