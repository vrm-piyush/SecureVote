import PropTypes from "prop-types";
import React from "react";
import "./loginPage.css";

export const Password = ({
  property1,
  className,
  frame = "/assets/images/Password_frame.png",
  vector = "/assets/svg/Login/key.svg",
  hideEye = "/assets/svg/Login/hide-eye.svg",
  eye = "/assets/svg/Login/eye.svg",
}) => {
  return (
    <div className={`password ${className}`}>
      <div className="overlap-group">
        <img
          className="rectangle"
          alt="Rectangle"
          src={property1 === "hide-password" ? "image.svg" : frame}
        />
        <img
          className="vector"
          alt="Vector"
          src={property1 === "hide-password" ? "vector-2.svg" : vector}
        />
        <div className={`PASSWORD ${property1}`}>
          {property1 === "default" && <>PASSWORD</>}

          {property1 === "hide-password" && <>********</>}
        </div>
        <div className="div" />
        <img
          className={`hide-eye property-1-${property1}`}
          alt="Hide eye"
          src={property1 === "hide-password" ? eye : hideEye}
        />
      </div>
    </div>
  );
};

Password.propTypes = {
  property1: PropTypes.oneOf(["hide-password", "default"]),
  rectangle: PropTypes.string,
  vector: PropTypes.string,
  hideEye: PropTypes.string,
};
