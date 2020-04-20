import React from "react";

import "src/components/menu-item/menuitem.styles.scss";

const MenuItem = ({ size, title, imageUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`${size} menu-item`}
    >
      <div className="item-content">
        <h1 className="item-title">{title}</h1>
        <span className="item-subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
