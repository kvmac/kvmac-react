import React from 'react';
import '../styles/main.css';
import { Route, Switch } from 'react-router-dom';
import { Header, SideNavBar, Footer } from '../layout';
import { Home, About, Projects, Resume, Blog, TechSkills, Contact } from '../pages';
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

    let bg = document.querySelector('.shape-background');

    for (var i = 1; i <= 50; i ++) {
      let node = document.createElement('div');
      node.className = `shape-container--${i}`;
      let img = document.createElement('img');
      img.src = shapes[i % 9];
      img.style = "width: 100px; height: 100px; z-index: 10;";
      img.className = "shape";
      img.src = shapes[i % 6];
      if(i % 3 === 0) {
        img.style = "width: 50px; height: 50px; z-index: 0; display: inline;";
      } else {
        img.style = "width: 50px; height: 50px; z-index: 3; display: inline;";
      }

      node.appendChild(img);

      bg.appendChild(node);
    }
}



  render() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    return (
      <div className="main">
          <div className="shape-background"></div>
          {/* <canvas id="canvas" className="landing" /> */}
          {/* {isMobile ? <SideNavBar /> : <Header />} */}
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/tech-skills" component={TechSkills} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
          <Footer />
      </div>
    );
  }
}
