import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setShopItemsAction } from "src/redux/shop/shopActions";

import CollectionPage from "src/page/collection-page/CollectionPage";
import CollectionOverview from "src/components/collection-overview/CollectionOverview";
import WithLoadingSpinner from "src/components/loading-spinner/loading-spinner";

import {
  convertShopItemsCollectionSnapshotToMap,
  firestore,
  fireStoreDbPaths,
} from "src/firebase/util";

const CollectionOverviewWithSpinner = WithLoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithLoadingSpinner(CollectionPage);

const ShopPage = ({ match, setShopItems }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection(fireStoreDbPaths.shopItems);
    collectionRef.onSnapshot(async (snapshot) => {
      const shopItemsMap = convertShopItemsCollectionSnapshotToMap(snapshot);
      setShopItems(shopItemsMap);
      setIsLoading(false);
    });
  });

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => {
          return (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          );
        }}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => {
          return <CollectionPageWithSpinner isLoading={isLoading} {...props} />;
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setShopItems: (shopItems) => dispatch(setShopItemsAction(shopItems)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
