import PropTypes from "prop-types";
import Tooltip from "./Tooltip.js";
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import { NameField } from "../FormField/fields/NameField.js";
import { EmailField } from "../FormField/fields/EmailField.js";
import { PhoneField } from "../FormField/fields/PhoneField.js";
import { IDField } from "../FormField/fields/IDField.js";
import { OrganizationField } from "../FormField/fields/OrganizationField.js";
import { AssetField } from "../FormField/fields/AssetField.js";
import "../css/component.css";
import "react-phone-number-input/style.css";

//Reusable field component
export const FormField = ({
  label,
  className,
  placeholder,
  isNameField,
  isEmailField,
  isDateField,
  isPhoneField,
  isIDField,
  isOrgField,
  isAssetField,
  isRequired,
}) => {
  const [field, setField] = useState(null);
  const [error, setError] = useState("");

  // Handle change for different field types
  const handleChange = (event) => {
    let value = event.target ? event.target.value : event;

    if (isNameField) {
      const newField = new NameField(value.firstName, value.lastName);
      newField.validate();
      setField(newField);
      setError(newField.errorMessage);
    } else if (isEmailField) {
      const newField = new EmailField(value);
      newField.validate();
      setField(newField);
      setError(newField.errorMessage);
    } else if (isPhoneField) {
      const newField = new PhoneField(value);
      newField.validate();
      setField(newField);
      setError(newField.errorMessage);
    } else if (isIDField) {
      const newField = new IDField(value);
      newField.validate();
      setField(newField);
      setError(newField.errorMessage);
    } else if (isOrgField) {
      const newField = new OrganizationField(value);
      newField.validate();
      setField(newField);
      setError(newField.errorMessage);
    } else if (isAssetField) {
      const newField = new AssetField(value);
      newField.validate();
      setField(newField);
      setError(newField.errorMessage);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="label">
        {label}
        {isRequired && <span className="required-marker">*</span>}
        {/* Conditional rendering of * for required fields */}
      </div>
      <div className={`input-frame`}>
        {isNameField ? (
          <div className="name-input-container">
            <input
              id="first-name"
              className={`input-text ${
                nameError.firstName ? "input-error" : ""
              }`}
              type="text"
              placeholder="First Name"
              value={nameValue.firstName}
              onChange={(event) => handleChange(event, "firstName")}
              onFocus={() => handleFocus("firstName")}
              onBlur={handleNameBlur}
              isRequired
            />
            <input
              id="last-name"
              className={`input-text ${
                nameError.lastName ? "input-error" : ""
              }`}
              type="text"
              placeholder="Last Name"
              value={nameValue.lastName}
              onChange={(event) => handleChange(event, "lastName")}
              onFocus={() => handleFocus("lastName")}
              onBlur={handleBlur}
              isRequired
            />
            {showTooltip && error && !focused && <Tooltip message={error} />}
          </div>
        ) : isEmailField ? (
          <div className="email-input-container">
            <input
              id="email-input"
              className={`input-text ${error ? "input-error" : ""}`}
              type="email"
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleChange(e, "email")}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              isRequired
            />
            {showTooltip && error && !focused && <Tooltip message={error} />}
          </div>
        ) : isDateField ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              value={DOBvalue}
              className="date-picker"
              id="date-input"
              onChange={(e) => handleChange(e, "date")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="input-text"
                  error={!!error}
                  onFocus={() => handleFocus("date")}
                  onBlur={() => handleBlur("date")}
                  isRequired
                  helperText={error}
                />
              )}
              slotProps={{
                layout: {
                  sx: {
                    color: "#021432",
                    borderRadius: "2px",
                    borderWidth: "1px",
                    borderColor: "#0d47a2",
                    border: "1px solid",
                    backgroundColor: "#c6dafb",
                  },
                },
              }}
            />
          </LocalizationProvider>
        ) : isPhoneField ? (
          <div className="phone-input-container">
            <PhoneInput
              id="phone-input"
              className={`phone-input ${error ? "phone-input-error" : ""}`}
              defaultCountry="IN"
              international
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleChange(e, "phone")}
              onFocus={() => handleFocus("phone")}
              onBlur={() => handleBlur("phone")}
              isRequired
            />
            {showTooltip && !focused && error && <Tooltip message={error} />}
          </div>
        ) : isIDField ? (
          <div className="id-input-container">
            <input
              id="id-input"
              className={`input-text ${error ? "input-error" : ""}`}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleChange(e, "id")}
              onFocus={() => handleFocus("id")}
              onBlur={() => handleBlur("id")}
              isRequired
            />
            {showTooltip && error && !focused && <Tooltip message={error} />}
          </div>
        ) : isOrgField ? (
          <div className="org-input-container">
            <input
              id="organization-input"
              className={`input-text ${error ? "input-error" : ""}`}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleChange(e, "organization")}
              onFocus={() => handleFocus("organization")}
              onBlur={() => handleBlur("organization")}
              isRequired
            />
            {showTooltip && error && !focused && <Tooltip message={error} />}
          </div>
        ) : isAssetField ? (
          <div className="asset-input-container">
            <textarea
              id="assets-input"
              className={`input-area ${error ? "input-error" : ""}`}
              type="text"
              placeholder={placeholder}
              rows="6"
              value={value}
              onChange={(e) => handleChange(e, "assets")}
              onFocus={() => handleFocus("assets")}
              onBlur={() => handleBlur("assets")}
              isRequired
            />
            {showTooltip && error && !focused && <Tooltip message={error} />}
          </div>
        ) : (
          <input
            type="text"
            className="input-text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

FormField.prototype = {
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  isNameField: PropTypes.bool,
  isDateField: PropTypes.bool,
  isPhoneField: PropTypes.bool,
  isIDField: PropTypes.bool,
  isAsset: PropTypes.bool,
  isRequired: PropTypes.bool,
};

FormField.defaultProps = {
  label: "",
  className: "",
  placeholder: "",
  isNameField: false,
  isDateField: false,
  isPhoneField: false,
  isIDField: false,
  isAsset: false,
  isRequired: false,
};

export default FormField;
