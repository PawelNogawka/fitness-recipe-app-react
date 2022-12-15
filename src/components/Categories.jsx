import React from "react";

import Container from "./Container";
import SectionHeader from "./SectionHeader";
import CategoriesSlider from "./CategoriesSlider";


const Categories = () => {
  return (
    <section id="categories" className="section-padding categories">
      <Container>
        <SectionHeader
          title={"categories"}
          subtitle={
            "select the categories you are interested in and then explore the recipes related to them"
          }
        />
        <CategoriesSlider />
      </Container>
    </section>
  );
};

export default Categories;
