import Home from './Pages/home'
import capital from './Pages/capitalletters'
import lowercase from './Pages/lowercase'
import numbers from './Pages/numbers'
import newaddition from './Pages/basicaddition'
import newsubtraction from './Pages/basicsubtraction'
import newtracker from './Components/newTracker'

//import Tracker from './Components/tracker'
import Navbar from './Components/Navbar.js'
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <>
          <Navbar />
    {/*}   <Tracker />*/}

          <Switch>
 
        <Route exact path= {'/home'} component={Home}/>
         <Route exact path= {'/capital'} component={capital}/>
         <Route exact path= {'/lowercase'} component={lowercase}/>
         <Route exact path= {'/numbers'} component={numbers}/>
         <Route exact path= {'/newtracker'} component={newtracker}/>
         <Route exact path= {'/newaddition'} component={newaddition}/>
         <Route exact path= {'/newsubtraction'} component={newsubtraction}/>

        {/*}  <Route exact path= {'/mars'} component={Mars}/>  */}
         <Route render={() => <Redirect to={'/home'} />} />
         
          </Switch>
       {/* <Footer/> */}
  
        </>
      </HashRouter>

    );
}

export default App;
