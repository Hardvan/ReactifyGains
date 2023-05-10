import React from "react";
import "./Join.css";

const Join = () => {
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
        <form action="" className="email-container">
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
