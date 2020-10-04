import React from "react";

import { connect } from "react-redux";
import { toggleCartIsHiddenAction } from "src/redux/cart/cartActions";

import { ReactComponent as ShoppingBagIcon } from "src/assets/shopping-bag.svg";

import "src/components/cart-icon/carticon.styles.scss";

const CartIcon = ({ toggleCartIsHidden }) => (
  <div className="cart-icon" onClick={toggleCartIsHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHiddenAction()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
