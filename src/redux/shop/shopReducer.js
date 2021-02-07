import { ShopActionTypes } from "src/redux/shop/shopActions";

const INITIAL_STATE = {
  collectionItems: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.setShopItems:
      return {
        ...state,
        collectionItems: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
