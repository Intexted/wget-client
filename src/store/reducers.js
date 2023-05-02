import { combineReducers } from 'redux';

// Front
import Layout from './layouts/reducer';

// Authentication
import Login from './auth/login/reducer';
import Account from './auth/register/reducer';
import ForgetPassword from './auth/forgetpwd/reducer';
import Profile from './auth/profile/reducer';
import UpdateUser from './auth/update/reducer';
import ResetPassword from './auth/resetpwd/reducer';

// To do
import Todos from './todos/reducer';

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  Todos,
  UpdateUser,
  ResetPassword,
});

export default rootReducer;
