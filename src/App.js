import React from 'react';
import { withRouter } from 'react-router-dom';
import { Landing, Main } from './layout';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLanding: true
    };
  }

  closeLanding = () => this.setState({ hasLanding: false });

  render() {
    const { hasLanding } = {...this.state};
    const { location } = { ...this.props };

    return (
      <div className="App">
        {hasLanding && location.pathname === "/" ? <Landing closeLanding={this.closeLanding} /> : <Main />}
      </div>
    );
  }
}

export default withRouter(App);
