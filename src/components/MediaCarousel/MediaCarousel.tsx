// Importando ícones e React
"use client"

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


const videos = [
  "https://www.youtube.com/embed/cFoXlvNnALM",
  "https://www.youtube.com/embed/YFGNXpErBoY",
];

const images = [
  "/icons/OverviewImages/imagens/Image01.svg",
  "/icons/OverviewImages/imagens/Image02.svg",
  "/icons/OverviewImages/imagens/Image03.svg",
  "/icons/OverviewImages/imagens/Image01.svg",
  "/icons/OverviewImages/imagens/Image02.svg",
  "/icons/OverviewImages/imagens/Image03.svg",
  "/icons/OverviewImages/imagens/Image01.svg",
  "/icons/OverviewImages/imagens/Image02.svg",
  
];

// Combina os arrays de vídeos e imagens em um único array para criar o carrossel.
const slides = [...videos, ...images]; 

export default function MediaCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

      //  Funções de navegação dos slides do carrossel
  // Vai para o slide anterior. Se estiver no primeiro slide, ele volta para o último.
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Vai para o próximo slide. Se estiver no último, retorna ao primeiro.
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (

    <div className="flex flex-col pt-2">

        <div>
            <div>
                <h2 className="font-bold text-3xl pb-8">Sobre a Franquia</h2>
            </div>
              <img src="" alt="" />
        </div>

        <div className="relative max-w-screen-lg mx-auto">
          {/* Carrossel */}
          <div className="relative w-full h-68 md:h-84 lg:h-full overflow-hidden">
            <div
              className="flex transition-transform duration-500  h-full ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full">
                  {slide.includes("youtube") ? (
                    <iframe
                      className="w-full h-full"
                      src={slide}
                      title={`video-${idx}`}
                      allowFullScreen
                    />
                  ) : (
                    <img src={slide} alt={`slide-${idx}`} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>

            {/* Botões de Navegação */}
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

          {/* Indicadores de Slides */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, idx) => (
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

















        //         {/* Bolinhas de marcação das imagens */}
        //     <div className='absolute bottom-4 right-0 left-0'>
        //         <div className='flex flex-row  items-center justify-center gap-2'>
        //             {slides.map((s, i) => (
        //                 <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
        //             ))}
        //         </div>
        //     </div>
        // </div>

