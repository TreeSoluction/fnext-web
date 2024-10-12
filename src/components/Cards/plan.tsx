


import { ICONS } from "@/constants/icons"

type PlanCardProps = {
    title: string;
    value: string[] | JSX.Element[];
    recommendation: string[] | JSX.Element[]| undefined;
    periodo: string;
    discount: string;
    payment_type: string;
    upgrade_info: string;
    beneficios: string[] | JSX.Element[];
    button_content: string ;
    svg: string; 
  
  }
  
  export default function PlanCard({
    title, value, periodo,discount, payment_type, upgrade_info, recommendation, beneficios, button_content, svg,
  }: PlanCardProps) {
  
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
        
        className={`bg-white rounded-xl flex flex-col group items-center sm:mb-80 mb-32`}>
          <p className="w-full pb-6">{recommendation}</p>

          <div className="flex p-5 flex-col items-center">
            <img src={svg} alt={title} className="mb-4" />

            <h2 className="text-center text-slate-400 group-hover:text-blue-900 font-semibold group-hover:font-bold max-w-56 tracking-widest">{title}</h2>
            <p className="text-center text-blue-900 text-3xl font-semibold">{value}</p>
            <p className="text-slate-800 text-center text-sm w-44">{periodo}</p>
            <p className="text-slate-800 text-center text-md font-semibold  w-44">{discount}</p>
            <p className="text-slate-800 text-center w-44">{payment_type}</p>
            <button className="block w-[-webkit-fill-available] my-4 p-3 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-semibold transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">
                {button_content}
            </button>
            <p className="text-slate-800 text-center py-4 w-60">{upgrade_info}</p>
            <ul className="text-black flex-grow">
                {LoadBenefitsValues()}
            </ul>

          </div>
      </div>
    );
  }
  
