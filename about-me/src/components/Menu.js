import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/endorsements">Endorsements</Link></li>
        <li><Link to="/platform">Platform</Link></li>
        <li><Link to="/involvement">Involvement</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;