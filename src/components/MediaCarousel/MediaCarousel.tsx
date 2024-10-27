"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
interface MediaCarouselProps {
  images: string[];
}

export default function MediaCarousel({ images }: MediaCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return (
      <div>
        <p>No images available</p> {/* Fallback UI if images array is empty */}
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-2">
      <div>
        <h2 className="font-bold text-3xl pb-8">Sobre a Franquia</h2>
      </div>

      <div className="relative max-w-screen-lg mx-auto">
        <div className="relative w-full h-68 md:h-84 lg:h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 h-full ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((slide, idx) => (
              <div key={idx} className="min-w-full">
                <img
                  src={slide}
                  alt={`slide-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
              } hover:bg-blue-500`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
