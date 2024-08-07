import React from "react";
import { BackBtn } from "../Auth/js/BackBtn";
import { Registration } from "./js/RegistrationForm";
import { Copyright } from "../Auth/js/Copyright";
import { LoginLink } from "../Auth/js/LoginLink";
import { SubmitBtn } from "../Auth/js/SubmitBtn";
import "../Auth/css/register.css";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
        <div className="overlap">
          <footer className="footer">
            <div className="copyright-2">
              <Copyright className="copyright-instance" />
              <p className="secure-vote">2024 SecureVote | All rights reserved</p>
              <div className="text-wrapper-3">Copyright</div>
            </div>
            <img className="logo" alt="Logo" src="image.png" />
            <div className="group">
              <img className="social-media" alt="Social media" src="social-media.png" />
              <img className="line" alt="Line" src="line-13.svg" />
              <img className="img" alt="Line" src="line-14.svg" />
            </div>
          </footer>
          <div className="guidelines">
            <div className="overlap-group">
              <p className="guidelines-for-voter">
                <span className="span">
                  Guidelines for Voter and Candidate Registration
                  <br />
                </span>
                <span className="text-wrapper-4">
                  <br />
                </span>
                <span className="text-wrapper-5">
                  Provide accurate and truthful information.
                  <br />
                  Register only once as a voter or candidate.
                  <br />
                  Submit valid identification (Aadhar ID or Voter ID).
                  <br />
                  Meet the minimum age requirement (18+).
                  <br />
                  Personal data will be protected under privacy laws.
                  <br />
                  Each email and mobile number can be used for only one registration.
                </span>
              </p>
            </div>
          </div>
          <Registration />
          <img className="figure" alt="Figure" src="figure.png" />
          <header className="header">
            <BackBtn arrow="image.svg" arrowClassName="back-btn-2" className="back-btn-instance" property1="default" />
            <img className="logo-2" alt="Logo" src="logo.png" />
          </header>
        </div>
    </div>
  );
};

export default RegistrationPage;