import React from "react";

import "src/components/cart-item/cartitem.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="name" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        ${price} x {quantity}
      </span>
    </div>
  </div>
);

export default CartItem;
