'use client'

import Link from "next/link";

const PacientesBox = ({ paciente, onClick, path, profesional, secretaria }) => {
    return (
        <div className=" flex justify-between w-full border-2 p-8 hover:shadow-lg cursor-pointer" {...secretaria ? { onClick: onClick } : {}}>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[var(--titles-foreground)] text-2xl">{paciente.apellido}, {paciente.nombre}</h2>
                <span className="italic text-xs text-gray-600">DNI: {paciente.dni} - Número de Afiliado: {paciente.numeroDeAfiliado}/{paciente.gp} - Teléfono: {paciente.telefono} </span>
            </div>
            {profesional && (<Link href={`${path}/${paciente._id}`} className="self-center text-sm bg-[var(--buttons-background)] text-white px-4 py-2 rounded-lg hover:bg-[var(--buttons-hover)]">Abrir historia clínica</Link>)}
        </div>
    );
}

export default PacientesBox;
