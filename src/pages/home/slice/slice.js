import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  error: "",
  fetchingLogin: false,
    products: null,
    postingCards: false,
    postError: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.fetchingLogin = true;
      state.error = "";
      state.products = null;
    },
    getProductsSuccess(state, action) {
      state.products = action.payload;
      state.fetchingLogin = false;
    },
    getProductsFailure(state, action) {
      state.products = null;
      state.error = action.payload;
      state.fetchingLogin = false;
    },
    addProductToCards(state, action) {
      state.postingCards = true;
      state.postError = "";
    },
    addProductToCardsSuccess(state, action) {
      state.postingCards = false;
    },
    addProductToCardsFailure(state, action) {
      state.postingCards = false;
      state.postError = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = productSlice;
export default reducer;