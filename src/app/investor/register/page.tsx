"use client";

import ErrorMessage from "@/components/Form/error-message";
import { InputDate, InputMasked, InputStyled } from "@/components/Form/inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import api from "../../../services/api";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from "../../../services/notification";

export default function Home() {
  const router = useRouter();
  const RegisterSchema = z.object({
    fullname: z.string().min(1, "Nome não pode ser vazio!"),
    email: z.string().email({ message: "Email Inválido!" }),
    password: z.string().min(6, "A senha tem que ter no mínimo 6 caracteres!"),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data Inválida!"),
    phone: z
      .string()
      .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone Inválido!")
      .transform((phone) => phone.replace(/[()\-]/g, "")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  function SetCookie(value: string) {
    Cookies.set("ownerid", value);
  }

  const onSubmit = async (data) => {
    notifyInfo("Registrando...");

    api
      .post("/investor", {
        name: data.fullname,
        email: data.email,
        password: data.password,
        birth_date: data.date,
        phone: data.phone,
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
        if (err.response.status < 500) {
          notifyError(err.response.data.message);
          return;
        }

        notifyError(
          "Ocorreu um erro inesperado ao servidor, tente novamente mais tarde!",
        );
      });
  };

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r from-GRAY to-LOW_PURPLE items-center justify-center px-2 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-lg p-6 sm:px-12 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px]  shadow-xl"
      >
        <h1 className="text-4xl my-2">Dados Pessoais</h1>
        <p className="mt-4 text-sm">
          Duvidas no cadastro?{" "}
          <a className="text-LOW_BLUE underline font-bold" href="#">
            ajuda
          </a>
        </p>
        <InputStyled label="Nome" {...register("fullname")} />
        <ErrorMessage error={errors.fullname} />
        <InputStyled label="E-mail" type="email" {...register("email")} />
        <ErrorMessage error={errors.email} />
        <InputStyled label="Senha" type="password" {...register("password")} />
        <ErrorMessage error={errors.password} />
        <InputDate
          label="Data de Nascimento"
          getInputDateRegisterRef={() => register("date")}
          setValueInputDate={(value) => setValue("date", value)}
        />
        <ErrorMessage error={errors.date} />
        <InputMasked
          mask="(99) 99999-9999"
          label="Telefone"
          {...register("phone")}
        />
        <ErrorMessage error={errors.phone} />
        <p className="max-w-80 text-xs mt-8">
          Ao clicar em <strong>&quot;Finalizar&quot;</strong> e continuar com o
          seu cadastro, você está concordando com a nossa{" "}
          <a className="text-BLACK underline font-bold" href="#">
            Política de Privacidade
          </a>
          .
        </p>
        <button
          className="mx-auto my-6 w-1/2 min-w-40  bg-LOW_BLUE text-white text-xl font-bold underline py-2 rounded-[25px]"
          type="submit"
        >
          Finalizar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
