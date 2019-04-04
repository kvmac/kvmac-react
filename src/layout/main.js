import React from 'react';
import '../style/main.css';
import { Route, Switch } from 'react-router-dom';
import { Header, Sidenav, Footer } from '../layout';
import { Home, Projects, Resume, Blog } from '../pages';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.screen.width < 1200
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkDisplay);
  }

  checkDisplay = () => {
    let isMobile = window.screen.width < 1200 ? true : false;

    this.setState({ isMobile });
  }


  render() {
    const { isMobile } = {...this.state};

    return (
      <div className="main">
        {isMobile ? <Sidenav /> : <Header />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/spicy-resume" component={Resume} />
          {/* <Route exact path="/blog" component={Blog} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}
