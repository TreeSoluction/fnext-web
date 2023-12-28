"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyInfo,
  notifySuccess,
  notifyError,
} from "../services/notification";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import InputMask from 'react-input-mask';

export default function Home() {
  const router = useRouter();
  const RegisterSchema = z.object({
    fullname: z.string().min(1, 'Nome não pode ser vazio!'),
    email: z.string().email({ message: "Email Inválido!" }),
    password: z.string().min(6, "A senha tem que ter no mínimo 6 caracteres!"),
    date: z.string(),
    phone: z.string()
      .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone Inválido!')
      .transform((phone) => phone.replace(/[()\-]/g, '')),
    cnpj: z.string()
      .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ Inválido!')
      .transform((cnpj) => cnpj.replace(/[\.\/\-]/g, ''))
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const [inputMaskDate, setInputMaskDate] = React.useState<string>("");
  const inputDateRef = React.useRef<HTMLInputElement | null>(null);
  const inputDateRegisterRef = register("date");

  function SetCookie(value: string) {
    Cookies.set("ownerid", value);
  }

  const onSubmit = async (data) => {
    notifyInfo("Registrando...");

    api
      .post("/owner", {
        name: data.fullname,
        email: data.email,
        password: data.password,
        birth_date: data.date,
        phone: data.phone,
        cnpj: data.cnpj
      })
      .then((res) => {
        if (res.status === 201) {
          notifySuccess("Usuario registrado!");
          SetCookie(res.data.id);
          reset();
          router.push("register/confirmaccount");
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          notifyError("Email já esta em uso!");
        }
      });
  };

  const updateInputMaskDate = (e) => {
    const dateMaskFormat = e.target.value.split("-").reverse().join("/");
    setInputMaskDate(dateMaskFormat)
  }

  const handleDateChange = (e) => {
    setInputMaskDate(e.target.value);
    const isValidDate = e.target.value.length == 10;

    if (isValidDate && inputDateRef.current) {
      const date = e.target.value.split("/").reverse().join("-");
      inputDateRef.current.value = date;
    }
  }

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r from-GRAY to-LOW_PURPLE items-center justify-center px-2 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-lg p-6 sm:px-12 sm:py-6 bg-white rounded-[30px] sm:rounded-[50px]  shadow-xl"
      >
        <h1 className="text-4xl my-2">
          Dados Pessoais
        </h1>
        <p className="mt-4 text-sm">
          Duvidas no cadastro? <a className="text-LOW_BLUE underline font-bold" href="#">ajuda</a>
        </p>
        <input
          className="mt-8 border-0 border-b-2 border-BLACK focus:ring-0"
          type="text"
          placeholder="Nome"
          {...register("fullname")}
        />
        {errors.fullname && (
          <p className="font-medium text-red-600">
            {String(errors.fullname.message)}
          </p>
        )}
        <input
          className="mt-8 border-0 border-b-2 border-BLACK focus:ring-0"
          type="email"
          placeholder="E-mail"
          {...register("email")}
        />
        {errors.email && (
          <p className="font-medium text-red-600">
            {String(errors.email.message)}
          </p>
        )}
        <input
          className="mt-8 border-0 border-b-2 border-BLACK focus:ring-0"
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password && (
          <p className="font-medium text-red-600">
            {String(errors.password.message)}
          </p>
        )}
        <div className="relative">
          <input
            className="mt-8 w-full border-0 border-b-2 border-BLACK focus:ring-0"
            type="date"
            {...inputDateRegisterRef}
            onChange={updateInputMaskDate}
            ref={(e) => {
              inputDateRegisterRef.ref(e);
              inputDateRef.current = e;
            }}
          />
          <InputMask
            mask="99/99/9999"
            type="text"
            maskChar={null}
            value={inputMaskDate}
            onChange={handleDateChange}
          >
            {() =>
              <input
                placeholder="Data de Nascimento"
                className="absolute left-0 bottom-0 border-0 border-b-2 border-BLACK focus:ring-0 right-20"
                type="text"
              />
            }
          </InputMask>
        </div>
        {errors.date && (
          <p className="font-medium text-red-600">
            {String(errors.date.message)}
          </p>
        )}
        <InputMask
          mask="(99) 99999-9999"
          maskChar={null}
          className="mt-8 border-0 border-b-2 border-BLACK focus:ring-0"
          type="text"
          placeholder="Telefone"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="font-medium text-red-600">
            {String(errors.phone.message)}
          </p>
        )}
        <InputMask
          mask="99.999.999/9999-99"
          maskChar={null}
          className="mt-8 border-0 border-b-2 border-BLACK focus:ring-0"
          type="text"
          placeholder="CNPJ"
          {...register("cnpj")}
        />
        {errors.cnpj && (
          <p className="font-medium text-red-600">
            {String(errors.cnpj.message)}
          </p>
        )}
        <p className="max-w-80 text-xs mt-8">
          Ao clicar em &quotPróximo&quot e continuar com o seu cadastro, você está concordando com a nossa <a className="text-BLACK underline font-bold" href="#">Política de Privacidade</a>.
        </p>
        <button className="mx-auto my-6 w-1/2 min-w-40  bg-LOW_BLUE text-white text-xl font-bold underline py-2 rounded-[25px]" type="submit">
          Finalizar
        </button>
      </form>
      <ToastContainer />
    </div >
  );
}
