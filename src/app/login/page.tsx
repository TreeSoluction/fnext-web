"use client";

import ErrorMessage from "@/components/Form/error-message";
import { InputStyled } from "@/components/Form/inputs";
import { APP_ROUTES } from "@/constants/app-route";
import { AuthContext } from "@/contexts/auth.context";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

export default function Home() {
  const { loginUser } = useContext(AuthContext);
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
    loginUser(data);
  };

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r from-GRAY to-LOW_PURPLE items-center justify-center px-2 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-lg p-6 sm:px-12 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px]  shadow-xl"
      >
        <h1 className="text-4xl my-2">Insira suas Credenciais</h1>
        <InputStyled label="E-mail" type="email" {...register("email")} />
        <ErrorMessage error={errors.email} />
        <InputStyled label="Senha" type="password" {...register("password")} />
        <ErrorMessage error={errors.password} />
        <p className="mt-4 text-sm">
          Esqueceu a senha?{" "}
          <a className="text-LOW_BLUE underline font-bold" href="#">
            Recuperar
          </a>
        </p>
        <p className="max-w-80 text-xs mt-8">
          Ao clicar em <strong>&quot;Entrar&quot;</strong> e continuar com o seu
          Login, você está concordando com a nossa{" "}
          <a className="text-BLACK underline font-bold" href="#">
            Política de Privacidade
          </a>
          .
        </p>
        <div>
          <a
            href={APP_ROUTES.public.register}
            className="inline-block my-6 w-1/2 min-w-30 bg-gray-400 text-white text-xl py-2 rounded-[25px] text-center"
          >
            Criar Conta
          </a>
          <button
            className="mx-auto my-6 w-1/2 min-w-30 bg-LOW_BLUE text-white text-xl font-bold py-2 rounded-[25px]"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
