import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const AboutLink = ({
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
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`about-link ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${divClassName} ${
          isClicked ? "on-click" : ""
        }`}
      >
        About
      </div>
    </div>
  );
};

AboutLink.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};

AboutLink.defaultProps = {
  onClick: false,
  className: "",
  divClassName: "",
  property1: "default",
};
