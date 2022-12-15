import React, { useState, useRef } from "react";

import Button from "./Button";
import Input from "./Input";

import { TfiAngleDown } from "react-icons/tfi";

import "./BmrCalculator.scss";

const BmrCalculator = () => {
  const [values, setValues] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    activity: 0,
  });

  const [formIsValid, setFormIsValid] = useState(true);

  const [bmr, setBmr] = useState(0);

  const maleInputRef = useRef();
  const femaleInputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!values.height || !values.weight || !values.age || !values.gender || !values.activity)  {
      setFormIsValid(false)
    }
    else{
      setFormIsValid(true)
    }

    let bmrValue = null;

    //   [10 x masa ciała (w kg)] + [6,25 x wzrost (w cm)] – [5 x wiek (w latach)] – 161
    //  [10 x masa ciała (w kg)] + [6, 25 x wzrost (w cm)] – [5 x wiek (w latach)] + 5

    const height = parseFloat(values.height);
    const weight = parseFloat(values.weight);
    const age = parseFloat(values.age);
    const activity = parseFloat(values.activity);

    if (values.gender === "male") {
      bmrValue = (10 * weight + 6.25 * height - 5 * age + 5) * activity;
      setBmr(bmrValue);
    } else if (values.gender === "female") {
      bmrValue = (10 * weight + 6.25 * height - 5 * age - 161) * activity;
      setBmr(bmrValue);
    }
  };

  const handleWeightInputChange = (e) => {
    setValues((prev) => ({
      ...prev,
      weight: e.target.value,
    }));
  };
  const handleHeightInputChange = (e) => {
    setValues((prev) => ({
      ...prev,
      height: e.target.value,
    }));
  };

  const handleAgeInputChange = (e) => {
    setValues((prev) => ({
      ...prev,
      age: e.target.value,
    }));
  };

  const handleSelectChange = (e) => {
    setValues((prev) => ({
      ...prev,
      activity: e.target.value,
    }));
  };

  const handleMaleCheckboxInput = () => {
    if (femaleInputRef.current.checked) {
      femaleInputRef.current.checked = false;
    }

    setValues((prev) => ({
      ...prev,
      gender: "male",
    }));
  };

  const handleFemaleCheckboxInput = () => {
    if (maleInputRef.current.checked) {
      maleInputRef.current.checked = false;
    }

    setValues((prev) => ({
      ...prev,
      gender: "female",
    }));
  };

  const handleReloadButtonClick = () => {
    setValues((prev) => ({
      height: "",
      weight: "",
      age: "",
      gender: "",
      activity: 0,
    }));

    setBmr(0);
  };

  const weight = values.weight;

  return (
    <div className="bmr-calculator">
      <h4 className="bmr-calculator__title">calculator</h4>
      <form onSubmit={handleFormSubmit} className="bmr-calculator__form">
        <Input
          onChange={handleWeightInputChange}
          value={values.weight}
          name={"weightBmr"}
          label={"weight (kg)"}
          placeholder={"enter your weigh in kg...."}
          type={"number"}
          pattern={"[0-9]"}
          error={"Please enter only numbers from 0-9"}
        />
        <Input
          onChange={handleHeightInputChange}
          value={values.height}
          name={"heightBmr"}
          label={"height (cm)"}
          placeholder={"enter your height in cm...."}
          type={"number"}
          pattern={"[0-9]"}
          error={"Please enter only numbers from 0-9"}
        />
        <Input
          onChange={handleAgeInputChange}
          value={values.age}
          name={"ageBmr"}
          label={"age"}
          placeholder={"enter your age...."}
          type={"number"}
          pattern={"[0-9]"}
          error={"Please enter only numbers from 0-9"}
        />
        <h4 className="bmr-calculator__checkbox-title">gender</h4>
        <div className="bmr-calculator__checkbox-container">
          <div className="bmr-calculator__row">
            <p className="bmr-calculator__checkbox-gender">male</p>
            <input
              ref={maleInputRef}
              onChange={handleMaleCheckboxInput}
              id="bmr-checkbox-male"
              type="checkbox"
              name="bmr-checkbox-male"
              className="bmr-calculator__input"
              hidden
            />
            <label
              className="bmr-calculator__check"
              htmlFor="bmr-checkbox-male"
            ></label>
          </div>
          <div className="bmr-calculator__row">
            <p className="bmr-calculator__checkbox-gender">female</p>
            <input
              ref={femaleInputRef}
              onChange={handleFemaleCheckboxInput}
              id="bmr-checkbox-female"
              type="checkbox"
              className="bmr-calculator__input"
              name="bmr-checkbox-female"
              hidden
            />
            <label
              className="bmr-calculator__check"
              htmlFor="bmr-checkbox-female"
            ></label>
          </div>
        </div>
        <div className="bmr-calculator__box">
          <label htmlFor="activity" className="input-box__label">
            activity
          </label>
          <select
            onChange={handleSelectChange}
            className="bmr-calculator__select"
            name="activity"
            placeholder="select your activity"
            value={values.activity}
          >
            <option value="0" disabled>
              select your activity...
            </option>
            <option value="1">Lying lifestyle</option>
            <option value="1.2">Sitting work</option>
            <option value="1.4">Sitting work, training 2 / week</option>
            <option value="1.6">Light work, training 3-4 / week</option>
            <option value="1.8">Physical work, training 5 / week</option>
            <option value="2">Hard physical work, daily training</option>
          </select>
          <TfiAngleDown className="bmr-calculator__angle-down" />
        </div>
        <div className="bmr-calculator__btns">
          <Button
            type="submit"
            classes={"btn btn--fill btn--width-100"}
            text={"submit"}
          />
          <Button
            onClick={handleReloadButtonClick}
            type="button"
            classes={"btn btn--outline btn--width-100"}
            text={"reload"}
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
      <span className="bmr-calculator-result">{`Your BRM is : ${
        bmr ? bmr.toFixed(2) : " "
      }  kcl / day`}</span>
    </div>
  );
};

export default BmrCalculator;
