import PropTypes from "prop-types";
import React, { useState } from "react";
import "../css/component.css";

export const BackBtn = ({
  property1,
  className,
  divClassName,
  arrow,
  onClick,
}) => {
  const [btnState, setBtnState] = useState(property1);

  return (
    <button
      className={`back-btn ${className}`}
      onClick={onClick}
      onMouseEnter={() => setBtnState("hover")}
      onMouseLeave={() => setBtnState("default")}
      onMouseDown={() => setBtnState("on-click")}
      onMouseUp={() => setBtnState("hover")}
    >
      <img
        className="back-arrow"
        alt="Arrow"
        src={
          btnState === "hover"
            ? arrow[1]
            : property1 === "on-click"
            ? arrow[2]
            : arrow[0]
        }
      />
      <div className={`text-wrapper ${btnState} ${divClassName}`}>Back</div>
    </button>
  );
};

BackBtn.propTypes = {
  property1: PropTypes.oneOf(["hover", "on-click", "default"]),
  arrow: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

BackBtn.defaultProps = {
  property1: "default",
  className: "",
  divClassName: "",
};
