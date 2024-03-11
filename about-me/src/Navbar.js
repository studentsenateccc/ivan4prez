import React from 'react';
import { Link } from 'react-router-dom';
import SSCCClogo1 from './images/SSCCClogo1.jpeg';
import './App.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={SSCCClogo1} className="logo" alt="Logo" />
      </div>
      <div className='links'>
        <Link to="/">Welcome</Link>
        <Link to="/about-me">Meet Ivan</Link>
        {/* <Link to="/endorsements">Endorsements</Link> */}
        <Link to="/platform">Issues</Link>
        <Link to="/involvement">Involvement</Link>
      </div>
    </nav>
  );
}

export default Navbar;