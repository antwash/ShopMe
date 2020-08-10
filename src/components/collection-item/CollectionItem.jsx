import React from "react";

import "src/components/collection-item/collectionitem.styles.scss";

export const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);
