import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.shopItems
);

export const selectShopItemCollection = (collectionId) =>
  createSelector([selectShopItems], (shopItems) => shopItems[collectionId]);

export const selectIsFetchingShopItems = createSelector(
  [selectShop],
  (shop) => shop.isFetchingShopItems
);
