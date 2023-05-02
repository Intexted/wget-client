import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as url from '../url_helper';
import { accessToken, nodeApiToken } from '../jwt-token-access/accessToken';

import {
  todoTaskList,
  todoCollapse,
  jobApplication,
  apiKey,
} from '../../common/data';

let users = [
  {
    uid: 1,
    username: 'admin',
    role: 'admin',
    password: '123456',
    email: 'admin@themesbrand.com',
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' });

  mock.onPost('/post-jwt-register').reply((config) => {
    const user = JSON.parse(config['data']);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost('/post-jwt-login').reply((config) => {
    const user = JSON.parse(config['data']);
    const validUser = users.filter(
      (usr) => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser['length'] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            'Username and password are invalid. Please enter correct username and password',
          ]);
        }
      });
    });
  });

  mock.onPost('/post-jwt-profile').reply((config) => {
    const user = JSON.parse(config['data']);

    const one = config.headers;

    let finalToken = one.Authorization;

    const validUser = users.filter((usr) => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser['length'] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex((obj) => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            sessionStorage.removeItem('authUser');
            sessionStorage.setItem('authUser', JSON.stringify(users[objIndex]));

            resolve([200, 'Profile Updated Successfully']);
          } else {
            reject([400, 'Something wrong for edit profile']);
          }
        } else {
          reject([400, 'Invalid Token !!']);
        }
      });
    });
  });

  mock.onPost('/social-login').reply((config) => {
    const user = JSON.parse(config['data']);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;
          const first_name = user.name;
          const nodeapiToken = nodeApiToken;
          delete user.name;

          // JWT AccessToken
          const tokenObj = { accessToken: token, first_name: first_name }; // Token Obj
          const validUserObj = {
            token: nodeapiToken,
            data: { ...tokenObj, ...user },
          }; // validUser Obj
          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            'Username and password are invalid. Please enter correct username and password',
          ]);
        }
      });
    });
  });

  // To do
  mock.onGet(url.GET_TODOS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todoTaskList) {
          // Passing fake JSON data as response
          resolve([200, todoTaskList]);
        } else {
          reject([400, 'Cannot get To do data']);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_TODO).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.todo]);
        } else {
          reject([400, 'Cannot delete To do data']);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_TODO).reply((todo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todo && todo.data) {
          // Passing fake JSON data as response
          resolve([200, todo.data]);
        } else {
          reject([400, 'Cannot add To do data']);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_TODO).reply((todo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todo && todo.data) {
          // Passing fake JSON data as response
          resolve([200, todo.data]);
        } else {
          reject([400, 'Cannot update To do data']);
        }
      });
    });
  });

  mock.onGet(url.GET_PROJECTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todoCollapse) {
          // Passing fake JSON data as response
          resolve([200, todoCollapse]);
        } else {
          reject([400, 'Cannot get Project data']);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_TODO_PROJECT).reply((project) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (project && project.data) {
          // Passing fake JSON data as response
          resolve([200, project.data]);
        } else {
          reject([400, 'Cannot add Project data']);
        }
      });
    });
  });
};

export default fakeBackend;
