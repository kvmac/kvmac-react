import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../svg';
import '../style/header.css';


export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropAnimation: false
    }
  }

  componentDidMount() {
    this.setState({ dropAnimation: true });
  }

  render() {
    const { dropAnimation } = { ...this.state };

    return(
      <div className={`header ${dropAnimation ? "drop-animation" : ""}`}>
        <img className="logo" src={logo} />
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