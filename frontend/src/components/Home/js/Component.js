import PropTypes from "prop-types";
import React from "react";
import "../css/home.css";
import "../css/components.css";

export const Component = ({ className, arrow = "arrow.svg" }) => {
  return (
    <div className={`component ${className}`}>
      <div className="text-wrapper">Send</div>
      <img className="arrow" alt="arrow" src={arrow} />
    </div>
  );
};

Component.propTypes = {
  arrow: PropTypes.string,
};
