import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Logo } from '../svg';
import '../styles/navbar.css';


const NavBar = ({ history }) => {

  const routeToHome = () => history.push('/');

  return(
    <div className="navbar">
    {/* TODO: figure out routing back to the main page */}
      <img className="nav-logo" onClick={routeToHome} src={Logo} />
      <div className="space-between"></div>
      <div className="nav-links">
        <Link className="link" to="/about">About<span></span></Link>
        <Link className="link" to="/projects">Projects<span></span></Link>
        <Link className="link" to="/resume">Résumé<span></span></Link>
        {/* <Link className="link" to="/blog">Blog<span></span></Link> */}
        {/* <Link className="link" to="/blog">Blog</Link> */}
      </div>
    </div>
  )
}

export default withRouter(NavBar);