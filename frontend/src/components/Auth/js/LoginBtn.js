import PropTypes from "prop-types";
import React from "react";
import "../css/component.css";

export const LoginBtn = ({ onClick, className, loginBtnClassName }) => {
  return (
    <button className={`login-btn ${className}`} onClick={onClick}>
      <span className={`text-wrapper ${loginBtnClassName}`}>LOGIN</span>
    </button>
  );
};

LoginBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

LoginBtn.defaultProps = {
  onClick: () => {},
  className: "",
};
