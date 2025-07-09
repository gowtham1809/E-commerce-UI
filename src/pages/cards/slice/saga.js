import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { actions } from "./slice";

function* getCards() {
  try {
    console.log("getCards");
    const result = yield call(
      axios.get,
      "http://localhost:5000/api/cards",
      {
        withCredentials: true,
      },
    );
    yield put({
      type: actions.getCardsSuccess.type,
      payload: result.data,
    });
  } catch (error) {
    yield put({ type: actions.getCardsFailure.type, error });
  }
}

const CardSaga = [takeLatest(actions.getCards.type, getCards)];
export default CardSaga;
