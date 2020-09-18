import React from "react";

import "src/components/button/button.styles.scss";

const FormButton = ({ type, children, onClick }) => {
  return (
    <button className="form-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default FormButton;
