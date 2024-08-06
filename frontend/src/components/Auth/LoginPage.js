import React, { useState } from "react";
import { BackBtn } from "./js/BackBtn";
import { LoginBtn } from "./js/LoginBtn";
import { Password } from "./js/Password";
import { RegisterHere } from "./js/RegisterHereLink";
import { Copyright } from "./js/Copyright";
import "./css/loginPage.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handlePasswordToggle = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handleLogin = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="login-page">
      <div className="login">
        <header id="header" className="header">
          <a href="/home" class="logo-link">
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
        <div id="login-body" className="login-body">
          <img
            className="login-logo"
            alt="Login logo"
            src="/assets/svg/Login/login-logo.svg"
          />
          <div className="login-form">
            <div className="login-form-frame">
              <div className="layer2" />
              <div className="layer1" />
              <div className="login-heading">LOGIN</div>
              <div className="login-underline" />
              <div className="input-wrapper">
                <div className="username-input">
                  <img
                    className="user-icon"
                    alt="User regular"
                    src="/assets/svg/Login/user-icon.svg"
                  />
                  <input
                    className="username-input-field"
                    type="text"
                    placeholder="USERNAME"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="username-input-border" />
              </div>
              <div className="input-wrapper">
                <Password
                  className="password-instance"
                  hideEye="/assets/svg/Login/hide-eye.svg"
                  vector="/assets/svg/Login/key.svg"
                  isHidden={isPasswordHidden}
                  toggleVisibility={handlePasswordToggle}
                  password={password}
                  setPassword={setPassword}
                />
              </div>
              <div className="forgot-password">Forgot Password?</div>
              <LoginBtn
                className="login-btn-instance"
                loginBtnClassName="login-btn"
                onClick={handleLogin}
              />
              <div className="or">
                <div className="or-section">
                  <img
                    className="or-div-left"
                    alt="Or div left"
                    src="/assets/svg/Login/or-div.svg"
                  />
                  <div className="or-text">or</div>
                  <img
                    className="or-div-right"
                    alt="Or div right"
                    src="/assets/svg/Login/or-div.svg"
                  />
                </div>
              </div>
              <div className="register-link">
                <div className="register-text">Not registered yet?</div>
                <RegisterHere className="register-here-instance" />
              </div>
            </div>
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

export default LoginPage;
