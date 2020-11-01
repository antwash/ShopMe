import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Routes } from "src/index";

import CartItem from "src/components/cart-item/CartItem";
import FormButton from "src/components/button/FormButton";

import { selectCartItems } from "src/redux/cart/cartSelectors";
import { toggleCartIsHiddenAction } from "src/redux/cart/cartActions";

import "src/components/cart-dropdown-menu/cartdropdownmenu.styles.scss";

const CartDropDownMenu = ({ cartItems, history, location, dispatch }) => {
  const navigateToCheckoutPage = () => {
    const { pathname } = location;
    if (pathname === Routes.CHECKOUT) {
      return;
    }
    history.push(Routes.CHECKOUT);
    // The connect HOC assigns dispatch as a prop by default
    // when you do not supply mapDispatchToProps (the second
    // parameter) to connect
    dispatch(toggleCartIsHiddenAction());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart-empty-message"> Your cart is empty!</span>
        )}
      </div>
      <FormButton onClick={navigateToCheckoutPage} label="GO TO CHECKOUT" />
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropDownMenu));
