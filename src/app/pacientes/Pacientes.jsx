'use client';

import { PacientesBox, SearchInput, WrappedButton } from "@/components";
import AddIcon from '@mui/icons-material/Add';
import { Pagination } from "@mui/material";
export const Pacientes = () => {
    let pages = 5;
    let currentPage = 1;

    const paciente = {
        nombre: "Juan",
        apellido: "Pérez",
        dni: "12345678",
        numeroDeAfiliado: "87654321",
        gp: "00",
        telefono: "1234-5678",
        id: "1"
    }


    const handleChange = () => {}
    const isMobile = false;
    const loading = false;// Example condition for mobile view  
    return (
        <div className="w-[80%] bg-[#fcfcfc] p-8 flex flex-col items-center">
            <SearchInput placeholder="Buscar paciente por " option={true} options={['apellido', 'nombre', 'dni']} submitFunction={() => { }} onchange={() => { }} />
            <PacientesBox paciente={paciente} profesional path={'/historiaClinica'} />
            <WrappedButton text="Agregar paciente" action={() => { }} icon={<AddIcon />} />
            {!loading && <Pagination count={pages} page={currentPage} color="primary" variant='text' onChange={handleChange} size={isMobile ? 'small' : 'medium'} />}

        </div>
    );
}
