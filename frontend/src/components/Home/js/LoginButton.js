import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const LoginButton = ({
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
    if (onClick) {
      document
        .getElementById("login-button")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`login-button ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${divClassName} ${
          isClicked ? "on-click" : ""
        }`}
      >
        Login
      </div>
    </button>
  );
};

LoginButton.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};

LoginButton.defaultProps = {
  onClick: false,
  className: "",
  divClassName: "",
  property1: "default",
};
