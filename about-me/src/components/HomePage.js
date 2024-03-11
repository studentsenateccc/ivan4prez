import IvanInDC from '../images/IvanInDC.JPG';
import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
        return ( 
                <div className="App">
                        <header className="App-header" >
                                <div>
                                        <a href="https://www.instagram.com/ivan_hdz512">
                                        <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ivan512az">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                </div>
                        </header>
                        <body className="app-body">
                                {<img src={IvanInDC} className="home-image" alt="Home-image" />}
                        </body>
                </div>
        );
}
 
export default HomePage;

