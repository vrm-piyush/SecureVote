import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../css/component.css";

export const ToggleSwitch = ({ stateProp, className, onClick }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "off",
  });

  return (
    <div
      className={`toggle-switch ${state.state} ${className}`}
      onClick={() => {
        dispatch("click");
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className="toggle-btn" />
    </div>
  );
};

function reducer(state, action) {
  switch (state.state) {
    case "off":
      if (action === "click") {
        return { state: "on" };
      }
      break;
    case "on":
      if (action === "click") {
        return { state: "off" };
      }
      break;
    default:
      return state;
  }
}

ToggleSwitch.propTypes = {
  stateProp: PropTypes.oneOf(["off", "on"]),
  className: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  stateProp: "off",
  className: "",
};

export default ToggleSwitch;