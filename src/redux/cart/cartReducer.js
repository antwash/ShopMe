import { CartActionTypes } from "src/redux/cart/cartActions";

const INITIAL_STATE = {
  cartIsHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.toggleCartIsHidden:
      return {
        ...state,
        cartIsHidden: !state.cartIsHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
