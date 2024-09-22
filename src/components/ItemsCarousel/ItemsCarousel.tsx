'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

// caminhos para um arquivo  dentro da pasta icons/IconsCarousel
const iconsList = [
 
        'icons/IconsCarousel/indicados.svg',
        'icons/IconsCarousel/alimentacao.svg',
        'icons/IconsCarousel/construção.svg',
        'icons/IconsCarousel/educação.svg',
        'icons/IconsCarousel/lazer.svg',
        'icons/IconsCarousel/turismo.svg',
        'icons/IconsCarousel/limpeza.svg',
        'icons/IconsCarousel/moda.svg',
        'icons/IconsCarousel/saude.svg',
        'icons/IconsCarousel/automobilismo.svg',
        'icons/IconsCarousel/imobiliaria.svg',
        'icons/IconsCarousel/financas.svg',
        'icons/IconsCarousel/agricultura.svg',
        'icons/IconsCarousel/meio ambiente.svg',
        'icons/IconsCarousel/logistica.svg',
        'icons/IconsCarousel/Bem estar animal.svg',
        'icons/IconsCarousel/fitness.svg',
        'icons/IconsCarousel/conservação.svg',
        'icons/IconsCarousel/entreterimento.svg',
        'icons/IconsCarousel/informatica.svg',
        'icons/IconsCarousel/e-commerce.svg',


];

//  Texto dos icones
const iconTexts = [     
       "Indicados", "Alimentação", "Construção", "Educação", "Lazer", "Turismo", "Limpeza", 
       "Moda", "Saúde", "Automobilismo", "Imobiliária", "Finanças", "Agricultura", "Meio Ambiente",
       "Logística", "Bem-estar Animal", "Fitness", "Conservação", "Entretenimento", "Informática", "E-Commerce",
     ];


const ItemsCarousel = () => {
  const [curr, setCurr] = useState(0);
  const visibleItems = 12; // Número de itens visíveis por vez
  const [transformValue, setTransformValue] = useState(100); // Para alterar o tamanho do carrossel de itens


  const prev = () => setCurr(curr === 0 ? iconsList.length - visibleItems : curr - 1);
  const next = () => setCurr((curr + 1) % (iconsList.length - visibleItems + 1));


  useEffect(() => {
       const handleResize = () => {
         // Verifica o tamanho da tela
         if (window.innerWidth <= 640) { // Tamanho para dispositivos mobile
           setTransformValue(480);
         } else {
           setTransformValue(120);   
         }
       };

     // Verifica a largura da tela ao montar o componente
     handleResize();

     // Adiciona o event listener para detectar redimensionamentos
     window.addEventListener("resize", handleResize);
 
     // Limpa o event listener ao desmontar o componente
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);
 

  return (
       <div className="relative w-full overflow-hidden">
              {/* Botão Esquerdo */}
              <button
                     onClick={prev}
                     className="absolute top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-gray-300 z-10 transition-all duration-300 sm:duration-100"
                     >
              <ChevronLeft />
              </button>
       
              {/* Carrossel */}
              <div className="flex pt-4 pl-6 sm:gap-2 gap-4 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${curr * (transformValue / visibleItems)}%)` }}>
              {Object.entries(iconsList).map(([key, iconSrc], index) => (
                     <div key={index} className="sm:w-1/12 w-20 flex-shrink-0 flex flex-col items-center justify-center group hover:cursor-pointer hover:bg-slate-100 transition-all duration-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
                            <div className="w-12 h-12  bg-white flex items-center justify-center rounded-full group-hover:bg-slate-100 transition-colors sm:duration-300 duration-300">
                                   <img src={iconSrc} alt={`Icon ${key}`} className="w-8 h-8 text-gray-600  group-hover:text-blue-700" />
                            </div>
                                   <p className="flex items-center justify-center w-40 mt-2 text-gray-600 sm:text-14px text-sm/[10px] font-semibold group-hover:text-blue-700">{iconTexts[index]}</p>
                            <div className="border-b-4 border-transparent group-hover:border-blue-700 w-full mt-1 transition-all duration-300">       
                            </div>
                     </div>
                     ))}

              </div>
 
                     {/* Botão Direito */}
              <button
                     onClick={next}
                     className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-gray-300 z-10"
                     >
              <ChevronRight />
              </button>
       </div>
  );
};

export default ItemsCarousel;
