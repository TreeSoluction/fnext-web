"use client";

import ErrorMessage from "@/components/Form/error-message";
import { InputStyled } from "@/components/Form/inputs";
import { ICONS } from "@/constants/icons";
import { createUser } from "@/services/User/create.user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { notifyInfo, notifySuccess } from "../../services/notification";

export default function Home() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha
  const RegisterSchema = z.object({
    fullname: z.string().min(1, "Nome não pode ser vazio!"),
    email: z.string().email({ message: "Email Inválido!" }),
    password: z.string().min(6, "A senha tem que ter no mínimo 6 caracteres!"),
    phone: z
      .string()
      .min(1, "O telefone é obrigatório!")
      .regex(/^[0-9\s]+$/, "O telefone deve conter apenas números!"),
  });

  const {
    register,
    handleSubmit,
    watch, // Para observar o valor da senha
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    notifyInfo("Registrando...");

    const result = await createUser({
      fullName: data.fullname,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });

    if (result?.status == 200) {
      notifySuccess(
        "Registrado com sucesso! Voce será redirecionado para a página de login.",
      );
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-white items-center justify-center px-2 sm:py-20 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:w-full w-96 max-w-md p-6 sm:px-12 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px] shadow-2xl"
      >
        <div className="flex items-center justify-center py-10 w-full">
          <img src={ICONS.logo_02} alt="Logo" />
        </div>

        <div className="flex flex-col w-full mb-10">
          <h1 className="flex justify-center sm:text-4xl text-3xl mb-4">
            Criação de conta
          </h1>
          <h3 className="flex flex-col items-center justify-center sm:text-md text-sm text-slate-400 font-semibold">
            Cadastre-se e abra as portas para um mundo
            <span className="flex justify-center">
              {" "}
              de oportunidades no franchising!
            </span>
          </h3>
        </div>

        <p className="font-semibold">Nome completo</p>
        <InputStyled
          label="Ex.: Rafaele Ribeiro de Freitas"
          {...register("fullname")}
        />
        <ErrorMessage error={errors.fullname} />

        <p className="font-semibold mt-4">E-mail</p>
        <InputStyled label="E-mail" type="email" {...register("email")} />
        <ErrorMessage error={errors.email} />
        <p className="font-semibold mt-4">Telefone</p>
        <InputStyled
          label="(00) 00000-0000"
          type="tel"
          {...register("phone")}
        />
        <ErrorMessage error={errors.phone} />

        <p className="font-semibold mt-4">Crie uma senha</p>
        <InputStyled
          label="Digite sua senha"
          type={showPassword ? "text" : "password"} // Controla se a senha é mostrada
          {...register("password")}
          value={watch("password") || ""} // Mantém o valor da senha
        />
        <ErrorMessage error={errors.password} />
        <p className="text-sm mt-2">Mínimo de 8 caracteres.</p>

        <p className="font-semibold mt-6">Confirmar senha</p>
        <InputStyled
          label="Digite sua senha novamente"
          type={showPassword ? "text" : "password"} // Controla se a senha é mostrada
          {...register("confirmPassword")}
          value={watch("confirmPassword") || ""} // Supondo que você tenha um campo de confirmação
        />
        <ErrorMessage error={errors.confirmPassword} />

        <div className="flex flex-row justify-end gap-2 mt-4">
          <p>Mostrar senhas</p>
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <img
                src={ICONS.olho_fechado}
                className="w-6 h-6 flex items-center justify-center"
                alt="Ocultar senha"
              />
            ) : (
              <img
                src={ICONS.olho}
                className="w-6 h-6 flex items-center justify-center"
                alt="Mostrar senha"
              />
            )}
          </button>
        </div>

        <div className="flex items-center justify-center w-full pt-12">
          <Link href={"#"} className="w-full">
            <button
              onClick={handleSubmit(onSubmit)}
              className="flex items-center justify-center bg-blue-800 font-bold text-white w-full py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105"
            >
              Cadastrar
            </button>
          </Link>
        </div>

        <div className="w-full flex flex-row mt-4">
          <p className="text-center text-[13px]">
            Ao criar uma conta, você concorda com os
            <Link href={"/"}>
              <span className="font-semibold text-blue-800 px-[4px] hover:underline w-full">
                termos de uso
              </span>
            </Link>
            e
            <Link href={"/"}>
              <span className="font-semibold text-blue-800 px-[4px] hover:underline w-full">
                Política de Privacidade da Fenext.
              </span>
            </Link>
          </p>
        </div>

        <div className="w-full py-8 flex flex-row justify-center font-semibold">
          Já tem uma conta?
          <Link href={"/login"}>
            <span className="font-semibold text-blue-800 px-2 hover:underline w-full">
              Entrar
            </span>
          </Link>
        </div>

        <div className="w-full flex flex-row justify-center text-center text-[12px] mb-6">
          Utilizaremos seus dados para criar sua conta de acesso e enviar
          informações que te ajudem.
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
