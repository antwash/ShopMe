import React from "react";
import "src/components/directory/directory.styles.scss";

import MenuItem from "src/components/menu-item/MenuItem";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          title: "Shoes",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          title: "Women",
          size: "large",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
          title: "Men",
          size: "large",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map((section, index) => (
          <MenuItem
            key={index}
            size={section.size}
            title={section.title}
            imageUrl={section.imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
