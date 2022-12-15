import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Recipes from "../Recipes";

import { fetchApi } from "../../utils/fetchApi";

import "./SearchRecipes.scss";

const SearchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { name } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchApi(name);
        setRecipes(data.hits);
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
    <main className="search-recipes">
      <Recipes recipes={recipes} />
    </main>
  );
};

export default SearchRecipes;
