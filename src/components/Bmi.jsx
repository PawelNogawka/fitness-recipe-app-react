import React from 'react'

import SectionHeader from "./SectionHeader";
import Container from "./Container";
import BmiCalculator from './BmiCalculator';

import {BsCheck2Circle} from 'react-icons/bs';

import './Bmi.scss'

const Bmi = () => {
  return (
    <section id="bmi" className="section-padding bmi">
          <Container>
            <SectionHeader
              title={"BMI Calculator"}
              subtitle={
                "Enter your details and get knowledge about your body fat level"
              }
            />
            <div className="bmi__container">
              <div className="bmi__content">
                <h3 className="section-title">what is it BMI?</h3>
                <p className="bmi__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  libero quisquam architecto sint nemo modi eveniet, molestias
                  aliquid, nulla laboriosam incidunt hic debitis ullam nihil
                  nostrum. Quo, eveniet aliquid exercitationem, explicabo et
                  laudantium labore est deserunt nisi tempore ipsa quis dolores
                  necessitatibus praesentium beatae corrupti odit consequatur,
                  earum natus doloribus.
                </p>
                <h3 className="section-title">with this calculator you will be able to determine:</h3>
                <div className="bmi__features">
                  <div className="bmi__feature">
                       <BsCheck2Circle className='bmi__feature-icon'/>
                       <span className="bmi__feature-info">Should you lose weight</span>
                  </div>
                  <div className="bmi__feature">
                       <BsCheck2Circle className='bmi__feature-icon'/>
                       <span className="bmi__feature-info">Should you gain weight</span>
                  </div>
                  <div className="bmi__feature">
                       <BsCheck2Circle className='bmi__feature-icon'/>
                       <span className="bmi__feature-info">Should you start eating healthie</span>
                  </div>
                  <div className="bmi__feature">
                       <BsCheck2Circle className='bmi__feature-icon'/>
                       <span className="bmi__feature-info">Should you start playing sports</span>
                  </div>
                </div>
                
              </div>
              <BmiCalculator />
            </div>
          </Container>
        </section>
  )
}

export default Bmi
