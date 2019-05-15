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
  GlowSquiggle,
  GlowZigzag,
  GlowHorseshoe,
  GlowHalfCircle,
  GlowCube,
  GlowSticks
 } from '../svg';


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const shapes = [
      // Cross,
      {
        shape: GlowCross,
        sizes: [
        "width: 40px; height: 40px;",
        "width: 60px; height: 60px;",
        "width: 80px; height: 80px;"
        ]
      },
      {
        shape: GlowSquare,
        sizes: [
          "width: 60px; height: 60px;",
          "width: 80px; height: 80px;",
          "width: 100px; height: 100px;"

        ]
      },
      {
        shape: GlowHollowSquare,
        sizes: [
          "width: 20px; height: 20px;",
          "width: 40px; height: 40px;",

        ]
      },
      {
        shape: GlowTriangle,
        sizes: [
          "width: 30px; height: 30px;",
          "width: 60px; height: 60px;",
          "width: 90px; height: 90px;"
        ]
      },
      {
        shape: GlowHollowCircleSmall,
        sizes: [
          "width: 30px; height: 30px;",
          "width: 50px; height: 50px;",
        ]
      },
      {
        shape: GlowHollowCircleLarge,
        sizes: [
          "width: 30px; height: 30px;",
          "width: 40px; height: 40px;",
          "width: 70px; height: 70px;",
          "width: 100px; height: 100px;"
        ]
      },
      {
        shape: GlowZigzag,
        sizes: [
          "width: 20px; height: 20px;",
          "width: 40px; height: 40px;",
          "width: 60px; height: 60px;",
          "width: 90px; height: 90px;",
          "width: 20px; height: 20px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
          "width: 40px; height: 40px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
          "width: 60px; height: 60px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
          "width: 60px; height: 90px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
        ]
      },
      {
        shape: GlowSquiggle,
        sizes: [
          "width: 30px; height: 30px;",
          "width: 60px; height: 60px;",
          "width: 30px; height: 30px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
          "width: 60px; height: 60px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
        ]
      },
      // {
      //   shape: GlowSticks,
      //   sizes: [
      //     "width: 60px; height: 60px;",
      //     "width: 90px; height: 90px;",
      //   ]
      // },
      {
        shape: GlowHorseshoe,
        sizes: [
          "width: 30px; height: 30px;",
          "width: 50px; height: 50px;",
          "width: 30px; height: 30px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
          "width: 50px; height: 50px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
        ]
      },
      {
        shape: GlowHalfCircle,
        sizes: [
          "width: 20px; height: 20px;",
          "width: 40px; height: 40px;",
          "width: 20px; height: 20px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
          "width: 40px; height: 40px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
        ]
      },
      // {
      //   shape: GlowCube,
      //   sizes: [
      //     "width: 30px; height: 30px;",
      //     "width: 50px; height: 50px;",
      //     "width: 30px; height: 30px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
      //     "width: 50px; height: 50px; -webkit-transform: scaleX(-1); transform: scaleX(-1);",
      //   ]
      // },
    ];

    let bg = document.querySelector('.shape-background');

    for (var i = 1; i <= 50; i ++) {
      let el = shapes[Math.floor(Math.random() * Math.floor(shapes.length))]
      let size = el.sizes[Math.floor(Math.random() * Math.floor(el.sizes.length))]
      let node = document.createElement('div');
      node.className = `shape-container--${i}`;
      let img = document.createElement('img');
      img.src = el.shape;
      img.style = size;
      img.className = "shape";

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
