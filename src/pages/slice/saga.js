import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";

function* fetchLogin(action) {
  try {
  
    const result = yield call(axios.post,"http://localhost:5000/api/auth/login", action.payload, {
        withCredentials: true,
      }
    );
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
    const result = yield call(
      axios.post,"http://localhost:5000/api/auth/signup", action.payload
    );    
    yield put({
      type: actions.signupSuccess.type,
      payload: result?.statusText,
    });
  } catch (error) {
    yield put({ type: actions.signupFailure.type, error:error.response });
  }
}

function* logout(action) {
  try {
    const result = yield call(axios.post, "http://localhost:5000/api/auth/logout", null, {
      withCredentials: true,
    });
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