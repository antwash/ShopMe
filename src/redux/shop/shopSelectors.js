import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collectionItems
);

export const selectShopCollection = (collectionId) =>
  createSelector(
    [selectShopCollections],
    (collectionItems) => collectionItems[collectionId]
  );
