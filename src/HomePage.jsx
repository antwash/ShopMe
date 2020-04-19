import React from "react";
import "src/styles/homepage.styles.scss";

const HomePage = () => {
  return (
    <div className={"home-page"}>
      <div className={"directory-menu"}>
        <div className={"menu-item"}>
          <div className={"item-content"}>
            <h1 className={"item-title"}>Shirts</h1>
            <span className={"item-subtitle"}>Shop Now</span>
          </div>
        </div>
        <div className={"menu-item"}>
          <div className={"item-content"}>
            <h1 className={"item-title"}>Jackets</h1>
            <span className={"item-subtitle"}>Shop Now</span>
          </div>
        </div>
        <div className={"menu-item"}>
          <div className={"item-content"}>
            <h1 className={"item-title"}>Bottoms</h1>
            <span className={"item-subtitle"}>Shop Now</span>
          </div>
        </div>
        <div className={"menu-item"}>
          <div className={"item-content"}>
            <h1 className={"item-title"}>Shoes</h1>
            <span className={"item-subtitle"}>Shop Now</span>
          </div>
        </div>
        <div className={"menu-item"}>
          <div className={"item-content"}>
            <h1 className={"item-title"}>Accessories</h1>
            <span className={"item-subtitle"}>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
