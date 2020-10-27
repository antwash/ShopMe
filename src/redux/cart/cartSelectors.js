import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartIsHidden = createSelector(
  [selectCart],
  (cart) => cart.cartIsHidden
);
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
