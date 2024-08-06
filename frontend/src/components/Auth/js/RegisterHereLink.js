import PropTypes from "prop-types";
import React from "react";
import "../css/component.css";

export const RegisterHere = ({ onClick, className }) => {
  return (
    <div className={`register-here ${className}`} onClick={onClick}>
      <span className="text-wrapper">Register here</span>
    </div>
  );
};

RegisterHere.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

RegisterHere.defaultProps = {
  onClick: () => {},
  className: "",
};
