import React from "react";

import Container from "./Container";
import Button from "./Button";
import HomeForm from "./HomeForm";

import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <div className="banner__header">
          <h1 className="banner__heading">
            make your weight loss process easier with this app.
          </h1>
          <p className="banner__subtitle">
            calculate your body fat level, caloric needs and explore great
            healthy recipes.
          </p>
          <div className="banner__box">
           <a href="#categories"><Button text={"explore"} classes={'btn btn--fill'} /></a> 
            <HomeForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
