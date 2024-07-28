import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const LoginButton = ({ onClick = false, className, divClassName }) => {
  return (
    <button className={`login-button ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>Login</div>
    </button>
  );
};

LoginButton.propTypes = {
  onClick: PropTypes.bool,
};
