import React from "react";
import { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonial_length = testimonialsData.length;

  return (
    <div className="Testimonials">
      {/* Left Side */}
      <div className="left-testimonial">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>

        {/* Review */}
        <span>{testimonialsData[selected].review}</span>
        {/* Person's Name & Status */}
        <span>
          <span style={{ color: "var(--orange" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      {/* Right Side */}
      <div className="right-testimonial"></div>
    </div>
  );
};

export default Testimonials;