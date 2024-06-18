"use client";

import { APP_ROUTES } from "@/constants/app-route";
import Image from "next/image";
import React from "react";

import { userLogout } from "@/functions/user-logout";

type MenuProps = {
  closeMenuFunction: () => void;
};

function Menu({ closeMenuFunction }: MenuProps) {
  return (
    <div className="fixed inset-0 z-50">
      <button
        className="w-full h-full bg-black opacity-30"
        onClick={closeMenuFunction}
      ></button>
      <nav>
        <ul className="bg-white rounded-[2rem] absolute w-10/12 max-w-72 right-10 sm:right-40 top-10 sm:top-20 text-sm ">
          <li>
            <a
              href="#"
              className="block p-3 hover:bg-slate-100 rounded-md mt-4 mx-2"
            >
              Mensagem
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 hover:bg-slate-100 rounded-md mx-2"
            >
              Salvos
            </a>
          </li>
          <span className="block h-[1px] w-full my-2 bg-PASTEL"></span>
          <li>
            <a
              href="#"
              className="block p-3 hover:bg-slate-100 rounded-md mx-2"
            >
              Minha Franquia
            </a>
          </li>
          <li>
            <a
              href={APP_ROUTES.private.franchises}
              className="block p-3 hover:bg-slate-100 rounded-md mx-2"
            >
              Cadastrar Minha Franquia
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 hover:bg-slate-100 rounded-md mx-2"
            >
              Conta
            </a>
          </li>
          <span className="block h-[1px] w-full my-2 bg-PASTEL"></span>
          <li>
            <a
              href="#"
              className="block p-3 hover:bg-slate-100 rounded-md mx-2"
            >
              Central de ajuda
            </a>
          </li>
          <li>
            <button
              onClick={userLogout}
              className="block w-[-webkit-fill-available] text-start p-3 hover:bg-red-100 rounded-md mb-4 mx-2"
            >
              Sair da conta
            </button>
          </li>
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
