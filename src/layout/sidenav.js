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
      sidenavAnimation: ''
    };
  }

  handleSidenav = () => this.setState({ isOpen: !this.state.isOpen, sidenavAnimation: !this.state.isOpen ? "open" : "closed" });

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
            <div className="header">
              <img className="photo" src={headshot} alt="Kodee McIntosh" />
              <div className="social">
              <a href="https://github.com/kvmac" target="_blank"><img className="github" src={github} /></a>
              <a href="https://www.linkedin.com/in/kodee-mcintosh" target="_blank"><img className="linkedin" src={linkedin} /></a>
              </div>
            </div>
            <div className="info">
              <div id="links">
                <Link onClick={this.handleSidenav} className="link" to="/">Home</Link>
                <Link onClick={this.handleSidenav} className="link" to="/projects">Projects</Link>
                <Link onClick={this.handleSidenav} className="link" to="/spicy-resume">Spicy Resume🌶️</Link>

                {/* <Link className="link" to="/blog">Blog</Link> */}
              </div>
            </div>
          </div>
          {/* <Link to="/blog">Blog</Link> */}
        </div>
    );
  }
}