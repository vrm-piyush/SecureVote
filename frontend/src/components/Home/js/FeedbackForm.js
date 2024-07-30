// FeedbackForm.js

import React, { useState } from "react";
import { SendBtn } from "./SendBtn";
import "../css/components.css";

export const FeedbackForm = ({ className }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFeedbackSend = () => {
    console.log("Email:", email);
    console.log("Message:", message);
    setEmail("");
    setMessage("");
  };

  return (
    <form
      id="feedback"
      className={`feedback ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="text-wrapper-fbk">Quick Feedback</div>
      <div className="feedback-input">
        <div className="email">
          <input
            id="emailInput"
            className="input"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => (setEmail = e.target.value)}
          />
        </div>
        <div className="message">
          <textarea
            id="messageInput"
            className="input"
            placeholder="Type your feedback here"
            type="text"
            value={message}
            onChange={(e) => (setMessage = e.target.value)}
            required
            rows="6"
          />
        </div>
        <SendBtn
          className="send-btn-instance"
          property1="default"
          arrow="/assets/svg/Home/arrow.svg"
          onClick={handleFeedbackSend}
        />
      </div>
    </form>
  );
};
