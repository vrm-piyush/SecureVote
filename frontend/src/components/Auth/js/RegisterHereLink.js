import PropTypes from "prop-types";
import React from "react";
import "../css/component.css";

export const RegisterHere = ({ onClick = false, className }) => {
  return (
    <div className={`register-here ${className}`}>
      <div className="text-wrapper">Register here</div>
    </div>
  );
};

RegisterHere.propTypes = {
  onClick: PropTypes.bool,
};
