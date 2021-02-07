import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setShopItemsAction } from "src/redux/shop/shopActions";

import CollectionPage from "src/page/collection-page/CollectionPage";
import CollectionOverview from "src/components/collection-overview/CollectionOverview";

import {
  convertShopItemsCollectionSnapshotToMap,
  firestore,
  fireStoreDbPaths,
} from "src/firebase/util";

const ShopPage = ({ match, setShopItems }) => {
  useEffect(() => {
    const collectionRef = firestore.collection(fireStoreDbPaths.shopItems);
    collectionRef.onSnapshot(async (snapshot) => {
      const shopItemsMap = convertShopItemsCollectionSnapshotToMap(snapshot);
      setShopItems(shopItemsMap);
    });
  });

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setShopItems: (shopItems) => dispatch(setShopItemsAction(shopItems)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
