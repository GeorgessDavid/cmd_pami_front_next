'use client';

import { Dialog, DialogContent, DialogTitle, IconButton, Divider, DialogActions, Tooltip, CircularProgress, Switch, MenuItem, Avatar, Skeleton, Chip, Stack, TextField, FormControl, Select, InputLabel, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { DataDisplay, CustomTooltip, FormModal } from '@/components';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getInitials } from '@/utils';

import KeyIcon from '@mui/icons-material/Key';

export default function ProfileModal({ open, handleClose, user }) {
    let loading = false;
    let progress = 0;

    const [editMode, setEditMode] = useState(false);
    const [iniciales, setIniciales] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [changePasswordOpen, setChangePasswordOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { register: updateRegister, handleSubmit: updateHandleSubmit } = useForm();
    const { register: passwordRegister, handleSubmit: handlePasswordSubmit } = useForm();

    useEffect(() => {
        if (user) {
            setIniciales(getInitials({ nombre: user.nombre, apellido: user.apellido }));
            if (user.rol?.id === 1) setBgColor('#fa8283');
            if (user.rol?.id === 2) setBgColor('#7e9cf4');
            if (user.rol?.id === 3) setBgColor('#f9d57d');
        }
    })

    return (
        <Dialog open={open} onClose={() => handleClose(false)} maxWidth='sm' fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Mi perfil
                <CustomTooltip title='Cerrar' placement='bottom'>
                    <IconButton onClick={() => handleClose(false)}>
                        <CloseIcon />
                    </IconButton>
                </CustomTooltip>
            </DialogTitle>
            <form /* onSubmit={updateHandleSubmit(async (values) => {
                const { email } = user;
                const { nombre, apellido, telefono, sexo } = values;
                let body = {
                    id,
                    email,
                    nombre,
                    apellido,
                    telefono,
                    sexo
                }

                await userUpdate(body);
            })} */>
                <DialogContent>
                    {
                        loading ?
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Skeleton variant='circular' width={75} height={75} />
                                <div>
                                    <Skeleton variant='text' width={200} />
                                    <Skeleton variant='text' width={150} />
                                </div>
                            </div>
                            :
                            <>
                                {!editMode &&
                                    <>
                                        <div className='flex gap-4'>
                                            <Avatar sx={{
                                                width: 75, height: 75, fontSize: '2rem',
                                                backgroundColor: bgColor
                                            }}>{iniciales}</Avatar>
                                            <div className='flex flex-col'>
                                                <h2 className="font-bold m-0 text-2xl">{user?.nombre} {user?.apellido}</h2>
                                                <span className="text-sm text-[#9b9ea0]">{user?.rol?.rol}</span>
                                            </div>
                                        </div>
                                        <Divider sx={{ margin: '1rem 0' }} />
                                    </>
                                }
                                <div className='flex gap-2 flex-col'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h2 className="text-2xl font-bold">Información del usuario</h2>
                                        {!editMode && <IconButton onClick={() => setEditMode(true)}> <BorderColorIcon color='primary' /> </IconButton>}
                                        {editMode &&
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                <IconButton onClick={() => setEditMode(false)}> <CloseIcon color='error' /> </IconButton>
                                                {!loading && <IconButton type='submit' disabled={progress > 90}> <CheckIcon color='primary' /> </IconButton>}
                                                {loading &&
                                                    <IconButton disabled>
                                                        <CircularProgress variant='determinate' size={24} color='primary' value={progress} />
                                                    </IconButton>
                                                }
                                            </div>
                                        }
                                    </div>
                                    {!editMode &&
                                        <>
                                            <DataDisplay label='Correo Electrónico' value={user.email} />
                                            <DataDisplay label='Sexo Biológico' value={user.sexo} />
                                            <DataDisplay label='Teléfono' value={user.telefono || 'No asignado.'} />
                                        </>
                                    }
                                    {editMode &&
                                        <>
                                            <Tooltip title='El correo electrónico no puede ser modificado.' placement='bottom'>
                                                <DataDisplay label='Correo Electrónico:' value={user.email} />
                                            </Tooltip>
                                            <TextField label='Nombre' variant='standard' size='small' color='primary' fullWidth defaultValue={user.nombre} {...updateRegister('nombre', { required: 'Debe introducir su nombre.' })} />
                                            <TextField label='Apellido' variant='standard' size='small' color='primary' fullWidth defaultValue={user.apellido} {...updateRegister('apellido', { required: 'Debe introducir su apellido.' })} />
                                            <TextField label='Teléfono' variant='standard' size='small' color='primary' fullWidth defaultValue={user.telefono} {...updateRegister('telefono', { required: 'Debe introducir un número de teléfono.' })} />
                                            <FormControl variant='standard'
                                                color='primary' fullWidth>
                                                <InputLabel id='sexo'>Sexo Biológico</InputLabel>
                                                <Select
                                                    defaultValue={user.sexo}
                                                    inputProps={{
                                                        name: 'sexo',
                                                        id: 'sexo',
                                                    }}
                                                    variant='standard'
                                                    color='primary'
                                                    {...updateRegister('sexo', { required: 'Debe seleccionar un género.' })}
                                                >
                                                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                                    <MenuItem value={'Femenino'}>Femenino</MenuItem>

                                                </Select>
                                            </FormControl>
                                        </>
                                    }
                                </div>
                                {user?.rol?.id === 2 &&
                                    <>
                                        <Divider sx={{ margin: '1rem 0' }} />
                                        <div className='flex gap-2 flex-col'>
                                            <h2 className="text-2xl font-bold">Información Profesional</h2>
                                            <DataDisplay label='Matrícula' value={user.matricula || 'No asignado.'} />
                                            <span style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>* La información del profesional sólo puede ser modificada por un administrador.</span>
                                        </div>
                                    </>
                                }
                            </>
                    }
                </DialogContent>
                <DialogActions>
                    <div className='flex gap-2 items-center text-[var(--titles-foreground)] font-bold transition-all duration-300 m-4 hover:underline hover:text-[#0076bff] cursor-pointer' onClick={() => setChangePasswordOpen(true)}>
                        <span>Cambiar Contraseña</span>
                        <KeyIcon color='primary' />
                    </div>
                </DialogActions>
            </form>
            <FormModal open={changePasswordOpen} setOpen={setChangePasswordOpen} title='Cambiar Contraseña' onsubmit={handlePasswordSubmit(async (values) => {

                if (values.newPassword !== values.confirmNewPassword) {
                    toast.error('Las contraseñas no coinciden.');
                    return;
                }

                const { oldPassword, newPassword } = values;
                let body = {
                    id,
                    oldPassword,
                    newPassword
                }

                try {
                    await userSelfUpdatePassword(body);
                } catch (err) {
                    toast.error('Error al cambiar la contraseña.');
                    console.error(err)
                }

            })} loading={loading} progress={progress}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <TextField label='Contraseña Actual' variant='standard' size='small' color='primary' fullWidth type={showPassword ? 'text' : 'password'}
                        {...passwordRegister('oldPassword', { required: 'Debe introducir su contraseña actual.' })} />
                    <TextField label='Nueva Contraseña' variant='standard' size='small' color='primary' fullWidth type={showPassword ? 'text' : 'password'}
                        {...passwordRegister('newPassword', { required: 'Debe introducir su nueva contraseña.' })} />
                    <TextField label='Confirmar Nueva Contraseña' variant='standard' size='small' color='primary' fullWidth type={showPassword ? 'text' : 'password'}
                        {...passwordRegister('confirmNewPassword', { required: 'Debe confirmar su nueva contraseña.' })}
                    />
                    <FormControlLabel label="Mostrar contraseñas" control={<Switch color='primary' onChange={() => setShowPassword(!showPassword)} />} />
                </div>
            </FormModal>
        </Dialog >
    );
}
