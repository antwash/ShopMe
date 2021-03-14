import {
  convertShopItemsCollectionSnapshotToMap,
  fireStoreDbPaths,
  firestore,
} from "src/firebase/util";

export const ShopActionTypes = {
  fetchShopItems: "FETCH_SHOP_ITEMS",
  fetchShopItemsSuccess: "FETCH_SHOP_ITEMS_SUCCESS",
  fetchShopItemsFailure: "FETCH_SHOP_ITEMS_FAILURE",
};

export const fetchShopItems = () => ({
  type: ShopActionTypes.fetchShopItems,
});

export const fetchShopItemsSuccess = (shopItems) => ({
  type: ShopActionTypes.fetchShopItemsSuccess,
  payload: shopItems,
});

export const fetchShopItemsFailure = (errorMessage) => ({
  type: ShopActionTypes.fetchShopItemsFailure,
  errorMessage: errorMessage,
});

export const fetchShopItemsAsync = () => {
  return (dispatch) => {
    dispatch(fetchShopItems());

    const collectionRef = firestore.collection(fireStoreDbPaths.shopItems);
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertShopItemsCollectionSnapshotToMap(snapshot);
        dispatch(fetchShopItemsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchShopItemsFailure(error.message)));
  };
};
