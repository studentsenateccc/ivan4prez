import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import AboutMePage from './components/AboutMePage';
import Endorsements from './components/EndorsementsPage';
import Platform from './components/PlatformPage';
import Involvement from './components/InvolvementPage';
// import{ Navbar } from './Navbar.js';

// function Routes() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about-me" component={AboutMe} />
//         <Route path="/endorsements" component={Endorsements} />
//         <Route path="/platform" component={Platform} />
//         <Route path="/involvement" component={Involvement} />
//       </Switch>
//     </Router>
//   );
// }

// export default Routes;



function RoutesComponent() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about-me'>
          <AboutMePage />
        </Route>

        <Route path='/endorsements'>
          <Endorsements />
        </Route>

        <Route path='/platform'>
          <Platform />
        </Route>

        <Route path='/involvement'>
          <Involvement />
        </Route>

      </Routes>
    </Router>
  )
}

export {RoutesComponent};