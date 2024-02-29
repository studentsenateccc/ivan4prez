// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import SSCCClogo from './SSCCClogo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Your menu section goes here */}
      <nav className="nav ul">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* End of menu section */}

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {<img src={SSCCClogo} className="logo" alt="Logo" />}
        <p>
          Hi There!
          Welcome, my name is Ivan Hernandez and I am your SSCCC Presidential Candidate.
        </p>
        <p> My name is Ivan Hernandez  </p>
      </header>
    </div>
  );
}

export default App;

