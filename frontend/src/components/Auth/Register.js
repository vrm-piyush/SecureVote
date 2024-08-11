import React from "react";
import { BackBtn } from "../Auth/js/BackBtn";
import { RegistrationForm } from "./js/RegistrationForm";
import { Copyright } from "../Auth/js/Copyright";
import "../Auth/css/register.css";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-overlap">
        <header id="header" className="header">
          <a href="/home" className="logo-link">
            <img
              className="header-logo-img"
              alt="SecureVote"
              src="/assets/svg/Login/logo-header.svg"
            />
          </a>
          <BackBtn
            arrow={[
              "/assets/svg/Login/back-arrow.svg",
              "/assets/svg/Login/back-arrow-hover.svg",
              "/assets/svg/Login/back-arrow-onClick.svg",
            ]}
            className="back-btn-instance"
            divClassName="back-btn-instance-node"
            property1="default"
            onClick={() => window.history.back()}
          />
        </header>
        <div id="register-body" className="register-body">
          <img
            className="register-logo"
            alt="Registration Logo"
            src="/assets/svg/Login/register-logo.svg"
          />
          <RegistrationForm
            property1="candidate"
            className="registration-form-instance"
          />
          <div className="guidelines">
            <p className="guidelines-for-voter">
              <span className="guidelines-heading">
                Guidelines for Voter and Candidate Registration
                <br />
              </span>
              <span className="break">
                <br />
              </span>
              <ol className="guidelines-list">
                <li>Provide accurate and truthful information.</li>
                <li>Register only once as a voter or candidate.</li>
                <li>Submit valid identification (Aadhar ID or Voter ID).</li>
                <li>Meet the minimum age requirement (18+).</li>
                <li>Personal data will be protected under privacy laws.</li>
                <li>
                  Each email and mobile number can be used for only one
                  registration.
                </li>
              </ol>
            </p>
          </div>
        </div>
        <footer className="footer">
          <img
            className="left-div"
            alt="Left div"
            src="/assets/svg/Login/line-left.svg"
          />
          <div className="social-media">
            <img
              className="twitter-logo"
              alt="twitter"
              src="/assets/svg/Login/twitter.svg"
            />
            <img
              className="facebook-logo"
              alt="facebook"
              src="/assets/svg/Login/facebook.svg"
            />
            <img
              className="instagram-logo"
              alt="instagram"
              src="/assets/svg/Login/instagram.svg"
            />
          </div>
          <img
            className="right-div"
            alt="Line"
            src="/assets/svg/Login/Line-right.svg"
          />
          <div className="footer-logo">
            <a href="/home" class="logo-image">
              <img
                className="footer-logo-img"
                alt="Logo"
                src="/assets/svg/Login/logo-footer.svg"
              />
            </a>
            <div className="Copyright-footer">
              <div className="label">
                <div className="copyright-text-wrapper">Copyright</div>
              </div>
              <Copyright className="copyright-icon" />
              <div className="label-1">
                <p className="secure-vote">
                  2024 SecureVote | All rights reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RegistrationPage;
