'use client';
'use client';

import { useEffect, useState } from 'react';
import { TextField, MenuItem, Divider, FormControl, InputLabel, Select, Chip, Stack } from '@mui/material';
import { CustomTooltip, FormModal } from '@/components';
import { useForm } from 'react-hook-form';
// import { useSpecialties } from '@/hooks/useSpecialties';
// import { useMedicalProcedures } from '@/hooks/useMedicalProcedures';
// import { useUserCreate } from '@/hooks/useUsers';

export const AddUser = ({ open, handleClose }) => {
    const [profesionalProperties, setProfesionalProperties] = useState(false);
    const [rol, setRol] = useState('');
    const [sexo, setSexo] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { loading, createUser, progress } = useUserCreate();

    let loading = false;
    let progress = 0;

    const handleRole = (e) => {
        setRol(e.target.value);
        if (e.target.value === 2) {
            setProfesionalProperties(true);
        } else {
            setProfesionalProperties(false);
        }
    }

    const handleSexo = (e) => {
        setSexo(e.target.value);
    }

    const handleSpecialty = (e) => {
        setEspecialidad(e.target.value);
    }

    return (
        <FormModal open={open} handleClose={handleClose} title="Agregar usuario" setOpen={handleClose} 
            onsubmit={handleSubmit(async (data) => {
                data = { ...data, rol, sexo, especialidad, selectedPracticas };
                await createUser(data);
            })} loading={loading} progress={progress}>
            <h3 className="text-[var(--titles-foreground)] font-bold text-2xl">Datos de Usuario</h3>
            <Divider className="bg-[var(--titles-foreground)]" />
            <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <FormControl variant='standard' fullWidth color='primary' required>
                    <InputLabel id="role_select">Rol</InputLabel>
                    <Select variant='standard' value={rol} fullWidth color='primary' required onChange={handleRole} label='Rol' labelId='role_select' >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Profesional</MenuItem>
                        <MenuItem value={3}>Secretaría</MenuItem>
                    </Select>
                </FormControl>
                <TextField variant='standard' label='Email' fullWidth color='primary' required
                    {...register('email', { required: 'Debe introducir el email.' })} />
            </div>
            <h3 className="text-[var(--titles-foreground)] font-bold text-2xl mt-8">Datos Personales</h3>
            <Divider className="bg-[var(--titles-foreground)]" />
            <div className='flex my-4 gap-4'>
                <TextField variant='standard' label='Nombre' fullWidth color='primary' required
                    {...register('nombre', { required: 'Debe introducir el nombre.' })} />
                <TextField variant='standard' label='Apellido' fullWidth color='primary' required
                    {...register('apellido', { required: 'Debe introducir el apellido.' })} />
            </div>
            <div className='flex my-4 gap-4'>
                <FormControl variant='standard' fullWidth color='primary' required>
                    <InputLabel>Sexo Biológico</InputLabel>
                    <Select variant='standard' value={sexo} fullWidth color='primary' required onChange={handleSexo}>
                        <MenuItem value={'Femenino'}>Femenino</MenuItem>
                        <MenuItem value={'Masculino'}>Masculino</MenuItem>
                    </Select>
                </FormControl>
                <TextField variant='standard' label='Teléfono' fullWidth color='primary' required {...register('telefono', { required: 'Debe introducir un número de teléfono.' })} />
            </div>
            {profesionalProperties &&
                <div style={{ margin: '2rem 0', width: '100%' }}>
                    <h3 className="text-[var(--titles-foreground)] font-bold text-2xl">Datos del Profesional</h3>
                    <Divider className="bg-[var(--titles-foreground)]" />
                    <div className='flex' >
                        <div style={{ marginTop: '1rem' }}>
                            <CustomTooltip title="Sólo números de la matrícula nacional" placement="top">
                                <TextField variant='standard' label='Matrícula' fullWidth color='primary' required
                                    {...register('matricula', { required: 'Debe introducir el número de matrícula.' })}
                                />
                            </CustomTooltip>
                        </div>
                    </div>
                </div>
            }
        </FormModal>
    )
}