import React from "react";

import "./Input.scss";

const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  padding,
  pattern,
  error,
}) => {
  const labelEl = label ? (
    <label htmlFor={name} className="input-box__label">
      {label}
    </label>
  ) : (
    ""
  );

  const inputClasses = padding
    ? "input-box__input input-box__input--padding-x "
    : "input-box__input ";

  const errorEl = <span className="input-box__error">{error}</span>;

  return (
    <div className="inputbox">
      {labelEl}
      <input
        type={type}
        name={name}
        className={inputClasses}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        pattern={pattern}
      />
      {error && errorEl}
    </div>
  );
};

export default Input;
