import React from 'react';
import '../styles/sidenavbar.css';
import { Link } from 'react-router-dom';
import headshot from '../img/headshot.png';
import Icon from 'react-eva-icons';
import { GlowHomeIcon } from '../svg';
import { HomeElement, CodeElement, FileElement, MessageElement, EmailElement } from '../shared';


export class SideNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      sidenavAnimation: 'init',
      currentPage: ''
    };
  }

  handleSidenav = () => this.setState({ isOpen: !this.state.isOpen, sidenavAnimation: !this.state.isOpen ? "open" : "close" });

  closeSidenav = (e) => {
    !this.state.isOpen || this.setState({ isOpen: false, sidenavAnimation: "close" });

    // this.setState({ currentPage: e.target.id });
  }

  render() {
    const { isOpen, sidenavAnimation, currentPage } = {...this.state};

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
              <div>Sr Software Engineer <Icon
                  name="at-outline"
                  size="small"
                  fill="grey"
                /> <a className="current-company" href="www.parachut.co" target="_blank" rel="noopener noreferrer">Parachut.co</a></div>
              <div>
                <Icon
                  name="pin-outline"
                  size="small"
                  fill="grey"
                /> Indianapolis, IN area</div>
            </div>
            <div className="nav">
              <div className={`link-wrapper ${currentPage === "home" ? "raised" : ""}`}>
                <Link id="home" onClick={this.closeSidenav} to="/">
                  {currentPage === "home" ? 
                    <HomeElement isActive={true} fill="#1fb6c6" /> :
                    <Icon
                      name="home-outline"
                      size="medium"
                      fill="white"
                      />}
                    {!isOpen || <label>Home</label>}
                </Link>
              </div>
              <div className={`link-wrapper ${currentPage === "projects" ? "raised" : ""}`}>
                <Link id="projects" onClick={this.closeSidenav} to="/projects">
                  {currentPage === "projects" ? 
                  <CodeElement isActive={true} fill="#1fb6c6" /> :
                  <Icon
                    name="code-outline"
                    size="medium"
                    fill="white"
                    />}
                    {!isOpen || <label>Projects</label>}
                </Link>
              </div>
              <div className={`link-wrapper ${currentPage === "resume" ? "raised" : ""}`}>
                <Link id="resume" onClick={this.closeSidenav} to="/resume">️
                  {currentPage === "resume" ? 
                  <FileElement isActive={true} fill="#1fb6c6" /> :
                  <Icon
                    name="file-text-outline"
                    size="medium"
                    fill="white"
                    />}
                    {!isOpen || <label>Resume</label>}
                </Link>
              </div>
              {/* <div className={`link-wrapper ${currentPage === "home" ? "raised" : ""}`}>
                <Link onClick={this.closeSidenav} to="/blog">️
                  {currentPage === "blog" ? 
                  <MessageElement isActive={true} fill="#1fb6c6" /> :
                  <Icon
                    name="message-square-outline"
                    size="medium"
                    fill="white"
                    />}
                    {!isOpen || <label>Blog</label>}
                </Link>
              </div> */}
              <div className={`link-wrapper ${currentPage === "contact" ? "raised" : ""}`}>
                <Link id="contact" onClick={this.closeSidenav} to="/contact">️
                  {currentPage === "contact" ? 
                  <EmailElement isActive={true} fill="#1fb6c6" /> :
                  <Icon
                    name="email-outline"
                    size="medium"
                    fill="white"
                    />}
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