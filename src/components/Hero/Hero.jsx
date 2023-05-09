// ? Use 'rafce' snippet to create functional component template

import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />
      </div>
      <div className="right-hero">Right Side</div>
    </div>
  );
};

export default Hero;
