import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const ReadMoreBtn = ({ onClick = false, className }) => {
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
      className={`read-more-btn ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper on-click-${onClick} ${
          isClicked ? "on-click" : ""
        }`}
      >
        READ MORE
      </div>
    </div>
  );
};

ReadMoreBtn.propTypes = {
  onClick: PropTypes.bool,
};
