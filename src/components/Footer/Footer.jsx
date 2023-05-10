import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitHub} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
