const INITIAL_STATE = {
  sections: [
    {
      linkUrl: "shop/hats",
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      linkUrl: "shop/jackets",
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      linkUrl: "shop/shoes",
      title: "Shoes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      linkUrl: "shop/womens",
      title: "Womens",
      size: "large",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      linkUrl: "shop/mens",
      title: "Mens",
      size: "large",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
