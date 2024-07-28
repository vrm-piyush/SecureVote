import PropTypes from "prop-types";
import React from "react";
import "./loginPage.css";

export const BackBtn = ({ property1, className }) => {
  return (
    <button className={`back-btn ${className}`}>
      <img
        className="arrow"
        alt="Back"
        src="/assets/svg/Login/back-arrow.svg"
      />
      <div className="back">Back</div>
    </button>
  );
};

BackBtn.propTypes = {
  property1: PropTypes.oneOf(["default"]).isRequired,
  className: PropTypes.string,
};
