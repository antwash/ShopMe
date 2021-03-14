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
export const selectCartItemsTotalCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalCount, cartItem) => totalCount + cartItem.quantity,
      0
    )
);
export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
      0
    )
);
