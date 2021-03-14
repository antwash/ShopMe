import React from "react";

import { connect } from "react-redux";
import { addItemToCartAction } from "src/redux/cart/cartActions";

import FormButton from "src/components/button/FormButton";

import "src/components/collection-item/collectionitem.styles.scss";

const CollectionItem = ({ item, handleAddItemToCart }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">${item.price}</span>
    </div>
    <FormButton
      label="ADD TO CART"
      customStyle="inverted"
      onClick={() => handleAddItemToCart(item)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  handleAddItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
