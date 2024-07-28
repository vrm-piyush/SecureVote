import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const LoginLink = ({ property1, className }) => {
  return (
    <div className={`login-link ${className}`}>
      <div className={`text-wrapper ${property1}`}>Login</div>
    </div>
  );
};

LoginLink.propTypes = {
  property1: PropTypes.oneOf(["on-click", "hover", "default"]),
};
