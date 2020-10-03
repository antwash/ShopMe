import { combineReducers } from "redux";

import userReducer from "src/redux/user/userReducer";

export default combineReducers({
  user: userReducer,
});
