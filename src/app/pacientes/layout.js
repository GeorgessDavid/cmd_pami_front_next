export const metadata = {
    title: 'Pacientes - CMD PAMI'
};

export default function PacientesLayout({ children }) {
    return (
        <div className="w-full flex flex-col items-center">
            {children}
        </div>
    );
}
