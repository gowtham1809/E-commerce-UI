import { all } from "redux-saga/effects";
import UserSaga from "../pages/slice/saga";
import authSaga  from "../context/auth/saga";
import ProductSaga from "../pages/home/slice/saga";
import CardSaga from "../pages/cards/slice/saga";

export default function* rootSaga() {
  yield all([...UserSaga, ...authSaga, ...ProductSaga, ...CardSaga]);
}
