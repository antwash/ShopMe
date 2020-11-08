import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "src/redux/directory/directorySelectors";

import MenuItem from "src/components/menu-item/MenuItem";

import "src/components/directory/directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ ...sectionProps }, index) => (
        <MenuItem key={index} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
