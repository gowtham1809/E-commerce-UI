
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";
import { authLogin, authRegister, authLogout } from "../../services/api";

function* fetchLogin(action) {
  try {
    const result = yield call(authLogin, action.payload);
    yield put({
      type: actions.loginSuccess.type,
      payload: result.data,
    });
    window.location.href = "/home";
  } catch (error) {
    yield put({ type: actions.loginFailure.type, error });
  }
}
function* fetchSignup(action) {
  
  
  try {
    const result = yield call(authRegister, action.payload);
    // Redirect to login page after successful signup
    if (result?.status === 201) {
      alert("Signup successful!");
      window.location.href = "/login";
    }
    // Assuming the API returns a success message or status
    yield put({
      type: actions.signupSuccess.type,
      payload: result?.statusText,
    });
  } catch (error) {
    yield put({ type: actions.signupFailure.type, error:error.response });
  }
}

function* logout() {
  try {
    const result = yield call(authLogout);
    yield put({
      type: actions.logoutSuccess.type,
      payload: result.data,
    });
  } catch (error) {
    yield put({ type: actions.logoutFailure.type, error });
  }
}
const UserSaga = [
  takeLatest(actions.login.type, fetchLogin),
  takeLatest(actions.signup.type, fetchSignup),
  takeLatest(actions.logout.type, logout),
];

export default UserSaga;