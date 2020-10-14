import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Footer } from '@project-structure/ui-guest'
import Login from '../component/login/login';
import Registartion from '../component/registartion/registartion';
import ForgotPassword from '../component/forgot-password/forgot-password';
import Header from '../component/header/header';
import Dashboard from '../component/dashboard/dashboard';
import { useSelector, useDispatch } from 'react-redux'
import { currentUser } from '../actions/userActions';
export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentUser())
  }, [])
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/registration" component={Registartion}></Route>
        <Route path="/forgot-password" component={ForgotPassword}></Route>
        <Footer />
      </BrowserRouter>
    </div >
  );
};

export default App;
