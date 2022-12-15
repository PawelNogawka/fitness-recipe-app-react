import React, { useState } from "react";

import NutritionItem from "./NutritionItem";
import Button from "./Button";
import "./Nutritions.scss";

const Nutritions = ({ nutrients, amount }) => {
  const nutrientsArray = Object.values(nutrients).map((value) => ({
    ...value,
  }));

  const [elements, setElements] = useState(nutrientsArray.slice(0, 13));

  const handleClick = (e) => {
    let btnText = e.target.textContent;

    if (btnText === "show more") {
      e.target.textContent = "show less";
      setElements(nutrientsArray);
    } else if (btnText === "show less") {
      e.target.textContent = "show more";
      setElements(nutrientsArray.slice(0, 13));
    }
  };

  return (
    <div className="nutrition">
      <h2 className="nutrition__title">nutritional values (1 yield)</h2>
      <ul className="nutrition__list">
        {elements.map((item) => (
          <NutritionItem
            label={item.label}
            quantity={item.quantity}
            unit={item.unit}
            amount={amount}
          />
        ))}
      </ul>
      {nutrientsArray.length > 13 ? (
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

export default Nutritions;
