import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import { RESET_PASSWORD } from './actionTypes';
import { resetPwd } from '../../../helpers/fakebackend_helper';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function* resetPassword({ payload: { user, history } }) {
  console.log('user', user);
  console.log('history', history);
  try {
    const response = yield call(resetPwd, user);
    //   yield put(addProjectSuccess(response));
    toast.success('Password Reseted Successfully', { autoClose: 3000 });
    setTimeout(() => history('/login'), 2000);
  } catch (error) {
    //   yield put(addProjectFail(error));
    toast.error('Password Reseted Failed', { autoClose: 3000 });
  }
}

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

function* resetSaga() {
  yield all([fork(watchResetPassword)]);
}

export default resetSaga;
