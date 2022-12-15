import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchApi } from "../../utils/fetchApi";

import Container from "../Container";
import RecipeGeneralDetails from "../RecipeGeneralDetails";
import Ingredients from "../Ingredients";
import Nutritions from "../Nutritions";

import Button from "../Button";

import "./RecipeDetails.scss";

const RecipeDetails = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetchApi(name);
        setDetails(data.hits[0]);
      } catch (err) {
        setError(err);
      }
    };

    getDetails();
  }, [name]);

  if (error) {
    return <p className="api-error-message">Error: {error.message}</p>;
  }

  if (!details.recipe) return <p className="api-loading-message">Loading...</p>;

  const { recipe } = details;

  const {
    label,
    url,
    image,
    calories,
    totalWeight,
    totalTime,
    mealType,
    dietLabels,
    healthLabels,
    cautions,
    ingredients,
    totalNutrients,
  } = recipe;

  return (
    <main className="recipe-details">
      <Container>
        <div className="recipe-details__container">
          <RecipeGeneralDetails
            label={label}
            amount={recipe.yield}
            calories={calories}
            weight={totalWeight}
            time={totalTime}
            mealType={mealType[0]}
            url={url}
            image={image}
            dietLabels={dietLabels}
            healthLabels={healthLabels}
            cautions={cautions}
          />
          <Ingredients ingredients={ingredients} />
          <Nutritions nutrients={totalNutrients} amount={recipe.yield} />
        </div>
      </Container>
    </main>
  );
};

export default RecipeDetails;

//label={totalNutrients.label} quanity={totalNutrients.quanity} unit = {totalNutrients.unit}
