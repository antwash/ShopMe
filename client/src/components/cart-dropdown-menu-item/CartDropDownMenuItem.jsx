import React from "react";

import "src/components/cart-dropdown-menu-item/cartdropdownmenuitem.styles.scss";

const CartDropDownMenuItem = ({
  item: { imageUrl, price, name, quantity },
}) => (
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

export default CartDropDownMenuItem;
