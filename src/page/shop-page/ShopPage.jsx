import React from "react";

import CollectionPreview from "src/components/collection-preview/CollectionPreview";

import { SHOP_ITEMS } from "src/utils/constants";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsCollection: SHOP_ITEMS,
    };
  }

  render() {
    const { itemsCollection } = this.state;

    return (
      <div>
        {itemsCollection.map((item) => {
          return (
            <CollectionPreview
              key={item.id}
              title={item.title}
              items={item.items}
            />
          );
        })}
      </div>
    );
  }
}
export default ShopPage;
