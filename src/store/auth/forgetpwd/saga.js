import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FORGET_PASSWORD } from './actionTypes';
import { userForgetPasswordSuccess, userForgetPasswordError } from './actions';

//Include Both Helper File with needed methods
import { postFakeForgetPwd } from '../../../helpers/fakebackend_helper';

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user, history } }) {
  // console.log('forgot-password');
  // console.log({ user });
  try {
    if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeForgetPwd, user);
      if (response.message === 'success') {
        yield put(
          userForgetPasswordSuccess(
            'Reset link are sended to your mailbox, check there first'
          )
        );
      } else if (response.error) {
        yield put(userForgetPasswordError(response.error));
      }
    }
  } catch (error) {
    yield put(userForgetPasswordError(error));
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(FORGET_PASSWORD, forgetUser);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)]);
}

export default forgetPasswordSaga;
