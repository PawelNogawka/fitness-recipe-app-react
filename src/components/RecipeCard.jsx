import React, { useState } from "react";

import { Link } from "react-router-dom";

import Tag from "./Tag";

import Button from "./Button";

import "./RecipeCard.scss";

const RecipeCard = ({ recipeDetails }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { recipe } = recipeDetails;
  const {
    label,
    image,
    dietLabels,
    cuisineType,
    mealType,
    calories,
    cautions,
    healthLabels,
    url,
  } = recipe;

  const cautionsTags = (
    <>
      <h4 className="recipe-card__features-title">cautions:</h4>
      <span className="recipe-card__features-result">
        {cautions.map((caution) => (
          <Tag key={caution} text={caution} classes={"tag tag--danger"} />
        ))}
      </span>
    </>
  );

  const healthTags = (
    <>
      <h4 className="recipe-card__features-title">pro:</h4>
      <span className="recipe-card__features-result">
        {healthLabels.map((item) => (
          <Tag key={item} text={item} classes={"tag tag--succes"} />
        ))}
      </span>
    </>
  );

  const generalTags = (
    <>
      {dietLabels.length > 0 && (
        <Tag text={dietLabels[0]} classes={"tag tag--general"} />
      )}
      <Tag text={cuisineType} classes={"tag tag--general"} />
      <Tag text={mealType} classes={"tag tag--general"} />
    </>
  );

  const labelLower = label.toLowerCase();
  const pathEl = labelLower.replace(/ /g, "-");

  const fixedUrl = url.startsWith("http") ? url : `https://${url}`;

  return (
    <div className="recipe-card">
      {isLoading && <div className="recipe-card__loading">Loading...</div>}
      <div className="recipe-card__top">
        <img
          src={image}
          alt={label}
          className="recipe-card__img"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
      <div className="recipe-card__bottom">
        <div className="recipe-card__general-tags">{generalTags}</div>
        <h2 className="recipe-card__title">{label}</h2>
        <ul className="recipe-card__features">
          <li className="recipe-card__features-item">
            <h4 className="recipe-card__features-title">yield:</h4>
            <span className="recipe-card__features-result">{recipe.yield}</span>
          </li>
          <li className="recipe-card__features-item">
            <h4 className="recipe-card__features-title">energy:</h4>
            <span className="recipe-card__features-result">
              {(calories / recipe.yield).toFixed(2) + " kcl / yield"}
            </span>
          </li>
          <li className="recipe-card__features-item recipe-card__features-item--margin">
            {cautions.length > 0 && cautionsTags}
          </li>
          <li className="recipe-card__features-item">{healthTags}</li>
        </ul>
        <div className="recipe-card__btns">
          <a href={fixedUrl} target="_blank" rel="noopener noreferrer">
            <Button text={"recipe"} classes={"btn btn--fill"} type={"button"} />
          </a>
          <Link to={`/recipe/details/${pathEl}`}>
            <Button
              text={"details"}
              classes={"btn btn--outline"}
              type={"button"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
