import React from 'react';
import '../styles/blog.css';
import { Link, Route, Switch } from 'react-router-dom';
import BlogPosts from './blog-posts';

export class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="blog">
        <div className="links">
          {BlogPosts.map((post, i) => {
            return (
              <li key={i}>
                <Link to={`/blog/:${post.key}`}>{post.key}</Link>
              </li>
            );
          })}
        </div>

        <div className="post">
            {BlogPosts.map((post, i) => {
              return (
                <Route path={`/blog/:${post.key}`} component={post.value} />
              );
            })}
        </div>
      </div>
    );
  }
}