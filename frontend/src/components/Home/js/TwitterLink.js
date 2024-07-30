import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/home.css";
import "../css/components.css";

export const TwitterLink = ({
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
    // if(onClick) {
    //   document.getElementById("twitter").scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <div
      className={`twitter-link ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`text-wrapper ${property1} ${divClassName} ${
          isClicked ? "on-click" : ""
        }`}
      >
        Twitter
      </div>
    </div>
  );
};

TwitterLink.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
  className: PropTypes.string,
  divClassName: PropTypes.string,
  onClick: PropTypes.bool,
};

TwitterLink.defaultProps = {
  property1: "default",
  className: "",
  divClassName: "",
  onClick: false,
};
