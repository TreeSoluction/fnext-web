"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ICONS } from "@/constants/icons";

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreemNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <nav>
      <div className=" text-white font-semibold flex flex-row items-end space-x-4  bg-[#0D2048] w-full">
        <ul className="flex list-none justify-between text-lg bg-[#0D2048] gap-6 hidden h-full lg:flex">
          <li className="flex flex-row justify-center items-center gap-2 hover:text-zinc-300 hover:rounded rounded-5 p-2 border-b-4 border-transparent hover:border-b-4 hover:border-y-zinc-300">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              stroke="#fff"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1667 10.7787V12.2365C20.1667 15.9747 20.1667 17.844 19.0439 19.0053C17.9212 20.1667 16.1141 20.1667 12.5 20.1667H8.66667C5.05256 20.1667 3.24552 20.1667 2.12275 19.0053C1 17.844 1 15.9747 1 12.2365V10.7787C1 8.58568 1 7.48914 1.49757 6.58013C1.99513 5.67112 2.90416 5.10695 4.7222 3.97862L6.63886 2.78908C8.56067 1.59636 9.5216 1 10.5833 1C11.6451 1 12.606 1.59636 14.5278 2.78908L16.4445 3.97861C18.2626 5.10695 19.1715 5.67112 19.6691 6.58013"
                stroke="#fff"
                stroke-opacity="0.78"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13.4583 16.3333H7.70834"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <Link href="#">Home</Link>
          </li>

          <li className="flex flex-row stroke-white justify-center items-center gap-2 hover:text-zinc-300 hover:rounded rounded-5 p-2 border-b-4 border-transparent hover:border-b-4 hover:border-y-zinc-300">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              stroke="#fff"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.357147 3.02679C0.357147 1.42417 1.65632 0.125 3.25893 0.125H11.7411C13.3437 0.125 14.6429 1.42417 14.6429 3.02679V19.0982C14.6429 19.3525 14.4988 19.5849 14.2711 19.6979C14.0433 19.8111 13.7711 19.7854 13.5685 19.6317L7.5 15.028L1.43151 19.6317C1.22892 19.7854 0.956728 19.8111 0.72896 19.6979C0.501192 19.5849 0.357147 19.3525 0.357147 19.0982V3.02679ZM3.25893 1.46429C2.39599 1.46429 1.69643 2.16384 1.69643 3.02679V17.7496L7.09527 13.654C7.33456 13.4725 7.66545 13.4725 7.90474 13.654L13.3036 17.7496V3.02679C13.3036 2.16384 12.604 1.46429 11.7411 1.46429H3.25893Z"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.00064"
              />
            </svg>
            <Link href="#">Favoritos</Link>
          </li>

          <li className="flex flex-row justify-center items-center gap-2 hover:text-zinc-300 hover:rounded rounded-5 p-2 border-b-4 border-transparent hover:border-b-4 hover:border-y-zinc-300">
            <svg
              width="30"
              height="25"
              viewBox="0 0 24 24"
              stroke="#fff"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0003 21H15.0003M18.0003 8.6C18.0003 7.11479 17.3682 5.69041 16.2429 4.6402C15.1177 3.59 13.5916 3 12.0003 3C10.409 3 8.88288 3.59 7.75766 4.6402C6.63245 5.69041 6.0003 7.11479 6.0003 8.6C6.0003 11.2862 5.32411 13.1835 4.52776 14.4866C3.75646 15.7486 3.37082 16.3797 3.38515 16.5436C3.40126 16.7277 3.4376 16.7925 3.58633 16.9023C3.71872 17 4.34793 17 5.60636 17H18.3943C19.6527 17 20.2819 17 20.4143 16.9023C20.563 16.7925 20.5994 16.7277 20.6155 16.5436C20.6298 16.3797 20.2441 15.7486 19.4729 14.4866C18.6765 13.1835 18.0003 11.2862 18.0003 8.6Z"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Link href="#">Notificações</Link>
          </li>
        </ul>

        <div className="lg:flex hidden gap-4">
          
          <button className="bg-gradient-to-r from-blue-700 to-blue-950 hover:bg-blue-800 sm:p-2 inline-flex rounded-full relative gap-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
            <img src={ICONS.registered.person} alt="" />
            <option value="" className="text-white font-semibold items-center pr-6">
              Login
            </option>
          </button>
          
          <button className="bg-white sm:p-2 inline-flex rounded-full relative gap-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
            <img className="border-[1px] rounded-full border-gray-400" src={ICONS.registered.person} alt="" />
            <option value="" className="text-blue-800 font-semibold items-center">
              Sign Up
            </option>
          </button>
          


        </div>


        {/* Navbar para resposividade */}

        <div onClick={handleSmallerScreemNavigation} className="flex md:hidden">
          {menuIcon ? (
            <Image
              src="/icons/Franquias Registradas/design/close.svg"
              alt="close"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
            />
          ) : (
            <Image
              src="/icons/Franquias Registradas/design/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
            />
          )}
        </div>

        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[73px] right-0 bottom-0 left-[-2] flex justify-center items-center w-full h-screem border-t-2 border-blue-800 bg-MAIN_HIGH_BLUE text-center ease-in duration-300"
              : "md:hidden absolute top-[73px] right-0 left-[-110%] flex justify-center items-center w-full h-screem border-t-2 border-blue-800 bg-MAIN_HIGH_BLUE text-center ease-in duration-300"
          }
        >
          <div className="w-full">
            <ul className="font-bold text-2xl">
              <li
                onClick={handleSmallerScreemNavigation}
                className="flex list-none justify-center items-center gap-2 hover:bg-gray-600 hover:rounded rounded-5 p-5"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleSmallerScreemNavigation}
                className="flex list-none justify-center items-center gap-2 hover:bg-gray-600 hover:rounded rounded-5 p-5"
              >
                <Link href="/">Favoritos</Link>
              </li>
              <li
                onClick={handleSmallerScreemNavigation}
                className="flex list-none justify-center items-center gap-2 hover:bg-gray-600 hover:rounded rounded-5 p-5"
              >
                <Link href="/">Notificações</Link>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center mt-16">
              <Link href="" onClick={handleSmallerScreemNavigation}>
                <button className="bg-blue-800 inline-flex rounded-full relative py-2 w-[170px] items-center justify-center gap-4 transition ease-in-out delay-150 bg-blue-500  hover:-translate-y-1 hover:scale-110">
                  <img src={ICONS.registered.person} alt="" />
                  <option value="" className="text-white text-center font-bold">
                    Login
                  </option>
                </button>
              </Link>
              <Link href="" onClick={handleSmallerScreemNavigation}>
                <button className="border-2 border-blue-800 sm:p-2 inline-flex rounded-full relative py-2 w-[170px] mt-4 items-center justify-center gap-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110">
                  <img
                    className="border-[1px] rounded-full border-gray-400"
                    src={ICONS.registered.person}
                    alt=""
                  />
                  <option
                    value=""
                    className="text-blue-800 text-center font-bold"
                  >
                    Sign Up
                  </option>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
