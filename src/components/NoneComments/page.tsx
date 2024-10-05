"use client";

import React from "react";
import Link from "next/link";


export default function Page() {

  return (
    <div className="w-full pt-20 pl-10 mx-auto shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold pb-4">Avaliações sobre a Franquia</h1>
      <div className="flex flex-row justify-start space-x-4 pl-2">

            <div className="flex items-center justify-center text-sm">
              <p>(0) Avaliações</p>
            </div>
          </div>
            <div className="flex w-full pt-4 pr-10">
                <hr className="border-[1px] w-full border-blue-800" />
            </div>

        <div className="flex justify-center items-center w-full py-20">
            <Link href={"#"}>
                <button className="flex items-center justify-center text-blue-800 gap-2 font-bold border-2 border-blue-800 rounded-full px-10 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
                    Avaliar franquia
                </button>
            </Link>
        </div>

        <div className="flex justify-center items-center w-90 pb-32">
            <p className="flex justify-center lg:text-md text-sm items-center bg-blue-100 text-blue-700 py-2 lg:px-20 px-16 rounded-full">Essa franquia não possui nenhuma avaliação     
                <span className="font-semibold">
                    . Seja o primeiro a avaliar
                </span></p>
        </div>
    </div>
  );
}


