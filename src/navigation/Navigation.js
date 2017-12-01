import React from 'react';
import './navigation.scss';

// const text = 'Home';
// const items = ['Home', 'Gallery', 'About', 'Home'];

export const Navigation = ({ isLogin }) =>
  (
    <nav className="main-nav">
      <ul>
        <li><a href="/home">Home</a></li>
        {isLogin &&
        <li><a href="/user">User</a></li>}
      </ul>
    </nav>
  );

