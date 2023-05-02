import { UPDATE_PASSWORD } from './actionTypes';
import { UPDATE_PROFILE } from './actionTypes';

export const updatePassword = (user) => {
  return {
    type: UPDATE_PASSWORD,
    payload: { user },
  };
};
export const updateProfile = (user) => {
  return {
    type: UPDATE_PROFILE,
    payload: { user },
  };
};
