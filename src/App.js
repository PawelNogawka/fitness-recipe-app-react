import React from "react";
import Home from "./components/pages/Home";
import SearchRecipes from "./components/pages/SearchRecipes";
import CategoryRecipes from "./components/pages/CategoryRecipes";
import RecipeDetails from "./components/pages/RecipeDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:name" element={<CategoryRecipes />} />
        <Route path="/search/:name" element={<SearchRecipes />} />
        <Route path="/recipe/details/:name" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
