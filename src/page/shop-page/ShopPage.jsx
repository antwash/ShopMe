import React, { useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";

import CollectionPage from "src/page/collection-page/CollectionPage";
import CollectionOverview from "src/components/collection-overview/CollectionOverview";
import WithLoadingSpinner from "src/components/loading-spinner/loading-spinner";

import { selectIsFetchingShopItems } from "src/redux/shop/shopSelectors";
import { fetchShopItemsAsync } from "src/redux/shop/shopActions";

const CollectionOverviewWithSpinner = WithLoadingSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithLoadingSpinner(CollectionPage);

const ShopPage = ({ match, isLoading, fetchShopItems }) => {
  useEffect(() => {
    fetchShopItems();
  }, [fetchShopItems]);

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

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingShopItems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShopItems: () => dispatch(fetchShopItemsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
