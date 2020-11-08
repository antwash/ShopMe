import React from "react";

import { connect } from "react-redux";

import { selectShopCollection } from "src/redux/shop/shopSelectors";

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return null;
  }

  const { title } = collection;
  return (
    <div className="collection-page">
      <span className="collection-title">{title.toUpperCase()}</span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
