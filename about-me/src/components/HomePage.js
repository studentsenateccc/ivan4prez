import IvanInDC from '../images/IvanInDC.JPG';
import React from 'react';
import '../App.css';

const HomePage = () => {
        return ( 
                <div className="App">
                        <header className="App-header" >
                        </header>
                        <body className="app-body">
                                {<img src={IvanInDC} className="home-image" alt="Home-image" />}
                        </body>
                </div>
        );
}
 
export default HomePage;

