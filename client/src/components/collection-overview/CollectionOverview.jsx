import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsFetchingShopItems,
  selectShopItems,
} from "src/redux/shop/shopSelectors";

import CollectionPreview from "src/components/collection-preview/CollectionPreview";
import WithLoadingSpinner from "src/components/loading-spinner/loading-spinner";

import "src/components/collection-overview/collectionoverview.styles.scss";

const CollectionOverview = ({ shopItems }) => {
  const renderShoppingItems = () => {
    const shoppingItems = [];
    for (let itemKey in shopItems) {
      const item = shopItems[itemKey];
      shoppingItems.push(
        <CollectionPreview
          key={item.id}
          title={item.title}
          items={item.items}
        />
      );
    }
    return shoppingItems;
  };

  return <div className="collection-overview">{renderShoppingItems()}</div>;
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItems,
  isLoading: selectIsFetchingShopItems,
});

const collectionOverviewWithSpinner = WithLoadingSpinner(CollectionOverview);

export default connect(mapStateToProps)(collectionOverviewWithSpinner);
