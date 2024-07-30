import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const FeaturesLink = ({
  className,
  divClassName,
  property1,
  onClick = false,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    if (onClick) {
      document
        .getElementById("features")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`features-link ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper default-${property1} ${divClassName} ${
          isClicked ? "on-click" : ""
        }`}
      >
        Features
      </div>
    </div>
  );
};

FeaturesLink.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
};

FeaturesLink.defaultProps = {
  onClick: false,
  className: "",
  divClassName: "",
  property1: "default",
};
