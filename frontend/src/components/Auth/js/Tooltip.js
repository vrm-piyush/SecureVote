// Tooltip.js
import React from "react";
import PropTypes from "prop-types";
import "../css/component.css";

const Tooltip = ({ message }) => {
  return (
    <div className="tooltip-container show">
      <div className="tooltip-arrow"></div>
      <div className="tooltip-content">{message}</div>
    </div>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Tooltip;
