"use client"

import React, { useState } from "react";

type Slide = {
  imageUrl: string;
  heading: string;
  subheading: string;
  description: string;
};

interface SlideshowProps {
  slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setImageLoaded(false); // Reset imageLoaded state when changing slides
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setImageLoaded(false); // Reset imageLoaded state when changing slides
  };

  return (
    <div className="relative w-full h-full">
      <div className="">
        <div className="flex justify-center items-center">
          <img
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].heading}
            className="w-[80vw] h-[40vw]"
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? "block" : "none" }} // Hide image until it's loaded
          />
          {!imageLoaded && (
            <div
              className="w-[71vw] h-[40vw] bg-gray-200 flex justify-center items-center text-3xl font-bold"
              style={{ fontFamily: "Bellota Text", fontSize: '2vw' }}
            >
              <span>Loading...</span>
            </div>
          )}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 text-white bg-black bg-opacity-50 p-[1vw] rounded-md ml-[14vw] z-10"
            style={{ fontSize: "2vw" }}
          >
            {"<"}
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-0 text-white bg-black bg-opacity-50 p-[1vw] rounded-md mr-[14vw] z-10"
            style={{ fontSize: "2vw" }}
          >
            {">"}
          </button>
        </div>
        <div className="absolute inset-0 mx-[20vw] my-[12vw] bg-black bg-opacity-60"></div>
        {imageLoaded && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <div className="text-3xl font-bold mb-[2vw]" style={{ fontFamily: "Bellota Text", fontSize: '2vw' }}>
              {slides[currentSlide].heading}
            </div>
            <h3 className="text-lg mx-[25vw] font-light" style={{ fontFamily: "Montserrat", fontSize: '1.5vw' }}>
              {slides[currentSlide].subheading}
            </h3>
          </div>
        )}
      </div>
      {slides[currentSlide].description && imageLoaded && (
        <div className="absolute inset-x-0 bottom-0 p-[1vw] bg-black bg-opacity-60 mx-[14vw]">
          <p className="text-white text-lg font-light" style={{ fontFamily: "Montserrat", textAlign: "center", fontSize: '1vw' }}>{slides[currentSlide].description}</p>
        </div>
      )}
    </div>
  );
};

export default Slideshow;