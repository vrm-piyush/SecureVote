import React from "react";
import { About } from "./js/About";
import { Contact } from "./js/Contact";
import { Features } from "./js/Features";
import { Home2 } from "./js/Home2";
import { LoginButton } from "./js/LoginButton";
import { RegisterBtn } from "./js/RegisterBtn";
import { ReadMoreBtn } from "./js/ReadMoreBtn";
import { FacebookLink } from "./js/FacebookLink";
import { InstagramLink } from "./js/InstagramLink";
import { LoginLink } from "./js/LoginLink";
import { RegisterLink } from "./js/RegisterLink";
import { FeaturesLink } from "./js/FeaturesLink";
import { AboutLink } from "./js/AboutLink";
import { StepsLink } from "./js/StepsLink";
import { TwitterLink } from "./js/TwitterLink";
import { FeedbackForm } from "./js/FeedbackForm";
import { Copyright } from "../Auth/Copyright";
import "./css/home.css";
import "./css/components.css";

export const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleBackToTopButton = () => {
    const homeSection = document.querySelector(".home-page");
    const backToTopButton = document.querySelector(".back-to-top");
    const homeSectionHeight = homeSection.offsetHeight;

    if (window.scrollY > homeSectionHeight) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleBackToTopButton);

  return (
    <div id="home-page" className="home-page">
      <div className="overlap">
        <div id="home" className="home">
          <img
            className="home-page-img"
            alt="Home page img"
            src="/assets/svg/Home/Mask_group.svg"
          />
          <div id="head" className="head">
            <div id="quotes" className="quotes">
              <div className="overlap-group">
                <div className="text-wrapper-15">Vote Today</div>
                <p className="p">Be a part of decision</p>
              </div>
            </div>
            <div id="home-buttons" className="buttons">
              <RegisterBtn
                onClick={true}
                className="register-btn-instance"
                divClassName="register-btn-instance-node"
                property1="default"
              />
              <ReadMoreBtn
                onClick={true}
                className="read-more-btn-instance"
                divClassName="read-more-btn-instance-node"
                property1="default"
              />
            </div>
          </div>
        </div>
        <div id="features" className="features-data-wrapper">
          <div className="features-data">
            <div className="features-heading">Features</div>
            <img
              className="features-div"
              alt="Features div"
              src="/assets/svg/Home/features_line.svg"
            />
            <div className="features-list">
              <div className="secure">
                <p className="secure-text">
                  Secure User Registration and Vote Counting
                </p>
                <img
                  className="lock-img"
                  alt="Secure img"
                  src="/assets/images/LockImg.png"
                />
              </div>
              <div className="fair">
                <div className="results-transparency">Results Transparency</div>
                <img
                  className="fair-img"
                  alt="Fair img"
                  src="/assets/svg/Home/FairImg.svg"
                />
              </div>
              <div className="encrypted">
                <p className="encrypted-text">
                  Encrypted Votes and End-to-End Encryption
                </p>
                <img
                  className="encrypted-img"
                  alt="Encrypted img"
                  src="/assets/images/EncryptedImg.png"
                />
              </div>
              <div className="easy">
                <p className="easy-use">
                  Easy to use and accessible to users with disabilities
                </p>
                <img
                  className="hand-cursor-img"
                  alt="Hand cursor img"
                  src="/assets/images/HandCursorImg.png"
                />
              </div>
              <div className="cheaper">
                <p className="cheaper-text">
                  Cheaper than ballot voting system
                </p>
                <img
                  className="low-price-img"
                  alt="Low price img"
                  src="/assets/images/LowPriceImg.png"
                />
              </div>
              <div className="results">
                <div className="results-text">Real-Time Results</div>
                <img
                  className="results-img"
                  alt="Time img"
                  src="/assets/images/TimeImg.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="about-data-wrapper">
          <div className="about-data">
            <div className="overlap-4">
              <img
                className="about-div"
                alt="About div"
                src="../../../public/assets/svg/Home/About_Div.svg"
              />
              <div className="about-2">
                <p className="about-desc-text">
                  Welcome to SecureVote, your ultimate solution for secure and
                  transparent electronic voting. Our platform ensures a seamless
                  and trustworthy voting experience, leveraging cutting-edge
                  technology to guarantee privacy, security, and integrity.
                </p>
                <div className="overlap-group-2">
                  <div className="about-text">About</div>
                  <img
                    className="img-3"
                    alt="About"
                    src="/assets/svg/Home/about_icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-5">
              <img
                className="mission-div"
                alt="Mission div"
                src="/assets/svg/Home/About_Div.svg"
              />
              <div className="mission">
                <div className="text-wrapper-17">Mission</div>
                <p className="text-wrapper-18">
                  At SecureVote, our mission is to revolutionize elections with
                  a secure and efficient voting system that fosters confidence
                  in the results.
                </p>
                <img
                  className="img-3"
                  alt="Mission"
                  src="/assets/svg/Home/mission_icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="why-secure-vote" className="why-secure-vote">
          <div className="why-data">
            <div className="overlap-group-3">
              <img
                className="why-div"
                alt="Why div"
                src="/assets/svg/Home/features_line.svg"
              />
              <div className="why-heading">Why SecureVote?</div>
              <div className="flexcontainer">
                <p className="text">
                  <span className="span">
                    Security
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-19">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="text-wrapper-20">
                    Advanced encryption and secure protocols protect voter data.
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-19">
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-21">
                    Transparency
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-19">
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="text-wrapper-22">
                    Decentralized storage and real-time validation ensure
                    accurate vote counting.
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-19">
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-23">
                    User Experience
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-24">
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="text-wrapper-22">
                    Easy-to-use interface for voters and administrators.
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-25">
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="span">Flexibility</span>
                  <span className="text-wrapper-26">
                    {" "}
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-19">
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="text-wrapper-22">
                    Scalable for small community votes or large national
                    elections.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="easy-voting" className="easy-voting">
          <div className="steps-wrapper">
            <div className="steps-2">
              <p className="steps-heading">
                <span className="text-wrapper-27">
                  {" "}
                  Discover Easy Voting
                  <br />
                </span>
                <span className="text-wrapper-28">
                  <br />
                </span>
                <span className="text-wrapper-29">
                  &nbsp;&nbsp;&nbsp;&nbsp; Follow these easy steps
                </span>
              </p>
              <img
                className="steps-div"
                alt="steps div"
                src="/assets/svg/Home/SeptsDiv.svg"
              />
              <div className="steps-data">
                <div className="register-step">
                  <img
                    className="img-3"
                    alt="Register img"
                    src="/assets/svg/Home/Register_step_Img.svg"
                  />
                  <p className="register-text">
                    Register yourself by filling the required informations
                  </p>
                </div>
                <div className="login-step">
                  <img
                    className="img-4"
                    alt="Login img"
                    src="/assets/svg/Home/Login_step_Img.svg"
                  />
                  <p className="login-text">Login as a Voter or Candidate</p>
                </div>
                <div className="candidate-card">
                  <div className="img-4">
                    <img
                      className="vector"
                      alt="Vector"
                      src="/assets/svg/Home/Candidate_step_Img.svg"
                    />
                  </div>
                  <div className="candidate-text">Go to Candidate card</div>
                </div>
                <div className="vote">
                  <img
                    className="vote-img"
                    alt="Vote img"
                    src="/assets/svg/Home/Vote_step_Img.svg"
                  />
                  <p className="vote-text">Vote your candidate and submit</p>
                </div>
                <div className="results-step">
                  <img
                    className="img-4"
                    alt="Results img"
                    src="/assets/svg/Home/Results_step_Img.svg"
                  />
                  <p className="results-text">
                    View the results after election
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer" className="footer">
          <div className="footer-data">
            <div id="copyright-footer" className="copyright-footer">
              <Copyright className="copyright-instance" />
              <p className="secure-vote">
                2024 SecureVote | All rights reserved
              </p>
              <div id="copyright" className="copyright-text">
                Copyright
              </div>
            </div>
            <div className="logo-footer-frame">
              <img
                className="logo-footer"
                alt="SecureVote"
                src="/assets/svg/Home/logo-footer.svg"
                style={{ cursor: "pointer" }}
                onClick={scrollToTop}
              />
            </div>
            <div className="social-media-links">
              <img
                className="ft-div-4"
                alt="Footer division 3"
                src="/assets/svg/Home/FtDiv3.svg"
              />
              <div className="social-media">
                <img
                  id="twitter-2"
                  className="twitter-2"
                  alt="Twitter"
                  src="/assets/svg/Home/twitter.svg"
                />
                <img
                  id="facebook-2"
                  className="facebook-2"
                  alt="Facebook"
                  src="/assets/svg/Home/facebook.svg"
                />
                <img
                  id="instagram-2"
                  className="instagram-2"
                  alt="Instagram"
                  src="/assets/svg/Home/Instagram.svg"
                />
              </div>
              <img
                className="ft-div-3"
                alt="Footer division 4"
                src="/assets/svg/Home/FtDiv3.svg"
              />
            </div>
            <FeedbackForm className="feedback-instance" />
            <img
              className="ft-div-1"
              alt="Footer division 1"
              src="/assets/svg/Home/FtDiv1.svg"
            />
            <div id="quick-links" className="quick-links">
              <div className="quick-links-title">
                <div className="text-wrapper-fl">Quick Links</div>
              </div>
              <div className="footer-links">
                <RegisterLink
                  onClick={true}
                  className="register-link-instance"
                  divClassName="register-instance-node"
                  property1="default"
                />
                <LoginLink
                  onClick={true}
                  className="login-link-instance"
                  divClassName="login-instance-node"
                  property1="default"
                />
                <FeaturesLink
                  onClick={true}
                  className="features-instance"
                  divClassName="features-instance-node"
                  property1="default"
                />
                <AboutLink
                  onClick={true}
                  className="about-link-instance"
                  divClassName="about-instance-node"
                  property1="default"
                />
                <StepsLink
                  onClick={true}
                  className="steps-link-instance"
                  divClassName="steps-instance-node"
                  property1="default"
                />
                <InstagramLink
                  onClick={false}
                  className="instagram-link-instance"
                  divClassName="instagram-instance-node"
                  property1="default"
                />
                <FacebookLink
                  onClick={false}
                  className="facebook-link-instance"
                  divClassName="facebook-instance-node"
                  property1="default"
                />
                <TwitterLink
                  onClick={false}
                  className="twitter-link-instance"
                  divClassName="twitter-instance-node"
                  property1="default"
                />
              </div>
            </div>
            <img
              className="ft-div-2"
              alt="Footer division 2"
              src="/assets/svg/Home/FtDiv1.svg"
            />
            <div id="contacts" className="contacts">
              <p className="text-wrapper-f1">Contact</p>
              <p className="text-wrapper-f2"></p>
              <p className="text-wrapper-f3">+91 7598631245, +91 6236985219</p>
              <p className="text-wrapper-f4"></p>
              <p className="text-wrapper-f1">Helpline Number</p>
              <p className="text-wrapper-f2"></p>
              <p className="text-wrapper-f3">9090123446, 9090123447</p>
              <p className="text-wrapper-f4"></p>
              <p className="text-wrapper-f1">Email</p>
              <p className="text-wrapper-f2"></p>
              <p className="text-wrapper-f5">complaint@electionindia.gov.in</p>
              <p className="text-wrapper-f5">info@electionindia.gov.in</p>
            </div>
          </div>
        </footer>
      </div>
      <header id="header" className="header">
        <div className="header-overlap">
          <div className="header-frame" />
          <div id="header-links" className="header-links">
            <Home2
              onClick={true}
              className="home2-instance"
              divClassName="home2-instance-node"
              property1="default"
            />
            <Features
              onClick={true}
              className="features-instance"
              divClassName="features-instance-node"
              property1="default"
            />
            <About
              onClick={true}
              property1="default"
              divClassName="about-instance-node"
              className="about-instance"
            />
            <Contact
              onClick={true}
              className="contact-instance"
              divClassName="contact-instance-node"
              property1="default"
            />
            <LoginButton
              onClick={true}
              className="login-button-instance"
              divClassName="login-button-instance-node"
              property1="default"
            />
          </div>
          <img
            className="logo-header"
            alt="SecureVote"
            src="/assets/svg/Home/logo-header.svg"
            style={{ cursor: "pointer" }}
            onClick={scrollToTop}
          />
        </div>
      </header>
      {/* <img
        className="back-to-top"
        alt="Back to top"
        src="/assets/svg/Home/Back_to_top.svg"
        onClick={scrollToTop}
      /> */}
      <div className="back-to-top" onClick={scrollToTop}>
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.125"
            y="0.125"
            width="48.75"
            height="48.75"
            rx="24.375"
            fill="white"
          />
          <path
            d="M25.2955 18.8295C24.8562 18.3902 24.1438 18.3902 23.7045 18.8295L16.545 25.989C16.1057 26.4283 16.1057 27.1406 16.545 27.58C16.9844 28.0193 17.6967 28.0193 18.136 27.58L24.5 21.216L30.864 27.58C31.3033 28.0193 32.0156 28.0193 32.455 27.58C32.8943 27.1406 32.8943 26.4283 32.455 25.989L25.2955 18.8295ZM25.625 20.375V19.625H23.375V20.375H25.625Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
