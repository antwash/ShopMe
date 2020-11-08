import React from "react";

import { Route } from "react-router-dom";

import CollectionPage from "src/page/collection-page/CollectionPage";
import CollectionOverview from "src/components/collection-overview/CollectionOverview";

const ShopPage = ({ match }) => {
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

export default ShopPage;
