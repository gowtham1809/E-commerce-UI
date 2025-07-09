import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
  error: '',
  fetchingLogin: false,
  cards: null,
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        getCards(state, action) {
        state.fetchingLogin = true;
        state.error = '';
        state.cards = null;
        },
        getCardsSuccess(state, action) {
        state.cards = action.payload;
        state.fetchingLogin = false;
        },
        getCardsFailure(state, action) {
        state.cards = null;
        state.error = action.payload;
        state.fetchingLogin = false;
        },
    },
});
    
export const { actions, reducer, name: sliceKey } = cardSlice;
export default reducer;
