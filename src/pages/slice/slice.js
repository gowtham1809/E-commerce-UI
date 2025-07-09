import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  error: "",
  fetchingLogin: false,
  user: null,
  fetchingSignup: false,
  fetchingLogout: false,
  signup: null,
  signError: "",
  fetchingAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.fetchingLogin = true;
      state.error = "";
      state.user = null;
    },
    loginSuccess(state, action) {
      console.log("loginSuccess", action.payload);
      state.user = action.payload;
      state.fetchingLogin = false;
    },
    loginFailure(state, action) {
      state.user = null;
      state.error = action.payload;
      state.fetchingLogin = false;
    },
    signup(state, action) {
      state.fetchingSignup = true;
      state.signup = null;
    },
    signupSuccess(state, action) {
      state.signup = action.payload;
      state.fetchingSignup = false;
    },
    signupFailure(state, action) {
      state.signup = null;
      state.fetchingSignup = false;
      state.signError = action.payload;
    },
    logout(state) {
      state.fetchingLogin = true;
    },
    logoutSuccess(state) {
      state.user = null;
      state.fetchingLogin = false;
    },
    logoutFailure(state, action) {
      state.error = action.payload;
      state.fetchingLogin = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
export default reducer;
