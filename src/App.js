import React from 'react';
import './App.css';
import { Home, Projects, Resume, Blog } from './pages';
import { Landing, Main } from './layout';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Landing />
        <Main />
      </div>
    );
  }
}

export default App;
