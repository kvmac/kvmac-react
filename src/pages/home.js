import React from 'react';
import '../style/home.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="home">
      </div>
    );
  }
}

const Segments = () => {
  let segments = [];

  const lengths = [3, 6, 8, 9, 12, 18];
  const padding = [2, 4, 8];

  const colors = [{b1:"$blue1"}, {p1:"$purple1"}, {r1:"$red1"}, {o1:"$orange1"}, {g1:"$green1"}];
  let width = window.innerWidth;
  let height = window.innerHeight;

  if(width < 600) {
    segments.push(
      <span className="segment" />
    );
  }

  return (
    <div className="segments">
    </div>
  )
}