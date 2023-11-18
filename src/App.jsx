import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import {Route,Link, BrowserRouter as Router, Switch,useLocation} from 'react-router-dom'
import Onboard from "./pages/onboard";
import Home from "./pages/home";
// import Menu from "./pages/menu";
import Profile from "./pages/profile";
import Favorites from "./pages/favorites";
import Notification from "./pages/notification";
import { motion,AnimatePresence } from "framer-motion";
import { useGlobal } from "./context";
import Foot from "./components/foot";
import Shop from "./pages/shop";
const App = () => {
  const {menus} = useGlobal();
  let location = useLocation();
  return(
   <>
      <AnimatePresence  >        
     <Switch location={location} key={location.key}  >

        <Route exact path='/'>
          <Onboard/>
        </Route> 
        <Route path='/home'>
        <Home/>
        </Route>
        <Route path='/profile'>
        <Profile/>
        </Route>
        <Route path='/shop'>
        <Shop/>
        </Route>
        <Route path='/favorites'>
        <Favorites/>
        </Route>
        <Route path='/notification'>
        <Notification/>
        </Route>
     </Switch>
      </AnimatePresence>
   </>
  )
  
};

export default App;
