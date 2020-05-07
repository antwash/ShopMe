import React from "react";

const ItemsCollection = ({ title, items }) => {
  return (
    <div className="items-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="item-preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default ItemsCollection;
