import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "src/redux/user/userReducer";
import cartReducer from "src/redux/cart/cartReducer";
import directoryReducer from "src/redux/directory/directoryReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
