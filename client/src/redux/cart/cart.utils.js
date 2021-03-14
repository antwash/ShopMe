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

export const decreaseCartItemQuantity = (cartItems, itemToDecrease) => {
  const itemExistInCart = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );

  if (!itemExistInCart) {
    return cartItems;
  }

  const newCartItems = [];
  cartItems.forEach((cartItem) => {
    if (cartItem.id !== itemToDecrease.id) {
      newCartItems.push({ ...cartItem });
      return;
    }

    // Prevent adding item to list if removing last count of item
    if (cartItem.quantity !== 1) {
      newCartItems.push({
        ...cartItem,
        quantity: cartItem.quantity - 1,
      });
    }
  });
  return newCartItems;
};
