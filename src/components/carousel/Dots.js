import React from "react";

export default function Dots({ activeIndex, setActiveIndex, imageSlider }) {
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => setActiveIndex(index)}
        ></span>
      ))}
    </div>
  );
}
