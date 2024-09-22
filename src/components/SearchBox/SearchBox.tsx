"use client";

import React from "react";


            // Caixa de pesquisa - Opções para 'Valor'

const prices = [
                'De 3.500 até 15.000', 
                'De 15.000 até 50.000', 
                'De 50.000 até 100.000', 
                'De 100.000 até 500.000', 
                'De 500.000 e 1.000.000'
            ];

            // Caixa de pesquisa - Opções para 'Valor'
const categorys = [
                'Franquias unitárias', 
                'Home-Based', 
                'Loja física', 
                'Microfranquia', 
                'Quiosque'];
                
const franchises = [
        'Agricultura e Agroindústria',
        'Alimentação',
        'Bem-Estar Animal',
        'Casa e Construção',
        'Comunicação, informática e eletrônicos educação',
        'Entretenimento e lazer',
        'Finanças e Seguros',
        'Hotelaria e turismo',
        'Imobiliário',
        'Limpeza e conservação',
        'Logística e Transporte',
        'Meio Ambiente',
        'Moda',
        'Saúde e Beleza e bem estar',
        'Serviço e outros negócios',
        'Serviços Automotivos'
    ];


const SearchBox = () => {

         const [openMenu, setOpenMenu] = React.useState([false, false, false]);

            // Função para abrir ou fechar o menu clicado
         const handleOpenMenu = (index: number) => {
             setOpenMenu((prev) => prev.map((_, i) => i === index ? !prev[index] : false));
         }
          


  return (
    <div>

        <div className="flex items-center justify-center w-full">
            
        <div className="fixed top-28 flex items-center justify-center sm:w-full w-full sm:px-4 px-2 w-90 z-20">

            <ul className="flex sm:items-center items-start justify-start rounded-full border-2 shadow-xl bg-white h-[62px] sm:w-10/12 w-full sm:px-0  max-w-3xl z-20">
            
                {/* Menu 01 Valor  */}
                    <li className="flex-grow relative sm:w-0 w-25 list-none rounded-lg rounded-l-full hover:bg-slate-200">
                        <button
                            onClick={() => handleOpenMenu(0)}
                            className="flex-nowrap sm:pl-12 pl-6 hover:bg-slate-200 w-full h-[60px] text-start rounded-l-full"
                            >
                        <h2 className="sm:text-xl text-lg font-medium">Valor</h2>
                        <p className="sm:text-[11px] text-[13px] indent-1 text-gray-700">Buscar valores</p>
                        </button>

                        <ul className={`absolute flex-col flex-wrap h-90 sm:w-sm w-lg bg-white sm:top-20 top-24 sm:-left-36 -left-0 p-4 border rounded-3xl border-slate-600 ${openMenu[0] ? 'flex' : 'hidden'}`}>
                            {prices.map((price) => (
                            <li className="flex m-4 items-center list-none w-56" key={price}>
                                <input
                                    name={price}
                                    type="checkbox"
                                    className=" hover:bg-slate-200 rounded-md "
                                />
                            <span className="indent-2">{price}</span>
                            </li>
                            ))}
                        </ul>
                    </li>
                    <span className="block w-[1.5px] sm:h-10 h-12 bg-GRAY"></span>


                {/* Menu 02 Tipos  */}
                    <li className="flex-grow relative list-none sm:w-0 w-25 rounded-lg hover:bg-slate-200">
                        <button
                            onClick={() => handleOpenMenu(1)}
                            className="flex-nowrap sm:pl-12 pl-2 px-l-2 hover:bg-slate-200 w-full h-[60px] text-start"
                        >
                        <h2 className="sm:text-xl text-lg font-medium">Tipos</h2>
                        <p className="flex-nowrap sm:text-[11px] text-[13px] indent-1 text-gray-700">Modelo de Negócio</p>
                        </button>
                
                        <ul className={`absolute flex-col flex-wrap h-80 sm:w-sm w-lg bg-white sm:top-20 top-24 -left-6 p-4 border rounded-3xl border-slate-600 ${openMenu[1] ? 'flex' : 'hidden'}`}>
                            {categorys.map((category) => (
                            <li className="flex m-4 items-center list-none w-40" key={category}>
                                <input
                                    name={category}
                                    type="checkbox"
                                    className=" hover:bg-slate-200 rounded-md "
                                />
                            <span className=" indent-2">{category}</span>
                            </li>
                            ))}
                        </ul>
                    </li>
                    <span className="block sm:w-[1.5px] w-[1px] sm:h-10 h-12 bg-GRAY"></span>


                {/* Menu 03 Segmentos  */}
                    <li className="flex-grow relative list-none sm:w-0 w-25 rounded-lg hover:bg-slate-200">
                        <button
                            onClick={() => handleOpenMenu(2)}
                            className="flex-nowrap sm:pl-12 pl-4 px-l-2 hover:bg-slate-200 w-full h-[60px] text-start"
                        >
                        <h2 className="sm:text-xl text-md font-medium">Segmentos</h2>
                        <p className="text-[11px] text-gray-700">Área de Atuação</p>
                        </button>
                        <ul className={`absolute flex-col flex-shrink-0 bg-white h-96 sm:w-sm overflow-y-scroll bg-white sm:top-20 top-24 sm:-left-2 sm:-right-64 -right-12 p-4 py-4 sm:py-0 border rounded-3xl border-slate-600 ${openMenu[2] ? 'flex' : 'hidden'}`}>
                            {franchises.map((franchise) => (
                            <li className="flex m-4 items-center list-none w-96" key={franchise}>
                                <input
                                    name={franchise}
                                    type="checkbox"
                                    className=" hover:bg-slate-200 rounded-md "
                                />
                                <span className=" indent-2">{franchise}</span>
                                
                            </li>
                                                
                    ))}
                </ul>

                </li>
                
                        {/* Search Button  */}

                <li className="list-none sm:w-16 w-12">
                    <button className="my-2 hover:bg-slate-200 w-full text-start rounded-r-full rounded-l-lg sm:px-r-32">
                        <div className="flex items-center sm:justify-center justify-end bg-blue-800 sm:h-12 h-10 sm:w-12 w-10 rounded-full ">
                            <svg width="37px" height="37px" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z" fill="#FFFFFF"/>
                                <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z" fill="#FFFFFF"/>
                            </svg>
                        </div>
                    </button>
                </li>
            </ul>

        </div>
        </div>

    </div>
  )
}

export default SearchBox