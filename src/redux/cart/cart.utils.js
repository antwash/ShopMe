export const addItemToChart = (cartItems, itemToAdd) => {
  const itemExistInCart = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (!itemExistInCart) {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === itemToAdd.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    }
    return cartItem;
  });
};
