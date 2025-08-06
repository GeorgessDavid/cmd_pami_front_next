export const metadata = {
    title: 'Pacientes - CMD PAMI'
};

export default function PacientesLayout({ children }) {
    return (
        <div className="w-full flex flex-col items-center justify-center p-8">
            <h1 className="font-bold text-2xl">Pacientes</h1>
            {children}
        </div>
    );
}
