"use client";

import { AuthContext } from "@/contexts/auth.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { notifyInfo, notifySuccess } from "../../../services/notification";

export default function Home() {
  const { registerOwner } = useContext(AuthContext);
  const RegisterSchema = z.object({
    birth_date: z.string(),
    phone: z.string().regex(/^\d{10,11}$/, "Invalid phone number"), // Example regex for 10 or 11 digits
    cpf: z.string().regex(/^\d{11}$/, "Invalid CPF number"), // Example regex for 11 digits
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    notifyInfo("Registrando...");
    await registerOwner(data);
    notifySuccess("Registrado com sucesso!");
  };

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r from-gray-300 to-purple-300 items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Cadastro de Proprietário</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Data
            </label>
            <input
              type="date"
              id="date"
              {...register("birth_date")}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.date ? "border-red-500" : ""}`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Digite o telefone"
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* CPF Field */}
          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-700"
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              {...register("cpf")}
              placeholder="Digite o CPF"
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.cpf ? "border-red-500" : ""}`}
            />
            {errors.cpf && (
              <p className="mt-1 text-sm text-red-500">{errors.cpf.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
