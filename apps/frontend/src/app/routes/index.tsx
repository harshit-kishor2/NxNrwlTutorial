import ForgotPassword from './../../component/forgot-password/forgot-password';
import Dashboard from './../../component/dashboard/dashboard';
import Login from './../../component/login/login';
import Registartion from './../../component/registartion/registartion';
import NotAuth from '../pages/Notauth';
import NotFound from '../pages/NotFound';
import React from 'react';
import ManageUser from '../../AdminComponent/manage-user/manage-user';
import ManageBook from '../../AdminComponent/manage-book/manage-book';
export default [
  {
    path: "/",
    exact: true,
    comp: <Dashboard />,
  },
  {
    path: "/not-auth",
    exact: true,
    comp: <NotAuth />,
  },
  {
    path: "/page-not-found",
    exact: true,
    comp: <NotFound />,
  },
  {
    path: "/login",
    protected: "guest",
    comp: <Login />
  },
  {
    path: "/registration",
    comp: <Registartion />,
    protected: "guest",
  },
  {
    path: "/forgot-password",
    comp: <ForgotPassword />,
    protected: "guest",
  },
  {
    path: "/manage-user",
    comp: <ManageUser />,
    protected: "admin",
  },
  {
    path: "/manage-book",
    comp: <ManageBook />,
    protected: "admin",
  },

]