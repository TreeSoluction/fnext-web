"use client";

import Image from "next/image";
import React from "react";

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <header className="top-0 bg-white py-2 sm:w-full w-full ">
      <div className="flex sm:flex-row flex-row w-full  gap-20 justify-evenly items-center">
        <div className="flex w-96 sm:gap-16  sm:mx-28 mx-4">
          <div className="absolute top-16 lg:static"></div>
          <Image
            className="lg:ml-44 absolute top-2 lg:static "
            width={120}
            height={100}
            src="/icons/fenext_logo.svg"
            alt="fenext_logo"
          />
        </div>
        <div className="flex flex-row">{children}</div>
      </div>
    </header>
  );
}
