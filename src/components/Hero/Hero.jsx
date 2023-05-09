// ? Use 'rafce' snippet to create functional component template

import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

// Images
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Side */}
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
          <div className="span">
            In here we will help you to shape and build your ideal body and live
            up your life to the fullest
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-hero">
        <button className="btn">Join Now</button>

        {/* Heart Rate */}
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>101 bpm</span>
        </div>

        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
