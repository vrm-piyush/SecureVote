import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const RegisterBtn = ({ onClick = false, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <div
      className={`register-btn ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper on-click-${onClick} ${
          isClicked ? "on-click" : ""
        }`}
      >
        REGISTER
      </div>
    </div>
  );
};

RegisterBtn.propTypes = {
  onClick: PropTypes.bool,
};
