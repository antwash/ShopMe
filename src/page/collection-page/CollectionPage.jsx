import React from "react";

import { connect } from "react-redux";

import {
  selectIsFetchingShopItems,
  selectShopItemCollection,
} from "src/redux/shop/shopSelectors";

import CollectionItem from "src/components/collection-item/CollectionItem";
import WithLoadingSpinner from "src/components/loading-spinner/loading-spinner";

import "src/page/collection-page/collectionpage.styles.scss";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return null;
  }

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="collection-title">{title.toUpperCase()}</h2>
      <div className="collection-items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingShopItems,
  collection: (state, ownProps) =>
    selectShopItemCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageWithLoadingSpinner = WithLoadingSpinner(CollectionPage);

export default connect(mapStateToProps)(CollectionPageWithLoadingSpinner);
