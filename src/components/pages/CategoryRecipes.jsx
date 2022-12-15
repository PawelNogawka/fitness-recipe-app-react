import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchApi } from "../../utils/fetchApi";

import Recipes from "../Recipes";

import "./CategoryRecipes.scss";

const CategoryRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetchApi(name);
        setRecipes(response.hits);
      } catch (err) {
        setError(err);
      }
    };
    getRecipes();
  }, [name]);

  if (error) {
    return <p className="api-error-message">Error: {error.message}</p>;
  }

  if (!recipes.length) return <p className="api-loading-message">Loading...</p>;

  return (
    <main className="category-recipes">
      <Recipes recipes={recipes} />
    </main>
  );
};

export default CategoryRecipes;
