import React from 'react';
import '../styles/not-found.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {

  return (
    <div className="not-found">
      <div className="card">
        404 Page Not Found
      </div>
      <Link to="/">Click here to return to the homepage</Link>
    </div>
  );
}