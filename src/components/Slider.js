import React, { useState } from "react";
import { sliderData } from "../duck/sliderData";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="slider">
      {sliderData.map((slide, index) => (
        <img src={slide.img} alt="" />
      ))}
    </div>
  );
}

export default Slider;
