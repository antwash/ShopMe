import { combineReducers } from "redux";

import userReducer from "src/redux/user/userReducer";
import cartReducer from "src/redux/cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
