import React from "react";

import Tag from "./Tag";
import Button from "./Button";

import { SlEnergy } from "react-icons/sl";
import { GiCampCookingPot } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

import "./RecipeGeneralDetails.scss";

const RecipeGeneralDetails = ({
  label,
  amount,
  image,
  dietLabels,
  healthLabels,
  cautions,
  url,
  calories,
  time,
  weight,
  mealType,
}) => {
  const tags = (
    <div className="general-details__tags">
      {dietLabels.map((item) => (
        <Tag text={item} classes={"tag tag--succes"} />
      ))}
      {healthLabels.map((item) => (
        <Tag text={item} classes={"tag tag--succes"} />
      ))}
      {cautions.map((item) => (
        <Tag text={item} classes={"tag tag--danger"} />
      ))}
    </div>
  );

  return (
    <div className="general-details">
      <div className="general-details__img-box">
        <img
          src={image}
          width={300}
          height={300}
          alt={label}
          className="general-details__img"
          loading="lazy"
        />
      </div>
      <div className="general-details__head">
        <h1 className="general-details__recipe-name">{label}</h1>

        <h4 className="general-details__yield">
          <BiDish className="general-details__icon" />
          yield:
          <span> {amount}</span>
        </h4>
      </div>
      <ul className="general-details__features">
        <li className="general-details__features-item">
          <SlEnergy className="general-details__icon" />
          <h4 className="general-details__feature-name">calories:</h4>
          <span>{calories.toFixed(2)} kcl</span>
          <small> or ( {+(calories / amount).toFixed(2) + " / yield"} )</small>
        </li>
        <li className="general-details__features-item">
          <GiCampCookingPot className="general-details__icon" />

          <h4 className="general-details__feature-name">cooking time:</h4>
          <span>{time} min</span>
        </li>
        <li className="general-details__features-item">
          <FaWeight className="general-details__icon" />
          <h4 className="general-details__feature-name">total weight:</h4>
          <span> {weight.toFixed(2)} g</span>
        </li>
        <li className="general-details__features-item">
          <GiHotMeal className="general-details__icon" />
          <h4 className="general-details__feature-name">meal type:</h4>
          <span>{mealType}</span>
        </li>
      </ul>
      <h2 className="general-details__tags-title">tags:</h2>
      {tags}
      <a href={url}>
        <Button type={"button"} text={"recipe"} classes={"btn btn--fill"} />
      </a>
    </div>
  );
};

export default RecipeGeneralDetails;
