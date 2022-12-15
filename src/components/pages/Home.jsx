import React from "react";

import Banner from "../Banner";
import Categories from "../Categories";
import Bmi from "../Bmi";
import Bmr from "../Bmr";

const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <Categories />
        <Bmi />
        <Bmr />
      </main>
    </>
  );
};

export default Home;
