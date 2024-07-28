import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const InstagramLink = ({ property1, className, divClassName }) => {
  return (
    <div className={`instagram-link ${className}`}>
      <div className={`text-wrapper ${property1} ${divClassName}`}>
        Instagram
      </div>
    </div>
  );
};

InstagramLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};
