"use client";

import { ICONS } from "@/constants/icons";
import Link from "next/link";

export default function FranchiseInfoCard({
  franchise,
}: {
  franchise: IFranchise;
}) {
  return (
    <div className="lg:pb-0 sm:pb-10">
      <div className="flex justify-end w-full pr-2">
        <Link href={"#"}>
          <img
            height={35}
            width={35}
            src={ICONS.overviewImages.upload}
            className="transition-transform duration-200 ease-in-out hover:scale-[1.2]"
            alt=""
          />
        </Link>
      </div>

      <div className="w-full border-2 rounded-lg p-6 shadow-2xl">
        <div className="flex gap-2 pb-6">
          <Link href={"#"}>
            <button className="flex items-center justify-center gap-2 font-bold text-white bg-blue-800 rounded-md px-8 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
              <img
                height={20}
                width={20}
                src={ICONS.overviewImages.check_mark}
                alt=""
              />
              Indicado
            </button>
          </Link>
          <Link href={"#"}>
            <button className="flex items-center justify-center gap-2 font-bold border-2 border-blue-800 rounded-md px-8 py-2 transition-transform duration-200 ease-in-out hover:scale-105">
              <img src={ICONS.overviewImages.heart} alt="" />
              Favoritar
            </button>
          </Link>
        </div>

        <div className="pb-6">
          <h5 className="font-bold pt-6">R${franchise.ROI_min}</h5>
          <p className="uppercase ">Investimento Mínimo</p>

          <h5 className="font-bold pt-6">7 a 24 anos</h5>
          <p className="uppercase">Retorno</p>

          <h5 className="font-bold pt-6">
            R$ {franchise.average_monthly_billing}
          </h5>
          <p className="uppercase">Faturamento Médio Mensal</p>

          <h5 className="font-bold pt-6">{franchise.units_in_brazil}</h5>
          <p className="uppercase">Total de Unidades no Brasil</p>

          <h5 className="font-bold pt-6">{franchise.sector}</h5>
          <p className="uppercase">Setor</p>
        </div>

        <div className="flex items-center justify-center w-full py-4">
          <Link href={"#"} className="w-full">
            <button className="flex items-center justify-center bg-blue-800 font-bold text-white w-full py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">
              DEIXAR CONTATO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
