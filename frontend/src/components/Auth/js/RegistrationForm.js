import PropTypes from "prop-types";
import React from "react";
import { LoginLink } from "../js/LoginLink";
import { SubmitBtn } from "../js/SubmitBtn";
import "../css/component.css";

export const RegistrationForm = ({ property1, className }) => {
  return (
    <div className={`registration ${className}`}>
      <div className={`overlap ${property1}`}>
        <div className="overlap-group">
          {property1 === "voter" && (
            <>
              <div className="form">
                <div className="text-wrapper-2">Registration Form</div>
                <div className="registration-form">
                  <div className="name">
                    <div className="div-2" />
                    <div className="text-wrapper-3">Name</div>
                  </div>
                  <div className="DOB">
                    <div className="div-2" />
                    <div className="text-wrapper-4">Date Of Birth</div>
                  </div>
                  <div className="father-mother">
                    <div className="div-2" />
                    <div className="text-wrapper-5">Father’s/Mother’s Name</div>
                  </div>
                  <div className="email">
                    <div className="div-2" />
                    <div className="text-wrapper-6">Email</div>
                  </div>
                  <div className="mobile">
                    <div className="div-2" />
                    <div className="text-wrapper-7">Mobile No.</div>
                  </div>
                  <div className="password">
                    <div className="password-frame" />
                    <div className="text-wrapper-8">Password</div>
                  </div>
                  <div className="re-password">
                    <div className="div-2" />
                    <div className="text-wrapper-9">Re-enter Password</div>
                  </div>
                  <div className="submit-wrapper">
                    <SubmitBtn className="submit-instance" />
                  </div>
                  <div className="aadhar">
                    <div className="div-2" />
                    <div className="text-wrapper-10">Aadhar ID/ Voter ID</div>
                  </div>
                </div>
              </div>
              <img
                className="toggle-switch"
                alt="Toggle switch"
                src="toggle-switch.svg"
              />
              <div className="text-wrapper-11">Voter</div>
            </>
          )}

          {property1 === "candidate" && (
            <>
              <img
                className="or-div-left"
                alt="Or div left"
                src="or-div-left-2.svg"
              />
              <div className="text-wrapper-12">or</div>
              <img
                className="or-div-right"
                alt="Or div right"
                src="or-div-right-2.svg"
              />
            </>
          )}
        </div>
        <div className="or">
          {property1 === "voter" && (
            <>
              <img
                className="or-div-left"
                alt="Or div left"
                src="or-div-left.svg"
              />
              <div className="text-wrapper-12">or</div>
              <img
                className="or-div-right"
                alt="Or div right"
                src="or-div-right.svg"
              />
            </>
          )}

          {property1 === "candidate" && (
            <>
              <LoginLink
                className="login-instance"
                divClassName="instance-node"
              />
              <div className="already-have-an">Already have and account?</div>
            </>
          )}
        </div>
        <div className="register-link">
          {property1 === "voter" && (
            <>
              <LoginLink className="login-2" divClassName="login-3" />
              <div className="already-have-an">Already have and account?</div>
            </>
          )}

          {property1 === "candidate" && (
            <>
              <div className="form-2">
                <div className="text-wrapper-13">Registration Form</div>
                <div className="registration-form-2">
                  <div className="name">
                    <div className="div-2" />
                    <div className="text-wrapper-14">Name</div>
                  </div>
                  <div className="DOB-2">
                    <div className="div-2" />
                    <div className="text-wrapper-4">Date Of Birth</div>
                  </div>
                  <div className="father-mother">
                    <div className="div-2" />
                    <div className="text-wrapper-15">
                      Father’s/Mother’s Name
                    </div>
                  </div>
                  <div className="email-2">
                    <div className="div-2" />
                    <div className="text-wrapper-6">Email</div>
                  </div>
                  <div className="mobile-2">
                    <div className="div-2" />
                    <div className="text-wrapper-7">Mobile No.</div>
                  </div>
                  <div className="password-2">
                    <div className="password-frame" />
                    <div className="text-wrapper-8">Password</div>
                  </div>
                  <div className="re-password-2">
                    <div className="div-2" />
                    <div className="text-wrapper-9">Re-enter Password</div>
                  </div>
                  <div className="assets">
                    <div className="re-passsword-frame" />
                    <div className="text-wrapper-9">Assets</div>
                  </div>
                  <div className="org">
                    <div className="div-2" />
                    <div className="text-wrapper-9">Organization</div>
                  </div>
                  <div className="aadhar-2">
                    <div className="aadhaar-frame" />
                    <div className="text-wrapper-10">Aadhar ID/ Voter ID</div>
                  </div>
                  <SubmitBtn className="submit-2" />
                </div>
              </div>
              <img
                className="toggle-switch"
                alt="Toggle switch"
                src="toggle-switch-2.svg"
              />
              <div className="text-wrapper-16">Candidate</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  property1: PropTypes.oneOf(["candidate", "voter"]),
};
