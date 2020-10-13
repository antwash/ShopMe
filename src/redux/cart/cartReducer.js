import { CartActionTypes } from "src/redux/cart/cartActions";

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
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
