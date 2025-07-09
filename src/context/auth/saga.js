import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";

function* checkAuth() {
  try {
    const result = yield call(axios.get, "http://localhost:5000/api/auth/me", {
      withCredentials: true,
    });

    if (result.status === 200) {
      yield put({
        type: actions.checkAuthSuccess.type,
        payload: result.data,
      });
    }
  } catch (error) {
    yield put({
      type: actions.checkAuthFailure.type,
      payload: error.response?.data?.message || error.message,
    });
  }
}

function* logout() {
  try {
    const result = yield call(
      axios.post,
      "http://localhost:5000/api/auth/logout",
      {
        withCredentials: true,
      }
    );

    if (result.status === 200) {
      yield put({
        type: actions.logoutSuccess.type,
      });
    }
  } catch (error) {
    yield put({
      type: actions.logoutFailure.type,
      payload: error.response?.data?.message || error.message,
    });
  }
}

const authSaga = [
  takeLatest(actions.checkAuth.type, checkAuth),
  takeLatest(actions.logout.type, logout),
];

export default authSaga;
