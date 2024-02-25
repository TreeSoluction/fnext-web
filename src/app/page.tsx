import Image from "next/image";
import Header from "@/components/Header";
import MenuBar from "@/components/Header/menu";
import { APP_ROUTES } from "@/constants/app-route";
import { ICONS } from "@/constants/icons";

export default function Home() {
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
            <div className="bg-MAIN_HIGH_BLUE pt-12 pb-8 flex justify-center">
                <ul className="flex items-center rounded-full bg-white w-10/12 px-4 max-w-[50rem] overflow-hidden">
                    <li className="flex-grow">
                        <button className="pl-12 py-2 hover:bg-slate-200 w-full text-start rounded-l-full">
                            <h2 className="text-xl font-medium">Valor</h2>
                            <p className="text-[11px] indent-1 text-gray-700">Buscar valor Mínimo</p>
                        </button>
                    </li>
                    <span className="block w-[5px] h-6 bg-GRAY"></span>
                    <li className="flex-grow">
                        <button className="pl-12 py-2 hover:bg-slate-200 w-full text-start">
                            <h2 className="text-xl font-medium">Categoria</h2>
                            <p className="text-[11px]  text-gray-700">Buscar setor de atuação</p>
                        </button>
                    </li>
                    <span className="block w-[5px] h-6 bg-GRAY"></span>
                    <li className="flex-grow">
                        <button className="pl-12 py-2 hover:bg-slate-200 w-full text-start">
                            <h2 className="text-xl font-medium">Tipos de Franquias</h2>
                            <p className="text-[11px]  text-gray-700">Buscar Modelo de franquia</p>
                        </button>
                    </li>
                    <li>
                        <button className="my-2 hover:bg-slate-200 w-full text-start rounded-r-full">
                            <Image
                                width={60}
                                height={60}
                                src={ICONS.lupa}
                                alt="search icon"
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}