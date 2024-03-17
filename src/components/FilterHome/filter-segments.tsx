'use client';

import React from "react";
import { ICONS } from "@/constants/icons";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function FilterSegments() {
    const segmentsRef = React.useRef<HTMLUListElement>(null);

    const handleScroll = (scrollOffset: number) => {
        if (segmentsRef.current)
            segmentsRef.current.scrollLeft += scrollOffset;
    }

    const back = () => handleScroll(-150)

    const next = () => handleScroll(150);

    return (
        <div className='flex items-center justify-center gap-8'>
            <div className="flex-shrink-0 bg-white relative left-5  text-HIGH_BLUE hover:text-MAIN_HIGH_BLUE" >
                <button onClick={back}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </button>
            </div>
            <ul className="flex flex-grow overflow-x-hidden" ref={segmentsRef}>
                {values.map((value) => (
                    <li className="flex flex-col flex-shrink-0 items-center justify-center mx-4 relative" key={value}>
                        <img height={40} width={40} src={ICONS.segments.turism_agency} alt="Agências de Viagens e Turism" />
                        <p className="text-xs text-center font-bold">Texto Escrito</p>
                        <input type="radio" name='segment' className="absolute w-full h-full peer opacity-0" />
                        <span className="block mt-2 h-1 w-10 bg-slate-300 peer-checked:bg-HIGH_BLUE"></span>
                    </li>
                ))}
            </ul>
            <div className="flex-shrink-0 text-HIGH_BLUE hover:text-MAIN_HIGH_BLUE">
                <button onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </button>
            </div>
            <div className="flex-shrink-0">
                <button>
                    <img className="" height={25} width={25} src={ICONS.filter} alt="Filtro" />
                    <p className="text-xs text-center text-MAIN_HIGH_BLUE font-bold -indent-1">Filtrar</p>
                </button>
            </div>
            <button className="bg-MAIN_HIGH_BLUE text-white underline text-sm font-bold p-7 py-4 rounded-lg flex-shrink-0">
                Guia do investidor
            </button>
        </div>
    );
}