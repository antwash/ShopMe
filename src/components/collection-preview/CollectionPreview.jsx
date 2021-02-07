import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "src/components/collection-item/CollectionItem";

import "src/components/collection-preview/collectionpreview.styles.scss";

const CollectionPreview = ({ title, items, history, match }) => {
  const navigateToCollection = () => {
    history.push(`${match.url}/${title.toLowerCase()}`);
  };
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={navigateToCollection}>
        {title.toUpperCase()}
      </h1>
      <div className="item-preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
