import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";

import "./BmiCalculator.scss";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [compartment, setCompartment] = useState("");
  const [color, setColor] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const handleFormSubmit = (e) => {

    
    e.preventDefault();

    
    if( !weight || !height )  {
      setFormIsValid(false)
    }
    else{
      setFormIsValid(true)
    }

    const weightAmount = parseFloat(weight);
    const heightAmount = parseFloat(height);

    const result = weightAmount / ((heightAmount / 100) * (heightAmount / 100));

    setBmi(result);

    if (result < 16) {
      setCompartment("starved");
      setColor("#ef5350");
    } else if (result < 18.5) {
      setCompartment("underweight");
      setColor("#ff9800");
    } else if (result > 18.5 && result < 24.9) {
      setCompartment("right weight");
      setColor("#4caf50");
    } else if (result > 25 && result < 29.9) {
      setCompartment("overweight");
      setColor("#ff9800");
    } else if (result > 30 && result < 34.9) {
      setCompartment("1 degree obesity");
      setColor("#ef5350");
    } else if (result > 35 && result < 39.9) {
      setCompartment("2 degree obesity");
      setColor("#ef5350");
    } else if (result > 40) {
      setCompartment("3 degree obesity");
      setColor("#ef5350");
    }
  };

  const handleResetButtonClick = (e) => {
    e.preventDefault();

    setWeight("");
    setHeight("");
    setBmi(0);
    setColor("");
    setCompartment("");
  };


  const handleheightInputChange = (e) =>{
     setHeight(e.target.value)
  }


  const handleWeightInputChange = (e) =>{
    setWeight(e.target.value)
 }


  const resultInfo = (
    <h4 className="bmi-calculator__result">
      Your Bmi is : {bmi ? bmi.toFixed(2) : ""}
      <span style={{ color: color }} className="bmi-calculator-result-info">
        {compartment && "/ " + compartment}
      </span>
    </h4>
  );

  return (
    <div className="bmi-calculator">
      <h3 className="bmi-calculator__title">BMI calculator</h3>
      <form onSubmit={handleFormSubmit} className="bmi-calculator__form">
        <Input
          label={"weight (kg)"}
          type={"number"}
          placeholder={"Enter your weight in kg..."}
          onChange={handleWeightInputChange}
          value={weight}
          pattern={"[0-9]"}
          error={"Please enter only numbers from 0-9"}
        />

        <Input
          label={"height (cm)"}
          type={"number"}
          placeholder={"Enter your height in cm..."}
          onChange={handleheightInputChange}
          value={height}
          pattern={"[0-9]"}
          error={"Please enter only numbers from 0-9"}
        />
        <div className="bmi-calculator__btns">
        <Button
            onClick={handleFormSubmit}
            text={"submit"}
            classes="btn btn--fill btn--width-100"
            type={'submit'}
          />
          <Button
            onClick={handleResetButtonClick}
            text={"reset"}
            classes="btn btn--outline btn--width-100"
            type={'button'}
          />
            
          
        </div>
        <p
          className={`form__error ${
            !formIsValid ? "form__error--show" : ""
          }`}
        >
          Please fill in all fields of the form
        </p>
      </form>
      {resultInfo}
     
    </div>
  );
};

export default BmiCalculator;
