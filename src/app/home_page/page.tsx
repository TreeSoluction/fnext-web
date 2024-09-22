"use client";

import React from "react";
import HeaderHome from "@/components/HeaderHome";
import { APP_ROUTES } from "@/constants/app-route";
import MenuBar from "@/components/Header/menu";
import Carousel from "@/components/Carousel/Carousel";
import ItemsCarousel from "@/components/ItemsCarousel/ItemsCarousel";
import SearchBox from "@/components/SearchBox/SearchBox";

    // Caminhos para as imagens do Carrossel de imagens
const slides = [
    <img src="./icons/Franquias Registradas/loja2.jpg" alt="Slide 1" />,
    <img src="./icons/Franquias Registradas/loja2.jpg" alt="Slide 2" />,
    <img src="./icons/Franquias Registradas/loja2.jpg" alt="Slide 3" />,
    <img src="./icons/Franquias Registradas/loja2.jpg" alt="Slide 4" />,
    
  ];



export default function Home () {

    // Array para renderizar os componentes do carrossel de imagens
    const carousels = Array(4).fill(null);


    return (

        <div>

                {/* Header */}

            <HeaderHome>
                <div className="flex flex-wrap-reverse justify-center items-center gap-4">
                    <a
                        className="text-sm text-white font-bold capitalize text-center"
                        href={APP_ROUTES.private.franchises}
                    >
                        Cadastre Sua Franquia
                    </a>
                    <MenuBar />
                </div>
            </HeaderHome>


                {/* Caixa de pesquisa  */}

            <SearchBox />



                {/* Carrossel de itens  */}

                                
            <div>
                <div className='flex px-4 mt-56 rounded-md'>
                            
                                        {/* carrossel com os Items */}
                    <div className="shadow-lg bg-white w-full rounded-lg border-2">
                        <ItemsCarousel />
                    </div>
                </div>
            </div>

            
                            {/* Carrossel com as imagens  */}


                    {/* Primeiro Carrossel de imagesn  */}

            <div  className="flex flex-col sm:flex-row w-full text-3xl mt-10 pt-12">
                <h1 className="flex px-12 font-bold">Indicados</h1>
            </div>


            <div className="flex sm:flex-row flex-col gap-4  w-full">
                <div className=" flex sm:flex-row flex-col"> 
                    
                    <div className="flex sm:flex-col flex-nowrap w-full sm:w-full gap-4 m-8">
                        <div className="sm:w-full w-10/12  flex flex-col sm:flex-row gap-8">
                            {carousels.map((_, index) => (
                            <Carousel key={index}>
                            {slides}
                            </Carousel>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


           
                     {/* Segundo carrossel de imagens  */}

            <div  className="flex w-full text-3xl mt-10 pt-8">
                <h1 className="flex px-12 font-bold">Franquias mais buscadas</h1>
            </div>


            <div className="flex sm:flex-row flex-col gap-4  w-full">
                <div className=" flex sm:flex-row flex-col"> 

                    <div className="flex sm:flex-col flex-nowrap w-full sm:w-full gap-4 m-8 ">
                        <div className="sm:w-full w-10/12 flex flex-col sm:flex-row gap-8">
                            {carousels.map((_, index) => (
                            <Carousel key={index}>
                            {slides}
                            </Carousel>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

                            {/* Carrossel e Caixa com imagem */}
                        
            <div className="flex sm:flex-row flex-col gap-4  w-full">
                <div className=" flex sm:flex-row flex-col">            
            
                    <div className="flex flex-1 sm:flex-col flex-nowrap w-full sm:w-1/2 gap-4 bg-white m-10">
                        <div className="sm:w-full w-10/12  flex flex-col sm:flex-row gap-8">
                            {carousels.slice(0, 2).map((_, index) => (
                            <Carousel key={index}>
                            {slides}
                            </Carousel>
                            ))}
                        </div>
                    </div>

                        
                            {/*  box  com image*/}
                    <div className=" sm:w-1/2 w-full flex-1">
                                       
                      <div className="bg-white sm:grid sm:grid-cols-3 h-full flex flex-col rounded-xl shadow-md mr-4 sm:mr-8 ml-4 sm:ml-0 mb-4 sm:mb-0 border-2 border-blue-600 flex-wrap sm:flex-nowrap">
                                    {/* Título */}
                            <div className="col-span-2 h-20 sm:pt-10 pt-4 w-full sm:flex  sm:pl-10">
                                <h3 className="text-2xl sm:text-4xl w-full font-semibold mb-2 leading-loose flex items-center justify-center sm:items-start sm:justify-start ">Ortobom Colchões</h3> {/* Título que ocupa parte das 5/6 linhas */}

                            </div>
                                <div className="row-span-4 w-full flex items-center sm:justify-end justify-center sm:pr-8 sm:pb-32">
                                    <img
                                    src="/img/ortobom-logo.png"
                                    alt="Imagem redonda"
                                    className="w-20 h-20 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-0 transition-all duration-300"
                                    />
                                </div>

                            <div className="col-span-2 row-span-4 h-44 sm:pl-6 pl-4 sm:pt-4 pt-4 w-full">
                                    <p className="text-sm sm:text-md text-gray-700 w-full leading-relaxed mb-4">Na Ortobom, oferecemos colchões de alta qualidade para garantir um sono reparador e confortável. Nossos produtos combinam tecnologia avançada com design cuidadoso .</p>         
                                    <p className="text-sm sm:text-md text-gray-700 w-full leading-relaxed">Nossos colchões combinam tecnologia de ponta com design ergonômico, atendendo a todas as necessidades de conforto e saúde. Escolha Ortobom  .</p>
                                    
                            </div>


                                    {/*  botão */}
                            <div className="flex sm:justify-end justify-center sm:my-0 my-14 w-full h-16">
                                  
                                    <a href="#" className="mt-4 sm:mt-0 sm:mb-6 sm:mr-6 flex items-center bg-white hover:bg-slate-100 text-sm sm:text-md text-blue-800 font-semibold border-2 border-blue-700 px-10 py-2 rounded-full text-center transition-all duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                        Ver mais
                                    </a>
                            </div>
                        </div>       
                    </div> 
                </div>

            </div> 


                            {/* Footer  */}

        <div className="flex items-center justify-center gap-2 hover:cursor-pointer">
            <a href="" className="flex text-blue-700 font-semibold py-10">Ver mais</a>
            <p className="pb-1 text-blue-700 font-semibold">⌄</p>
        </div>

     </div>

    )
}