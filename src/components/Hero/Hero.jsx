// ? Use 'rafce' snippet to create functional component template

import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

// Images
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

// For Animation
import { motion } from "framer-motion";

// For Number Counter
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768;

  return (
    <div className="hero" id="home">
      <div className="blur blur-hero"></div>

      {/* Left Side */}
      <div className="left-hero">
        <Header />

        {/* The Best Ad Tagline */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "150px" : "200px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              <NumberCounter start={100} end={140} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter start={800} end={978} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter start={0} end={50} delay="4" preFix="+" />
            </span>
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
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>101 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* Calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
