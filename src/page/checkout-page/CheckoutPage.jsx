import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutPageItem from "src/components/checkout-page-item/CheckoutPageItem";
import StripeCheckoutButton from "src/components/stripe-button/StripeButton";

import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "src/redux/cart/cartSelectors";

import "src/page/checkout-page/checkoutpage.styles.scss";

const CheckoutPage = ({ totalCartPrice, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-item">
          <span>PRODUCT</span>
        </div>
        <div className="header-item">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-item">
          <span>QUANTITY</span>
        </div>
        <div className="header-item">
          <span>PRICE</span>
        </div>
        <div className="header-item">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutPageItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="chart-total">TOTAL ${totalCartPrice}</div>
      <div className="test-payment-warning">
        Please use the following test card for payments!
        <br />
        4242 4242 4242 4242 - Exp: 01/29 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalCartPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCartPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
