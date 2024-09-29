"use client";

import Image from "next/image";
import React, { useContext, useEffect } from "react";

import { AuthContext } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";

type MenuProps = {
  closeMenuFunction: () => void;
};

function Menu({ closeMenuFunction }: MenuProps) {
  const { logOut, owner, user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    console.log(user === null);
  });

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="w-full h-full bg-black opacity-30"
        onClick={closeMenuFunction}
      ></button>
      <nav>
        <ul className="bg-white rounded-[2rem] absolute w-10/12 max-w-72 right-10 sm:right-40 top-10 sm:top-20 text-sm ">
          {user ? (
            <>
              <div className="bg-white p-2 px-6 font-bold ">Minha Franquia</div>
              <div className="bg-white p-2 px-6 font-bold ">
                <button onClick={() => router.push("/account/edit")}>
                  Conta
                </button>
              </div>
              <span className="block h-[1px] w-full my-2 bg-PASTEL"></span>
              <div className="bg-white p-2 px-6 font-bold ">
                <button onClick={logOut}>Sair da conta</button>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-2 px-6 font-bold ">
                <button onClick={() => router.push("/login")}>Entrar</button>
              </div>
              <div className="bg-white p-2 px-6  font-bold">
                <button onClick={() => router.push("/register")}>
                  Registrar-se
                </button>
              </div>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default function MenuBar() {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleMenuBar = () => setShowMenu((prev) => !prev);

  return (
    <>
      <button
        className="bg-white sm:p-2 rounded-full relative flex items-center gap-2"
        onClick={handleMenuBar}
      >
        <div>
          <div className="flex flex-col-reverse m-4 gap-1">
            <span className="block flex-grow-0 bg-black w-6 h-1 rounded-sm"></span>
            <span className="block flex-grow-0 bg-black w-6 h-1 rounded-sm"></span>
            <span className="block flex-grow-0 bg-black w-6 h-1 rounded-sm"></span>
          </div>
        </div>
        <div className="rounded-full overflow-hidden border hidden sm:block">
          <Image
            width={50}
            height={50}
            src="/img/generic-person.jpg"
            alt="profile picture"
          />
        </div>
      </button>
      {showMenu && <Menu closeMenuFunction={handleMenuBar} />}
    </>
  );
}
