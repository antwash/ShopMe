import React from "react";

import { CollectionItem } from "src/components/collection-item/CollectionItem";

import "src/components/collection-preview/collectionpreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="item-preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
