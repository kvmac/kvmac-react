import React from 'react';
import '../style/main.css';
import { Route, Switch } from 'react-router-dom';
import { Header, Sidenav, Footer } from '../layout';
import { Home, About, Projects, Resume, Blog, TechSkills } from '../pages';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < 1200
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkDisplay);
  }

  checkDisplay = () => {
    console.log('window width;', window.innerWidth < 1200, window.innerWidth, ' vs ', '1200');
    let isMobile = window.innerWidth < 1200;

    this.setState({ isMobile });
  }


  render() {
    const { isMobile } = {...this.state};

    return (
      <div className="main">
        {isMobile ? <Sidenav /> : <Header />}
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
    );
  }
}
