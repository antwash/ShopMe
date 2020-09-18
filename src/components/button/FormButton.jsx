import React from "react";

import "src/components/button/button.styles.scss";

const FormButton = ({ type, children }) => {
  return (
    <button className="form-button" type={type}>
      {children}
    </button>
  );
};

export default FormButton;
