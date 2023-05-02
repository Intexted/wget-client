import React from 'react';
import { Navigate } from 'react-router-dom';
//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from '../pages/AuthenticationInner/Register/CoverSignUp';
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
//login
import Login from '../pages/Authentication/Login';
import ForgetPasswordPage from '../pages/Authentication/ForgetPassword';
import Logout from '../pages/Authentication/Logout';
import Register from '../pages/Authentication/Register';

import Dashboard from '../pages/Dashboard/Dashboard';
import Factures from '../pages/Factures/Factures';
import Domains from '../pages/Domains/Domains';
import Services from '../pages/Services/Services';
import Settings from '../pages/pages/Profile/Settings/Settings';
import Faqs from '../pages/pages/Faqs/Faqs';

const authProtectedRoutes = [
  // { path: '/clients', component: <Clients /> },
  // { path: '/apps-todo', component: <ToDoList /> },
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/factures', component: <Factures /> },
  { path: '/domains', component: <Domains /> },
  { path: '/services', component: <Services /> },
  { path: '/faqs', component: <Faqs /> },

  //User Profile
  { path: '/profile', component: <Settings /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: '/',
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: '*', component: <Navigate to="/dashboard" /> },
];
const publicRoutes = [
  // Authentication Page
  { path: '/logout', component: <Logout /> },
  { path: '/login', component: <Login /> },
  { path: '/forgot-password', component: <ForgetPasswordPage /> },
  { path: '/register', component: <Register /> },

  //AuthenticationInner pages
  { path: '/auth-signin-basic', component: <BasicSignIn /> },
  { path: '/auth-signin-cover', component: <CoverSignIn /> },
  { path: '/auth-signup-basic', component: <BasicSignUp /> },
  { path: '/auth-signup-cover', component: <CoverSignUp /> },
  { path: '/auth-pass-reset-basic', component: <BasicPasswReset /> },
];

export { authProtectedRoutes, publicRoutes };
