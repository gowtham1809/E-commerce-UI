import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectedDomain = (state) => state?.cardReducer || initialState;

export const selectFetchingLogin = createSelector(
  [selectedDomain],
  (cardReducer) => cardReducer.fetchingLogin
);  
export const selectError = createSelector(
  [selectedDomain],
  (cardReducer) => cardReducer.error
);
export const selectCards = createSelector(
  [selectedDomain],
  (cardReducer) => cardReducer.cards
);