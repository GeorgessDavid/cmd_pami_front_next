'use client';

import { useState } from 'react';
import { PatientData } from './components/PatientData';
import { ClinicalStorySection } from './components/ClinicalStorySection';
import { AddData } from './components/AddData';
import { Divider } from '@mui/material';
export default function HistoriaClinica() {
    const [loading, setLoading] = useState(false);
    
    const paciente = {
        nombre: "Juan",
        apellido: "Pérez",
        dni: "12345678",
        fechaNacimiento: "1990-01-01",
        numeroDeAfiliado: "87654321",
        gp: "00",
        telefono: "1234-5678",
        id: 1
    }

    // Datos de ejemplo para la historia clínica
    const clinicalStory = {
        historia: "El paciente presenta síntomas de gripe común. Se recomienda reposo y abundante líquido.\n\nConsulta de seguimiento programada para la próxima semana.\n\nPaciente respondiendo bien al tratamiento inicial."
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-8 border border-gray-200 rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-start gap-8 w-full 
                              md:max-lg:flex-col 
                              max-sm:flex-col mb-4">
                    <div className="flex flex-col lg:flex-row justify-start gap-8 w-full flex-[2]
                                  max-sm:flex-col">
                        <PatientData paciente={paciente} />
                    </div>
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <ClinicalStorySection 
                        clinicalStory={clinicalStory}
                        loading={loading}
                    />
                </div>
                <Divider variant="middle" flexItem />
                <div className="w-full mt-12">
                    <AddData 
                        patientId={paciente.id}
                        submitFunction={() => console.log('Submit function called')}
                        loading={loading}
                        profesionalId={1} // Example professional ID
                        clinicalStoryId={1} // Example clinical story ID
                    />
                </div>
            </div>
        </div>
    )
}