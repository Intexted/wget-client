import { APIClient } from './api_helper';

import * as url from './url_helper';

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) =>
  api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data) =>
  api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// updatetPwd
export const updatePwd = (data) => {
  api.put(url.UPDATE_PASSWORD + '/' + data.user.id, data.user);
};
// resetPwd
export const resetPwd = (data) => {
  api.create(url.RESET_PASSWORD, data);
};
// updatetProfile
export const updateUserProfile = (data) => {
  api.put(url.UPDATE_PROFILE + '/' + data.user.id, data.user);
};

// Edit profile
export const postJwtProfile = (data) =>
  api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data) =>
  api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = 'Sorry! the page you are looking for could not be found';
          break;
        case 500:
          message =
            'Sorry! something went wrong, please contact our support team';
          break;
        case 401:
          message = 'Invalid credentials';
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// Login Method
export const postJwtLogin = (data) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data) =>
  api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data) => api.create(url.SOCIAL_LOGIN, data);

// To Do
export const getTodos = (todo) => api.get(url.GET_ACCTS, todo);
export const deleteTodo = (todo) =>
  api.delete(url.DELETE_ACCT + '/' + todo.user);
export const addNewTodo = (todo) => api.create(url.ADD_NEW_ACCT, todo);
export const updateTodo = (todo) => api.put(url.UPDATE_ACCT, todo);

// To do Project
export const getProjects = (project) => api.get(url.GET_PROJECTS, project);
export const addNewProject = (project) =>
  api.create(url.ADD_NEW_TODO_PROJECT, project);
