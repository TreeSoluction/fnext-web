"use client"

import React from "react";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

  // Para aplicar as estrelas no comentário
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);       // para criar estrelas completas
    const halfStar = rating % 1 >= 0.5;         // Determina se deve adicionar meia estrela (se o rating tiver uma fração maior ou igual a 0.5).
  

    return (
        <div className="flex">
            {/*Estrela completa  */}
          {[...Array(fullStars)].map((_, idx) => (
            <svg key={idx} className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.71 5.26h5.522c.97 0 1.371 1.24.588 1.81l-4.47 3.244 1.71 5.26c.3.92-.755 1.688-1.54 1.125L10 15.347l-4.47 3.244c-.785.563-1.84-.205-1.54-1.125l1.71-5.26-4.47-3.244c-.784-.57-.382-1.81.588-1.81h5.522l1.71-5.26z" />
            </svg>
          ))}
        //   Meia estrela
          {halfStar && (
            <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.71 5.26h5.522c.97 0 1.371 1.24.588 1.81l-4.47 3.244 1.71 5.26c.3.92-.755 1.688-1.54 1.125L10 15.347V2.927z" />
            </svg>
          )}
        </div>
      );
    };

export default function FranchiseInfoCard() {
    return (
        <div className="lg:pb-0 sm:pb-10">
           
                <div className="flex justify-end w-full pr-2">
                    <Link href={"#"} >
                        <img height={35} width={35} src={ICONS.overviewImages.upload} className="transition-transform duration-200 ease-in-out hover:scale-[1.2]" alt="" />
                    </Link>
                </div>

                    <div className="w-full border-2 rounded-lg p-6 shadow-2xl">
                        <div className="flex gap-2 pb-6">

                            <Link href={"#"}>
                                <button className="flex items-center justify-center gap-2 font-bold text-white bg-blue-800 rounded-md px-8 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                                    <img height={20} width={20} src={ICONS.overviewImages.check_mark} alt="" />
                                    Indicado
                                </button>
                            </Link>
                            <Link href={"#"}>
                                <button className="flex items-center justify-center gap-2 font-bold border-2 border-blue-800 rounded-md px-8 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                                    <img src={ICONS.overviewImages.heart} alt="" />
                                    Favoritar
                                </button>
                            </Link>

                            {/* Avaliação */}
                            <div className="flex flex-col justify-start space-x-4 pl-4">
                                <div className="flex flex-row items-center justify-start gap-2">
                                <p className="text-lg font-semibold">4.7</p>
                                <StarRating rating={5} />
                                </div>
                                <div className="flex items-center justify-start text-sm">
                                <p>(32) Avaliações</p>
                                </div>
                            </div>

                        </div>

                        <div className="pb-6" >
                            <h5 className="font-bold pt-6">R$ 10.000,00</h5>
                            <p className="uppercase ">Investimento Mínimo</p>

                            <h5 className="font-bold pt-6">7 a 24 anos</h5>
                            <p className="uppercase">Retorno</p>

                            <h5 className="font-bold pt-6">R$ 10.000,00</h5>
                            <p className="uppercase">Faturamento Médio Mensal</p>

                            <h5 className="font-bold pt-6">22</h5>
                            <p className="uppercase">Total de Unidades no Brasil</p>

                            <h5 className="font-bold pt-6">Alimentos e Bebidas</h5>
                            <p className="uppercase">Setor</p>
                        </div>

                        <div className="flex items-center justify-center w-full py-4">
                            <Link href={"#"} className="w-full">
                                <button className="flex items-center justify-center bg-blue-800 font-bold text-white w-full py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">DEIXAR CONTATO</button>
                            </Link>
                        </div>

                </div>

        </div>
    )
};
