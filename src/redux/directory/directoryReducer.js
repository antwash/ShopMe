const INITIAL_STATE = {
  sections: [
    {
      linkUrl: "hats",
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      linkUrl: "jackets",
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      linkUrl: "shoes",
      title: "Shoes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      linkUrl: "women",
      title: "Women",
      size: "large",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      linkUrl: "men",
      title: "Men",
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
