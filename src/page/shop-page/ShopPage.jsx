import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopItems } from "src/redux/shop/shopSelectors";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";

const ShopPage = () => {
  return (
    <div>
      <CollectionOverview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCollection: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
