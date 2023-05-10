import React, { useRef } from "react";
import "./Join.css";

// EmailJS for sending emails
import emailjs from "@emailjs/browser";

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../secrets";

const Join = () => {
  // We are using the useRef hook to get the value of the input
  const form = useRef();

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
      </div>
    </div>
  );
};

export default Join;
