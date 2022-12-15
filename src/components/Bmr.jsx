import React from "react";

import Container from "./Container";
import SectionHeader from "./SectionHeader";
import BmrCalculator from "./BmrCalculator";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiMentalHealthFill } from "react-icons/ri";



import "./Bmr.scss";

const Bmr = () => {
  return (
    <section id="bmr" className="section-padding bmr">
      <Container>
        <SectionHeader
          title={"BMR Calculator"}
          subtitle={
            "Enter your details and get knowledge about your caloric needs"
          }
        />
        <div className="bmr__container">
          <div className="bmr__content">
            <div className="bmr__text-box">
              <h3 className="section-title">what is BMR?</h3>
              <p className="bmr__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
            <h3 className="section-title">
                what are the benefits of using this calculator?
              </h3>
            <div className="bmr__features">
              <div className="bmr__feature-box">
                <h4 className="bmr__feature-title">make a plan</h4>
                <BsFillCalendarCheckFill className="bmr__features-icon"  />
                <p className="bmr__feature-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus optio labore sed maiores esse quam iure perspiciatis
                  facilis tempore dolores.
                </p>
              </div>
              <div className="bmr__feature-box">
                <h4 className="bmr__feature-title">detailed data</h4>
                <BsFillCalendarCheckFill className="bmr__features-icon"  />
                <p className="bmr__feature-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus optio labore sed maiores esse quam iure perspiciatis
                  facilis tempore dolores.
                </p>
              </div>
              <div className="bmr__feature-box">
                <h4 className="bmr__feature-title">being more aware</h4>
                <BsFillCalendarCheckFill className="bmr__features-icon"  />
                <p className="bmr__feature-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus optio labore sed maiores esse quam iure perspiciatis
                  facilis tempore dolores.
                </p>
              </div>
              <div className="bmr__feature-box">
                <h4 className="bmr__feature-title">development</h4>
                <BsFillCalendarCheckFill className="bmr__features-icon" />
                <p className="bmr__feature-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus optio labore sed maiores esse quam iure perspiciatis
                  facilis tempore dolores.
                </p>
              </div>
            </div>
          </div>
          <BmrCalculator />
        </div>
      </Container>
    </section>
  );
};

export default Bmr;
