import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../pages/slice/slice";
import authReducer  from "../context/auth";
import ProductReducer from "../pages/home/slice/slice";
import CardReducer from "../pages/cards/slice/slice";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  productReducer: ProductReducer,
  cardReducer: CardReducer,
});

export default rootReducer;
