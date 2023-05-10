import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const t_length = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };

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
    <div className="Testimonials" id="testimonials">
      {/* Left Side */}
      <div className="left-testimonial">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>

        {/* Review */}
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        />

        <div className="arrows">
          <img src={leftArrow} alt="" onClick={handleLeftArrowClick} />
          <img src={rightArrow} alt="" onClick={handleRightArrowClick} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
