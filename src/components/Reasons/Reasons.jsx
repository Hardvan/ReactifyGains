import React from "react";
import "./Reasons.css";

// Images
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      {/* Gym Images (Left Side) */}
      <div className="left-reason">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-reason">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>

        {/* Reasons to Choose Us (Right Side) */}
        <div className="details-right">
          <div>
            <img src={tick} alt=""></img>
            <span>Over 140+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train Smarter & Faster than Before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Free Program for New Member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable Partners</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Our Partners
        </span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
