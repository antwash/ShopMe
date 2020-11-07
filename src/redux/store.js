import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "src/redux/rootReducer";

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

// Creates a persistor for our redux store
export const persistor = persistStore(store);
