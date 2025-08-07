export const metadata ={
    title: "Historia Clínica - CMD PAMI"
}

export default function HistoriaClinicaLayout({ children }) {
    return (
        <div className="w-full flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4">Historia Clínica</h1>
            {children}
        </div>
    );
}