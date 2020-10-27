import React from "react";

import { connect } from "react-redux";
import { toggleCartIsHiddenAction } from "src/redux/cart/cartActions";

import { selectCartItemsTotal } from "src/redux/cart/cartSelectors";

import { ReactComponent as ShoppingBagIcon } from "src/assets/shopping-bag.svg";

import "src/components/cart-icon/carticon.styles.scss";

const CartIcon = ({ toggleCartIsHidden, cartItemsTotal }) => (
  <div className="cart-icon" onClick={toggleCartIsHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{cartItemsTotal}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartItemsTotal: selectCartItemsTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHiddenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
