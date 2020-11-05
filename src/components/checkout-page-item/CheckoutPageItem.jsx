import React from "react";

import { connect } from "react-redux";

import {
  addItemToCartAction,
  decreaseCartItemQuantityAction,
  removeItemFromCartAction,
} from "src/redux/cart/cartActions";

import "src/components/checkout-page-item/checkoutpageitem.styles.scss";

const CheckoutPageItem = ({
  cartItem,
  removeItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}) => {
  return (
    <div className="checkout-page-item">
      <div className="item-image-container">
        <img alt={cartItem.name} src={cartItem.imageUrl} />
      </div>
      <div className="item-name">{cartItem.name}</div>
      <div className="item-quantity">
        <div
          className="item-arrow"
          onClick={() => decreaseCartItemQuantity(cartItem)}
        >
          &#10094;
        </div>
        <span className="item-value">{cartItem.quantity}</span>
        <div
          className="item-arrow"
          onClick={() => increaseCartItemQuantity(cartItem)}
        >
          &#10095;
        </div>
      </div>
      <div className="item-price">${cartItem.price}</div>
      <div
        className="remove-item-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (cartItem) =>
    dispatch(removeItemFromCartAction(cartItem)),
  increaseCartItemQuantity: (cartItem) =>
    dispatch(addItemToCartAction(cartItem)),
  decreaseCartItemQuantity: (cartItem) =>
    dispatch(decreaseCartItemQuantityAction(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutPageItem);
