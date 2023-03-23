import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./Home"
import "."
import {Route, Switch } from 'react-router-dom';




const App = () => {
  return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/register' component={RegisterForm} />
        <Route exact path='/login' component={LoginForm} />
      </Switch>
  )
};




export default App;
