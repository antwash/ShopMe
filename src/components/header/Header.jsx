import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "src/assets/crown.svg";

import { auth } from "src/firebase/util";

import "src/components/header/header.styles.scss";

const handleCurrentUserSignOut = () => auth.signOut();
const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
