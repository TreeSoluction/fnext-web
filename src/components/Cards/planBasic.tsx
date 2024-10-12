import { ICONS } from "@/constants/icons";
import Link from "next/link";

type PlanCardBasicProps = {
  title: string;
  value: string;
  periodo: string;
  upgrade_info: string;
  beneficios: string[] | JSX.Element[];
  button_link: string | undefined;
  svg: string; // Caminho para o ícone SVG

};

export default function PlanCardBasic({
  title, value, periodo, beneficios, button_link, upgrade_info, svg, 
}: PlanCardBasicProps) {

  const LoadBenefitsValues = () => {
    const isCustomValues = beneficios[0] !== 'string';

    return beneficios?.map(beneficio =>
      <li className="flex items-center text-sm text-white my-3 gap-2">
        <span >
            <img width={12} src={ICONS.check_icon} className="h-4 w-4" alt="" />
          </span>
        {isCustomValues ? beneficio : (
          <span>
            {beneficio}
          </span>
        )}
      </li>
    )
  }

  return (
    <div
    
      className={`bg-white p-5 rounded-xl flex flex-col group items-center sm:mb-80 mb-28 `}
    >
        
      {/* Adiciona o SVG acima do título */}
      <img src={svg} alt={title} className="mb-4 mt-8" />

      <h2 className="text-center text-lg text-slate-400 group-hover:text-blue-900 font-semibold group-hover:font-bold tracking-widest py-2 max-w-56">{title}</h2>
      <p className="text-center text-blue-900 text-4xl pb-4 font-bold">{value}</p>
      <p className="text-black text-center py-4 w-44">{periodo}</p>
      
      <Link href={button_link || "/"} className="block my-8 text-blue-800 underline transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">
        {button_link}
      </Link>
        <p className="text-slate-800 text-center py-4 w-60">{upgrade_info}</p>
      <ul className="my-6 text-blue-600 flex-grow">
        {LoadBenefitsValues()}
      </ul>
    </div>
  );
}
