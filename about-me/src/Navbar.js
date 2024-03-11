import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        {/* <Link to="/endorsements">Endorsements</Link> */}
        <Link to="/platform">Platform</Link>
        <Link to="/involvement">Involvement</Link>
      </div>
    </nav>
  );
}

export default Navbar;