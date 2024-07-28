import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const RegisterLink = ({ onClick = false, className, divClassName }) => {
  return (
    <div className={`register-link ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>Register</div>
    </div>
  );
};

RegisterLink.propTypes = {
  onClick: PropTypes.bool,
};
