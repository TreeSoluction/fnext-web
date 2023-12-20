'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from "../services/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyInfo, notifySuccess, notifyError } from '../services/notification'

export default function Home() {
  const RegisterSchema = z.object({
    fullname: z.string(),
    email: z.string().email({ message: "Email Invalido!" }),
    password: z.string().min(6, { message: "A senha tem que ter no mínimo 6 letras, números ou símbolos" }),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data) => {
    notifyInfo("Registrando...")

    api.post("/owner", {
      name: data.fullname,
      email: data.email,
      password: data.password
    }).then(res => {
      if (res.status === 201) {
        notifySuccess("Usuario registrado!")
        reset();
      }
    }).catch(err => {
      if (err.response.status === 409) {
        notifyError("Email ja esta em uso!")
      }
    })
  };

  return (
    <div className="xl:flex">
      <div className="flex w-full xl:h-screen bg-HIGH_BLUE items-center justify-center">
        <div className="xl:text-9xl text-7xl text-white font-bold">FENEXT</div>
      </div>
      <div className="flex-col h-screen bg-LOW_BLUE xl:p-14 pl-14 pr-14 pt-10">
        <div className="md:text-6xl xl:text-7xl text-4xl xl:mt-20 xl:mr-24 xl:ml-24 text-white font-semibold">
          Crie o seu cadastro gratuito em poucos passos...
        </div>
        <div className="mt-16">
          <form onSubmit={handleSubmit(onSubmit)} className="xl:ml-24 xl:mr-24">
            <label className="text-white">Nome Completo</label>
            <input {...register('fullname')} className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white" />
            <label className="text-white">Email</label>
            <input {...register('email')} className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white" />
            {errors.email && <p style={{ color: "red", fontWeight: 500 }}>{errors.email.message}</p>}
            <label className="text-white">Senha</label>
            <input {...register('password')} type="password" className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white" />
            {errors.password && <p style={{ color: "red", fontWeight: 500 }}>{errors.password.message}</p>}
            <button type='submit' className="text-white transition duration-200 outline-none focus:outline hover:outline hover:outline-5 focus:outline-5 focus:outline-blue-600 hover:outline-blue-600 ring-1 hover:bg-white hover:text-black bg-transparent border-2 border-white mt-6 h-10 w-full rounded-sm font-semibold">Registrar</button>
          </form>
        </div>
        <ToastContainer />
      </div >
    </div >
  );
}
