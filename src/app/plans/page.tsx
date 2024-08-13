import { Plan1Icon } from "./icons/Plan1Icon";
import { Plan2Icon } from "./icons/Plan2Icon";
import { Plan3Icon } from "./icons/Plan3Icon";

export default function Plans() {
  return (
    <div className="flex flex-row w-screen h-screen bg-slate-900 text-center ">
      <div className="w-4/12"></div>
      <div className="w-full mt-12">
        <div className="flex text-white text-5xl font-bold text-start">
          <div className="text-blue-700">Conheça&nbsp;</div>
          <div>nossos upgrades</div>
        </div>
        <div className="text-start text-white text-2xl mt-3">
          Nosso upgrade Basic e gratis e possui todas as funcionalidades, porem
          sua franquia fica sem nenhum destaque nas paginas de buscae com
          funcoes limitadas, sem custo adicional. Upgrade Advanced e Pro
          <strong>
            {" "}
            com beneficios exclusivos para potencializar a captacao de leads
          </strong>
        </div>

        <div className="flex gap-9 items-center mt-5">
          <div className="flex flex-col bg-white w-72 items-center rounded-md p-10">
            <Plan1Icon />
            <div className="text-1xl text-gray-600">SMALL BUSINESS</div>
            <div className="text-4xl text-blue-950 font-bold">Gratis</div>
            <div className="flex flex-col gap-5">
              <div className="text-gray-500 ">
                Tenha acesso a todas as funcionalidades
              </div>
              <div className="text-blue-600 underline ">
                Criar uma conta gratis agora
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gray-500">Tudo do Upgrade SMALL e:</div>
                <div className="flex flex-col items-start gap-5 mt-5">
                  <div className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div className="text text-start">
                      Cadastrar 1 marca de franquia
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Suporte especializado</div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Analise de Mercado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white w-80 items-center rounded-md p-10">
            <Plan2Icon />
            <div className="text-1xl text-gray-600">Advanced</div>
            <div className="text-4xl text-blue-950 font-bold">R$ 247/mes</div>
            <div className="flex flex-col gap-5">
              <div className="mt-10">
                <div className="text-gray-500 font-medium">20% DE DESCONTO</div>
                <div className="text-gray-500 ">(Pagamento Unico)</div>
                <button className="bg-blue-950 w-56 h-11 rounded-3xl mt-3">
                  <a
                    className="text-white w-full h-full"
                    href="https://fenext.pay.yampi.com.br/checkout?skipToCheckout=1&tokenReference=HFYSII0LDW"
                  >
                    Selecionar
                  </a>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gray-500">Tudo do Upgrade SMALL e:</div>
                <div className="flex flex-col items-start gap-5 mt-5">
                  <div className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div className="text text-start">
                      30 dias em destaque nas paginas de busca
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Leads ilimitados</div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>30 dias com selo premium</div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Analise especializada</div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Cadastrar 5 marca de franquia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white w-72 items-center rounded-md p-10">
            <Plan3Icon />
            <div className="text-1xl text-gray-600">Pro</div>
            <div className="text-4xl text-blue-950 font-bold">R$497/mes</div>
            <div className="flex flex-col gap-5">
              <div className="mt-10">
                <div className="text-gray-500 font-medium">20% DE DESCONTO</div>
                <div className="text-gray-500 ">(Pagamento Unico)</div>
                <button className="bg-blue-950 w-56 h-11 rounded-3xl mt-3">
                  <a
                    className="text-white w-full h-full"
                    href="https://fenext.pay.yampi.com.br/r/QMS830EANG"
                  >
                    Selecionar
                  </a>
                </button>
              </div>
              <div className="fl  ex flex-col items-center">
                <div className="text-gray-500">Tudo do Upgrade ADVANCED e:</div>
                <div className="flex flex-col items-start gap-5 mt-5">
                  <div className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div className="text text-start">
                      Cadastrar 1 marca de franquia
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Suporte especializado</div>
                  </div>
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>Analise de Mercado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12"></div>
    </div>
  );
}

const CustomBeneficios = () => {
  return (
    <ul>
      <li>1</li>
    </ul>
  );
};
