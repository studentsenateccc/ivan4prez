import React from 'react';
import { Link } from 'react-router-dom';
import SSCCClogo1 from './images/SSCCClogo1.jpeg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img src={SSCCClogo1} className="logo" alt="Logo" />
        </Link>
      </div>
      <div className='links'>
        <Link to="/">Welcome</Link>
        <Link to="/about-me">Meet Ivan</Link>
        {/* <Link to="/endorsements">Endorsements</Link> */}
        <Link to="/platform">Issues</Link>
        <Link to="/involvement">Involvement</Link>
      </div>
      <div className='links'>
        <a href="https://www.instagram.com/ivan_hdz512" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/ivan512az" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;