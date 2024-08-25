"use client";

import { CreateOwner } from "@/services/Owner/create.owner";
import { LoginUser } from "@/services/User/post.user";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from "@/services/notification";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | undefined>(undefined);
  const [owner, setOwner] = useState<any | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const { User: user } = parseCookies(null);
    const { Owner: owner } = parseCookies(null);
    if (user) {
      setUser(JSON.parse(user));
      if (owner) setOwner(JSON.parse(owner));
      return;
    }
  }, []);

  const loginUser = (data: any) => {
    LoginUser(data)
      .then((response) => {
        notifySuccess("Login successful!");
        console.log(response.data);
        setUser({
          name: response.data.name,
          id: response.data.id,
          email: response.data.email,
        });

        if (response.data.owner) {
          setOwner({
            name: response.data.owner.name,
            id: response.data.owner.id,
            email: response.data.owner.email,
            phone: response.data.owner.phone,
            birth_date: response.data.owner.birth_date,
            cpf: response.data.owner.cpf,
          });

          setCookie(
            null,
            "Owner",
            JSON.stringify({
              name: response.data.owner.name,
              id: response.data.owner.id,
              email: response.data.owner.email,
              phone: response.data.owner.phone,
              birth_date: response.data.owner.birth_date,
              cpf: response.data.owner.cpf,
            }),
            {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            },
          );
        }

        setCookie(null, "BearerToken", response.data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(
          null,
          "User",
          JSON.stringify({
            name: response.data.name,
            id: response.data.id,
            email: response.data.email,
          }),
          {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          },
        );
        router.push("/");
      })
      .catch((err) => {
        notifyError("Login falhou. Verifique as credenciais.");
      });
  };

  const registerOwner = (data: any) => {
    CreateOwner({ ...data, userID: user.id, name: user.name })
      .then((response) => {
        notifySuccess("Register successful!");
        setOwner({
          name: response.data.name,
          id: response.data.id,
          email: response.data.email,
          phone: response.data.phone,
          birth_date: response.data.birth_date,
          cpf: response.data.cpf,
        });
        setCookie(
          null,
          "Owner",
          JSON.stringify({
            name: response.data.name,
            id: response.data.id,
            email: response.data.email,
            phone: response.data.email,
            birth_date: response.data.email,
            cpf: response.data.email,
          }),
          {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          },
        );
        router.push("/");
      })
      .catch((err) => {
        notifyError("Registro falhou. Verifique as credenciais.");
      });
  };

  const logOut = () => {
    notifyInfo("Voce foi deslogado");
    destroyCookie(undefined, "User");
    destroyCookie(undefined, "BearerToken");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, owner, loginUser, registerOwner, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
