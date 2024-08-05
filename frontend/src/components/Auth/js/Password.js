import PropTypes from "prop-types";
import React from "react";
import "../css/component.css";

export const Password = ({
  className,
  vector,
  isHidden,
  toggleVisibility,
  password,
  setPassword,
  hideEye,
  eye = "/assets/svg/Login/eye.svg",
}) => {
  return (
    <div className={`password-input ${className}`}>
      <img
        className="key"
        alt="Key"
        src={isHidden ? vector : "/assets/svg/Login/key.svg"}
      />
      <input
        className={`password ${isHidden ? "hidden-password" : "password"}`}
        type={isHidden ? "password" : "text"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="PASSWORD"
      />

      <img
        className="eye"
        alt="Eye"
        src={isHidden ? hideEye : eye}
        onClick={toggleVisibility}
      />
      <div className="password-input-border" />
    </div>
  );
};

Password.propTypes = {
  property1: PropTypes.oneOf(["hidden-password", "password"]),
  className: PropTypes.string,
  vector: PropTypes.string,
  hideEye: PropTypes.string,
  eye: PropTypes.string,
};

Password.defaultProps = {
  property1: "password",
  className: "",
  vector: "/assets/svg/Login/key.svg",
  hideEye: "/assets/svg/Login/hide-eye.svg",
  eye: "/assets/svg/Login/eye.svg",
};
