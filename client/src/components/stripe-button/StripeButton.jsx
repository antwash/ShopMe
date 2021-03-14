import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51HxlGNCfzKDZTg30JWdoYCmxexl5FzbAfZ8QnXAPT0q0gTu2JxNWdDnN8f3LiqYKVGPrgdLl0VrhNhARD63AN8Ct00gq0cK49T";
  const priceInCentsForStripe = price * 100;

  const handleToken = (token) => {
    // We're not really processing the payment
    // This is the token object we'll used on the
    // backend to process the payment in stripe
    console.log("token: ", token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label={"Pay Now"}
      name={"Shop With Me!"}
      description={`Your total is $${price}`}
      amount={priceInCentsForStripe}
      panelLabel={"Pay Now"}
      token={handleToken}
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
    />
  );
};

export default StripeCheckoutButton;
