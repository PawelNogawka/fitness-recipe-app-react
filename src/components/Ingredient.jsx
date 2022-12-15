import React from "react";

const Ingredient = ({ text, image, weight }) => {
  return (
    <li className="ingredients__list-item">
      <img src={image} alt={text} width={50} height={50} />
      <p className="ingredients__ingredient">
        {text} <span> - {weight.toFixed(2)} g</span>{" "}
      </p>
    </li>
  );
};

export default Ingredient;
