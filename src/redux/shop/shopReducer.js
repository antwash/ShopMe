import { SHOP_ITEMS } from "./shopConstants";

const INITIAL_STATE = {
  collectionItems: SHOP_ITEMS,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
