import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const AboutLink = ({ onClick = false, className, divClassName }) => {
  return (
    <div className={`about-link ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>About</div>
    </div>
  );
};

AboutLink.propTypes = {
  onClick: PropTypes.bool,
};
