import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const StepsLink = ({ property1, className, divClassName }) => {
  return (
    <div className={`steps-link ${className}`}>
      <div className={`text-wrapper ${property1} ${divClassName}`}>Steps</div>
    </div>
  );
};

StepsLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};
