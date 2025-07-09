import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isAuthenticated: false,
  loading: true,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAuth(state) {
      state.loading = true;
      state.error = null;
    },
    checkAuthSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    checkAuthFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.loading = true;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    logoutFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authSlice;
export default reducer;
