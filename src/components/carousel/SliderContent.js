import React from "react";

export default function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slider, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slider.urls} alt="" />
          <h2 className="slide-title">{slider.title}</h2>
          <h3 className="slide-text">{slider.description}</h3>
        </div>
      ))}
    </section>
  );
}
