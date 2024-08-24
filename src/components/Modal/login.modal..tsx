"use client";

import ErrorMessage from "@/components/Form/error-message";
import { InputStyled } from "@/components/Form/inputs";
import { GetUserData } from "@/services/User/get.user";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from "../../services/notification";

export default function LoginModal({ isOpen, onClose }) {
  const router = useRouter();
  const LoginSchema = z.object({
    email: z.string().email({ message: "Email Inválido!" }),
    password: z.string().min(6, "A senha tem que ter no mínimo 6 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  function SetCookie(value: string) {
    Cookies.set("ownerid", value);
  }

  const onSubmit = async (data) => {
    notifyInfo("Entrando...");

    const response = await GetUserData("6aab6fea-ecdb-4b11-9756-f6e795cbff70");

    if (response.status != 200) {
      notifyError("Erro ao realizar login!");
      return;
    }

    notifySuccess("Logado com sucesso!");
  };

  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-lg p-6 sm:px-12 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px]  shadow-xl"
          >
            <div className="flex">
              <h1 className="text-4xl my-2 align-top justify-start">
                Dados Pessoais
              </h1>
              <button className="text-1xl ml-14 mb-4" onClick={onClose}>
                Sair
              </button>
            </div>

            <p className="mt-4 text-sm">
              Duvidas no cadastro?{" "}
              <a className="text-LOW_BLUE underline font-bold" href="#">
                ajuda
              </a>
            </p>
            <InputStyled label="E-mail" type="email" {...register("email")} />
            <ErrorMessage error={errors.email} />
            <InputStyled
              label="Senha"
              type="password"
              {...register("password")}
            />
            <ErrorMessage error={errors.password} />
            <p className="max-w-80 text-xs mt-8">
              Ao clicar em <strong>&quot;Finalizar&quot;</strong> e continuar
              com o seu cadastro, você está concordando com a nossa{" "}
              <a className="text-BLACK underline font-bold" href="#">
                Política de Privacidade
              </a>
              .
            </p>
            <button
              className="mx-auto my-6 w-1/2 min-w-40  bg-LOW_BLUE text-white text-xl font-bold underline py-2 rounded-[25px]"
              type="submit"
            >
              Entrar
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
