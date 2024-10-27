import PropTypes from "prop-types";
import React, { useState } from "react";
import FormField from "./FormField";
import { LoginLink } from "../js/LoginLink";
import { SubmitBtn } from "../js/SubmitBtn";
import ToggleSwitch from "./ToggleSwitch";
import Checkbox from "./Checkbox";
import "../css/component.css";

export const RegistrationForm = ({ className }) => {
  const [isVoter, setIsVoter] = useState(true);

  const toggleSwitch = () => {
    setIsVoter((prevState) => !prevState);
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
                isNameField
                isRequired
              />

              <FormField
                label="Father’s / Mother’s Name"
                className="father-mother"
                placeholder="Enter your father's/mother's name"
                isNameField
                isRequired
              />
              <FormField
                label="Email"
                className="email"
                placeholder="xyz@email.com"
                isEmailField
              />
              <FormField
                label="Date Of Birth"
                className="DOB"
                isDateField
                isRequired
              />
              <FormField
                label="Mobile No."
                className="mobile"
                isPhoneField
                isRequired
              />
              <FormField
                label="Password"
                className="password"
                isPasswordField
                isRequired
              />
              <FormField
                label="Re-enter Password"
                className="re-password"
                isPasswordField
                isRequired
              />
              <FormField
                label="Aadhar ID/ Voter ID"
                className="aadhar"
                placeholder="1234 5678 9123"
                isIDField
                isRequired
              />

              {/* Conditional Fields */}
              {!isVoter && (
                <>
                  <FormField
                    label="Organization"
                    className="org"
                    placeholder="Organization Name"
                    isOrgField
                    isRequired
                  />
                  <FormField
                    label="Assets"
                    className="assets"
                    placeholder="Assets"
                    isAssetField
                    isRequired
                  />
                </>
              )}
              <div className="terms">
                <Checkbox className="checkbox-instance" enabled={false} />
                <label className="t&c">
                  I accept the <a>Terms&amp;Conditions</a>
                </label>
              </div>
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
