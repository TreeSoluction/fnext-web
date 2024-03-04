'use client';

import React from "react";
import Image from "next/image";
import { ICONS } from "@/constants/icons";

const categorys = ['opção 1', 'opção 2', 'opção 3', 'opção 4', 'opção 5', 'opção 6', 'opção 7'];
const franchises = ['opção 1', 'opção 2', 'opção 3', 'opção 4', 'opção 5'];

export default function FilterHome() {
    const [openMenu, setOpenMenu] = React.useState([false, false, false]);

    const handleOpenMenu = (index: number) => {
        setOpenMenu((prev) => prev.map((_, i) => i === index ? !prev[index] : false));
    }

    return (
        <ul className="flex items-center rounded-full bg-white w-10/12 px-4 max-w-[50rem]">
            <li className="flex-grow relative">
                <button
                    onClick={() => handleOpenMenu(0)}
                    className="pl-12 py-2 hover:bg-slate-200 w-full text-start rounded-l-full"
                >
                    <h2 className="text-xl font-medium">Valor</h2>
                    <p className="text-[11px] indent-1 text-gray-700">Buscar valor Mínimo</p>
                </button>
                <div
                    className={`absolute bg-white top-20 -left-10 p-8 border rounded-3xl border-slate-600 ${openMenu[0] ? 'block' : 'hidden'}`}
                >
                    <input
                        placeholder="Valor mínimo"
                        className="w-52 rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                    />
                </div>
            </li>
            <span className="block w-[5px] h-6 bg-GRAY"></span>
            <li className="flex-grow relative">
                <button
                    onClick={() => handleOpenMenu(1)}
                    className="pl-12 py-2 hover:bg-slate-200 w-full text-start"
                >
                    <h2 className="text-xl font-medium">Categoria</h2>
                    <p className="text-[11px]  text-gray-700">Buscar setor de atuação</p>
                </button>
                <ul
                    className={`absolute flex-col flex-wrap max-h-80 bg-white top-20 -left-10 p-4 border rounded-3xl border-slate-600 ${openMenu[1] ? 'flex' : 'hidden'}`}
                >
                    {categorys.map((category) => (
                        <li className="flex m-4 items-center" key={category}>
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
            <span className="block w-[5px] h-6 bg-GRAY"></span>
            <li className="flex-grow relative">
                <button
                    onClick={() => handleOpenMenu(2)}
                    className="pl-12 py-2 hover:bg-slate-200 w-full text-start"
                >
                    <h2 className="text-xl font-medium">Tipos de Franquias</h2>
                    <p className="text-[11px]  text-gray-700">Buscar Modelo de franquia</p>
                </button>
                <ul
                    className={`absolute flex-col flex-wrap max-h-80 bg-white top-20 left-10 p-4 border rounded-3xl border-slate-600 ${openMenu[2] ? 'flex' : 'hidden'}`}
                >
                    {franchises.map((franchise) => (
                        <li className="flex m-4 items-center" key={franchise}>
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
            <li>
                <button className="my-2 hover:bg-slate-200 w-full text-start rounded-r-full">
                    <Image
                        width={60}
                        height={60}
                        src={ICONS.lupa}
                        alt="search icon"
                    />
                </button>
            </li>
        </ul>
    )
}