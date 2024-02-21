"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/app/services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    notifyInfo,
    notifySuccess,
    notifyError,
} from "@/app/services/notification";
import Header from "@/components/Header";
import { InputStyled } from "@/components/Form/inputs";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    const RegisterSchema = z.object({
        min_investment: z.number().min(1, 'Valor mínimo de investimento não pode ser vazio!'),
        return_rate: z.number().min(1, 'Taxa de retorno não pode ser vazia!'),
        monthly_bill: z.number().min(1, 'Faturamento mensal não pode ser vazio!'),
        unit_br: z.number().min(1, 'Número de unidades não pode ser vazio!'),
        royalties: z.number().min(1, 'Royalties não pode ser vazio!'),
        headquarters: z.string().min(1, 'Sede não pode ser vazia!')
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = async (data) => {
        notifyInfo("Registrando...");
    };

    return (
        <div>
            <Header>
                <a className="flex gap-2 items-center font-bold text-white " href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                    <p>Voltar</p>
                </a>
            </Header>
            <div className="max-w-screen-xl m-auto">
                <div className="p-5 sm:px-36 pt-10 sm:pt-20 text-center">
                    <h1 className="text-2xl font-medium">Informações Financeiras</h1>
                    <p className="text-sm m-3 text-GRAY max-w-80 mx-auto">
                        Dados financeiros necessários para possíveis franqueados franqueados empresa
                    </p>
                    <div className="flex justify-between py-5 sm:py-10 max-w-[500px] m-auto">
                        <span className="block bg-HIGH_BLUE h-1 w-full max-w-60"></span>
                        <span className="block bg-HIGH_BLUE h-1 w-full max-w-60"></span>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-wrap justify-center items-center gap-20 max-w-[900px] m-auto mb-20"
                >
                    <div>
                        <p>Investimento mínimo*</p>
                        <InputStyled
                            label="Digite um valor"
                            type="number"
                            {...register("min_investment")}
                            className="max-w-52 my-2 rounded-md bg-PASTEL p-2 border-none"
                        />
                    </div>
                    <div>
                        <p>Retorno*</p>
                        <InputStyled
                            label="Digite um valor"
                            type="number"
                            {...register("return_rate")}
                            className="max-w-52 my-2 rounded-md bg-PASTEL p-2 border-none"
                        />
                    </div>
                    <div>
                        <p>Faturamento mensal*</p>
                        <InputStyled
                            label="Digite um valor"
                            type="number"
                            {...register("monthly_bill")}
                            className="max-w-52 my-2 rounded-md bg-PASTEL p-2 border-none"
                        />
                    </div>
                    <div>
                        <p>Unidades no Brasil*</p>
                        <InputStyled
                            label="Digite um valor"
                            type="number"
                            {...register("units_br")}
                            className="max-w-52 my-2 rounded-md bg-PASTEL p-2 border-none"
                        />
                    </div>
                    <div>
                        <p>Royalties*</p>
                        <InputStyled
                            label="Digite um valor"
                            type="number"
                            {...register("royalties")}
                            className="max-w-52 my-2 rounded-md bg-PASTEL p-2 border-none"
                        />
                    </div>
                    <div>
                        <p>Sede*</p>
                        <InputStyled
                            label="Digite aqui"
                            {...register("headquarters")}
                            className="max-w-52 my-2 rounded-md bg-PASTEL p-2 border-none"
                        />
                    </div>
                    <div className="w-8/12">
                        <p>Observação</p>
                        <textarea
                            className="w-full h-40 my-2 rounded-md bg-PASTEL p-2 border-none"
                            placeholder="Digite alguma observação para os franqueados"
                            {...register("headquarters")}
                        ></textarea>
                    </div>
                    <div className="w-8/12">
                        <p>Defina os modelos de negocios de sua franquia</p>
                        <select
                            className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none"
                        >
                            <option value="">Busque seu modelo</option>
                            <option value="Quiosque">Quiosque</option>
                            <option value="Loja fisica">Loja fisica</option>
                            <option value="Home based">Home based</option>
                            <option value="Unidade Movies">Unidade Movies</option>
                            <option value="home office">home office</option>
                        </select>
                    </div>
                    <FieldFranchise />
                    <div className="w-8/12">
                        <p>Segmento de atuação</p>
                        <select
                            className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none"
                        >
                            <option value="" >Escolha uma opção</option>
                            <option value="Alimentação">Alimentação</option>
                            <option value="Vestuário e Acessórios">Vestuário e Acessórios</option>
                            <option value="Beleza e Estética">Beleza e Estética</option>
                            <option value="Saúde e Bem-Estar">Saúde e Bem-Estar</option>
                            <option value="Educação e Treinamento">Educação e Treinamento</option>
                            <option value="Serviços Automotivo">Serviços Automotivo</option>
                            <option value="Serviços de Limpeza e Conservação">Serviços de Limpeza e Conservação</option>
                            <option value="Saúde e Serviços Médicos">Saúde e Serviços Médicos</option>
                            <option value="Serviços Financeiros">Serviços Financeiros</option>
                            <option value="Casa e Construção">Casa e Construção</option>
                            <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                            <option value="Comunicação e Marketing">Comunicação e Marketing</option>
                            <option value="Lazer e Entretenimento">Lazer e Entretenimento</option>
                            <option value="Pet Shop e Serviços para Animais">Pet Shop e Serviços para Animais</option>
                            <option value="Serviços Residenciais e Reforma">Serviços Residenciais e Reforma</option>
                            <option value="Moda e Estilo de Vida">Moda e Estilo de Vida</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Agências de Viagens e Turism">Agências de Viagens e Turism</option>
                            <option value="Comércio Eletrônico">Comércio Eletrônico</option>
                            <option value="Delivery e Logística">Delivery e Logística</option>
                        </select>
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="bg-MAIN_HIGH_BLUE w-40 p-1 rounded-md text-white font-medium text-sm"
                        >
                            Finalizar
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

const FieldFranchise = () => {
    const [checkeds, setCheckeds] = React.useState([false, false, false]);

    const handleInputCheckBox = (i: number) => {
        console.log(checkeds)
        setCheckeds(prev => prev.map((value, index) => index === i ? !value : value));
    }

    return (
        <div className="w-10/12 rounded-3xl overflow-hidden shadow-xl border-2 py-5 sm:p-10">
            <div className="w-full max-w-[25rem] m-auto">
                <p className="text-center md:text-start">CAPITAL PARA INSTALAÇÃO</p>
                <div className="flex flex-col md:flex-row justify-between mx-3 md:mx-0 my-4 items-center" >
                    <input
                        placeholder="Valor minimo"
                        className="max-w-52 w-full rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                        disabled={checkeds[0]}
                    />
                    <span className="mx-3 my-2">a</span>
                    <input
                        placeholder="Valor máximo"
                        className="max-w-52 w-full rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                        disabled={checkeds[0]}
                    />
                </div>
                <div className="text-center mb-2">
                    <input onChange={() => handleInputCheckBox(0)} type="checkbox" name="" id="" />
                    <span className="text-sm m-2">Não contém</span>
                </div>
                <p className="text-center md:text-start">TAXA DE FRANQUIA</p>
                <div className="flex flex-col md:flex-row justify-between mx-3 md:mx-0 my-4 items-center" >
                    <input
                        placeholder="Valor minimo"
                        className="max-w-52 w-full rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                        disabled={checkeds[1]}
                    />
                    <span className="mx-3 my-2">a</span>
                    <input
                        placeholder="Valor máximo"
                        className="max-w-52 w-full rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                        disabled={checkeds[1]}
                    />
                </div>
                <div className="text-center mb-2">
                    <input onChange={() => handleInputCheckBox(1)} type="checkbox" name="" id="" />
                    <span className="text-sm m-2">Não contém</span>
                </div>
                <p className="text-center md:text-start">CAPITAL DE GIRO</p>
                <div className="flex flex-col md:flex-row justify-between mx-3 md:mx-0 my-4 items-center" >
                    <input
                        placeholder="Valor minimo"
                        className="max-w-52 w-full rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                        disabled={checkeds[2]}
                    />
                    <span className="mx-3 my-2">a</span>
                    <input
                        placeholder="Valor máximo"
                        className="max-w-52 w-full rounded-md bg-PASTEL p-2 border-none"
                        type="number"
                        disabled={checkeds[2]}
                    />
                </div>
                <div className="text-center mb-2">
                    <input onChange={() => handleInputCheckBox(2)} type="checkbox" name="" id="" />
                    <span className="text-sm m-2">Não contém</span>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="button"
                        className="bg-MAIN_HIGH_BLUE w-40 mt-3 p-1 rounded-md text-white font-medium text-sm"
                    >
                        Adicionar +
                    </button>
                </div>
            </div>
        </div>
    )
}