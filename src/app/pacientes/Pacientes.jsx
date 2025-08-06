'use client';

import { PacientesBox } from "@/components";
export const Pacientes = () => {
    const paciente = {
        nombre: "Juan",
        apellido: "Pérez",
        dni: "12345678",
        numeroDeAfiliado: "87654321",
        gp: "00",
        telefono: "1234-5678",
        id: "1"
    }

    return (
        <div>
            <PacientesBox paciente={paciente} profesional path={'/historiaClinica'}/>
        </div>
    );
}
