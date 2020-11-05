export const CartActionTypes = {
  toggleCartIsHidden: "TOGGLE_CART_IS_HIDDEN",
  addItemToCart: "ADD_ITEM_TO_CART",
  removeItemFromCart: "REMOVE_ITEM_FROM_CART",
  decreaseCartItemQuantity: "DECREASE_CART_ITEM_QUANTITY",
};

export const toggleCartIsHiddenAction = () => ({
  type: CartActionTypes.toggleCartIsHidden,
});

export const addItemToCartAction = (item) => ({
  type: CartActionTypes.addItemToCart,
  payload: item,
});

export const removeItemFromCartAction = (item) => ({
  type: CartActionTypes.removeItemFromCart,
  payload: item,
});

export const decreaseCartItemQuantityAction = (item) => ({
  type: CartActionTypes.decreaseCartItemQuantity,
  payload: item,
});
