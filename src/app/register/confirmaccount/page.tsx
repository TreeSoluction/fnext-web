"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyInfo,
  notifySuccess,
  notifyError,
} from "../../../services/notification";
import Cookies from "js-cookie";

export default function Home() {
  const [ownerid, setOwnerId] = useState("");
  const [title, setTitle] = useState(
    "Confirme o codigo enviado para o seu email..."
  );

  const ConfirmationWithCookieSchema = z.object({
    code: z.string().length(4, { message: "Formato Invalido!" }),
  });

  const ConfirmationOutCookieSchema = z.object({
    code: z.string().length(4, { message: "Formato Invalido!" }),
    email: z.string().email({ message: "Email Invalido!" }).nullable(),
  });

  useEffect(() => {
    function SearchOwnerCookie(): string {
      const cookie = Cookies.get("ownerid");
      if (!cookie) {
        return "";
      } else {
        return cookie;
      }
    }

    setOwnerId(SearchOwnerCookie());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(
      ownerid ? ConfirmationWithCookieSchema : ConfirmationOutCookieSchema
    ),
  });

  const onSubmit = async (data) => {
    notifyInfo("Confirmando...");

    api
      .post("/owner/verifyemail", {
        ownerid: parseInt(ownerid),
        code: data.code,
        email: data.email,
      })
      .then((res) => {
        if (res.status === 200) {
          notifySuccess("Email verificado!");
          setTitle("Email confirmado com Sucesso!");
          reset();
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          notifyError("Codigo incorreto!");
        }
      });
  };

  return (
    <div className="xl:flex">
      <div className="flex w-full xl:h-screen bg-HIGH_BLUE items-center justify-center">
        <div className="xl:text-9xl text-7xl text-white font-bold">FENEXT</div>
      </div>
      <div className="flex-col h-screen bg-gradient-to-b from-blue-500 to-blue-600 xl:p-14 pl-14 pr-14 pt-10 ">
        <div className="md:text-6xl xl:text-7xl text-4xl xl:mt-20 xl:mr-24 xl:ml-24 text-white font-semibold">
          {title}
        </div>
        <div className="mt-16">
          <form onSubmit={handleSubmit(onSubmit)} className="xl:ml-24 xl:mr-24">
            <label className="text-white">Codigo de Confirmacao</label>
            <input
              {...register("code")}
              className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white"
            />
            {errors.code && (
              <p style={{ color: "red", fontWeight: 500 }}>
                {String(errors.code?.message)}
              </p>
            )}
            {ownerid === "" && (
              <>
                <label className="text-white">Email</label>
                <input
                  {...register("email")}
                  className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white"
                />
                {errors.email && (
                  <p style={{ color: "red", fontWeight: 500 }}>
                    {String(errors.email?.message)}
                  </p>
                )}
              </>
            )}
            <button
              type="submit"
              className="text-white transition duration-200 outline-none focus:outline hover:outline hover:outline-5 focus:outline-5 focus:outline-blue-600 hover:outline-blue-600 ring-1 hover:bg-white hover:text-black bg-transparent border-2 border-white mt-6 h-10 w-full rounded-sm font-semibold"
            >
              Verificar Email
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
