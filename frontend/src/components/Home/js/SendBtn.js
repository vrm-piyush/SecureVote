import PropTypes from "prop-types";
import React, { useReducer } from "react";
import { Component } from "./Component";
import "../css/components.css";

export const SendBtn = ({
  property1,
  className,
  arrow = "/assets/svg/Home/arrow.svg",
  onClick,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`send-btn ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
        //if (onClick) {
        //  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
        //}
      }}
    >
      <Component
        arrow={arrow}
        className={`${
          state.property1 === "send-hover"
            ? "class"
            : state.property1 === "on-click"
            ? "class-2"
            : "class-3"
        }`}
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "send-hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
    default:
      return state;
  }
}

SendBtn.propTypes = {
  property1: PropTypes.oneOf(["send-hover", "on-click", "default"]),
  arrow: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SendBtn.defaultProps = {
  property1: "default",
  arrow: "/assets/svg/Home/arrow.svg",
  className: "",
  onClick: null,
};
