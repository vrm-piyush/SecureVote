import PropTypes from "prop-types";
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { parseISO } from "date-fns";
import { TextField, Button } from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "../css/component.css";

const VALIDATION_THRESHOLD = 10;
const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 50;

//Reusable field component
export const FormField = ({
  label,
  className,
  placeholder,
  isNameField,
  isDateField,
  isPhoneField,
  isAsset,
  onChange,
}) => {
  const [DOBvalue, setDOBValue] = useState(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateName = (name) => {
    if (name.length < NAME_MIN_LENGTH) {
      setError(`Name must be at least ${NAME_MIN_LENGTH} characters long.`);
    } else if (name.length > NAME_MAX_LENGTH) {
      setError(`Name must be at most ${NAME_MAX_LENGTH} characters long.`);
    } else {
      setError("");
    }
  };

  const onNameChange = (event) => {
    const name = event.target.value;
    setValue(name);
    validateName(name);
  };

  const clearInput = () => {
    setValue("");
    setError("");
  };

  const onDateChange = (newValue) => {
    const date = typeof newValue === "string" ? parseISO(newValue) : newValue;
    setDOBValue(date);
  };

  const onPhoneChange = (newValue) => {
    const phone =
      typeof newValue === "number" ? newValue.toString() : newValue || "";
    setValue(phone);

    if (phone.length > VALIDATION_THRESHOLD) {
      if (isValidPhoneNumber(phone)) {
        setError("");
      } else if (isPossiblePhoneNumber(phone)) {
        setError("Invalid phone number");
      } else {
        setError("Invalid phone number");
      }
    } else {
      setError(""); // No error for empty value or only country code
    }
  };

  return (
    <div className={`${className}`}>
      <div className="label">{label}</div>
      <div className={`input-frame`}>
        {isNameField ? (
          <div className="name-input-container">
            <TextField
              value={value}
              onChange={onNameChange}
              placeholder={placeholder}
              error={Boolean(error)}
              helperText={error}
              className={`name-input ${error ? "name-input-error" : ""}`}
              InputProps={{
                endAdornment: (
                  <Button
                    edge="end"
                    onClick={clearInput}
                    aria-label="clear"
                  >
                    x
                  </Button>
                ),
              }}
            />
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
            <div className={`phone-error-popup ${error ? "show-popup" : ""}`}>
              <div className="popup-arrow"></div>
              <div className="popup-content">{error}</div>
            </div>
          </div>
        ) : isAsset ? (
          <textarea
            className="input-area"
            id="assets-input"
            placeholder={placeholder}
            type="text"
            rows="6"
          />
        ) : (
          <input type="text" className="input-text" placeholder={placeholder} />
        )}
      </div>
    </div>
  );
};

FormField.prototype = {
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  isAsset: PropTypes.bool,
  isDateField: PropTypes.bool,
  onChange: PropTypes.func,
  onDateChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

FormField.defaultProps = {
  label: "",
  className: "",
  placeholder: "",
  isAsset: false,
  isDateField: false,
  onChange: () => {},
  onDateChange: () => {},
  value: "",
};

export default FormField;
