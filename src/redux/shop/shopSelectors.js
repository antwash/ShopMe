import { createSelector } from "reselect";

import { COLLECTION_ITEM_ROUTE_ID_MAP } from "./shopConstants";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collectionItems
);

export const selectShopCollection = (collectionId) =>
  createSelector([selectShopCollections], (collectionItems) =>
    collectionItems.find(
      (collection) =>
        collection.id === COLLECTION_ITEM_ROUTE_ID_MAP[collectionId]
    )
  );
