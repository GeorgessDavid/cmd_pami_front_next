'use client'

import Link from "next/link";
import { Skeleton } from "@mui/material";
import InfoModal from "./InfoModal";
import { useState } from "react";
import { DataDisplay } from "@/components";

const PacientesBox = ({ paciente, onClick, path, profesional, secretaria, loading }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="flex justify-between items-center w-full h-full bg-[#ececec] py-[0.625rem] px-4 m-4 cursor-pointer shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 group hover:shadow-md" {...secretaria ? { onClick: () => setOpen(true) } : {}}>
                <div>
                    {loading ?
                        <>
                            <Skeleton variant="text" width={200} height={30} />
                            <Skeleton variant="text" width={100} height={20} />
                        </>
                        :
                        <>
                            <h2 className="font-medium text-[var(--titles-foreground)] text-[1.25rem]">{paciente.apellido}, {paciente.nombre}</h2>
                            <span className="italic text-xs text-gray-600">DNI: {paciente.dni} - Número de Afiliado: {paciente.numeroDeAfiliado}/{paciente.gp} - Teléfono: {paciente.telefono} </span>
                        </>
                    }
                </div>
                {profesional && (
                    <Link
                        href={`${path}/${paciente.id}`} target="_blank">
                        <span className="text-[#334456] font-light transition-all duration-300 opacity-0 group-hover:opacity-100 hover:underline hover:text-[#325d8b]">Abrir historia clínica</span>
                    </Link>
                )}
            </div>
            {
                secretaria && (
                    <InfoModal open={open} handleClose={handleClose} title="Información del Paciente">
                        <DataDisplay label="Nombre y Apellido" value={`${paciente.nombre} ${paciente.apellido}`} />
                        <DataDisplay label="DNI" value={paciente.dni} />
                        <DataDisplay label="Número de Afiliado" value={paciente.numeroDeAfiliado} />
                        <DataDisplay label="Grupo" value={paciente.gp} />
                        <DataDisplay label="Teléfono" value={paciente.telefono} />
                    </InfoModal>
                )
            }
        </>
    );
}

export default PacientesBox;