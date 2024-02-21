import React from "react";
import Image from "next/image";

export default function Header({ children }: React.PropsWithChildren) {
    return (
        <header className="bg-MAIN_HIGH_BLUE p-5 sm:px-20 flex justify-between items-center">
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