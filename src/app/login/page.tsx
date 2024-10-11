
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyInfo,
  notifySuccess,
  notifyError,
} from "../../services/notification";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/Form/error-message";
import { InputStyled } from "@/components/Form/inputs";
import { APP_ROUTES } from "@/constants/app-route";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function Home() {
  const LoginSchema = z.object({
    email: z.string().email({ message: "Email Inválido!" }),
    password: z.string().min(6, "A senha tem que ter no mínimo 6 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  function SetCookie(name: string, value: string) {
    Cookies.set(name, value);
  }

  const resetPasswordField = () => {
    setValue("password", null);
  };

  const onSubmit = async (data) => {
    resetPasswordField();

    notifyInfo("Entrando...");

    api
      .post("/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 200) {
          notifySuccess("Login Realizado!");
          SetCookie("token", res.data.token);
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          notifyError("Usuario nao encontrado");
          return;
        }

        if (err.response.status === 401) {
          notifyError("Senha incorreta");
          return;
        }

        notifyError(
          "Ocorreu um erro inesperado ao servidor, tente novamente mais tarde!"
        );
      });
  };

  // Estado para mostrar ou ocultar a senha
  const [showPassword, setShowPassword] = React.useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex w-full min-h-screen bg-white items-center justify-center px-2 sm:py-20 py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:w-full w-96 max-w-md p-6 sm:px-12 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px] shadow-2xl"
      >
        <div className="flex items-center justify-center  py-12 w-full">
          <img src={ICONS.logo_02} alt="" />
        </div>
        <h1 className="flex justify-center sm:text-4xl text-3xl my-2">Identifique-se</h1>
        <h3 className="flex justify-center sm:text-lg text-md text-slate-400 font-semibold">Digite seu e-mail e senha</h3>
        <div className="w-full mt-10">
          <p className="font-semibold">E-mail</p>
          <InputStyled label="jonh@yampi.com.br" type="email" {...register("email")} />
          <ErrorMessage error={errors.email} />
        </div>
        <div className="w-full mt-6">
          <div className="flex flex-row justify-between font-semibold">
            <p className="flex items-center">Senha</p>
            <p className="text-sm text-LOW_BLUE font-bold hover:underline">
              <Link href="/">
                Esqueci minha senha{" "}
              </Link> 
            </p>
          </div>
          <div className="relative"> {/* Adicionando um contêiner relativo para o campo de senha */}
            <InputStyled 
              label="Digite sua senha" 
              type={showPassword ? "text" : "password"} // Alterando o tipo baseado no estado
              {...register("password")} 
            />
            {/* Adicionando o ícone de olho ao lado do campo de senha */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-4" // Ajuste a posição conforme necessário
              aria-label="Toggle password visibility"
            >
              {showPassword 
              ? 
              // <OlhoSVG /> 
              <img src={ICONS.olho} className="w-6 h-6 flex items-center justify-center" alt="" />
              : 
              <img src={ICONS.olho_fechado} className="w-6" alt="" />
              // <OlhoFechadoSVG />
              } {/* Alterando o ícone baseado no estado */}
            </button>
          </div>
          <ErrorMessage error={errors.password} />
        </div>
        
        <div className="flex items-center justify-center w-full py-6">
            <Link href={"#"} className="w-full">
              <button className="flex items-center justify-center bg-blue-800 font-bold text-white w-full py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">
                Entrar
              </button>
          </Link>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center w-full mt-8 mb-16">
          <p>
            Primeira vez no Fenext?
          </p>
          <Link href={"/register"}>
            <p className="text-blue-800 font-semibold hover:underline">Criar conta</p>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

