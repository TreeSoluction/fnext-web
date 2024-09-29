"use client";

import { CreateOwner } from "@/services/Owner/create.owner";
import { GetUserData } from "@/services/User/get.user";
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

interface IUser {
  name: string;
  id: string;
  email: string;
}

interface IOwner {
  name: string;
  id: string;
  phone: string;
  cpf: string;
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [owner, setOwner] = useState<IOwner | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.BearerToken;
    console.log("Aqui esta o token " + token);

    if (!token) {
      logOut();
      return;
    }
    getUserData(user?.id as string);
  }, []);

  const loginUser = (data: any) => {
    LoginUser(data)
      .then((response) => {
        notifySuccess("Login successful!");
        setUser({
          name: response.data.name,
          id: response.data.id,
          email: response.data.email,
        });

        if (response.data.owner) {
          setOwner({
            name: response.data.owner.name,
            id: response.data.owner.id,
            phone: response.data.owner.phone,
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
    CreateOwner({
      ...data,
      userID: user?.id,
      name: user?.name,
    })
      .then((response) => {
        notifySuccess("Register successful!");
        router.push("/");
      })
      .catch((err) => {
        notifyError("Registro falhou. Verifique as credenciais.");
      });
  };

  const getUserData = (id: string) => {
    GetUserData(id)
      .then((res) => {
        setUser({
          name: res.data.name,
          id: res.data.id,
          email: res.data.email,
        });
        if (res.data.Owner) {
          setOwner({
            name: res.data.name,
            id: res.data.id,
            phone: res.data.phone,
            cpf: res.data.cpf,
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logOut();
        }
      });
  };

  const logOut = () => {
    notifyInfo("Voce foi deslogado");
    destroyCookie(undefined, "User");
    destroyCookie(undefined, "Owner");
    destroyCookie(undefined, "BearerToken");
    setUser(undefined);
    setOwner(undefined);
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