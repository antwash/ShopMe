import React from "react";
import { connect } from "react-redux";

import CartItem from "src/components/cart-item/CartItem";
import FormButton from "src/components/button/FormButton";

import { selectCartItems } from "src/redux/cart/cartSelectors";

import "src/components/cart-dropdown-menu/cartdropdownmenu.styles.scss";

const CartDropDownMenu = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <FormButton label="GO TO CHECKOUT" />
  </div>
);

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropDownMenu);
