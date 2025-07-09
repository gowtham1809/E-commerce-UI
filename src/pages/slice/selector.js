import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectedDomain = (state) => state?.userReducer || initialState;

export const selectFetchingLogin = createSelector(
  [selectedDomain],
  (userReducer) => userReducer.fetchingLogin
);
export const selectError = createSelector(
  [selectedDomain],
  (userReducer) => userReducer.fetchingLogin
);
export const selectUser = createSelector(
  [selectedDomain],
  (userReducer) => userReducer.user
);
export const selectFetchingSignup = createSelector(
  [selectedDomain],
  (userReducer) => userReducer.fetchingSignup
);
export const selectSignupError = createSelector(
  [selectedDomain],
  (userReducer) => userReducer.signupError
);
export const selectSignup = createSelector(
  [selectedDomain],
  (userReducer) => userReducer.signup
);
