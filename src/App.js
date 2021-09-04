import React from 'react';

import Homepage from './Homepage';
import {Route,Switch} from 'react-router';
import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import Service from './pages/Services';
import Error from './pages/Error';

const App=()=>{
  return (
  <>
  <Switch>
  <Route exact path="/" component={Homepage}></Route>
  <Route path="/about" component={AboutUs}></Route>
  <Route path="/contact" component={ContactUs}></Route>
  <Route path="/services" component={Service}></Route>
  <Route component={Error}></Route>
  
  </Switch>
  

  </>
  )
}

export default App;
