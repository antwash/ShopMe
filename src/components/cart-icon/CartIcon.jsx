import React from "react";

import { ReactComponent as ShoppingBagIcon } from "src/assets/shopping-bag.svg";

import "src/components/cart-icon/carticon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
