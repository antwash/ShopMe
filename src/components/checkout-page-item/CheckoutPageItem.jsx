import React from "react";

import { connect } from "react-redux";

import { removeItemFromCartAction } from "src/redux/cart/cartActions";

import "src/components/checkout-page-item/checkoutpageitem.styles.scss";

const CheckoutPageItem = ({ cartItem, dispatch }) => {
  return (
    <div className="checkout-page-item">
      <div className="item-image-container">
        <img alt={cartItem.name} src={cartItem.imageUrl} />
      </div>
      <div className="item-name">{cartItem.name}</div>
      <div className="item-quantity">{cartItem.quantity}</div>
      <div className="item-price">${cartItem.price}</div>
      <div
        className="remove-item-button"
        onClick={() => dispatch(removeItemFromCartAction(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutPageItem);
