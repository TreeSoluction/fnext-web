"use client";

import { AuthContext } from "@/contexts/auth.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

export default function LoginScreen() {
  const { loginUser } = useContext(AuthContext);

  const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address!" }),
    password: z.string().min(6, "Password must be at least 6 characters long!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    await loginUser(data);
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4">Insira suas credenciais</h1>
        <label className="mb-2">
          <span className="block text-gray-700">Email</span>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </label>
        <label className="mb-4">
          <span className="block text-gray-700">Senha</span>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
