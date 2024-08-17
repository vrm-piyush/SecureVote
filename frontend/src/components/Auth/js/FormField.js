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
const ORGANIZATION_MIN_LENGTH = 3;
const ORGANIZATION_MAX_LENGTH = 50;
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
  isOrganization,
  isAsset,
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

  const handlenameFocus = (fieldName) => {
    if (isNameField) {
      setInteractionCount((prev) => ({
        ...prev,
        [fieldName]: prev[fieldName] + 1,
      }));
    }
  };

  const handleNameChange = (event, fieldName) => {
    const name = event.target.value;
    setNameValue((prevValue) => ({
      ...prevValue,
      [fieldName]: name,
    }));
    validateName(name, fieldName);

    // Update interaction count based on input
    setInteractionCount((prev) => ({
      ...prev,
      [fieldName]: name ? prev[fieldName] + 1 : -1,
    }));
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

  const validateName = (name, fieldName) => {
    let errorMsg = "";
    const totalLength = (nameValue.firstName + nameValue.lastName).replace(
      /\s+/g,
      ""
    ).length;

    if (totalLength < NAME_MIN_LENGTH) {
      errorMsg = `Name must be at least ${NAME_MIN_LENGTH} characters long.`;
      setError(errorMsg);
      setShowTooltip(true);
    } else if (totalLength > NAME_MAX_LENGTH) {
      errorMsg = `Name must be at most ${NAME_MAX_LENGTH} characters long.`;
      setError(errorMsg);
      setShowTooltip(true);
    } else if (!NAME_REGEX.test(name)) {
      errorMsg = `Name can only contain letters and '.'.`;
      setError(errorMsg);
      setShowTooltip(true);
    } else {
      setShowTooltip(false); // Hide tooltip if the name is valid
    }

    setNameError((prevError) => ({
      ...prevError,
      [fieldName]: errorMsg,
    }));
  };

  const handleEmailFocus = () => {
    setFocused(true);
  };

  const handleEmailBlur = () => {
    setFocused(false);
    if (value) {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    if (EMAIL_REGEX.test(email)) {
      setError("");
      setShowTooltip(false);
    } else {
      setError("Invalid email address");
      setShowTooltip(true);
    }
  };

  const onEmailChange = (event) => {
    const email = event.target.value;
    setValue(email);
    validateEmail(email);
  };

  const onDateChange = (event) => {
    const date = typeof event === "string" ? parseISO(event) : event;
    setDOBValue(date);
  };

  const validatePhone = (phone) => {
    if (phone.length > VALIDATION_THRESHOLD) {
      if (isValidPhoneNumber(phone)) {
        setError("");
        setShowTooltip(false);
      } else if (isPossiblePhoneNumber(phone)) {
        setError("Invalid phone number");
        setShowTooltip(true);
      } else {
        setError("Invalid phone number");
        setShowTooltip(true);
      }
    } else {
      setError(""); // No error for empty value or only country code
      setShowTooltip(false);
    }
  };

  const onPhoneChange = (event) => {
    const phone = typeof event === "number" ? event.toString() : event || "";
    setValue(phone);
    validatePhone(phone);
  };

  const handleIDFocus = () => {
    setFocused(true);
  };

  const handleIDBlur = () => {
    setFocused(false);
    if (value) {
      validateID(value);
    }
  };

  const formatID = (id) => {
    const cleanID = id.replace(/\s+/g, "");
    let formattedID = "";

    // Handle Aadhaar number formatting
    if (/^\d*$/.test(cleanID)) {
      // Add space after every 4 digits
      for (let i = 0; i < cleanID.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedID += " ";
        }
        formattedID += cleanID[i];
      }
    } else if (/^[A-Z]{0,3}[A-Z0-9]{0,7}$/.test(cleanID)) {
      // EPIC Number Formatting
      formattedID = cleanID;
    } else {
      // If the input doesn't match any valid pattern, return the input as is
      formattedID = id;
    }

    return formattedID;
  };

  const validateID = (id) => {
    const formattedID = formatID(id);
    const cleanID = id.replace(/\s+/g, "");

    if (cleanID.length === 12 && AADHAAR_REGEX.test(formattedID)) {
      setError("");
      setShowTooltip(false);
    } else if (EPIC_REGEX.test(cleanID)) {
      setError("");
      setShowTooltip(false);
    } else {
      setError("Invalid ID");
      setShowTooltip(true);
    }
  };

  const onIDChange = (event) => {
    const id = event.target.value.toUpperCase();
    setValue(formatID(id));
    validateID(id);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    validateField();
  };

  const validateField = () => {
    if (isAsset) {
      validateAsset(value);
    } else if (isOrganization) {
      validateOrganization(value);
    }
  };

  const validateAsset = (asset) => {
    if (asset.length < ASSET_MIN_LENGTH || asset.length > ASSET_MAX_LENGTH) {
      setError(
        `Asset description must be between ${ASSET_MIN_LENGTH} and ${ASSET_MAX_LENGTH} characters.`
      );
      setShowTooltip(true);
    } else {
      setError("");
      setShowTooltip(false);
    }
  };

  const onAssetChange = (event) => {
    const asset = event.target.value;
    setValue(asset);
    validateAsset(asset);
  };

  const validateOrganization = (orgName) => {
    if (
      orgName.length < ORGANIZATION_MIN_LENGTH ||
      orgName.length > ORGANIZATION_MAX_LENGTH
    ) {
      setError(
        `Organization name must be between ${ORGANIZATION_MIN_LENGTH} and ${ORGANIZATION_MAX_LENGTH} characters.`
      );
      setShowTooltip(true);
    } else {
      setError("");
      setShowTooltip(false);
    }
  };

  const onOrganizationChange = (event) => {
    const orgName = event.target.value;
    setValue(orgName);
    validateOrganization(orgName);
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
              type="text"
              className={`input-text ${
                nameError.firstName ? "input-error" : ""
              }`}
              placeholder="First Name"
              onFocus={() => handlenameFocus("firstName")}
              onBlur={handleNameBlur}
              value={nameValue.firstName}
              onChange={(event) => handleNameChange(event, "firstName")}
              required
            />
            <input
              type="text"
              className={`input-text ${
                nameError.lastName ? "input-error" : ""
              }`}
              placeholder="Last Name"
              onFocus={() => handlenameFocus("lastName")}
              onBlur={handleNameBlur}
              value={nameValue.lastName}
              onChange={(event) => handleNameChange(event, "lastName")}
              required
            />
            {showTooltip && <Tooltip message={error} />}
          </div>
        ) : isEmailField ? (
          <div className="email-input-container">
            <input
              type="email"
              className={`input-text ${error ? "input-error" : ""}`}
              placeholder={placeholder}
              value={value}
              onChange={onEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
            {error && !focused && <Tooltip message={error} />}
          </div>
        ) : isDateField ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              value={DOBvalue}
              onChange={onDateChange}
              className="date-picker"
              renderInput={(params) => (
                <TextField {...params} className="input-text" />
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
              defaultCountry="IN"
              international
              placeholder={placeholder}
              value={value}
              onChange={onPhoneChange}
              className={`phone-input ${error ? "phone-input-error" : ""}`}
              onBlur={() => {
                if (!value) setValue("");
              }}
            />
            {error && <Tooltip message={error} />}
          </div>
        ) : isIDField ? (
          <div className="id-input-container">
            <input
              type="text"
              className={`input-text ${error ? "input-error" : ""}`}
              placeholder={placeholder}
              value={value}
              onChange={onIDChange}
              onFocus={handleIDFocus}
              onBlur={handleIDBlur}
            />
            {showTooltip && !focused && <Tooltip message={error} />}
          </div>
        ) : isAsset ? (
          <div className="asset-input-container">
            <textarea
              className={`input-area ${error ? "input-error" : ""}`}
              id="assets-input"
              placeholder={placeholder}
              type="text"
              rows="6"
              value={value}
              onChange={onAssetChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              isRequired
            />
            {error && !focused && <Tooltip message={error} />}
          </div>
        ) : isOrganization ? (
          <div className="org-input-container">
            <input
              type="text"
              className={`input-text ${error ? "input-error" : ""}`}
              placeholder={placeholder}
              value={value}
              onChange={onOrganizationChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              isRequired
            />
            {error && <Tooltip message={error} />}
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
