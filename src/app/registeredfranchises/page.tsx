"use client"

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { ICONS } from "@/constants/icons";


export default function Home() {
   
    const productStatus = {
        published: 0, // Número de produtos confirmados
        analysis: 0, // Número de produtos em análise
        inative: 0, // Número de produtos vendidos
        expired: 0, // Número de produtos expirados
      };

    return (
     <>
    
    <div>

      <Header>

     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-left-fill"
      viewBox="0 0 16 16"
    >
     
    </svg>

    <Navbar />

    </Header>

                {/* Conteúdo da div principal */}

        <div>
            <div className=" pt-20 sm:px-32 px-28">
                <h1 className="text-nowrap text-2xl sm:text-3xl mb-4">Franquias Cadastradas</h1>
            </div>
        </div>

                    {/* Div com os primeiros links */}


            <div className="flex justify-center items-center">
                <div className="flex flex-col sm:flex sm:flex-row gap-5 justify-center items-center sm:justify-between pt-5 w-full max-w-6xl m-2 p-4 border-none bg-blue-100">
                   <Link href="#" className="text-blue-500 hover:text-blue-700 hover:underline justify">
                       Veja todas as franquias cadastradas e informações relevantes da página da sua franquia
                   </Link>
                   <Link href="#" className="text-blue-500 hover:text-blue-700 hover:underline sm:pt-0 pt-5">
                         Ver Dicas Fenext
                   </Link>
                </div>
             </div>


           

           <div>
               <div className="flex justify-center items-center text-gray-500">
                 <div className="flex flex-col sm:flex sm:flex-row items-center sm:w-full sm:max-w-6xl  sm:min-w-2 m-2 bg-white shadow-lg rounded-lg border border-gray-300">
                  
                  <div className="flex flex-row px-20 sm:px-10 py-4 items-center hover:text-blue-600 hover:bg-gray-200 hover:origin-top hover:cursor-pointer border-b-4 border-transparent hover:border-b-4 hover:border-y-blue-600">
                    <span className="text-lg">Publicados</span>
                    <span className="text-xl pl-1">({productStatus.published})</span>
                  </div>

                  <div className="flex flex-row px-20 sm:px-10 py-4 items-center hover:text-blue-600 hover:bg-gray-200 hover:origin-top hover:cursor-pointer border-b-4 border-transparent hover:border-b-4 hover:border-y-blue-600">
                     <span className="text-lg">Em Análise</span>
                     <span className="text-xl pl-1">({productStatus.analysis})</span>
                  </div>

                  <div className="flex flex-row px-[92px] sm:px-12 py-4 items-center hover:text-blue-600 hover:bg-gray-200 hover:origin-top hover:cursor-pointer border-b-4 border-transparent hover:border-b-4 hover:border-y-blue-600">
                     <span className="text-lg">Inativos</span>
                     <span className="text-xl pl-1">({productStatus.inative})</span>
                  </div>

                  <div className="flex flex-row px-[85px] sm:px-10 py-4 items-center hover:text-blue-600 hover:bg-gray-200 hover:origin-top hover:cursor-pointer border-b-4 border-transparent hover:border-b-4 hover:border-y-blue-600">
                    <span className="text-lg">Expirados</span>
                    <span className="text-xl pl-1">({productStatus.expired})</span>
                 </div>

                 </div>
              </div>
           </div>

                {/* Div com a  imagem */}

           <div className="flex justify-center text-gray-500"> 
              <div className="flex flex-col md:flex md:flex-row gap-5 justify-center items-center sm:justify-between pt-5 w-full max-w-6xl m-10 p-4 bg-white shadow-lg rounded-lg border border-gray-300">
                  <div>
                     <img className="" height={400} width={600} src={ICONS.registered.store} alt="loja 1.png"/>              
                  </div>

                       <div className="flex flex-col justify-start sm:w-7/12 items-start px-20 pl-4">
                             <p className="flex "
                               >Sorveteria Autonôma 24h - Auto Geni </p>
                             <span className="font-bold">R$ 17.000</span>
              
                            <div className="flex flex-col pt-10">
                               <div>
                                  <p className="flex items-center justify-center sm:items-start sm:justify-start sm:pb-0 pb-5"
                                    >Metricas da sua Página</p>
                               </div>

                               <div className="flex flex-row  gap-4 pl-4 pt-2">
                                   
                                    <div className="flex flex-col">
                                      <p className="text-xs text-gray-600">Visitantes</p>
                                         <div className="flex flex-row justify-center items-center gap-2 pt-2">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 5.71788C6.72932 5.71788 7.42877 5.41667 7.94448 4.88051C8.46019 4.34436 8.74991 3.61718 8.74991 2.85894C8.74991 2.1007 8.46019 1.37352 7.94448 0.837364C7.42877 0.301209 6.72932 0 6 0C5.27068 0 4.57123 0.301209 4.05552 0.837364C3.53981 1.37352 3.25009 2.1007 3.25009 2.85894C3.25009 3.61718 3.53981 4.34436 4.05552 4.88051C4.57123 5.41667 5.27068 5.71788 6 5.71788ZM6 6.97396C2.34382 6.97396 0 9.07159 0 10.0929V12H12V10.0929C12 8.85781 9.78109 6.97396 6 6.97396Z" fill="#4A4A4A" stroke="#4A4A4A" stroke-width="0.00064"/>
                                            </svg>
                                            <p className="flex items-center justify-center text-sm">20</p>
                                         </div>  
                                    </div>  

                                    <div>
                                      <p className="text-xs text-gray-600">Conversões</p>
                                        <div className="flex flex-row justify-center items-center gap-2 pt-2">
                                          <img src={ICONS.registered.finger} alt="dedo.svg" />
                                          <p className="flex items-center justify-center text-sm">4</p>
                                        </div>
                                    </div>  

                                    <div>
                                      <p className="text-xs text-gray-600">Taxa de Conversões</p>
                                           <div className="flex flex-row justify-center items-center gap-2 pt-2">                                            <p className="flex items-center justify-center text-sm">4</p>
                                           <img src={ICONS.registered.percentage} alt="porcentagem.svg" />
                                          </div>
                                    </div>  
                                </div>    

                            </div>

                        </div>


                  <div className="flex flex-col items-end sm:w-9/12 m-6 sm:m-2 p-4 b bg-white rounded-lg text-gray-500"> 
  
                    <div className="flex flex-col pr-2">
                    
                        <div className="flex flex-row gap-1 justify-end items-end text-blue-600 py-4">
                           <Link href="#" className="flex flex-row items-center gap-2 bg-white text-blue-600 px-4  rounded-xl hover:bg-gray-100"> 
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.41696 11.1944L11.1686 1.48376C11.7837 0.871158 12.7643 0.83606 13.4214 1.4031C14.1471 2.02943 14.1974 3.14032 13.5313 3.83019L3.91872 13.7853L1 14.2171L1.41696 11.1944Z" stroke="#1031BD" stroke-width="1.472" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            Editar</Link>
                           <Link href="#" className="flex flex-row items-center gap-2 bg-white text-blue-600 px-4 rounded-xl hover:bg-gray-100">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5148 6.50003C11.5148 7.80188 10.3887 8.85717 8.99961 8.85717C7.61058 8.85717 6.4845 7.80188 6.4845 6.50003C6.4845 5.19818 7.61058 4.14288 8.99961 4.14288C10.3887 4.14288 11.5148 5.19818 11.5148 6.50003Z" stroke="#1031BD" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.00001 1C5.24603 1 2.06833 3.31226 1 6.5C2.06831 9.68772 5.24603 12 9.00001 12C12.7539 12 15.9317 9.68772 17 6.5C15.9317 3.31229 12.7539 1 9.00001 1Z" stroke="#1031BD" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            Exibir</Link>
                           <Link href="#" className="flex flex-row items-center gap-2 bg-white text-blue-600 px-4  rounded-xl hover:bg-gray-100">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4103 2.97674H13.4615C13.6043 2.97674 13.7413 3.03555 13.8423 3.14022C13.9433 3.24489 14 3.38686 14 3.53488C14 3.68291 13.9433 3.82488 13.8423 3.92955C13.7413 4.03422 13.6043 4.09302 13.4615 4.09302H12.5641V13.9535C12.5641 14.4963 12.3561 15.0168 11.9858 15.4006C11.6156 15.7844 11.1134 16 10.5897 16H3.41026C2.88662 16 2.38444 15.7844 2.01417 15.4006C1.64391 15.0168 1.4359 14.4963 1.4359 13.9535V4.09302H0.538462C0.395653 4.09302 0.258693 4.03422 0.157712 3.92955C0.0567305 3.82488 0 3.68291 0 3.53488C0 3.38686 0.0567305 3.24489 0.157712 3.14022C0.258693 3.03555 0.395653 2.97674 0.538462 2.97674H3.58974V2.04651C3.58974 1.50374 3.79776 0.983205 4.16802 0.599409C4.53828 0.215614 5.04047 0 5.5641 0H8.4359C8.95953 0 9.46172 0.215614 9.83198 0.599409C10.2022 0.983205 10.4103 1.50374 10.4103 2.04651V2.97674ZM9.33333 2.97674V2.04651C9.33333 1.53302 8.93128 1.11628 8.4359 1.11628H5.5641C5.06872 1.11628 4.66667 1.53302 4.66667 2.04651V2.97674H9.33333ZM11.4872 4.09302H2.51282V13.9535C2.51282 14.467 2.91487 14.8837 3.41026 14.8837H10.5897C11.0851 14.8837 11.4872 14.467 11.4872 13.9535V4.09302Z" fill="#1031BD"/>
                                </svg>
                             Excluir</Link>
                        </div>
                    </div>

                    {/* Box dentro da Div  */}

                    <div className="flex flex-col sm:flex sm:flex-row gap-5 justify-center items-center sm:justify-between pt-5 w-full max-w-sm m-2 p-4 bg-gray-100 shadow-lg  rounded-lg  text-gray-500"> 

                          <div className="flex flex-col sm:flex sm:flex-row gap-5 justify-center items-center sm:justify-between pt-5">                      
                              <div className="flex flex-col">                            
                                  <h3 className="text-sm font-semibold">Coloque sua Marca no Topo</h3>
                                  <p className="text-sm mt-2">Mais visibilidade para sua página  franquia agora.</p>
                                
                              </div>

                              <div className="flex flex-row justify-end items-end px-6 pt-14">                                  
                                    <Link href="#" className="flex flex-row items-center gap-2 bg-white text-blue-600 px-4  border-solid border-blue-600 border-2 rounded-xl hover:bg-gray-200">
                                      <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10.5063 3.3028C10.6503 3.40197 10.7555 3.33123 10.7401 3.14563L10.4993 0.238879C10.4839 0.0532753 10.341 -0.0451223 10.1817 0.0202031L7.68711 1.04339C7.52786 1.10876 7.51528 1.24332 7.6593 1.34249L8.12182 1.66093C8.26584 1.7601 8.30719 1.96859 8.21361 2.12426L6.32831 5.26201C6.23482 5.41768 6.02815 5.49102 5.86903 5.42501L2.93886 4.20926C2.77977 4.14325 2.56099 4.20685 2.45267 4.35051L0.612539 6.79156C0.504225 6.93527 0.414843 7.20531 0.413971 7.39164L0.404547 9.38524C0.403716 9.57162 0.493639 9.60838 0.604402 9.46699L2.97427 6.44242C3.08512 6.30103 3.3059 6.23935 3.4649 6.3054L6.41682 7.5312C6.57583 7.59726 6.78307 7.52438 6.8774 7.36926L9.51948 3.0233C9.61376 2.86818 9.80872 2.82246 9.95274 2.92158L10.5063 3.3028Z" fill="#1031BD" stroke="#1031BD" stroke-width="0.000639992"/>
                                      </svg>
                                      Destacar</Link>
                              </div>                          
                          </div>
                    </div>      
                </div>
              </div>
          </div>                  

          <Footer />

  </div>

     </>
    )
};

