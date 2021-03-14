import React from "react";
import { withRouter } from "react-router-dom";

import "src/components/menu-item/menuitem.styles.scss";

const MenuItem = ({ size, title, imageUrl, linkUrl, history, match }) => {
  const navigateToMenuItemPage = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={navigateToMenuItemPage}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="item-content">
        <h1 className="item-title">{title.toUpperCase()}</h1>
        <span className="item-subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
