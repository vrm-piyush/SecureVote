import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const FeaturesLink = ({ default1 = false, className, divClassName }) => {
  return (
    <div className={`features-link ${className}`}>
      <div className={`text-wrapper default-${default1} ${divClassName}`}>
        Features
      </div>
    </div>
  );
};

FeaturesLink.propTypes = {
  default1: PropTypes.bool,
};
