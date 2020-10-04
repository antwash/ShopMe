import React from "react";

import FormButton from "src/components/button/FormButton";

import "src/components/cart-dropdown-menu/cartdropdownmenu.styles.scss";

const CartDropDownMenu = () => (
  <div className="cart-dropdown">
    <div className="cart-items">This is the CartDropDownMenu!</div>
    <FormButton label="GO TO CHECKOUT" />
  </div>
);

export default CartDropDownMenu;
