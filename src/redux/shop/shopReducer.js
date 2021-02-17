import { ShopActionTypes } from "src/redux/shop/shopActions";

const INITIAL_STATE = {
  shopItems: [],
  isFetchingShopItems: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.fetchShopItems:
      return {
        ...state,
        isFetchingShopItems: true,
      };
    case ShopActionTypes.fetchShopItemsSuccess:
      return {
        ...state,
        isFetchingShopItems: false,
        shopItems: action.payload,
      };
    case ShopActionTypes.fetchShopItemsFailure:
      return {
        ...state,
        isFetchingShopItems: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
