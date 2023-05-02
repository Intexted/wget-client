import { all, fork } from 'redux-saga/effects';
//layout
import LayoutSaga from './layouts/saga';
//Auth
import AccountSaga from './auth/register/saga';
import AuthSaga from './auth/login/saga';
import ForgetSaga from './auth/forgetpwd/saga';
import ProfileSaga from './auth/profile/saga';

// To do
// import todos from './todos/saga';
import updateSaga from './auth/update/saga';
import resetSaga from './auth/resetpwd/saga';

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    // fork(todos),
    fork(updateSaga),
    fork(resetSaga),
  ]);
}
