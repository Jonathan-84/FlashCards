import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { TrackerProvider } from './Components/TrackerContext';

//Pages
import Home from './Pages/home'
import About from './Pages/About'
import Math from './Pages/Math'
import Test from './Pages/Test.js'
import Letters from './Pages/Letters'
import Numbers from './Pages/numbers'
import Sightwords from './Pages/sightwords'


/// Components
import numbers1 from './Components/Numbers/numbers1'
import numbers2 from './Components/Numbers/numbers2'
import add1 from './Components/Math/add1'
import add2 from './Components/Math/add2.js'
import add3 from './Components/Math/add3'
import sub1 from './Components/Math/sub1'
import sub2 from './Components/Math/sub2.js'
import sub3 from './Components/Math/sub3.js'
import multi1 from './Components/Math/multi1'
import multi2 from './Components/Math/multi2'
import multi3 from './Components/Math/multi3'
import mixed1 from './Components/Math/mixed1'
import mixed2 from './Components/Math/mixed2'
import mixed3 from './Components/Math/mixed3'
import capital from './Components/Letters/capitalletters'
import lowercase from './Components/Letters/lowercase'
import Footer from './Components/Footer.js'
// import Tracker from './Components/tracker'
import Navbar from './Components/Navbar.js'
import SightCards from './Components/SightWords/sightcards';
import sightrandom from './Components/SightWords/randomizer';





function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <>
          <Navbar />
          <TrackerProvider>
       {/* <Tracker /> */}
          <Switch>
        <Route exact path= {'/home'} component={Home}/>
        <Route exact path= {'/about'} component={About}/>
        <Route exact path= {'/test'} component={Test}/>
        <Route exact path= {'/letters'} component={Letters}/>
         <Route exact path= {'/capital'} component={capital}/>
         <Route exact path= {'/lowercase'} component={lowercase}/>
         <Route exact path= {'/numbers'} component={Numbers}/>
         <Route exact path= {'/numbers1'} component={numbers1}/>
         <Route exact path= {'/numbers2'} component={numbers2}/>
         <Route exact path= {'/math'} component={Math}/>
         <Route exact path= {'/sightwords'} component={Sightwords}/>
         <Route exact path= {'/sightcards'} component={SightCards}/>
         <Route exact path= {'/sightrandom'} component={sightrandom}/>
         <Route exact path= {'/add1'} component={add1}/>
         <Route exact path= {'/add3'} component={add3}/>
         <Route exact path= {'/multi1'} component={multi1}/>
         <Route exact path= {'/multi2'} component={multi2}/>
         <Route exact path= {'/multi3'} component={multi3}/>
         <Route exact path= {'/addsub1test'} component={mixed1}/>
         <Route exact path= {'/addsub2test'} component={mixed2}/>
         <Route exact path= {'/addsub3test'} component={mixed3}/>
         <Route exact path= {'/add2'} component={add2}/>
         <Route exact path= {'/sub1'} component={sub1}/>
         <Route exact path= {'/sub2'} component={sub2}/>
         <Route exact path= {'/sub3'} component={sub3}/>

         <Route render={() => <Redirect to={'/home'} />} />
          </Switch>
          </TrackerProvider>

       <Footer/>
  
        </>
      </HashRouter>

    );
}

export default App;
