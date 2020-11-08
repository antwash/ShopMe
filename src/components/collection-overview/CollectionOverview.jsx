import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "src/redux/shop/shopSelectors";

import CollectionPreview from "src/components/collection-preview/CollectionPreview";

import "src/components/collection-overview/collectionoverview.styles.scss";

const CollectionOverview = ({ shopItems }) => {
  return (
    <div className="collection-overview">
      {shopItems.map((item) => {
        return (
          <CollectionPreview
            key={item.id}
            title={item.title}
            items={item.items}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
