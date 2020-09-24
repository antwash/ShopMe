import React from "react";

import "src/components/button/button.styles.scss";

const FormButton = ({ type, label, customStyle, onClick }) => {
  return (
    <button
      className={`${customStyle} form-button`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FormButton;
