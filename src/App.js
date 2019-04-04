import React from 'react';
import './App.css';
import { Home, Projects, Resume, Blog } from './pages';
import { Landing, Main } from './layout';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    const { hasLanding } = {...this.state};


    return (
      <div className="App">
        <Landing />
        <Main />
      </div>
    );
  }
}

export default App;
