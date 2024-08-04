import PropTypes from "prop-types";
import React from "react";
import "../css/component.css";

export const LoginBtn = ({ onClick = false, className }) => {
  return (
    <button className={`login-btn ${className}`}>
      <button className="text-wrapper">LOGIN</button>
    </button>
  );
};

LoginBtn.propTypes = {
  onClick: PropTypes.bool,
};
