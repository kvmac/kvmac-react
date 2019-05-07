import React from 'react';
import { withRouter } from 'react-router-dom';
import { Landing, Main, Sidenav, Header } from './layout';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLanding: true,
      isMobile: window.innerWidth < 1200
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkDisplay);
  }

  checkDisplay = () => {
    console.log('window width;', window.innerWidth < 1200, window.innerWidth, ' vs ', '1200');

    this.setState({ isMobile: window.innerWidth < 1200 });
  }

  closeLanding = () => this.setState({ hasLanding: false });

  render() {
    const { hasLanding, isMobile } = {...this.state};
    const { location } = { ...this.props };

    const renderNavigation = () => {
      let nav = isMobile ? <Sidenav /> : <Header />;

      return (
        <React.Fragment>
          {nav}
          <Main />
        </React.Fragment>
      );
    }

    return (
      <div className="App">
        {hasLanding && location.pathname === "/" ? <Landing closeLanding={this.closeLanding} /> : renderNavigation()}
      </div>
    );
  }
}

export default withRouter(App);
