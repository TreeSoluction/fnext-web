"use client";

import Link from "next/link";

export default function FranchiseDetails({
  franchise,
}: {
  franchise: IFranchise;
}) {
  return (
    <div className="flex flex-col lg:items-start items-center w-full p-6 pb-40">
      <div className="w-full pl-10">
        <p className="flex items-center justify-center bg-black text-white w-52">
          INFORMAÇÕES ESSENCIAIS
        </p>
      </div>

      <div className="flex flex-col lg:w-full w-[440px] lg:items-start items-center h-full border-2 shadow-2xl bg-blue-00 rounded-lg pl-4 py-12">
        <div className="flex flex-col md:flex-row justify-start  gap-10 pb-6">
          <div className="flex flex-row lg:pl-12 gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                {franchise.Models[0].capital_for_instalation}
              </p>
              <p className="text-xs">CAPITAL PARA INSTALAÇÃO</p>
            </div>
          </div>
          <div className="flex flex-row lg:pl-8 gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                {franchise.Models[0].franchise_fee}
              </p>
              <p className="text-xs">TAXA DE FRANQUIA</p>
            </div>
          </div>
          <div className="flex flex-row lg:pl-6 gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                {franchise.headquarters}
              </p>
              <p className="text-xs">SEDE</p>
            </div>
          </div>
          <div className="flex flex-row lg:pl-[42px] gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                DE 6 <span className="font-normal">a</span> 12 M²
              </p>
              <p className="text-xs">ÁREA DA LOJA</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start gap-12 pb-6">
          <div className="flex flex-row lg:pl-12 gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                {franchise.Models[0].working_capital}
              </p>
              <p className="text-xs">CAPITAL DE GIRO</p>
            </div>
          </div>
          <div className="flex flex-row lg:pl-[35px] gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                {franchise.Models[0].marketing_fee} (
                {franchise.Models[0].marketing_fee_isFixed
                  ? "Fixo"
                  : "Variável"}
                )
              </p>
              <p className="text-xs">TAXA DE PROPAGANDA</p>
            </div>
          </div>
          <div className="flex flex-row lg:pl-4 gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                DE 20 <span className="font-normal">a</span> 24 MESES
              </p>
              <p className="text-xs">RETORNO DO INVESTIMENTO</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <p className="font-bold flex gap-2 text-sm md:text-base">
                {franchise.Models[0].royalties_isFixed}
              </p>
              <p className="text-xs">ROYALTIES</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:items-start items-center justify-start gap-8 pb-6">
          <div className="flex flex-row lg:pl-16 gap-2">
            <div>
              <p className="font-bold lg:text-xl text-lg flex text-blue-800 gap-2">
                {franchise.Models[0].working_capital}
              </p>
              <p className="text-[10px] font-bold">CAPITAL DE GIRO</p>
            </div>
          </div>
          <div className="flex flex-row lg:pl-[35px] gap-2">
            <div>
              <p className="font-bold flex justify-start lg:justify-end gap-2">
                {franchise.ROI_min}
              </p>
              <p className="text-[12px] font-bold">Investimento Mínimo</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span className="block w-[1.5px] h-0 lg:h-12 bg-black"></span>
            <div>
              <p className="font-bold text-blue-800 flex gap-2">
                {franchise.average_monthly_billing}
              </p>
              <p className="text-xs font-bold">FATURAMENTO MÉDIO MENSAL</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <p className="font-bold flex gap-2">
                {franchise.units_in_brazil}
                <span className="font-normal">und</span>
              </p>
              <p className="text-xs font-bold">QTD. DE UNIDADES NO BRASIL</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center pl-4 pt-4 gap-2">
              <Link href={"#"}>
                <button className="bg-blue-800 text-white text-sm rounded-full px-4 mb-[5px] transition-transform duration-200 ease-in-out hover:scale-105">
                  VER SITE DA FRANQUIA
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
