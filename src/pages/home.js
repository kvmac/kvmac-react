import React from 'react';
import '../styles/home.css';
import { guid } from '../utils/guid';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="home">
        <label className="bold">This site is currently</label>
        <label className="regular">under development</label>
      </div>
    );
  }
}
