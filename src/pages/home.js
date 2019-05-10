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
        <label className="bold">Asap Bold</label>
        <label className="regular">Asap Normal</label>
      </div>
    );
  }
}
