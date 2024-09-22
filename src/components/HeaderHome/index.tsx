"use client";

import React from "react";
import Image from "next/image";

export default function HeaderHome({ children }: React.PropsWithChildren) {
    return (
        <header className="fixed top-0 bg-MAIN_HIGH_BLUE p-5 sm:w-full w-full flex justify-between items-center z-30">
            <Image
                width={120}
                height={100}
                src="/img/logo.png"
                alt="Fenext Logo"
            />
            {children}
        </header>
    );
}