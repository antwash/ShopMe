import { CartActionTypes } from "src/redux/cart/cartActions";

import { addItemToChart, decreaseCartItemQuantity } from "./cart.utils";

const INITIAL_STATE = {
  cartIsHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.toggleCartIsHidden:
      return {
        ...state,
        cartIsHidden: !state.cartIsHidden,
      };
    case CartActionTypes.addItemToCart:
      return {
        ...state,
        cartItems: addItemToChart(state.cartItems, action.payload),
      };
    case CartActionTypes.removeItemFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.decreaseCartItemQuantity:
      return {
        ...state,
        cartItems: decreaseCartItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
