import React from 'react';
import '../styles/blog.css';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import BlogPosts from './blog-posts';

const Blog = ({ match }) => {
  const Post = BlogPosts.filter((post) => post.key === match.params.postId);

  return (
    <div className="blog">
      <div className="card">
        <div className="links">
          {BlogPosts.map((post, i) => {
            return (
              <li key={post.key}>
                <Link to={`/blog/${post.key}`}>{post.key}</Link>
              </li>
            );
          })}
        </div>

        <div className="post">
          <Post />
        </div>

        <Route path={`${match.url}/:postId`} component={Blog} />
      </div>
    </div>
  );
}

export default withRouter(Blog);