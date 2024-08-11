import PropTypes from "prop-types";
import React from "react";
import "../css/component.css";

export const SubmitBtn = ({ onClick = false, className }) => {
  return (
    <button
      className={`${className}`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className="text-wrapper">SUBMIT</div>
    </button>
  );
};

SubmitBtn.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
};

SubmitBtn.defaultProps = {
  onClick: false,
  className: "",
};
