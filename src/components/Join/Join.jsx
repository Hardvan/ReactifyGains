import React, { useRef, useState } from "react";
import "./Join.css";

// EmailJS for sending emails
import emailjs from "@emailjs/browser";

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../secrets";

const Join = () => {
  // We are using the useRef hook to get the value of the input
  const form = useRef();

  const [isEmailSent, setIsEmailSent] = useState(false); // State to check if the email is sent or not

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setIsEmailSent(true); // Sets the state to true
  };

  return (
    <div className="Join" id="join-us">
      {/* Left Side */}
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text">With Us?</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-join">
        {/* We are using the form ref to get the value of the input */}
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <button className="btn btn-join">Join Now</button>
        </form>
        {isEmailSent ? (
          <div className="email-sent">
            <span>Email Sent!</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Join;
