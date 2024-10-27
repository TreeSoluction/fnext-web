"use client";

import { CreateOwner } from "@/services/Owner/create.owner";
import { GetUserData } from "@/services/User/get.user";
import { LoginUser } from "@/services/User/post.user";
import { notifyError, notifySuccess } from "@/services/notification";
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
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [owner, setOwner] = useState<IOwner | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.BearerToken;
    if (!token) {
      logOut();
      return;
    }

    if (cookies.User) {
      const parse = JSON.parse(cookies.User) as IUser;
      getUserData(parse.id as string);
    }
  }, []);

  const loginUser = (data: any) => {
    LoginUser(data)
      .then((response) => {
        notifySuccess("Login successful!");
        setUser({
          name: response.name,
          id: response.id,
          email: response.email,
        });

        if (response.owner) {
          setOwner({
            name: response.owner.name,
            id: response.owner.id,
            phone: response.owner.phone,
          });

          setCookie(
            null,
            "Owner",
            JSON.stringify({
              name: response.owner.name,
              id: response.owner.id,
              email: response.owner.email,
              phone: response.owner.phone,
              birth_date: response.owner.birth_date,
            }),
            {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            },
          );
        }

        setCookie(null, "BearerToken", response.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        setCookie(
          null,
          "User",
          JSON.stringify({
            name: response.name,
            id: response.id,
            email: response.email,
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
          name: res.data.data.name.toString(),
          id: res.data.data.id.toString(),
          email: res.data.data.email.toString(),
        });

        if (res.data.data.Owner) {
          setOwner({
            name: res.data.data.Owner.name.toString(),
            id: res.data.data.Owner.id.toString(),
            phone: res.data.data.Owner.phone.toString(),
          });

          setCookie(
            null,
            "Owner",
            JSON.stringify({
              name: res.data.data.Owner.name.toString(),
              id: res.data.data.Owner.id.toString(),
              phone: res.data.data.Owner.phone.toString(),
            }),
            {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            },
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logOut();
        }
      });
  };

  const logOut = () => {
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
