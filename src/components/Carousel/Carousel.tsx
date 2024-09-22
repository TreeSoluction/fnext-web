'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"   // Ícone de seta para
import { ICONS } from '@/constants/icons'

    // children = são os slides
    // autoSlide = define se o carrossel deve trocar automaticamente entre os slides.
    // autoSlideInterval =  define o intervalo entre as trocas automáticas dos slides.

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)

    // Funcões usadas para atualizar o slide atual.

    // Função que muda o slide para o anterior.
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    // Função que muda o slide para o próximo
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))


    // Irá controlar o comportamento de mudança automática dos slides.
    // cria um intervalo que avança para o próximo slide automaticamente no intervalo definido por autoSlideInterval
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    

    return (

      <div className='flex sm:flex-col flex-wrap items-center w-full justify-center'>

     
        <div className='flex overflow-hidden relative h-72 rounded-lg'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>  {/* 'style' é usada para mover o conteúdo de um carrossel horizontalmente. */}
                {slides}
            </div>
                <div className="absolute inset-0 flex items-start justify-start p-4 hover:cursor-pointer transition-colors duration-300">
                  <p className='text-sm font-semibold bg-white/80 hover:bg-white rounded-full px-4 py-2 '>Recomendado</p>
                </div>
                <div className=" absolute inset-0 flex justify-end py-4 px-6 hover:cursor-pointer transition-colors duration-300">
                    <div className='flex items-center bg-white/80 hover:bg-white  rounded-full h-8 p-1 rounded-full shadow '>
                      <img width={25} height={25} src={ICONS.IconsCarousel.upload} alt="" />
                    </div>
                      <a href='#' className='hover:cursor-pointer'></a>
                </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                     <ChevronLeft />  {/*Ícone de seta para a esquerda */}
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />  {/*Ícone de seta para a direita */}
                </button>
            </div>

                {/* Bolinhas de marcação das imagens */}
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex flex-row  items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>


        <div className='flex flex-col sm:items-start sm:justify-end mt-4 sm:mt-4 w-full sm:w-full'>
          <h2 className='text-lg sm:text-base font-bold'>(Nome da franquia)</h2>
          <p className='sm:text-sm'>Segmento da franquia</p>
          <p className='font-semibold sm:text-sm sm:mb-0 mb-6'>A partir de <span className='font-bold'>R$11.960</span></p>
        </div>  
      
      </div>
    )
}

export default Carousel