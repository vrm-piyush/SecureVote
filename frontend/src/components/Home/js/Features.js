import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const Features = ({ onClick = false, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`features ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={`text-wrapper ${isClicked ? "on-click" : ""}`}>
        Features
      </div>
    </div>
  );
};

Features.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
};
