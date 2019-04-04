import React from 'react';
import '../style/sidenav.css';
import { Link } from 'react-router-dom';
import headshot from '../img/headshot.png';


export class Sidenav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: null,
    };
  }

  handleSidenav = () => this.setState({ isOpen: !this.state.isOpen });

  sidenavCheck = () => {
    const { isOpen } = {...this.state};

    let status = isOpen ? "sidenav open" : "sidenav closed";

    return isOpen !== null ? status : ""
  }

  render() {
    const { isOpen, sidenavStatus } = {...this.state};

    return(
      <div className={`sidenav ${this.sidenavCheck()}`}>
        <div id="hamburger-button" className={isOpen ? "close-button" : ""} onClick={this.handleSidenav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`contents ${isOpen ? "visible" : "invisible"}`}>
          <div className="header">
            <img class="photo" src={headshot} alt="Kodee McIntosh" />
          </div>
          <div className="info">
            <div id="links">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/projects">Projects</Link>
              <Link className="link" to="/spicy-resume">Spicy Resume</Link>
            </div>
          </div>
        </div>
        {/* <Link to="/blog">Blog</Link> */}
      </div>
    );
  }
}