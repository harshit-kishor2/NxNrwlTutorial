import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Menubar, HomePage, Footer } from '@project-structure/ui-guest'
import Login from '../component/login/login';
import Registartion from '../component/registartion/registartion';
import ForgotPassword from '../component/forgot-password/forgot-password';
export const App = () => {

  return (
    <div className="container">
      <BrowserRouter>
        <Menubar />
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/registration" component={Registartion}></Route>
        <Route path="/forgot-password" component={ForgotPassword}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
