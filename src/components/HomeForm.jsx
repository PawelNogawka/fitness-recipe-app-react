import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Input from "./Input";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import "./HomeForm.scss";

const HomeForm = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    const path = `/search/${searchValue.toLowerCase().replace(/\s/g, "%20")}`;
    navigate(path);
  };

  const handleClickCloseButton = () => {
    setSearchValue("");
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="home-form" onSubmit={handleFormSubmit}>
      <Input
        name={"recipe-search"}
        placeholder={"Search recipes..."}
        type={"text"}
        padding
        onChange={handleSearchInputChange}
        value={searchValue}
      />
      <button type="submit" className="home-form__btn home-form__btn--search">
        <AiOutlineSearch />
      </button>
      <button
        onClick={handleClickCloseButton}
        type="button"
        className="home-form__btn home-form__btn--close"
      >
        <AiOutlineClose />
      </button>
    </form>
  );
};

export default HomeForm;
