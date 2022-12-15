import React, { useState, useRef, useEffect } from "react";

import Container from "./Container";

import { Link, useLocation } from "react-router-dom";

import { HiOutlineMenuAlt1 } from "react-icons/hi";

import "./Nav.scss";

const Nav = () => {
  const navRef = useRef(null);
  const headerRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerEl = headerRef.current;

      if (window.scrollY === 0) {
        headerEl.classList.remove("header--active");
        if (location.pathname === "/") {
          headerEl.style.backgroundColor = "transparent";
        } else {
          headerEl.style.backgroundColor = "#ba68c8";
        }
      } else {
        headerEl.style = "";
        headerEl.classList.add("header--active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleButtonClick = () => {
    const navEl = navRef.current;
    navEl.classList.toggle("nav--active");
  };

  const handleLinkClick = () => {
    const navEl = navRef.current;
    navEl.classList.remove("nav--active");
  };

  return (
    <header ref={headerRef} className={"header"}>
      <Container>
        <nav ref={navRef} className="nav">
          <Link to="/" className="nav__logo">
            logo
          </Link>
          <button onClick={handleButtonClick} className="nav__btn">
            <HiOutlineMenuAlt1 className="nav__btn-icon" />
          </button>
          <div className="nav__menu">
            <a
              onClick={handleLinkClick}
              className="nav__link"
              href="/#categories"
            >
              categories
            </a>
            <a onClick={handleLinkClick} className="nav__link" href="/#bmi">
              BMI calculator
            </a>
            <a onClick={handleLinkClick} className="nav__link" href="/#bmr">
              BMR calculator
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Nav;
