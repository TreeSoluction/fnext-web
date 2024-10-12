
"use client";
import { useState, useEffect } from "react";
import Header from "@/components/HeaderHome";
import PlanCard from "@/components/Cards/plan";
import PlanCardBasic from "@/components/Cards/planBasic";
import { ICONS } from "@/constants/icons";

export default function Plans() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Isso garante que o componente será renderizado apenas no cliente
  }, []);

  if (!isClient) {
    return null; // Impede a renderização até que esteja no cliente
  }
  
  return (
    <div>
      <Header>
        <a className="flex gap-2 items-center font-bold text-white" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <p>Voltar</p>
        </a>
      </Header>
      <div className="relative flex flex-col items-center justify-center mt-[74px] bg-[url('/img/background-02.png')]  sm:h-[98rem] bg-no-repeat bg-cover bg-center">
        <h1 className="flex justify-start sm:text-5xl text-3xl font-bold text-white sm:w-full max-w-[45.5rem] text-center sm:ml-0 ml-12 mt-10 mb-20 tracking-wide">
          <span className="text-blue-800 sm:text-5xl text-3xl sm:pr-4 pr-2 tracking-wide">Conheça</span> nossos upgrades
        </h1>
        <div>
          <p className="text-white flex flex-wrap justify-center w-full mb-32 px-6 sm:px-0 sm:max-w-[75rem] text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose">
            Nosso upgrade Basic é grátis e possui todas as funcionalidades, porém sua franquia fica <br className="hidden sm:inline" />
            sem nenhum destaque nas páginas de busca e com funções limitadas, sem custo adicional. <br className="hidden sm:inline" />
            Upgrade Advanced e Pro com benefícios exclusivos para potencializar a captação de leads.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-[75rem]">
          {/* PlanCardBasic - Small Business */}
          <PlanCardBasic
            title="SMALL BUSINESS"
            value="Grátis"
            periodo="Tenha acesso a todas as funcionalidades"
            beneficios={[
              <span className="text-black py-2">Cadastrar 1 marca de <br /> franquia.</span>,
              <span className="text-black py-2">Suporte especializado</span>,
              <span className="text-black">Análise de Mercado</span>,
            ]}
            button_link="Criar uma conta grátis agora"
            svg={ICONS.plano_starter}
            upgrade_info="Tudo do upgrade SMALL e:"
            
          />

          {/* PlanCard - Advanced */}
          <div className="trasition scale-[1.12] px-4">

              <PlanCard
                title="ADVANCED"
                recommendation={[
                  <div className="flex bg-blue-900 w-full text-white rounded-t-lg">
                    <p className="py-2 flex justify-center w-full">Recomendado</p>
                  </div>,
                ]}
                value={[
                  <div className="w-full flex flex-row py-4">
                    <span className="text-xl mr-2 flex items-start">R$</span>
                    <span className="text-4xl font-bold">497</span>
                    <span  className="text-2xl flex items-end">/mês</span>
                  </div>,
                ]}
                periodo="Trimestral"
                beneficios={[
                  <span className="text-blue-900">
                    30 dias em <span className="text-green-400">Destaque</span> <br />
                    nas páginas de busca
                  </span>,
                  <span className="text-black">
                    Leads <span className="text-green-500">ilimitados</span>
                  </span>,
                  <span className="text-blue-900">
                    30 dias com selo <br /> <span className="text-green-500">premium</span>
                  </span>,
                  <span className="text-black">Análise especializada</span>,
                  <span className="text-black">
                    Cadastrar 5 marcas <br />
                    de franquia.
                  </span>,
                ]}
                discount="20% DE DESCONTO"
                payment_type="(pagamento único)"
                button_content="Selecionar"
                svg={ICONS.plano_basic}
                upgrade_info="Tudo do upgrade ADVANCED e:"           
              />
          </div>

          {/* PlanCard - Pro */}
          <PlanCard
            title="PRO"
            recommendation={undefined}
            value={[
              <div className="w-full flex flex-row py-4">
                <span className="text-xl mr-2 flex items-center">R$</span>
                <span className="text-4xl font-bold">647</span>
                <span className="text-2xl flex items-end">/mês</span>
              </div>,
            ]}
            periodo="Trimestral"
            beneficios={[
              <span className="text-blue-900">
                30 dias em <span className="text-green-400">Destaque</span> <br />
                na primeira página
              </span>,
              <span className="text-green-500">
                Indicados
                <span className="text-black pl-2">
                  para todos <br /> os usuários
                </span>
              </span>,
              <span className="text-blue-900">
                Selo de <span className="text-green-500">aprovação</span>
              </span>,
            ]}
            discount="25% DE DESCONTO"
            payment_type="(pagamento único)"
            button_content="Selecionar"
            svg={ICONS.plano_pro}      
            upgrade_info="Tudo do upgrade ADVANCED com os adicionais de:"          
          />
        </div>
      </div>
    </div>
  );
}
