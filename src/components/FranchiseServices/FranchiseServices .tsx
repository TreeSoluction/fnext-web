import React from "react";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function FranchiseServices () {
    return (
        <div>
            <div className="flex flex-col md:flex-col lg:flex-row sm:w-[70rem] w-full pt-4 pb-10 sm:pb-0 min-h-screen items-center justify-center gap-6">

                {/* Card um */}
                <div className="flex flex-col w-full max-w-sm sm:max-w-md p-6 sm:px-4 sm:py-10 bg-[#FFFFFF] rounded-[20px] border-2 border[#CDCDD3] shadow-xl">
                    <div className="flex flex-col flex-shrink-0 items-center justify-center mx-4 relative pt-6 pb-6">
                        <img
                        height={100}
                        width={100}
                        src={ICONS.consultoria}
                        alt="Id Vector"
                        />
                    </div>
   
                    <div className="flex flex-col text-center pb-12">
                        <h2 className="flex flex-col sm:text-xl text-lg text-black font-bold">
                        Consultoria  
                        </h2>
                        <p className="pt-2 pb-4 w-full text-black">
                        Contate um especialista em franquias <br />
                         para ajudá-lo a escolher a franquia ideal <br />
                          para você!
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-4">
                    
                        <Link href={"#"}>
                            <button className="flex items-center justify-center gap-2 font-bold text-blue-800 bg-white rounded-md border-blue-800 border-2 hover:border-blue-800 sm:px-10 px-6 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                              Solicitar Consultoria  
                            </button>
                        </Link>
                    </div>
                </div>

                     {/* Card dois */}
                <div className="flex flex-col w-full max-w-sm sm:max-w-md p-6 sm:px-4 sm:py-10 bg-[#FFFFFF] rounded-[20px] border-2 border[#CDCDD3] shadow-xl">
                    <div className="flex flex-col flex-shrink-0 items-center justify-center mx-4 relative pt-6 pb-6">
                        <img
                        height={100}
                        width={100}
                        src={ICONS.suporte_tecnico}
                        alt="Id Vector"
                        />
                    </div>
       
                    <div className="flex flex-col text-center pb-6">
                        <h2 className="flex flex-col sm:text-xl text-lg text-black font-bold">
                        Suporte técnico
                        </h2>
                        <p className="pt-2 pb-4 w-full text-black">
                            Você pode contatar nosso suporte <br />
                             técnico para auxiliá-lo na busca pela <br />
                              franquia ideal e esclarecer suas dúvidas <br />
                               sobre a plataforma.
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-4">
                    
                        <Link href={"#"}>
                            <button className="flex items-center justify-center gap-2 font-bold text-blue-800 bg-white rounded-md border-blue-800 border-2 sm:px-10 px-6 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                              Contactar  
                            </button>
                        </Link>
                    </div>
                </div>

                     {/* Card três */}
                <div className="flex flex-col w-full max-w-sm sm:max-w-md p-6 sm:px-4 sm:py-10 bg-[#FFFFFF] rounded-[20px] border-2 border[#CDCDD3] shadow-xl">
                    <div className="flex flex-col flex-shrink-0 items-center justify-center mx-4 relative pt-6 pb-6">
                        <img
                        height={100}
                        width={100}
                        src={ICONS.microfranquia}
                        alt="Id Vector"
                        />
                    </div>
             
                    <div className="flex flex-col text-center pb-6">
                        <h2 className="flex flex-col sm:text-xl text-lg text-black font-bold">
                        Microfanquias
                        </h2>
                        <p className="pt-2 pb-4 w-full text-black">
                            Apresentamos as melhores opções de <br />
                            microfranquias disponíveis nesta <br />
                            seção. Encontre a oportunidade ideal <br />
                            para seu negócio.
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-4">
                    
                        <Link href={"#"}>
                            <button className="flex items-center justify-center gap-2 font-bold text-blue-800 bg-white rounded-md border-blue-800 border-2 sm:px-10 px-6 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                              Encontrar franquia  
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
    </div>
      
    )
}

