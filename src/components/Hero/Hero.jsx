// ? Use 'rafce' snippet to create functional component template

import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />

        {/* The Best Ad Tagline */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club in Town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div className="">
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div className="">
            <span>Ideal Body</span>
          </div>
        </div>
      </div>
      <div className="right-hero">Right Side</div>
    </div>
  );
};

export default Hero;
