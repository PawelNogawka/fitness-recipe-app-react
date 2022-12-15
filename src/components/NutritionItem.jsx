import React from "react";

const NutritionItem = ({ label, quantity, unit, amount }) => {
  return (
    <li className="nutrition__list-item">
      <h3 className="nutrition__name">{label}</h3>
      <span className="nutrition__amount">
        - {`${(quantity / amount).toFixed(2)}  ${unit}`}
      </span>
    </li>
  );
};

export default NutritionItem;
