import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import { UPDATE_PASSWORD, UPDATE_PROFILE } from './actionTypes';
import {
  updatePwd,
  updateUserProfile,
} from '../../../helpers/fakebackend_helper';
import { toast } from 'react-toastify';

function* updatePassword({ payload: user }) {
  try {
    const response = yield call(updatePwd, user);
    //   yield put(addProjectSuccess(response));
    toast.success('Password Updated Successfully', { autoClose: 3000 });
  } catch (error) {
    //   yield put(addProjectFail(error));
    toast.error('Password Updated Failed', { autoClose: 3000 });
  }
}
function* updateProfile({ payload: user }) {
  try {
    const response = yield call(updateUserProfile, user);
    //   yield put(addProjectSuccess(response));
    toast.success('Password Updated Successfully', { autoClose: 3000 });
  } catch (error) {
    //   yield put(addProjectFail(error));
    toast.error('Password Updated Failed', { autoClose: 3000 });
  }
}

export function* watchUpdatePassword() {
  yield takeEvery(UPDATE_PASSWORD, updatePassword);
}
export function* watchUpdateProfile() {
  yield takeEvery(UPDATE_PROFILE, updateProfile);
}

function* updateSaga() {
  yield all([fork(watchUpdatePassword)]);
  yield all([fork(watchUpdateProfile)]);
}

export default updateSaga;
