import React from 'react';
import './App.css';
import { Home, Projects, Resume, Blog } from './pages';
import { Landing, Main } from './layout';

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
    return (
      <div className="App">
        {hasLanding ? <Landing closeLanding={this.closeLanding} /> : <Main />}
      </div>
    );
  }
}

export default App;
