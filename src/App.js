import React from 'react';
import { withRouter } from 'react-router-dom';
import { Main, SideNavBar, NavBar } from './layout';
import { Particles } from './effects';
import { Logo } from './svg';
import './App.css';
import './styles/landing.css';
import './styles/particles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLandingDissolved: sessionStorage.getItem('initLanding') || false
    };
  }

  // dissolveLanding = () => this.setState({ hasLandingDissolved: true }, sessionStorage.setItem('initLanding', true));
  //pull this out before going into prod
  dissolveLanding = () => this.setState({ hasLandingDissolved: true });

  render() {
    const { hasLandingDissolved } = { ...this.state };
    const { location } = { ...this.props };
    console.log('hasLandingDissolved:  ', hasLandingDissolved, "  initLanding:   ", sessionStorage.getItem('initLanding'));

    return (
      <div className="App">
        <div className={!hasLandingDissolved && location.pathname === "/" ? "overlay" : "dissolve" } onClick={this.dissolveLanding}>
          <Particles />
          <img className="logo" src={Logo} />
        <SideNavBar />
        <NavBar />
        <Main />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
