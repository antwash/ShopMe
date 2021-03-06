import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { selectCurrentUser } from "src/redux/user/userSelectors";
import { selectCartIsHidden } from "src/redux/cart/cartSelectors";

import { ReactComponent as CrownLogo } from "src/assets/crown.svg";
import CartIcon from "src/components/cart-icon/CartIcon";
import CartDropDownMenu from "src/components/cart-dropdown-menu/CartDropDownMenu";

import { auth } from "src/firebase/util";

import "src/components/header/header.styles.scss";

const handleCurrentUserSignOut = () => auth.signOut();
const Header = ({ currentUser, cartIsHidden }) => (
  <div className="header">
    <Link className="logo-container" to={"/"}>
      <CrownLogo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={handleCurrentUserSignOut}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartIsHidden ? null : <CartDropDownMenu />}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartIsHidden: selectCartIsHidden(state),
});

export default connect(mapStateToProps)(Header);
