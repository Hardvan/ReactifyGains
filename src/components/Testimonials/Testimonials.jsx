import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const t_length = testimonialsData.length;

  // Function to handle left arrow click (Previous Testimonial)
  function handleLeftArrowClick() {
    // Calculate new index
    let new_index = 0;
    if (selected === 0) {
      new_index = t_length - 1;
    } else {
      new_index = selected - 1;
    }

    setSelected(new_index); // Set new index
  }

  // Function to handle right arrow click (Next Testimonial)
  function handleRightArrowClick() {
    // Calculate new index
    let new_index = 0;
    if (selected === t_length - 1) {
      new_index = 0;
    } else {
      new_index = selected + 1;
    }

    setSelected(new_index); // Set new index
  }

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
      <div className="right-testimonial">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img src={leftArrow} alt="" onClick={handleLeftArrowClick} />
          <img src={rightArrow} alt="" onClick={handleRightArrowClick} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
