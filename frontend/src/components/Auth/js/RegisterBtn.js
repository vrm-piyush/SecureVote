import PropTypes from "prop-types";
import React from "react";
import "../css/loginPage.css";

export const RegisterBtn = ({ onClick = false, className }) => {
  return (
    <div className={`register-btn ${className}`}>
      <div className="register-text">
        <div className="text-wrapper">Register New Account</div>
      </div>
    </div>
  );
};

RegisterBtn.propTypes = {
  onClick: PropTypes.bool,
};
