import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const Contact = ({ property1, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };
  const handleMouseUp = () => {
    setIsClicked(false);
    document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`contact ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${isClicked ? "on-click" : ""}`}
      >
        Contact
      </div>
    </div>
  );
};

Contact.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
  className: PropTypes.string,
};
