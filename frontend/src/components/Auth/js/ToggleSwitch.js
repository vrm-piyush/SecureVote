import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ToggleSwitch = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "off",
  });

  return (
    <div
      className={`toggle-switch ${state.state} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="toggle-btn" />
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "off") {
    switch (action) {
      case "click":
        return {
          state: "on",
        };
    }
  }

  if (state.state === "on") {
    switch (action) {
      case "click":
        return {
          state: "off",
        };
    }
  }

  return state;
}

ToggleSwitch.propTypes = {
  stateProp: PropTypes.oneOf(["off", "on"]),
};