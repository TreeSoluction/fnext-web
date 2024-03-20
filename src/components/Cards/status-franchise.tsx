type StatusFranchiseCardProps = {
    title: string;
    status: string;
    visitors: number;   
    conversions: number;
}

export default function StatusFranchiseCard({
    title, status, conversions, visitors
}: StatusFranchiseCardProps){
    return (
        <div className="border border-dashed border-GRAY p-7 m-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-GRAY">Status: {status}</p>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <p className="text-sm text-GRAY">Visitantes: {visitors}</p>
                    <p className="text-sm text-GRAY">Conversões: {conversions}</p>
                </div>
                <button className="bg-HIGH_BLUE p-2 rounded-md text-white font-medium text-xs">
                    Ver detalhes
                </button>
            </div>
        </div>
    )
}