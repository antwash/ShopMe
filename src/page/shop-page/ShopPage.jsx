import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopItems } from "src/redux/shop/shopSelectors";

import CollectionPreview from "src/components/collection-preview/CollectionPreview";

const ShopPage = ({ itemsCollection }) => {
  return (
    <div>
      {itemsCollection.map((item) => {
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
  itemsCollection: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
