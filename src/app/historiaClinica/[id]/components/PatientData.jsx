import { DataDisplay, CustomTooltip } from "@/components";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Skeleton, IconButton, TextField, Select, FormControl, InputLabel, MenuItem, Tooltip } from '@mui/material';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { copyToClipboard } from "@/utils";

export const PatientData = ({ paciente, profesional, secretaria, historia, loading, updateFunction, error }) => {
    const [editMode, setEditMode] = useState(false);


    const { handleSubmit: patientDataHandleSubmit, register: patientDataRegister, watch, setValue } = useForm();

    return (
        <div className="flex justify-start gap-8 w-full flex-[2]">
            <>
                {!loading &&
                    <>
                        <form className="flex flex-col w-1/2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Datos Personales</h2>
                                {!editMode ?
                                    <>
                                        <CustomTooltip title='Editar' placement='top' styles={{
                                            backgroundColor: '#1976d2',
                                            color: '#f5f5f5',
                                            fontSize: '0.75rem'
                                        }}>
                                            <IconButton onClick={() => setEditMode(true)}>
                                                <BorderColorIcon color='primary' sx={{
                                                    fontSize: '1.25rem'
                                                }} />
                                            </IconButton>
                                        </CustomTooltip>
                                    </>
                                    :
                                    <div>
                                        <CustomTooltip title='Cancelar' placement='top' styles={{
                                            backgroundColor: '#d32f2f',
                                            color: '#f5f5f5',
                                            fontSize: '0.75rem'
                                        }}>
                                            <IconButton onClick={() => setEditMode(false)}>
                                                <ClearIcon color='error' sx={{
                                                    fontSize: '1.25rem'
                                                }} />
                                            </IconButton>
                                        </CustomTooltip>
                                        <CustomTooltip title='Guardar' placement='top' styles={{
                                            backgroundColor: '#034d37',
                                            color: '#f5f5f5',
                                            fontSize: '0.75rem'
                                        }}>
                                            <IconButton type='submit' onClick={() => setEditMode(true)}>
                                                <CheckIcon color='success' sx={{
                                                    fontSize: '1.25rem'
                                                }} />
                                            </IconButton>
                                        </CustomTooltip>
                                    </div>
                                }
                            </div>
                            {!editMode ?
                                <>

                                    <DataDisplay label='Nombre' value={paciente.nombre} />
                                    <DataDisplay label='Apellido' value={paciente.apellido} />
                                    <div className="flex gap-2">
                                        <DataDisplay label='Documento' value={paciente.dni} />
                                        <Tooltip title="Copiar número de documento" arrow>
                                            <IconButton size='small' onClick={() => copyToClipboard(paciente.dni, 'Documento copiado al portapapeles', 'Error al copiar el documento')}>
                                                <ContentCopyIcon sx={{ fontSize: '1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <div className="flex gap-2">
                                        <DataDisplay label='Número de Afiliado' value={`${paciente.numeroDeAfiliado}/${paciente.gp}`} />
                                        <Tooltip title="Copiar número de afiliado" arrow>
                                        <IconButton size='small' onClick={() => copyToClipboard(`${paciente.numeroDeAfiliado}${paciente.gp}`, 'Número de afiliado copiado al portapapeles', 'Error al copiar el número de afiliado')}>
                                            <ContentCopyIcon sx={{ fontSize: '1rem' }} />
                                        </IconButton>
                                    </Tooltip>
                                    </div>
                                    <DataDisplay label='Fecha de Nacimiento' value={paciente.fechaNacimiento} />
                                    <DataDisplay label='Teléfono' value={paciente.telefono} />
                                    <DataDisplay label='ID' value={paciente.id} />

                                </>
                                :
                                <>
                                    <div className="flex gap-2">
                                        <TextField margin='normal' slotProps={{ inputLabel: { shrink: true } }} variant='standard' color='primary' size='small' fullWidth label='Nombre' defaultValue={paciente.nombre} {...patientDataRegister('nombre', { required: 'Debe introducir un nombre.' })} required />
                                        <TextField margin='normal' slotProps={{ inputLabel: { shrink: true } }} variant='standard' color='primary' size='small' fullWidth label='Apellido' defaultValue={paciente.apellido} {...patientDataRegister('apellido', { required: 'Debe introducir un apellido.' })} required />
                                    </div>
                                    <div className="flex gap-2">
                                        <TextField margin='normal' slotProps={{ inputLabel: { shrink: true } }} variant='standard' color='primary' size='small' fullWidth label='Documento' defaultValue={paciente.dni} {...patientDataRegister('dni', { required: 'Debe introducir un DNI.' })} required />
                                        <TextField margin='normal' slotProps={{ inputLabel: { shrink: true } }} variant='standard' color='primary' size='small' fullWidth label='Fecha de Nacimiento' type='date' defaultValue={paciente.fechaNacimiento} {...patientDataRegister('fechaNacimiento', { required: 'Debe introducir una fecha de nacimiento.' })} required />
                                    </div>
                                    <div className="flex gap-2">
                                        <TextField className="flex-[3]" margin='normal' slotProps={{ inputLabel: { shrink: true } }} variant='standard' color='primary' size='small' fullWidth label='Número de Afiliado' defaultValue={paciente.numeroDeAfiliado} {...patientDataRegister('numeroDeAfiliado', { required: 'Debe introducir un número de afiliado.' })} required />
                                        <FormControl margin='normal' variant='standard' color='primary' size='small' className="flex-[1]" fullWidth>
                                            <InputLabel id="gp-label">GP</InputLabel>
                                            <Select
                                                labelId="gp-label"
                                                id="gp-select"
                                                defaultValue={paciente.gp}
                                                label="GP"
                                                {...patientDataRegister('gp', { required: 'Debe seleccionar un GP.' })}>
                                                <MenuItem value="00">GP 00</MenuItem>
                                                <MenuItem value="01">GP 01</MenuItem>
                                                <MenuItem value="02">GP 02</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </>
                            }
                        </form>
                        <div className="flex flex-col w-1/2">
                            <h2 className="text-2xl font-bold">Registro de Atención</h2>
                            <DataDisplay label="Recepcionado por" value={`${secretaria?.nombre || 'N/A'} ${secretaria?.apellido || ''}`} />
                            <DataDisplay label="Primera Consulta" value={historia?.fechaPrimeraConsulta || 'N/A'} />
                            <DataDisplay label="Última Consulta" value={historia?.fechaUltimaConsulta || 'N/A'} />
                            <DataDisplay label="Médico de cabecera" value={`${profesional?.nombre || 'N/A'} ${profesional?.apellido || ''}`} />
                        </div>
                    </>
                }
            </>
        </div>
    )
}
