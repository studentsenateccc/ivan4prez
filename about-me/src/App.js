// import logo from './logo.svg';
import React from 'react';
// import { Link } from 'react-router-dom';
import SSCCClogo from './SSCCClogo.png';
import IvanInDC from './IvanInDC.JPG';
import './App.css';
import { RoutesComponent } from './RoutesComponent';// Update the import statement in App.js
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <div className="App">

      {/* Your menu section goes here */}
      <nav className="nav ul">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Endorsements</a></li>
            <li><a href="#contact">Platform</a></li>
            <li><a href="#contact">Involvement</a></li>
          </ul>
        </nav>
        {/* End of menu section */}
      {/* <Router>
        <RoutesComponent />
      </Router> */}

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {<img src={SSCCClogo} className="logo" alt="Logo" />}
        {/* <p>
          This is where change begins!
        </p>
        <p> 
          My name is Ivan Hernandez and I am your SSCCC Presidential Candidate. </p>
          <p>I am here to support you!</p> */}

      </header>

      <body className="app-body"> 
      {<img src={IvanInDC} className="home-image" alt="Home-image" />}
        </body>
    </div>
  );
}

export default App;

