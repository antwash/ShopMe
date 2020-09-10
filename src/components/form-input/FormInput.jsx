import React from "react";

import "src/components/form-input/forminput.styles.scss";

const FormInput = ({ type, name, label, required, value, onHandleChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-input"
        type={type}
        name={name}
        required={required}
        onChange={onHandleChange}
      />
      {label && (
        <label className={`${value.length ? `shrink` : ``} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
