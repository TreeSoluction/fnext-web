"use client";

import { LoginUser } from "@/services/User/post.user";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const { User: user } = parseCookies(null);
    if (user) {
      setUser(JSON.parse(user));
      return;
    }
  }, []);

  const loginUser = (data: any) => {
    LoginUser(data).then((response) => {
      setUser({
        name: response.data.name,
        id: response.data.id,
        email: response.data.email,
      });
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
    });
  };

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
