import React, { useRef } from "react";

import CategoryItem from "./CategoryItem";

import "./CategoriesSlider.scss";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const categoriesList = [
  {
    name: "chicken",
  },
  {
    name: "fish",
  },
  {
    name: "vegan",
  },
  {
    name: "vegetarian",
  },
  {
    name: "fruits",
  },
  {
    name: "vegetables",
  },
  {
    name: "beverages",
  },
];

const CategoriesSlider = () => {
  const sliderInner = useRef();

  const handleNextBtnClick = () => {
    const slider = sliderInner.current;
    const width = slider.clientWidth;

    slider.scrollLeft = slider.scrollLeft + (width*1.11) ;
    console.log(slider.scrollLeft)
    console.log(width)
  };

  const handlePrevBtnClick = () => {
    const slider = sliderInner.current;
    const width = slider.clientWidth;

    slider.scrollLeft = slider.scrollLeft - (width*1.11)
    console.log(slider.scrollLeft)
    console.log(width)
  };

  return (
    <div className="categories-slider">
      <button
        onClick={() => handleNextBtnClick()}
        className="categories-slider__btn categories-slider__btn--next"
      >
        <GrNext />
      </button>
      <div ref={sliderInner} className="categories-slider__inner">
        {categoriesList.map((category) => (
          <CategoryItem key={category.name} name={category.name} />
        ))}
      </div>
      <button
        onClick={() => handlePrevBtnClick()}
        className="categories-slider__btn categories-slider__btn--prev"
      >
        <GrPrevious />
      </button>
    </div>
  );
};

export default CategoriesSlider;
