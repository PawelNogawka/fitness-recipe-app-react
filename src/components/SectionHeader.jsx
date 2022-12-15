import React from "react";

import "./SectionHeader.scss";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="section-header">
      <h2 className="section-header__heading">{title}</h2>
      <p className="section-header__subtitle">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
