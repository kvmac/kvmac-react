import React from 'react';
import '../style/sidenav.css';
import { Link } from 'react-router-dom';
import headshot from '../img/headshot.png';


export class Sidenav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: null,
      sidenav: ""
    };
  }

  handleSidenav = () => this.setState({ isOpen: !this.state.isOpen });

  sidenavCheck = () => {
    const { isOpen } = {...this.state};

    let status = isOpen ? "open" : "closed";

    return isOpen !== null ? status : ""
  }
  componentDidMount() {
    this.setState({ sidenav: "sidenav " });
  }

  render() {
    const { isOpen, sidenav } = {...this.state};

    return(
      <div className={sidenav + this.sidenavCheck()}>
        <div id="hamburger-button" className={isOpen ? "close-button" : ""} onClick={this.handleSidenav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`contents ${isOpen ? "visible" : "invisible"}`}>
          <div className="header">
            <img className="photo" src={headshot} alt="Kodee McIntosh" />
          </div>
          <div className="info">
            <div id="links">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/projects">Projects</Link>
              <Link className="link" to="/spicy-resume">🌶️Spicy Resume🔥</Link>

              {/* <Link className="link" to="/blog">Blog</Link> */}
            </div>
          </div>
        </div>
        {/* <Link to="/blog">Blog</Link> */}
      </div>
    );
  }
}