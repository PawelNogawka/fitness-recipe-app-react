import React, { useState } from "react";

import Ingredient from "./Ingredient";
import Button from "./Button";

import "./Ingredients.scss";

const Ingredients = ({ ingredients }) => {
  const [elements, setElements] = useState(ingredients.slice(0, 7));

  const handleClick = (e) => {
    let btnText = e.target.textContent;

    if (btnText === "show more") {
      e.target.textContent = "show less";
      setElements(ingredients);
    } else if (btnText === "show less") {
      e.target.textContent = "show more";
      setElements(ingredients.slice(0, 7));
    }
  };

  return (
    <div className="ingredients">
      <h2 className="ingredients__title">ingredients: (4 yield)</h2>
      <ul className="ingredients__list">
        {elements.map((ingredient) => (
          <Ingredient
            text={ingredient.text}
            image={ingredient.image}
            weight={ingredient.weight}
          />
        ))}
      </ul>
      {ingredients.length > 7 ? (
        <Button
          text={"show more"}
          onClick={handleClick}
          type={"button"}
          classes={"btn btn--clean"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Ingredients;
