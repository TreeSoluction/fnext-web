"use client";

import FranchiseCard from "@/components/Cards/franchise";
import InfoFranchiseCard from "@/components/Cards/info-franchise";
import FilterHome from "@/components/FilterHome";
import FilterSegments from "@/components/FilterHome/filter-segments";
import Header from "@/components/Header";
import MenuBar from "@/components/Header/menu";
import ListFranchise from "@/components/List/franchises";
import franchiseList from "@/constants/franchiseList";

import LoginModal from "@/components/Modal/login.modal.";
import RegisterModal from "@/components/Modal/register.modal";
import { APP_ROUTES } from "@/constants/app-route";
import { useEffect, useState } from "react";

export default function Home() {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setRegisterModalOpen(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div>
      <Header>
        <div className="flex flex-wrap-reverse justify-center items-center gap-4">
          <a
            className="text-sm text-white font-bold capitalize underline text-center"
            href={APP_ROUTES.private.franchises}
          >
            Cadastrar minha franquia
          </a>
          <MenuBar />
        </div>
      </Header>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      <div className="bg-MAIN_HIGH_BLUE pt-12 pb-8 flex justify-center">
        <FilterHome />
      </div>
      <div className="max-w-[1200px] m-auto p-10">
        <FilterSegments />
      </div>
      <div className="max-w-[1400px] m-auto">
        <div className="flex">
          <h2 className="font-semibold text-lg">Indicados</h2>
          <span className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </span>
          <a className="text-sm font-semibold underline m-1" href="#">
            Ver todos
          </a>
        </div>
      </div>
      <span className="block h-px my-2 w-full bg-GRAY"></span>
      <div className="max-w-[1300px] m-auto">
        <ListFranchise />
      </div>
      <span className="block h-px my-2 mb-10 w-full bg-GRAY"></span>
      <div className="flex flex-wrap gap-24 items-center justify-center max-w-[1300px] m-auto">
        <FranchiseCard {...franchiseList[0]} />
        <InfoFranchiseCard />
      </div>
      <div className="max-w-[1300px] m-auto">
        <ListFranchise />
      </div>
      <button className="flex gap-4 bg-MAIN_HIGH_BLUE p-8 py-2 m-auto my-20 rounded-full text-white font-bold text-sm">
        Filtrar
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="white"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="0.1"
              d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
              fill="#32323"
            />{" "}
            <path
              opacity="0.1"
              d="M21 17C21 18.1046 20.1046 19 19 19C17.8954 19 17 18.1046 17 17C17 15.8954 17.8954 15 19 15C20.1046 15 21 15.8954 21 17Z"
              fill="#32323"
            />{" "}
            <path
              opacity="0.1"
              d="M7 17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17Z"
              fill="#32323"
            />{" "}
            <path
              d="M5 3L5 15"
              stroke="#32323"
              stroke-width="2"
              stroke-linecap="round"
            />{" "}
            <path
              d="M5 19L5 21"
              stroke="#32323"
              stroke-width="2"
              stroke-linecap="round"
            />{" "}
            <path
              d="M12 3L12 5"
              stroke="#32323"
              stroke-width="2"
              stroke-linecap="round"
            />{" "}
            <path
              d="M19 19L19 21"
              stroke="#32323"
              stroke-width="2"
              stroke-linecap="round"
            />{" "}
            <path
              d="M12 9L12 21"
              stroke="#32323"
              stroke-width="2"
              stroke-linecap="round"
            />{" "}
            <path
              d="M19 3V15"
              stroke="#32323"
              stroke-width="2"
              stroke-linecap="round"
            />{" "}
            <path
              d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
              stroke="#32323"
              stroke-width="2"
            />{" "}
            <path
              d="M21 17C21 18.1046 20.1046 19 19 19C17.8954 19 17 18.1046 17 17C17 15.8954 17.8954 15 19 15C20.1046 15 21 15.8954 21 17Z"
              stroke="#32323"
              stroke-width="2"
            />{" "}
            <path
              d="M7 17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17Z"
              stroke="#32323"
              stroke-width="2"
            />{" "}
          </g>
        </svg>
      </button>
      <footer className="p-10 bg-MAIN_HIGH_BLUE"></footer>
    </div>
  );
}
