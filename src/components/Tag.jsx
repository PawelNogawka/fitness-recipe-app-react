import React from "react";

import { Link } from "react-router-dom";

import "./Tag.scss";

const Tag = ({ text, classes }) => {
  if (typeof text !== "string") {
    text = text.toString();
  }

  return (
    <Link
      to={`/recipes/${
        text.includes("/")
          ? text.replace(/\//g, "-").toLowerCase()
          : text.toLowerCase()
      }`}
      className={classes}
    >
      {text}
    </Link>
  );
};

export default Tag;
