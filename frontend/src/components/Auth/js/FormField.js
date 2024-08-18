import PropTypes from "prop-types";
import Tooltip from "./Tooltip.js";
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { parseISO } from "date-fns";
import { TextField } from "@mui/material";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "../css/component.css";
import "react-phone-number-input/style.css";

// Constants
const VALIDATION_THRESHOLD = 10;
const NAME_MIN_LENGTH = 1;
const NAME_MAX_LENGTH = 50;
const NAME_REGEX = /^[A-Za-z.]+$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const AADHAAR_REGEX = /^\d{4} \d{4} \d{4}$/;
const EPIC_REGEX = /^[A-Z]{3}[0-9]{7}$/;
const ORGANIZATION_MIN_LENGTH = 2;
const ORGANIZATION_MAX_LENGTH = 50;
const ORGANIZATION_REGEX = /^[A-Za-z0-9\-_'&., ]+$/;
const ASSET_MIN_LENGTH = 10;
const ASSET_MAX_LENGTH = 500;

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
  const [DOBvalue, setDOBValue] = useState(null);
  const [value, setValue] = useState("");
  const [nameValue, setNameValue] = useState({ firstName: "", lastName: "" });
  const [nameError, setNameError] = useState({ firstName: "", lastName: "" });
  const [error, setError] = useState("");
  const [interactionCount, setInteractionCount] = useState({
    firstName: 0,
    lastName: 0,
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const [focused, setFocused] = useState(false);

  // Handle change for different field types
  const handleChange = (event, fieldName) => {
    if (fieldName === "phone") {
      const phone = typeof event === "number" ? event.toString() : event || "";
      setValue(phone);
      validatePhone(phone);
    } else {
      const inputValue = event.target.value || "";

      if (fieldName === "firstName" || fieldName === "lastName") {
        setNameValue((prevValue) => ({
          ...prevValue,
          [fieldName]: inputValue,
        }));
        validateName(inputValue, fieldName);

        // Update interaction count based on input
        setInteractionCount((prev) => ({
          ...prev,
          [fieldName]: inputValue ? prev[fieldName] + 1 : -1,
        }));
      } else if (fieldName === "date") {
        const date = typeof event === "string" ? parseISO(event) : event;
        setDOBValue(date);
      } else if (fieldName === "id") {
        const id = event.target.value.toUpperCase();
        setValue(formatID(id));
        validateField(fieldName, id);
      } else {
        setValue(inputValue);
        validateField(fieldName, inputValue);
      }
    }
  };

  // Handle focus for different field types
  const handleFocus = (fieldName) => {
    if (fieldName === "firstName" || fieldName === "lastName") {
      setInteractionCount((prev) => ({
        ...prev,
        [fieldName]: prev[fieldName] + 1,
      }));
    } else {
      setFocused(true);
    }
  };

  const handleBlur = (fieldName) => {
    if (fieldName === "firstName" || fieldName === "lastName") {
      handleNameBlur();
    } else {
      setFocused(false);
      if (value) {
        validateField(fieldName);
      }
    }
  };

  const handleNameBlur = () => {
    if (isNameField) {
      // No tooltip if the count is 0 (first interaction)
      if (
        (interactionCount.firstName < 1 || interactionCount.lastName < 1) &&
        (nameValue.firstName === "" || nameValue.lastName === "")
      ) {
        setError("Please enter your name. This field is required.");
        setShowTooltip(true);
      } else {
        setShowTooltip(false);
      }
    }
  };

  // Validate fields based on field type
  const validateField = (fieldName, inputValue = value) => {
    if (isNameField && fieldName in nameValue) {
      validateName(nameValue[fieldName], fieldName);
    } else if (isEmailField) {
      validateEmail(inputValue);
    } else if (isPhoneField) {
      validatePhone(inputValue);
    } else if (isIDField) {
      validateID(inputValue);
    } else if (isOrgField) {
      validateOrganization(inputValue);
    } else if (isAssetField) {
      validateAsset(inputValue);
    }
  };

  const validateName = (name, fieldName) => {
    let errorMsg = "";
    const totalLength = (nameValue.firstName + nameValue.lastName).replace(
      /\s+/g,
      ""
    ).length;

    if (totalLength < NAME_MIN_LENGTH) {
      errorMsg = `Name must be at least ${NAME_MIN_LENGTH} characters long.`;
    } else if (totalLength > NAME_MAX_LENGTH) {
      errorMsg = `Name must be at most ${NAME_MAX_LENGTH} characters long.`;
    } else if (!NAME_REGEX.test(name)) {
      errorMsg = `Name can only contain letters and '.'.`;
    }

    setNameError((prevError) => ({
      ...prevError,
      [fieldName]: errorMsg,
    }));
    setError(errorMsg);
    setShowTooltip(!!errorMsg);
  };

  const validateEmail = (email) => {
    const errorMsg = EMAIL_REGEX.test(email) ? "" : "Invalid email address.";

    setError(errorMsg);
    setShowTooltip(!!errorMsg);
  };

  const validatePhone = (phone) => {
    let errorMsg = "";
    if (phone.length > VALIDATION_THRESHOLD) {
      if (!isValidPhoneNumber(phone) && isPossiblePhoneNumber(phone)) {
        errorMsg = "Invalid phone number.";
      }
    }
    setError(errorMsg);
    setShowTooltip(!!errorMsg);
  };

  const validateID = (id) => {
    const formattedID = formatID(id);
    const cleanID = id.replace(/\s+/g, "");

    const errorMsg =
      (cleanID.length === 12 && AADHAAR_REGEX.test(formattedID)) ||
      (cleanID.length === 10 && EPIC_REGEX.test(cleanID))
        ? ""
        : "Invalid ID";

    setError(errorMsg);
    setShowTooltip(!!errorMsg);
  };

  const validateOrganization = (name) => {
    const errorMsg =
      name.length < ORGANIZATION_MIN_LENGTH ||
      name.length > ORGANIZATION_MAX_LENGTH
        ? `Organization name must be between ${ORGANIZATION_MIN_LENGTH} and ${ORGANIZATION_MAX_LENGTH} characters.`
        : !ORGANIZATION_REGEX.test(name)
        ? "Invalid organization name format."
        : "";

    setError(errorMsg);
    setShowTooltip(!!errorMsg);
  };

  const validateAsset = (asset) => {
    const errorMsg =
      asset.length < ASSET_MIN_LENGTH || asset.length > ASSET_MAX_LENGTH
        ? `Asset description must be between ${ASSET_MIN_LENGTH} and ${ASSET_MAX_LENGTH} characters.`
        : "";

    setError(errorMsg);
    setShowTooltip(!!errorMsg);
  };

  const formatID = (id) => {
    const cleanID = id.replace(/\s+/g, "");
    if (/^\d*$/.test(cleanID)) {
      return cleanID.match(/.{1,4}/g)?.join(" ") || id;
    } else if (/^[A-Z]{0,3}[A-Z0-9]{0,7}$/.test(cleanID)) {
      return cleanID;
    }
    return id;
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
