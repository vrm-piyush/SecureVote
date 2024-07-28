import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const About = ({ property1, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`about ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${isClicked ? "on-click" : ""}`}
      >
        About
      </div>
    </div>
  );
};

About.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
  className: PropTypes.string,
};
