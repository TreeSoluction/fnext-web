"use client"

import React, { useState } from "react";
import Link from "next/link";
import ProfileImageUpload from "@/components/ProfileImageUpload/ProfileImageUpload";
import { ICONS } from "@/constants/icons";

export default function Page() {
    // Criando um estado para armazenar o nome do usuário
    const [userName, setUserName] = useState("");

    // Função para atualizar o nome do usuário
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    return (
        <div className="flex flex-col bg-gray-100 ">
            <div className="bg-white py-4 w-full sm:px-28 px-12">
                <Link href={"/"}>
                    <img width={30} height={30} src={ICONS.left_arrow} alt="" className="transition-transform duration-200 ease-in-out hover:scale-105" />
                </Link>
            </div>

            <div className="flex flex-col sm:px-28 px-12 bg-gray-100">
                {/* Exibindo o nome do usuário dinamicamente */}
                <h1 className="sm:text-4xl text-3xl pt-20 pb-6 border-b-2">
                    Editar perfil: {userName}
                </h1>

                <div className="flex flex-col md:flex-col lg:flex-row pt-10 border-b-2 pb-20">
                    <div className="pb-10 lg:pb-0">
                        <h3 className="text-lg font-bold py-6">Perfil</h3>
                        {/* Diminuindo o tamanho da fonte conforme o tamanho da tela */}
                        <p className="text-sm sm:text-base lg:text-lg max-w-prose">Informações do seu perfil.</p>
                        <p className="text-sm sm:text-base lg:text-lg max-w-prose">Você pode alterar sua foto,</p>
                        <p className="text-sm sm:text-base lg:text-lg max-w-prose">número para contato e sua senha.</p>
                    </div>

                    <div className="flex w-full bg-gray-100 justify-center">
                        <form
                            className="flex flex-col w-full sm:max-w-2xl p-6 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px] shadow-2xl"
                        >
                            <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-10">
                                <ProfileImageUpload />

                                <div className="flex flex-col  w-full">
                                    <h1 className="flex justify-start sm:text-lg text-md font-semibold pt-10">Nome de preferência</h1>
                                    <h3 className="flex justify-start sm:text-md text-sm text-slate-400 font-semibold">Como podemos te chamar</h3>
                                    {/* Input controlado para o nome */}
                                    <input
                                        className="mt-2 w-full placeholder-slate-300 border-2 border-slate-300 rounded-md focus:ring-0"
                                        placeholder="Digite seu nome"
                                        type="text"
                                        value={userName} // Valor do estado
                                        onChange={handleNameChange} // Função que atualiza o estado
                                    />

                                    <h1 className="flex justify-start sm:text-lg text-md font-semibold pt-10">E-mail</h1>
                                    <input className="mt-2 w-full placeholder-slate-300 border-2 border-slate-300 rounded-md focus:ring-0" placeholder="Digite seu e-mail" type="email" />

                                    <h1 className="flex justify-start sm:text-lg text-md font-semibold pt-10">Celular/Whatsapp</h1>
                                    <input className="mt-2 w-full placeholder-slate-300 border-2 border-slate-300 rounded-md focus:ring-0" placeholder="(00) 0 0000-0000" type="tel" />
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 items-center justify-center sm:pr-40 w-full mt-8 mb-16">
                                <Link href={"/register"}>
                                    <p className="text-blue-800 font-semibold hover:underline">Alterar senha</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex lg:justify-end justify-center gap-2 pb-20 pt-10 pr-0 mr-0 lg:mr-40">
                    <Link href={"#"}>
                        <button className="flex items-center justify-center gap-2 font-bold bg-white text-slate-500 hover:text-blue-800 border-2 border-slate-200 hover:border-blue-800 rounded-md px-10 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                            Cancelar
                        </button>
                    </Link>
                    <Link href={"#"}>
                        <button className="flex items-center justify-center gap-2 font-bold text-white bg-blue-800 rounded-md border-blue-800 hover:border-blue-800 px-10 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                            Salvar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
