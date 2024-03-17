import Header from "@/components/Header";

export default function List() {
    return (
        <div>
            <Header>
                <a className="flex gap-2 items-center font-bold text-white " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                    <p>Voltar</p>
                </a>
            </Header>
            <div className="max-w-screen-xl m-auto">
                <div className="p-5 sm:p-36 pt-10 sm:pt-20 flex justify-between items-center flex-wrap">
                    <div>
                        <h1 className="text-3xl">Franquias  cadastradas</h1>
                        <p className="text-sm m-3">Veja todas as  franquias cadastradas</p>
                    </div>
                    <button className="bg-HIGH_BLUE p-2 rounded-md text-white font-medium text-xs">
                        Cadastrar franquia
                    </button>
                </div>
            </div>
        </div>
    );
}