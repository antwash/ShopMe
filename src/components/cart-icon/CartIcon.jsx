import React from "react";

import { connect } from "react-redux";
import { toggleCartIsHiddenAction } from "src/redux/cart/cartActions";

import { ReactComponent as ShoppingBagIcon } from "src/assets/shopping-bag.svg";

import "src/components/cart-icon/carticon.styles.scss";

const CartIcon = ({ toggleCartIsHidden, cartItems }) => (
  <div className="cart-icon" onClick={toggleCartIsHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHiddenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
