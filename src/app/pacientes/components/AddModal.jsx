'use client';

import { FormModal } from '@/components';
import { TextField, Select, MenuItem, InputLabel, FormControl, Tooltip, Menu } from '@mui/material';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddModal = ({ open, setOpen, localidades, submitFunction, userId, loading, progress, addErrors, resetErrors, users }) => {

    const [localidadSelected, setLocalidadSelected] = useState('');
    const [profesionalSelected, setProfesionalSelected] = useState('');
    const [sexo, setSexo] = useState('');
    const [gp, setGp] = useState('00');
    const [mailSelected, setMailSelected] = useState('gmail.com');
    const [showTooltip, setShowTooltip] = useState(false);
    const validDomains = [
        "gmail.com", "hotmail.com", "outlook.com", "yahoo.com",
        "live.com", "icloud.com", "live.com.ar", "speedy.com.ar",
        "arnet.com.ar", "hotmail.com.ar", "yahoo.com.ar", "outlook.es", "icloud.com.ar"
    ]

    const profesionales = [{
        id: 1,
        nombre: "Dr. Carlos López"
    }, {
        id: 2,
        nombre: "Dra. Ana García"
    }]

    const { handleSubmit, register, formState: { errors }, watch, setValue } = useForm();


    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 57 * 4.5 + 8,
                width: 250,
            },
        },
    };

    const fieldEmail = watch('email', '');

    const preventArroba = (e) => {
        if (e.target.value.includes('@')) {
            setShowTooltip(true);
        } else {
            setShowTooltip(false);
        }
        const newValue = e.target.value.replace(/@/g, '');
        setValue('email', newValue, { shouldValidate: true });

    }

    return (
        <FormModal title="Agregar Paciente" open={open} setOpen={setOpen} onsubmit={() => { }} maxWidth={'md'} loading={loading} progress={progress}>
            <div className="flex gap-4">
                <TextField fullWidth required label='Nombre' name='nombre' margin='normal' variant='standard' color='primary' {...register('nombre', {
                    required: 'Debe introducir un nombre.'
                })} error={errors?.nombre || addErrors?.nombre} helperText={addErrors?.nombre?.msg} onChange={resetErrors} />
                <TextField fullWidth required label='Apellido' name='apellido' margin='normal' variant='standard' color='primary' {...register('apellido', {
                    required: 'Debe introducir un apellido.'
                })} error={errors?.apellido || addErrors?.apellido} helperText={addErrors?.apellido?.msg} onChange={resetErrors} />
            </div>
            <div className="flex gap-4">
                <TextField fullWidth required label='Número de Afiliado' name='numeroDeAfiliado' margin='normal' variant='standard' color='primary' {...register('numeroDeAfiliado', {
                    required: 'Debe introducir un número de afiliado.'
                })} error={errors?.numeroDeAfiliado || addErrors?.numeroDeAfiliado} helperText={addErrors?.numeroDeAfiliado?.msg} onChange={resetErrors} className='flex-[4]' />
                <FormControl fullWidth required variant='standard' margin='normal' className='flex-[1]'>
                    <InputLabel id='gp'>GP</InputLabel>
                    <Select name='GP' required MenuProps={MenuProps} value={gp} onChange={(e) => setGp(e.target.value)} >
                        <MenuItem value='00'>00 - Titular</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth required label='Documento' name='documento' margin='normal' variant='standard' color='primary' {...register('documento', {
                    required: 'Debe introducir un documento.'
                })} error={errors?.documento || addErrors?.documento} helperText={addErrors?.documento?.msg} onChange={resetErrors} className='flex-[4]' />
            </div>
            <div className="flex gap-4">
                <TextField fullWidth required label='Teléfono' name='telefono' margin='normal' variant='standard' color='primary' {...register('telefono', {
                    required: 'Debe introducir un teléfono.'
                })} error={errors?.telefono || addErrors?.telefono} helperText={addErrors?.telefono?.msg} onChange={resetErrors} />
                <div className="flex gap-3 items-end w-full">
                    <Tooltip title="Sólo debe introducir el nombre de usuario del email." arrow disableFocusListener={!showTooltip} open={showTooltip} placement='top'>
                        <TextField fullWidth label='Email' name='email' margin='normal' variant='standard' color='primary' {...register('email', {

                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+$/,
                                message: 'El email no es válido.'
                            }
                        })} error={errors?.email || addErrors?.email} helperText={addErrors?.email?.msg} onChange={preventArroba} />
                    </Tooltip>
                    <span className="mb-3">@</span>
                    <FormControl fullWidth variant='standard' color='primary' margin='normal' required >
                        <Select name='mail' required MenuProps={MenuProps} onChange={(e) => setMailSelected(e.target.value)} value={mailSelected}>
                            {validDomains?.sort().map((domain, index) => <MenuItem key={index} value={domain}>{domain}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="flex gap-4">
                <TextField fullWidth label="Domicilio" name='domicilio' margin='normal' variant='standard' color='primary' {...register('domicilio', {
                    required: 'Debe introducir un domicilio.'
                })} error={errors?.domicilio || addErrors?.domicilio} helperText={addErrors?.domicilio?.msg} onChange={resetErrors} />
                <FormControl fullWidth required variant='standard' margin='normal' color='primary'>
                    <InputLabel id='localidad'>Localidad</InputLabel>
                    <Select name='localidad' required MenuProps={MenuProps} value={localidadSelected} onChange={(e) => setLocalidad(e.target.value)} >
                        <MenuItem value='00'>Santos Lugares</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="flex gap-4">
                <FormControl fullWidth variant='standard' color='primary' margin='normal' required >
                    <InputLabel id='sexo_select'>Sexo Biológico</InputLabel>
                    <Select name='sexo' required MenuProps={MenuProps} value={sexo} onChange={(e) => setSexo(e.target.value)} >
                        {/* <MenuItem value={'Masculino'}>Masculino</MenuItem> */}
                        <MenuItem value={'Femenino'}>Femenino</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth required label='Fecha de nacimiento' name='fecha_nacimiento' margin='normal' variant='standard' color='primary' type='date' slotProps={{
                    inputLabel: {
                        shrink: true
                    },
                    htmlInput: {
                        max: new Date().toISOString().split('T')[0]
                    }
                }} {...register('nacimiento', {
                    required: 'Debe introducir una fecha de nacimiento.'
                })} />
                <FormControl fullWidth variant='standard' color='primary' margin='normal' required >
                    <InputLabel id='profesional'>Médico de Cabecera</InputLabel>
                    <Select name='profesional' required MenuProps={MenuProps} value={profesionalSelected} onChange={(e) => {
                        setProfesionalSelected(e.target.value);
                    }} >
                        {profesionales?.map((profesional, index) => (
                            <MenuItem key={index} value={profesional.id}>{profesional.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </FormModal>
    );
};

export default AddModal;