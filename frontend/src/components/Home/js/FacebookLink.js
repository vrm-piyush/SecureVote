import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const FacebookLink = ({ property1, className, divClassName }) => {
  return (
    <div className={`facebook-link ${className}`}>
      <div className={`text-wrapper ${property1} ${divClassName}`}>
        Facebook
      </div>
    </div>
  );
};

FacebookLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};
