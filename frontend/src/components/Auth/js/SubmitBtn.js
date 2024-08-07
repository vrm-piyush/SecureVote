import PropTypes from "prop-types";
import React from "react";
import "../css/register.css";

export const SubmitBtn = ({ onClick = false, className }) => {
  return (
    <div className={`submit ${className}`}>
      <div className="text-wrapper">SUBMIT</div>
    </div>
  );
};

SubmitBtn.propTypes = {
  onClick: PropTypes.bool,
};