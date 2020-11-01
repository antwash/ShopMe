import React from "react";

import "src/components/checkout-page-item/checkoutpageitem.styles.scss";

const CheckoutPageItem = ({ cartItem }) => {
  return (
    <div className="checkout-page-item">
      <div className="item-image-container">
        <img alt={cartItem.name} src={cartItem.imageUrl} />
      </div>
      <div className="item-name">{cartItem.name}</div>
      <div className="item-price">${cartItem.price}</div>
      <div className="remove-item-button">&#10005;</div>
    </div>
  );
};

export default CheckoutPageItem;
