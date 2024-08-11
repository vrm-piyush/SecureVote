import PropTypes from "prop-types";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/component.css";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDateInput = ({ value, onClick, onChange, onBlur, error }) => {
  const formattedDate =
    value instanceof Date && !isNaN(value)
      ? value.toLocaleDateString("en-GB")
      : "";
  return (
    <div
      className={`custom-date-input ${error ? "date-error" : ""}`}
      onClick={onClick}
    >
      <input
        type="text"
        value={value ? value.toLocaleDateString("en-GB") : ""}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="dd/mm/yyyy"
        readOnly
      />
      <button type="button" onClick={onClick} className="calendar-icon">
        <FaCalendarAlt />
      </button>
    </div>
  );
};

CustomDateInput.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
};

//Reusable field component
export const FormField = ({
  label,
  className,
  placeholder,
  isDateField,
  isAsset,
  value,
  onChange,
  error,
  errorMessage,
}) => (
  <div className={`${className} ${error ? "input-error-container" : ""}`}>
    <div className="label">{label}</div>
    <div className={`input-frame ${error ? "input-error" : ""}`}>
      {isDateField ? (
        <DatePicker
          selected={value}
          onChange={(date) => onChange(date)}
          dateFormat="dd/MM/yyyy"
          customInput={<CustomDateInput error={error} />}
          placeholderText={placeholder}
          isClearable
          showPopperArrow={false}
        />
      ) : isAsset ? (
        <textarea
          className="input-area"
          id="assets-input"
          placeholder={placeholder}
          type="text"
          rows="6"
        />
      ) : (
        <input
          type="text"
          className="input-text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
    {error && <div className="error-message">{errorMessage}</div>}
  </div>
);

FormField.prototype = {
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  isDateField: PropTypes.bool,
  isAsset: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

FormField.defaultProps = {
  label: "",
  className: "",
  placeholder: "",
  isDateField: false,
  isAsset: false,
  value: "",
  onChange: () => {},
  error: false,
  errorMessage: "",
};

export default FormField;
