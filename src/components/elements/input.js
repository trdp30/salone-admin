import React from "react";
import { camelCase } from "lodash";

function InputField(props) {
  const { name, label, type, placeholder, value, setValue, required } = props;

  const setValues = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
      <label htmlFor={camelCase(name)}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={camelCase(name)}
        placeholder={placeholder}
        value={value}
        onChange={setValues}
        required={required}
      />
      <div className="invalid-feedback">Valid {label} is required.</div>
    </>
  );
}

export default InputField;
