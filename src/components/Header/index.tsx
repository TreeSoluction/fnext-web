import React from "react";

export default function Header({ children }: React.PropsWithChildren) {
    return (
        <header className="bg-MAIN_HIGH_BLUE p-5 px-20 flex justify-between items-center">
            <p className="text-white bold text-5xl">LOGO</p>
            {children}
        </header>
    );
}