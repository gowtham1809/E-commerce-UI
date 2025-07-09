import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectAuthDomain = (state) => state.auth || initialState;

export const selectIsAuthenticated = createSelector(
  [selectAuthDomain],
  (authState) => authState.isAuthenticated
);

export const selectAuthLoading = createSelector(
  [selectAuthDomain],
  (authState) => authState.loading
);

export const selectAuthError = createSelector(
  [selectAuthDomain],
  (authState) => authState.error
);

export const selectAuthUser = createSelector(
  [selectAuthDomain],
  (authState) => authState.user
);
