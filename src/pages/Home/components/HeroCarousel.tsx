import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // You can also use /24/outline for outlined style

import img1 from "src/assets/images/first.jpeg";
import img2 from "src/assets/images/img1.jpeg";
import img3 from "src/assets/images/img3.jpeg";

const slides = [
  {
    id: 1,
    imageUrl: img1,
    title: "Welcome to Our Website",
    description: "We build modern and scalable web applications.",
  },
  {
    id: 2,
    imageUrl: img2,
    title: "Innovative Solutions",
    description: "Let’s take your digital experience to the next level.",
  },
  {
    id: 3,
    imageUrl: img3,
    title: "Get in Touch",
    description: "Our experts are ready to assist you today.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <div className="w-full bg-teal bg-opacity-50 p-8 rounded-xl text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg mb-6">{slide.description}</p>
              <a
                href="#contact"
                className="bg-darkTeal hover:bg-lightGrey hover:text-darkTeal text-white font-semibold py-2 px-6 rounded"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows - Always visible and fixed */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 transition"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 transition"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default HeroCarousel;
