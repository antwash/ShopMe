import React from "react";

import FormButton from "src/components/button/FormButton";

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
    <FormButton label="ADD TO CART" customStyle="inverted" />
  </div>
);
