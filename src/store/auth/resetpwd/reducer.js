import { RESET_PASSWORD } from './actionTypes';

const initialState = {};

const ResetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
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

export default ResetPassword;
