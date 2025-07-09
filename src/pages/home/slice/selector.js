import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectedDomain = (state) => state?.productReducer || initialState;

export const selectFetchingLogin = createSelector(
  [selectedDomain],
  (productReducer) => productReducer.fetchingLogin
);
export const selectError = createSelector(
  [selectedDomain],
  (productReducer) => productReducer.error
);
export const selectProducts = createSelector(
  [selectedDomain],
  (productReducer) => productReducer.products
);
export const selectPostingCards = createSelector(
  [selectedDomain],
  (productReducer) => productReducer.postingCards
);
export const selectPostError = createSelector(
  [selectedDomain],
  (productReducer) => productReducer.postError
);