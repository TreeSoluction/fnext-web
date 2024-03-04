import Header from "@/components/Header";
import MenuBar from "@/components/Header/menu";
import FilterHome from "@/components/FilterHome";
import { APP_ROUTES } from "@/constants/app-route";


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
                <FilterHome />
            </div>
        </div>
    );
}