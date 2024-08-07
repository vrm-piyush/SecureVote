import PropTypes from "prop-types";
import React from "react";
import "../css/register.css";

export const LoginLink = ({ onClick = false, className }) => {
  return (
    <div className={`login on-click-${onClick} ${className}`}>
      <div className="text-wrapper">Login</div>
    </div>
  );
};

LoginLink.propTypes = {
  onClick: PropTypes.bool,
};

