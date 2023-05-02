import { UPDATE_PASSWORD, UPDATE_PROFILE } from './actionTypes';

const initialState = {};

const UpdateUser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      state = {
        ...state,
      };
      break;
    case UPDATE_PROFILE:
      state = {
        ...state,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UpdateUser;
