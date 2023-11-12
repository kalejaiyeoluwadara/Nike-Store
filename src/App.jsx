import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Form from "./form";
import Google from "./Google";
// import Messages from "./Messages";
import Msg from "./msgcomp/Msg";
import Storage from "./Storage";
import {Route,Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Routes from "./router/route";
import Another from "./router/another";
import Frame from "./router/frame";
const Home = () =>{
  return(
    <>
    <nav className="flex  gap-4 items-center justify-center">
    <Link to="/" >Home</Link>
     <Link to="/route" >Route</Link>
     <Link to="/another" >Another</Link>
    </nav>
    </>
  )
}
const App = () => {
  // const {name,setName,signIn,view,img} = useGlobal();
  const getSomething = () =>{
    return new Promise((resolve,reject) =>{
      resolve('https://api.github.com/users')
    })
  }
  getSomething().then((data) =>{
    console.log(data);
  },(err)=>{
    console.log(err);
  })
  return (
<Router>
<div className=" flex flex-col items-center ">
      {/* {signIn && <Google />}
      {view && <Messages />}  */}
      {/*<Storage/>*/}
      <Home/>
      <Switch>
        <Route exact path="/" >
        <h1>Hello world </h1>
        </Route>
        <Route path="/route" >
          <Routes/>
        </Route>
        <Route  path="/another" >
          <Frame/>
        </Route>
      </Switch>
    </div>
</Router>
  );
};

export default App;
