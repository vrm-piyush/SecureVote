import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const RegisterBtn = ({
  onClick = false,
  className,
  divClassName,
  property1,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <div
      className={`button register-btn ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper on-click-${onClick} ${property1} ${divClassName} ${
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
  className: PropTypes.string,
  divClassName: PropTypes.string,
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};

RegisterBtn.defaultProps = {
  onClick: false,
  className: "",
  divClassName: "",
  property1: "default",
};
