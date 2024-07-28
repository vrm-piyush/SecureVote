import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const Home2 = ({ onClick = false, className }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    document.getElementById("home-page").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`home2 ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={`text-wrapper ${isClicked ? "on-click" : ""}`}>Home</div>
    </div>
  );
};

Home2.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
};
