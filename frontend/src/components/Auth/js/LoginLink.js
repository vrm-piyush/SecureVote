import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";

export const LoginLink = ({ onClick = false, className }) => {
  return (
    <div
      className={`login-link on-click-${onClick} ${className}`}
      onClick={onClick ? () => console.log("login link clicked") : undefined}
    >
      {/* <Link
      className={`login-link on-click-${onClick} ${className}`}
      onClick={onClick ? () => console.log("login link clicked") : undefined}
    > */}
      <div className="text-wrapper">Login</div>
      {/* </Link> */}
    </div>
  );
};

LoginLink.propTypes = {
  onClick: PropTypes.bool,
  className: PropTypes.string,
};

LoginLink.defaultProps = {
  onClick: false,
  className: "",
};
