import { actions, default as reducer } from "./slice";
import saga from "./saga";
import {
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
  selectAuthUser,
} from "./selector";

export {
  actions as authActions,
  reducer as authReducer,
  saga as authSaga,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
  selectAuthUser,
};

export default reducer;
