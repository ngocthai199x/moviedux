import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import imageSlider from "./imageSlider";
import Dots from "./Dots";

const len = imageSlider.length - 1;

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent
        activeIndex={activeIndex}
        imageSlider={imageSlider}
      ></SliderContent>
      <Arrows
        preSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      ></Arrows>
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        setActiveIndex={setActiveIndex}
      ></Dots>
    </div>
  );
}
