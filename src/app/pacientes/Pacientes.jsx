'use client';

import { PacientesBox, SearchInput, WrappedButton } from "@/components";
import AddIcon from '@mui/icons-material/Add';
import { Pagination } from "@mui/material";
import AddModal from "./components/AddModal";
import { useState } from "react";

export const Pacientes = () => {
    const [open, setOpen] = useState(false);
    let pages = 5;
    let currentPage = 1;

    const paciente = {
        nombre: "Juan",
        apellido: "Pérez",
        dni: "12345678",
        numeroDeAfiliado: "87654321",
        gp: "00",
        telefono: "1234-5678",
        id: 1
    }


    const handleChange = () => {}
    const isMobile = false;
    const loading = false;// Example condition for mobile view  
    return (
        <div className="w-[80%] bg-[#fcfcfc] p-8 flex flex-col items-center">
            <SearchInput placeholder="Buscar paciente por " option={true} options={['apellido', 'nombre', 'dni']} submitFunction={() => { }} onchange={() => { }} />
            <PacientesBox paciente={paciente} secretaria path={'/historiaClinica'} />
            <WrappedButton text="Agregar paciente" action={() => { setOpen(true); }} icon={<AddIcon />} />
            {!loading && <Pagination count={pages} page={currentPage} color="primary" variant='text' onChange={handleChange} size={isMobile ? 'small' : 'medium'} />}
            <AddModal open={open} setOpen={setOpen} localidades={[]} provincias={[]} submitFunction={() => {}} municipios={[]} changeMunicipio={() => {}} userId={1} loading={loading} progress={0} addErrors={{}} resetErrors={() => {}} users={[]} />
        </div>
    );
}
