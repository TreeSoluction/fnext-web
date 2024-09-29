"use client";

import ErrorMessage from "@/components/Form/error-message";
import { CreateUser } from "@/services/User/create.user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { notifyInfo, notifySuccess } from "../../services/notification";

export default function Home() {
  const router = useRouter();
  const RegisterSchema = z.object({
    fullname: z.string().min(1, "Nome não pode ser vazio!"),
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
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    notifyInfo("Registrando...");

    try {
      const response = await CreateUser({
        fullName: data.fullname,
        email: data.email,
        password: data.password,
      });

      setTimeout(() => {
        notifySuccess("Registrado com sucesso!");
      }, 1000);

      setTimeout(() => {
        notifySuccess(
          "Você será redirecionado para a tela principal em alguns instantes",
        );
      }, 1200);

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {}
  };

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r items-center justify-center px-2 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-lg p-6 sm:px-12 sm:py-6 bg-white rounded-[5px] sm:rounded-[10px] shadow-xl"
      >
        <h1 className="text-4xl my-2">Dados Pessoais</h1>
        <p className="mt-4 text-sm">
          Dúvidas no cadastro?{" "}
          <a className="text-LOW_BLUE underline font-bold" href="#">
            Ajuda
          </a>
        </p>
        <label className="mb-4">
          <span className="block text-gray-700">Nome completo</span>
          <input
            type="text"
            {...register("fullname")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage error={errors.fullname} />
        </label>
        <label className="mb-4">
          <span className="block text-gray-700">E-mail</span>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage error={errors.email} />
        </label>
        <label className="mb-4">
          <span className="block text-gray-700">Senha</span>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage error={errors.password} />
        </label>
        <p className="max-w-80 text-xs mt-8">
          Ao clicar em <strong>&quot;Finalizar&quot;</strong> e continuar com o
          seu cadastro, você está concordando com a nossa{" "}
          <a className="text-BLACK underline font-bold" href="#">
            Política de Privacidade
          </a>
          .
        </p>
        <button
          className="mx-auto my-6 w-1/2 min-w-40 bg-LOW_BLUE text-white text-xl font-bold underline py-2 rounded-[25px]"
          type="submit"
        >
          Finalizar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
