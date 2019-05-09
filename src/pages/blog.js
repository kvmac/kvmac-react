import React from 'react';
import '../styles/blog.css';
// import { Route, Switch } from 'react-router-dom';

export class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="blog">
      Blog
      {/* <Switch>
        <Route path="/blog/post1" component={Post1} />
      </Switch>

      <Link to="/blog/post1">Post1</Link> */}
      </div>
    );
  }
}