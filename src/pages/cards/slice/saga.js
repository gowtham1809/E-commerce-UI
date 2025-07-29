import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";
import { fetchCards } from "../../../services/api";

function* getCards() {
  try {
    const result = yield call(fetchCards);
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
