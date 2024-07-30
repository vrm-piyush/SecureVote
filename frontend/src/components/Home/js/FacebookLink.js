import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const FacebookLink = ({
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
    // if (onClick) {
    //   document
    //     .getElementById("facebook")
    //     .scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <div
      className={`facebook-link ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${divClassName} ${
          isClicked ? "on-click" : ""
        }`}
      >
        Facebook
      </div>
    </div>
  );
};

FacebookLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
  className: PropTypes.string,
  divClassName: PropTypes.string,
  onClick: PropTypes.bool,
};

FacebookLink.defaultProps = {
  property1: "default",
  className: "",
  divClassName: "",
  onClick: false,
};
