import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import {Route,Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Onboard from "./pages/onboard";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Profile from "./pages/profile";
import Favorites from "./pages/favorites";
import Notification from "./pages/notification";
const App = () => {
 return(
   <>
    <Router>
     <Switch>
        <Route exact path='/'>
          <Onboard/>
        </Route>
        <Route path='/home'>
        <Home/>
        </Route>
        <Route path='/menu'>
        <Menu/>
        </Route>
        <Route path='/profile'>
        <Profile/>
        </Route>
        <Route path='/favorites'>
        <Favorites/>
        </Route>
        <Route path='/notification'>
        <Notification/>
        </Route>
     </Switch>
    </Router>
   </>
  )
  
};

export default App;
