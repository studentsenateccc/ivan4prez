// import logo from './logo.svg';
import React from 'react';
// import { Link } from 'react-router-dom';
import SSCCClogo from './SSCCClogo.png';
import IvanInDC from './IvanInDC.JPG';
import './App.css';
// import { RoutesComponent } from './RoutesComponent';// Update the import statement in App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMePage';
import Endorsements from './components/EndorsementsPage';
import Platform from './components/PlatformPage';
import Involvement from './components/InvolvementPage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* <nav className="nav ul">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#endorsements">Endorsements</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#involvement">Involvement</a></li>
          </ul>
        </nav> */}


      <Router>
        <div className='content'>
          <Navbar />
        </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/endorsements" component={Endorsements} />
            <Route path="/platform" component={Platform} />
            <Route path="/involvement" component={Involvement} />
          </Switch>
        
      </Router>
      {/* <header className="App-header">
        {<img src={SSCCClogo} className="logo" alt="Logo" />}


      </header> */}

      {/* <body className="app-body"> 
        {<img src={IvanInDC} className="home-image" alt="Home-image" />}
      </body> */}
    </div>
  );
}

export default App;

