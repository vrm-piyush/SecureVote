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
    document.getElementById("home-page").scrollIntoView({ behavior: "smooth" });
  };

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
              <RegisterBtn className="register-btn-instance" />
              <ReadMoreBtn className="read-more-btn-instance" />
            </div>
          </div>
        </div>
        <div id="features" className="features-data-wrapper">
          <div className="features-data">
            <div className="features-heading">Features</div>
            <img
              className="features-div"
              alt="Features div"
              src="features-div.svg"
            />
            <div className="features-2">
              <div className="secure">
                <p className="secure-2">
                  Secure User Registration and Vote Counting
                </p>
                <img className="lock-img" alt="Lock img" src="lock-img.svg" />
              </div>
              <div className="fair">
                <div className="results-transparency">Results Transparency</div>
                <img className="img" alt="Fair img" src="fair-img.svg" />
              </div>
              <div className="encrypted">
                <p className="encrypted-2">
                  Encrypted Votes and End-to-End Encryption
                </p>
                <img
                  className="img-2"
                  alt="Encrypted img"
                  src="encrypted-img.svg"
                />
              </div>
              <div className="easy">
                <p className="easy-use">
                  Easy to use and accessible to users with disabilities
                </p>
                <img
                  className="hand-cursor-img"
                  alt="Hand cursor img"
                  src="hand-cursor-img.svg"
                />
              </div>
              <div className="cheaper">
                <p className="text-wrapper-16">
                  Cheaper than ballot voting system
                </p>
                <img
                  className="img-2"
                  alt="Low price img"
                  src="low-price-img.svg"
                />
              </div>
              <div className="results">
                <div className="text-wrapper-16">Real-Time Results</div>
                <img className="img" alt="Time img" src="time-img.png" />
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="about-data-wrapper">
          <div className="about-data">
            <div className="overlap-4">
              <img className="about-div" alt="About div" src="about-div.svg" />
              <div className="about-2">
                <p className="about-desc-text">
                  Welcome to SecureVote, your ultimate solution for secure and
                  transparent electronic voting. Our platform ensures a seamless
                  and trustworthy voting experience, leveraging cutting-edge
                  technology to guarantee privacy, security, and integrity.
                </p>
                <div className="overlap-group-2">
                  <div className="about-text">About</div>
                  <img className="img-3" alt="About" src="about.svg" />
                </div>
              </div>
            </div>
            <div className="overlap-5">
              <img
                className="mission-div"
                alt="Mission div"
                src="mission-div.svg"
              />
              <div className="mission">
                <div className="text-wrapper-17">Mission</div>
                <p className="text-wrapper-18">
                  At SecureVote, our mission is to revolutionize elections with
                  a secure and efficient voting system that fosters confidence
                  in the results.
                </p>
                <img className="img-3" alt="Mission" src="mission.svg" />
              </div>
            </div>
          </div>
        </div>
        <div id="why-secure-vote" className="why-secure-vote">
          <div className="why-data">
            <div className="overlap-group-3">
              <img className="why-div" alt="Why div" src="why-div.svg" />
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
              <img className="septs-div" alt="Septs div" src="septs-div.svg" />
              <div className="steps-3">
                <div className="register-2">
                  <img
                    className="img-3"
                    alt="Register img"
                    src="register-img.svg"
                  />
                  <p className="register-text">
                    Register yourself by filling the required informations
                  </p>
                </div>
                <div className="login-2">
                  <img className="img-4" alt="Login img" src="login-img.svg" />
                  <p className="login-text">Login as a Voter or Candidate</p>
                </div>
                <div className="candidate-card">
                  <div className="img-4">
                    <img className="vector" alt="Vector" src="vector.svg" />
                  </div>
                  <div className="candidate-text">Go to Candidate card</div>
                </div>
                <div className="vote">
                  <img className="vote-img" alt="Vote img" src="vote-img.svg" />
                  <p className="vote-text">Vote your candidate and submit</p>
                </div>
                <div className="results-2">
                  <img
                    className="img-4"
                    alt="Results img"
                    src="results-img.png"
                  />
                  <p className="results-text">
                    View the results after election
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="back-to-top"
            alt="Back to top"
            src="back-to-top.svg"
          />
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
              <div className="footer-links">
                <RegisterLink
                  className="register-link-instance"
                  divClassName="register-instance-node"
                />
                <LoginLink
                  className="login-link-instance"
                  property1="default"
                />
                <FeaturesLink
                  className="features-instance"
                  divClassName="features-instance-node"
                />
                <AboutLink
                  className="about-link-instance"
                  divClassName="about-instance-node"
                />
                <StepsLink
                  className="steps-link-instance"
                  divClassName="steps-instance-node"
                  property1="default"
                />
                <InstagramLink
                  className="instagram-link-instance"
                  divClassName="instagram-instance-node-3"
                  property1="default"
                />
                <FacebookLink
                  className="facebook-link-instance"
                  divClassName="facebook-instance-node"
                  property1="default"
                />
                <TwitterLink
                  className="twitter-link-instance"
                  divClassName="twitter-instance-node"
                  property1="default"
                />
              </div>
              <div className="text-wrapper-fl">Quick Links</div>
            </div>
            <img
              className="ft-div-2"
              alt="Footer division 2"
              src="/assets/svg/Home/FtDiv1.svg"
            />
            <div className="contacts">
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
            <Home2 className="home2-instance" property1="default" />
            <Features className="features-instance" property1="default" />
            <About property1="default" className="about-instance" />
            <Contact divClassName="contact-instance" property1="default" />
            <LoginButton
              className="login-button-instance"
              divClassName="login-button-instance-node"
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
    </div>
  );
};

export default HomePage;
