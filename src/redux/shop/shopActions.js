export const ShopActionTypes = {
  setShopItems: "SET_SHOP_ITEMS",
};

export const setShopItemsAction = (shopItems) => {
  return {
    type: ShopActionTypes.setShopItems,
    payload: shopItems,
  };
};
