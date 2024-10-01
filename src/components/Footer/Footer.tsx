import React from "react";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="p-8 pt-20 flex flex-col lg:flex-row sm:flex-col lg:justify-center">
            
            <div className="flex flex-col  lg:justify-start sm:justify-center lg:items-start sm:items-center lg:w-1/2 sm:w-full">
                <p className="text-white pb-10">Fenext S.A. | @todos os direitos reservados</p>
                <div className="">
                    <div className="w-full flex flex-col px-4 sm:px-20">
                        <p className="text-white pb-4 pl-2">Ready. Set. Invest.</p>
                        <div className="flex flex-row flex-shrink-0 gap-4">
                            <Link id="first" href={"#"} className="flex flex-shrink-0 group transition-all duration-300 ease-in-out delay-150">
                                <img src={ICONS.overviewImages.instagram} alt="" className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />                            
                            </Link>
                            <Link href={"#"} className="flex flex-shrink-0 group transition-all duration-300 ease-in-out delay-150">
                                <img src={ICONS.overviewImages.twitter} alt="" className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                            </Link>
                            <Link href={"#"} className="flex flex-shrink-0 group transition-all duration-300 ease-in-out delay-150">
                                <img src={ICONS.overviewImages.linkedin} alt="" className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex w-full lg:w-1/2 lg:pb-32 pt-16 lg:flex-row sm:flex-col lg:justify-start sm:justify-center lg:items-start sm:items-center gap-20">
                <div>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-blue-800 pb-2 group-hover:-translate-y-1 transition-transform">Para Franquia</p>                              
                    </Link>
                    <hr className="border-t-2 border-blue-800 w-40 pb-2" />
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Assinaturas</p>                                
                    </Link>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Minhas Franquias</p>                               
                    </Link>
                </div>

                <div>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-blue-800 pb-2 group-hover:-translate-y-1 transition-transform">Sobre nós</p>
                    </Link>
                    <hr className="border-t-2 border-blue-800 w-40 pb-2"/>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Quem somos</p>
                    </Link>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Contato</p>
                    </Link>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Suporte</p>
                    </Link>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Termos de uso</p>
                    </Link>
                    <Link href={"#"} className="group transition-all duration-200 ease-in-out">
                        <p className="text-white pt-2 group-hover:-translate-y-1 transition-transform">Privacidade</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
