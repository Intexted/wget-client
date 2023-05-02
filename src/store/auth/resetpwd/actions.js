import { RESET_PASSWORD } from './actionTypes';

export const resetPassword = (user, history) => {
  return {
    type: RESET_PASSWORD,
    payload: { user, history },
  };
};
