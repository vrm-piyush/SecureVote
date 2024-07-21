import PropTypes from "prop-types";
import React from "react";
import "./loginPage.css";

export const RegisterBtn = ({ onClick = false, className }) => {
  return (
    <div className={`register-btn ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper">Register New Account</div>
      </div>
    </div>
  );
};

RegisterBtn.propTypes = {
  onClick: PropTypes.bool,
};
