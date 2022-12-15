import React from "react";

import Container from "./Container";
import RecipeCard from "./RecipeCard";

import "./Recipes.scss";

const Recipes = ({ recipes }) => {
  console.log(recipes);
  return (
    <section className="recipes section-padding">
      <Container>
        <div className="recipes__container">
          {recipes.map((recipe) => (
            <RecipeCard recipeDetails={recipe} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Recipes;
