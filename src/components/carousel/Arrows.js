import React from "react";

export default function Arrows({ preSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={preSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}
