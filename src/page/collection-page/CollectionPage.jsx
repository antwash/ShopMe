import React from "react";

import { connect } from "react-redux";

import { selectShopItemCollection } from "src/redux/shop/shopSelectors";

import CollectionItem from "src/components/collection-item/CollectionItem";

import "src/page/collection-page/collectionpage.styles.scss";

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

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopItemCollection(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
