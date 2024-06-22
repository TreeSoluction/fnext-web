"use client"

import React from "react";
import Header from "@/components/Header";
import { ICONS } from "@/constants/icons";

export default function Home() {
    return (
     <>
     
        <div>

        <Header>
          <a className="flex gap-2 items-center font-bold text-white " href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <p>Voltar</p>
          </a>
        </Header>

        </div>



        <div className="flex w-full pt-4 min-h-screen items-center justify-center ">
        <div className="flex flex-col w-full max-w-md p-6 sm:px-12 sm:py-10 bg-white rounded-[5px] sm:rounded-[10px]  shadow-xl  bg-gray-200">
        <div className="flex flex-col flex-shrink-0 items-center justify-center mx-4 relative pt-6 pb-6">
        <img height={170} width={170} src={ICONS.models.id_vector} alt="Id Vector" />
        </div>
            <div className=""></div>
            <div className="flex flex-col text-center">
                <h2 className="flex flex-col text-2xl font-bold">Precisamos de alguns dados <br /> para criar a página da sua franquia.</h2>
                <p className="pt-2 pb-4">Leva só alguns minutos.</p>
            </div>
        
          
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center justify-center ">
                <input type="checkbox" id="terms" className="mr-6 rounded-[3px]"/>
                {/* <label htmlFor="terms" className="text-center">Aceito os termos</label> */}
            </div>
            <div className=" flex-col items-center text-left justify-center">
                <span className="text-sm ">
                    Aceito os 
                    <a href="#" className="text-blue-500"> Termos e condições </a>
                </span>
                <span className="text-sm">
                    e autorizo o uso de meus dados de acordo com a 
                    <a href="#" className="text-blue-500"> Declaração de privacidade.</a>
                </span>


            </div>
        </div>

            

            <div className=" flex flex-col w-full items-center justify-center  gap-2">
                 <button className="mx-auto  w-80 min-w-40 bg-LOW_BLUE hover:bg-blue-900 text-white text-xl py-2 rounded-[5px]"
                        type="submit"> Criar página agora
                 </button>
                 <button className="mx-auto w-80 min-w-40  bg-white hover:bg-zinc-300 text-LOW_BLUE  text-xl py-2 rounded-[5px]  bg-zinc-200"
                        type="submit"> Criar depois
                 </button>
                
            </div>
        </div>
        </div> 
     </>
    )
}