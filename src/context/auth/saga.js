import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";
import { authMe, authLogout } from "../../services/api";

function* checkAuth() {
  try {
    const result = yield call(authMe);

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
    const result = yield call(authLogout);

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
