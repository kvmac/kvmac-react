import React from 'react';
import '../styles/main.css';
import { Route, Switch } from 'react-router-dom';
import { Header, Sidenav, Footer } from '../layout';
import { Home, About, Projects, Resume, Blog, TechSkills } from '../pages';
import {
  Logo,
  GlowLogo,
  Cross,
  GlowCross,
  Square,
  GlowSquare,
  Triangle,
  GlowTriangle,
  HollowSquare,
  GlowHollowSquare,
  HollowCircleSmall,
  GlowHollowCircleSmall,
  HollowCircleLarge,
  GlowHollowCircleLarge,
  Zigzag,
  GlowZigzag } from '../svg';


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const shapes = [
      // Cross,
      // GlowCross,
      // Square,
      GlowSquare,
      // HollowSquare,
      GlowHollowSquare,
      // Triangle,
      GlowTriangle,
      // HollowCircleSmall,
      GlowHollowCircleSmall,
      // HollowCircleLarge,
      GlowHollowCircleLarge,
      // Zigzag,
      GlowZigzag
    ];

    let w = window.innerWidth;
    let h = window.innerHeight;

    let bg1 = document.querySelector('.shape-background-top');
    let bg2 = document.querySelector('.shape-background-bottom');

    for (var i = 1; i <= 25; i ++) {
      let node1 = document.createElement('div');
      let node2 = document.createElement('div');

      node1.className = `shape-container--${i}`;
      node2.className = `shape-container--${i}`;

      let img1 = document.createElement('img');
      let img2 = document.createElement('img');

      img1.className = "shape";
      img2.className = "shape";

      img1.src = shapes[i % 6];
      img2.src = shapes[i % 6];

      if(i % 2 === 0) {
        img1.style = w < 1200 ? "width: 75px; height: 75px" : "width: 150px; height: 150px;";
        img2.style = w < 1200 ? "width: 75px; height: 75px;" : "width: 150px; height: 150px;";
      } else {
        img1.style = w < 1200 ? "width: 25px; height: 25px" : "width: 75px; height: 75px;";
        img2.style = w < 1200 ? "width: 25px; height: 25px;" : "width: 75px; height: 75px;";
      }

      node1.appendChild(img1);
      node2.appendChild(img2);

      bg1.appendChild(node1);
      bg2.appendChild(node2);
  }
}



  render() {

    return (
      <React.Fragment>
      <div className="shape-background-top"></div>
      <div className="shape-background-bottom"></div>
      <div className="main">
        {/* {isMobile ? <Sidenav /> : <Header />} */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tech-skills" component={TechSkills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/blog" component={Blog} /> */}
        </Switch>
        <Footer />
      </div>
      </React.Fragment>
    );
  }
}
