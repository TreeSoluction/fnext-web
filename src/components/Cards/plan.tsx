import { ICONS } from "@/constants/icons"

type PlanCardProps = {
    title: string;
    value: string;
    periodo: string;
    beneficios: string[] | JSX.Element[];
    button_content: string;
}

export default function PlanCard({
    title, value, periodo, beneficios, button_content
}: PlanCardProps) {

    const LoadBenefitsValues = () => {
        const isCustomValues = beneficios[0] !== 'string';

        return beneficios?.map(beneficio =>
            <li className="flex items-center text-sm text-white my-3 gap-4">
                <span>
                    <img width={12} src={ICONS.check} alt="" />
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
        <div className="bg-MAIN_HIGH_BLUE p-5 rounded-3xl flex flex-col items-center mb-20">
            <h2 className="text-center text-white text-2xl font-semibold max-w-56">{title}</h2>
            <span className="block w-10/12 h-px bg-slate-300 my-5"></span>
            <p className="text-center text-white text-3xl font-semibold">{value}</p>
            <p className="text-GRAY">{periodo}</p>
            <ul className="my-2 flex-grow">
                {LoadBenefitsValues()}
            </ul>
            <button className="block w-[-webkit-fill-available] my-2 p-3 rounded-full bg-LOW_BLUE hover:bg-HIGH_BLUE text-white font-semibold ">
                {button_content}
            </button>
        </div>
    );
}