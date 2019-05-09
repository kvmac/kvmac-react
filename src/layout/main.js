import React from 'react';
import '../style/main.css';
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

    let bg = document.querySelector('.shape-background');

    for (var i = 1; i <= 50; i ++) {
      let node = document.createElement('div');
      node.className = `shape-container--${i}`;
      let img = document.createElement('img');
      img.className = "shape";
      img.src = shapes[i % 6];
      img.style = "width: 50px; height: 50px; z-index: 1;";

      node.appendChild(img);

      bg.appendChild(node);
    }

  }



  render() {
    const { isMobile } = {...this.state};

    return (
      <div className="shape-background">
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
      </div>
    );
  }
}
