import PropTypes from "prop-types";
import React, { useState } from "react";
import FormField from "./FormField";
import { LoginLink } from "../js/LoginLink";
import { SubmitBtn } from "../js/SubmitBtn";
import ToggleSwitch from "./ToggleSwitch";
import "../css/component.css";

const isValidMobile = (mobile) => {
  const regex = /^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
  return regex.test(mobile);
};

export const RegistrationForm = ({ className }) => {
  const [isVoter, setIsVoter] = useState(true);
  const [dob, setDob] = useState(null);
  const [mobile, setMobile] = useState("");
  const [dobError, setDobError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const toggleSwitch = () => {
    setIsVoter((prevState) => !prevState);
  };

  const handleDateChange = (date) => {
    if (!date) {
      setDobError("Date is required");
      return;
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //Basic validation checks
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) {
      setDobError("Invalid Date");
    } else {
      setDobError("");
    }
    setDob(date);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    if (!isValidMobile(e.target.value)) {
      setMobileError("Invalid Mobile Number");
    } else {
      setMobileError("");
    }
  };

  return (
    <div className={`registration ${className}`}>
      <div className={`registration-frame ${isVoter ? "voter" : "candidate"}`}>
        <div className="overlap-group">
          <div className="form">
            <div className="form-title">Registration Form</div>

            {/* Toggle Switch and Text */}
            <ToggleSwitch
              stateProp={isVoter ? "off" : "on"}
              className="toggle-switch-instance"
              onClick={toggleSwitch}
            />
            <div
              className={`toggle-text ${
                isVoter ? "toggle-text-voter" : "toggle-text-candidate"
              }`}
            >
              {isVoter ? "Voter" : "Candidate"}
            </div>

            {/* Common Details */}
            <div
              className={`registration-form ${isVoter ? "voter" : "candidate"}`}
            >
              <FormField
                label="Name"
                className="name"
                placeholder="Enter your name"
              />

              <FormField
                label="Father’s/Mother’s Name"
                className="father-mother"
                placeholder="Enter your father's/mother's name"
              />
              <FormField
                label="Email"
                className="email"
                placeholder="xyz@email.com"
              />
              <FormField
                label="Date Of Birth"
                className="DOB"
                isDateField
                placeholder="dd/mm/yyyy"
                value={dob}
                onChange={handleDateChange}
                error={!!dobError}
                errorMessage={dobError}
              />
              <FormField
                label="Mobile No."
                className="mobile"
                placeholder="+1 (123) 456-7890"
                value={mobile}
                onChange={handleMobileChange}
                error={!!mobileError}
                errorMessage="Invalid Mobile Number"
              />
              <FormField label="Password" className="password" />
              <FormField label="Re-enter Password" className="re-password" />
              <FormField label="Aadhar ID/ Voter ID" className="aadhar" />

              {/* Conditional Fields */}
              {!isVoter && (
                <>
                  <FormField
                    label="Organization"
                    className="org"
                    placeholder="Enter your Organization name"
                  />
                  <FormField
                    label="Assets"
                    className="assets"
                    isAsset
                    placeholder="Enter your assets"
                  />
                </>
              )}
              <div className="submit-wrapper">
                <SubmitBtn
                  className={`submit-btn ${
                    !isVoter
                      ? "submit-instance-candidate"
                      : "submit-instance-voter"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Or Division */}
          <div className="or">
            <img
              className="or-div"
              alt="Or divider"
              src="/assets/svg/Login/or-div.svg"
            />
            <div className="or-text">or</div>
            <img
              className="or-div"
              alt="Or divider"
              src="/assets/svg/Login/or-div.svg"
            />
          </div>

          {/* Login links */}
          <div className={`register-link ${isVoter ? "voter" : "candidate"}`}>
            <LoginLink
              className={
                isVoter ? "login-instance-voter" : "login-instance-candidate"
              }
              onClick={
                isVoter
                  ? () => alert("Voter Login")
                  : () => alert("Candidate Login")
              }
            />
            <div className="already-registered">Already have an account? </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  className: PropTypes.string,
};

RegistrationForm.defaultProps = {
  className: "",
};
