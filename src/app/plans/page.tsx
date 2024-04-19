import Header from "@/components/Header";
import PlanCard from "@/components/Cards/plan";
import { Span } from "next/dist/trace";

export default function Plans() {
    return (
        <div>
            <Header>
                <a className="flex gap-2 items-center font-bold text-white " href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                    <p>Voltar</p>
                </a>
            </Header>
            <div className="relative flex flex-col items-center justify-center bg-[url('/img/background.png')] min-h-[calc(100vh-74px)] bg-no-repeat bg-cover bg-center">
                <h1 className="text-3xl font-bold text-white max-w-[32rem] text-center mt-10 mb-20">
                    Veja nossos planos e começe a <span className="text-sky-700">captar mais</span> franqueados agora.
                </h1>
                <div className="flex flex-wrap justify-center gap-6 max-w-[75rem]">
                    <PlanCard
                        title="Small Business Basico"
                        value="Gratuito"
                        periodo="Mensal"
                        beneficios={[
                            'Cadastrar 1 marca de franquia',
                            '5 leads Mensais',
                            'Suporte especializado',
                            'Analises de mercado'
                        ]}
                        button_content='Selecionar'
                    />
                    <PlanCard
                        title="Business Avançado"
                        value="R$ 49,90"
                        periodo="Mensal"
                        beneficios={[
                            <span>Cadastrar 3 marcas de franquia</span>,
                            <span>Leads <span className="text-green-500">ilimitados</span></span>,
                            <span>Selo <span className="text-green-500">Premium</span></span>,
                            <span><span className="text-green-500">Destaque</span> na página de buscas</span>
                        ]}
                        button_content='Escolha o plano'
                    />
                    <PlanCard
                        title="Big Business Professional"
                        value="R$ 89,99"
                        periodo="Mensal"
                        beneficios={[
                            'Unlimited storage',
                            'Unlimited websites',
                            'Unlimited brandwith',
                            '24/7 premium customer support',
                            'Enhanced security features',
                            'Free domain name registration'
                        ]}
                        button_content='Escolha o plano'
                    />
                </div>
            </div>
        </div>
    )
}


const CustomBeneficios = () => {
    return (
        <ul>
            <li>1</li>
        </ul>
    )
}