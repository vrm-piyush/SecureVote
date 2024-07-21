import React from "react";
import { BackBtn } from "./BackBtn";
import { LoginBtn } from "./LoginBtn";
import { Password } from "./Password";
import { RegisterBtn } from "./RegisterBtn";
import { Copyright } from "./Copyright";
import "./loginPage.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="div-2">
        <header className="header">
          <img className="logo" alt="Logo" src="/assets/svg/logo-header.svg" />
          <BackBtn
            arrow="/assets/images/back-arrow.svg"
            className="back-btn-instance"
            property1="default"
          />
        </header>
        <div className="body">
          <img
            className="login-logo"
            alt="Login logo"
            src="/assets/svg/login-logo.svg"
          />
          <div className="login-form">
            <div className="overlap">
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="login-heading">LOGIN</div>
              <div className="rectangle-5" />
              <div className="username">
                <div className="overlap-group-2">
                  <img
                    className="user-regular"
                    alt="User regular"
                    src="/assets/images/user.png"
                  />
                  <div className="label">USERNAME</div>
                </div>
                <div className="rectangle-6" />
              </div>
              <div className="password-wrapper">
                <Password
                  hideEye="/assets/svg/hide-eye.svg"
                  property1="default"
                  frame="/assets/images/Password_frame.png"
                  vector="/assets/svg/key.svg"
                />
              </div>
              <div className="forgot-password">Forgot Password?</div>
              <RegisterBtn
                className="register-btn-instance"
                divClassName="design-component-instance-node-2"
              />
              <LoginBtn
                className="login-btn-instance"
                loginBtnClassName="design-component-instance-node-2"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="socialmedia">
            <img
              className="line-left"
              alt="Line-left"
              src="/assets/svg/Line-left.svg"
            />
            <img
              className="twitter"
              alt="twitter"
              src="/assets/svg/twitter.svg"
            />
            <img
              className="facebook"
              alt="facebook"
              src="/assets/svg/facebook.svg"
            />
            <img
              className="instagram"
              alt="instagram"
              src="/assets/svg/instagram.svg"
            />
            <img
              className="line-right"
              alt="Line"
              src="/assets/svg/Line-right.svg"
            />
          </div>
          <div className="footer-logo">
            <div className="image">
              <img
                className="logo"
                alt="Logo"
                src="/assets/svg/logo-footer.svg"
              />
            </div>
            <div className="Copyright-footer">
              <div className="label">
                <div className="text-wrapper">Copyright</div>
              </div>
              <Copyright className="copyright" />
              <div className="label-1">
                <p className="secure-vote">
                  2024 SecureVote | All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
