import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      {/* Plans Header */}
      <div className="plans-header">
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now With Us</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {/* Creating Each Plan */}
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            {/* Creating Each Feature */}
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -></span>
            </div>

            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
