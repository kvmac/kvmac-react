import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Logo } from '../svg';
import '../styles/header.css';


export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropAnimation: false
    }
  }
  routeHome = () => this.props.history.push('/');

  componentDidMount() {
    this.setState({ dropAnimation: true });
  }

  render() {
    const { dropAnimation } = { ...this.state };

    return(
      <div className={`header ${dropAnimation ? "drop-animation" : ""}`}>
      {/* TODO: figure out routing back to the main page */}
        <img className="logo" src={Logo} />
        <div className="space-between"></div>
        <div className="nav">
          <Link className="link" to="/about">About<span></span></Link>
          <Link className="link" to="/projects">Projects<span></span></Link>
          <Link className="link" to="/resume">Resume<span></span></Link>
          {/* <Link className="link" to="/blog">Blog</Link> */}
        </div>
      </div>
    )
  }
}