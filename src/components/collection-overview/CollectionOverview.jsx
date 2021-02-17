import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopItems } from "src/redux/shop/shopSelectors";

import CollectionPreview from "src/components/collection-preview/CollectionPreview";

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
});

export default connect(mapStateToProps)(CollectionOverview);
