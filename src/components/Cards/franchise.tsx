"use client";

import { ICONS } from "@/constants/icons";
import Image from "next/image";

type FranchiseCardProps = {
  id?: string;
  name: string;
  description: string;
  image: string;
  value: string;
  segment: string;
};

export default function FranchiseCard({
  name,
  description,
  image,
  value,
  segment,
}: FranchiseCardProps) {
  return (
    <div className="flex flex-col items-center text-center relative p-2 gap-2 w-72 rounded-2xl m-4">
      <button className="bg-slate-200 hover:bg-slate-400 text-slate-800 p-3 rounded-full absolute right-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
        </svg>
      </button>
      <div className="h-[150px] pt-3">
        <Image height={180} width={140} src={image} alt="imagem da franquia" />
      </div>
      <div className="w-11/12">
        <span className="block w-3/5 text-xs  font-medium p-px text-center bg-slate-200 text-slate-800 rounded-md">
          {segment}
        </span>
      </div>
      <h3 className="text-sm font-bold">{name}</h3>
      <p className="text-xs">{description}</p>
      <div className="flex justify-between w-11/12 text-[8px] text-MAIN_HIGH_BLUE font-bold mt-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Image
              width={15}
              height={15}
              src={ICONS.segments.finances}
              alt=""
            />
            <span>Financeiro</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={15}
              height={15}
              src={ICONS.models.home_based}
              alt=""
            />
            <span>Home Based</span>
          </div>
        </div>
        <p className="text-gray-600 text-[10px] text-end leading-5">
          <span className="block">Investimento Total (R$)</span>
          <span className="block">{value}</span>
        </p>
      </div>
    </div>
  );
}
