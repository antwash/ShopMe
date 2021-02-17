import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionPage from "src/page/collection-page/CollectionPage";
import CollectionOverview from "src/components/collection-overview/CollectionOverview";

import { fetchShopItemsAsync } from "src/redux/shop/shopActions";

const ShopPage = ({ match, fetchShopItems }) => {
  useEffect(() => {
    fetchShopItems();
  }, [fetchShopItems]);

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
  fetchShopItems: () => dispatch(fetchShopItemsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
