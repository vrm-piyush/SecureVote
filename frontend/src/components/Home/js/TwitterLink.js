import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const TwitterLink = ({ property1, className, divClassName }) => {
  return (
    <div className={`twitter-link ${className}`}>
      <div className={`text-wrapper ${property1} ${divClassName}`}>Twitter</div>
    </div>
  );
};

TwitterLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};
