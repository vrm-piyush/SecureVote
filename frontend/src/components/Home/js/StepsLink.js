import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const StepsLink = ({
  property1,
  className,
  divClassName,
  onClick = false,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    if (onClick) {
      document.getElementById("steps").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`steps-link ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${divClassName} ${
          isClicked ? "on-click" : ""
        }`}
      >
        Steps
      </div>
    </div>
  );
};

StepsLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
  className: PropTypes.string,
  divClassName: PropTypes.string,
  onClick: PropTypes.bool,
};

StepsLink.defaultProps = {
  property1: "default",
  className: "",
  divClassName: "",
  onClick: false,
};
