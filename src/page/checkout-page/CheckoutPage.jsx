import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "src/redux/cart/cartSelectors";

import "src/page/checkout-page/checkoutpage.styles.scss";

const CheckoutPage = ({ totalCartPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-item">
          <span>Product</span>
        </div>
        <div className="header-item">
          <span>Description</span>
        </div>
        <div className="header-item">
          <span>Price</span>
        </div>
        <div className="header-item">
          <span>Remove</span>
        </div>
      </div>
      <div className="chart-total">Total ${totalCartPrice}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCartPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
