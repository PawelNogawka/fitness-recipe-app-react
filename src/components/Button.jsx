import React from "react";

import "./Button.scss";

const Button = ({ text,  onClick, classes , type }) => {
  return (
    <button  type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
