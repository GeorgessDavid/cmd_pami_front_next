'use client';

import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Tooltip, Divider, Avatar, Chip } from '@mui/material';
import { InputGroup, TextGroup } from '@/components';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
// import ConfirmModal from '@/components/ConfirmModal/ConfirmModal';
import CircularProgress from '@mui/material/CircularProgress';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import './UserModal.css';
import { useState, useEffect } from 'react';
// import { useUserDelete, useUserUpdate } from '@/hooks/useUsers';
// import { toast } from 'react-toastify';

const UserModal = ({ user, open, handleClose, loading }) => {
    const [editMode, setEditMode] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const bgColor = ['#f9d57d', '#7e9cf4', '#fa8283'];
    const [iniciales, setIniciales] = useState('');


    const handleEditMode = () => {
        setEditMode(!editMode);
    }

    const handleDeleteOpen = () => {
        setDeleteOpen(!deleteOpen);
    }

    // const { deleteUser } = useUserDelete();
    // const { updateUser, loading: updateLoading, status, error: updateError } = useUserUpdate();

    // const handleDelete = () => {
    //     deleteUser(user?.id);
    // }

    // const handlesubmit = (e) => {
    //     let body = new Object();

    //     for (let i = 0; i < e.target.length; i++) {
    //         if (e.target[i].name) {
    //             body[e.target[i].name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")] = e.target[i].value;
    //         }
    //         if (e.target[i].name && e.target[i].value.length === 0) {
    //             setError(true);
    //             setErrorMessage(`El campo ${e.target[i].name} no puede estar vacío.`);
    //         }
    //         if (e.target[i].name === 'email' && !e.target[i].value.includes('@')) {
    //             setError(true);
    //             setErrorMessage('El email ingresado no es válido.');
    //         }

    //     }
    //     if (!error) {
    //         updateUser(body);
    //         e.preventDefault();
    //     }
    // }

    // const handleChange = () => {
    //     setError(false);
    //     setErrorMessage(undefined);
    // }

    // useEffect(() => {
    //     if (error) toast.error(errorMessage);
    // }, [error, errorMessage])

    // useEffect(() => {
    //     if (status === 200 && !loading) {
    //         setTimeout(() => {
    //             window.location.reload();
    //         }, 5000);
    //     }
    // }, [loading, status])

    // useEffect(() => {
    //     if (updateError) setError(true);
    // }, [updateError])

    const obtenerIniciales = ({ nombre, apellido }) => {
        const primeraInicial = nombre?.split(" ")[0]?.charAt(0).toUpperCase() || "";
        const segundaInicial = apellido?.split(" ")[0]?.charAt(0).toUpperCase() || "";

        return `${primeraInicial}${segundaInicial}`;
    }

    useEffect(() => {
        if (user) setIniciales(obtenerIniciales(user));
    }, [user]);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='sm'
                fullWidth
            >
                <form /* onSubmit={handlesubmit} */ onChange={() => { /* handleChange() */ }}>
                    <DialogTitle id="alert-dialog-title" sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        Datos del Usuario
                        <Tooltip title="Cerrar" arrow>
                            <CloseIcon sx={{
                                cursor: 'pointer'
                            }} onClick={handleClose} />
                        </Tooltip>
                    </DialogTitle>
                    <Divider variant='middle' />
                    <DialogContent>
                        <DialogContent id="alert-dialog-description" sx={{ color: 'black', fontSize: '1.125rem', fontWeight: '400' }}>
                            {!editMode ?
                                <div className='flex flex-col items-center justify-center w-full h-full'>
                                    <Avatar sx={{
                                        width: 100, height: 100, fontSize: '2rem',
                                        backgroundColor: bgColor[user?.rol?.id - 1]
                                    }}>{iniciales}</Avatar>
                                    <span className="text-[2rem] font-semibold mt-4 text-center">{user?.nombre} {user?.apellido}</span>
                                    <span className="text-xl italic font-light text-center color-[#707070]">{user?.rol?.rol}</span>
                                    <Divider variant='middle' flexItem sx={{ margin: '1rem 0 0' }} />
                                    <Private_Container>
                                        <Private_SectionTitle title="Datos del Usuario" />
                                        <TextGroup icon={<PermIdentityIcon fontSize='medium' />} label="ID:" value={user?.id} />
                                        <TextGroup icon={<AlternateEmailIcon fontSize='medium' />} label="Email:" value={user?.email} />
                                    </Private_Container>
                                    <Divider variant='middle' flexItem />
                                    <Private_Container>
                                        <Private_SectionTitle title="Datos Personales" />
                                        <TextGroup icon={<LocalPhoneIcon fontSize='medium' />} label="Teléfono:" value={user?.telefono || 'No indicado'} />
                                        <TextGroup icon={user?.sexo === "Femenino" ? <FemaleIcon fontSize='medium' /> : <MaleIcon fontSize='medium' />} label="Sexo Biológico:" value={user?.sexo || 'No indicado'} />
                                    </Private_Container>
                                    {user?.Rol_id === 2 &&
                                        <>
                                            <Divider variant='middle' flexItem />
                                            <Private_Container>
                                                <Private_SectionTitle title="Datos del Profesional" />
                                                <TextGroup icon={<LocalHospitalIcon fontSize='medium' />} label="Especialidad:" value={user?.especialidades?.[0].especialidad || 'No indicado'} />

                                            </Private_Container>
                                            {user?.practicasMedicas?.length > 0 &&
                                                <Private_Container>
                                                    <Private_SectionTitle title="Practicas Medicas" />
                                                    <div className='flex flex-wrap justify-start items-center gap-2 w-full h-full'>
                                                        {user?.practicasMedicas.map((practica, index) => (
                                                            <Chip label={practica.practicaMedica} key={index} color='primary' variant='outlined' sx={{ margin: '0.5rem' }} disabled={false} />
                                                        ))}
                                                    </div>
                                                </Private_Container>
                                            }
                                        </>
                                    }
                                </div>
                                : <>
                                    <div className='d-flex w25-75'>
                                        <InputGroup label='ID' type='text' editMode={editMode} value={user?.id} loading={loading} disabled={true} />
                                        <InputGroup label='Rol' type='text' editMode={editMode} value={user?.rol?.rol} loading={loading} disabled={true} />
                                    </div>
                                    <InputGroup label='Nombre' type='text' resetErrors={handleChange} editMode={editMode} value={user?.nombre} loading={loading} error={error} errorMessage={errorMessage} />
                                    <InputGroup label='Apellido' type='text' resetErrors={handleChange} editMode={editMode} value={user?.apellido} loading={loading} error={error} errorMessage={errorMessage} />
                                    <InputGroup label='Email' type='email' resetErrors={handleChange} editMode={editMode} value={user?.email} loading={loading} error={error} errorMessage={errorMessage} />
                                    <InputGroup label='Sexo Biológico' type='text' editMode={editMode} value={user?.sexo} loading={loading} disabled={true} />
                                    <InputGroup label='Teléfono' type='text' customType={true} resetErrors={handleChange} editMode={editMode} value={user?.telefono ? user.telefono : 'No indicado.'} loading={loading} />
                                </>
                            }
                        </DialogContent>
                    </DialogContent>
                    <DialogActions sx={{ paddingBottom: '2rem' }}>
                        {
                            editMode &&
                            <>
                                <Tooltip title="Cancelar" arrow
                                    slotProps={
                                        {
                                            tooltip: { sx: { backgroundColor: '#ccc', color: 'red', fontSize: '1rem' } },
                                            arrow: { sx: { color: '#ccc' } }
                                        }
                                    }
                                >
                                    <Button color='error' onClick={handleEditMode}><CloseIcon /></Button>
                                </Tooltip>
                                <Tooltip title="Guardar" arrow
                                    slotProps={
                                        {
                                            tooltip: { sx: { backgroundColor: 'green', color: 'white', fontSize: '1rem' } },
                                            arrow: { sx: { color: 'green' } }
                                        }
                                    }
                                >
                                    {!updateLoading && <Button color='success' type='submit'><CheckIcon /></Button>}
                                    {updateLoading && <CircularProgress color='success' size={17} sx={{
                                        marginRight: '1rem',
                                    }} />}
                                </Tooltip>
                            </>
                        }
                        {
                            !editMode &&
                            (
                                <>
                                    <Tooltip title="Eliminar" arrow
                                        slotProps={{
                                            tooltip: {
                                                sx: {
                                                    backgroundColor: 'red',
                                                    color: 'white',
                                                    fontSize: '1rem',
                                                }
                                            },
                                            arrow: {
                                                sx: {
                                                    color: 'red',
                                                }
                                            }
                                        }}>
                                        <Button color='error' onClick={handleDeleteOpen} ><DeleteIcon /></Button>
                                    </Tooltip>
                                    <Tooltip title="Editar" arrow
                                        slotProps={{
                                            tooltip: {
                                                sx: {
                                                    backgroundColor: '#1976d2',
                                                    color: 'white',
                                                    fontSize: '1rem',
                                                }
                                            },
                                            arrow: {
                                                sx: {
                                                    color: '#1976d2'
                                                }
                                            }
                                        }}
                                    >
                                        <Button onClick={handleEditMode} type='button'><BorderColorIcon /></Button>
                                    </Tooltip>
                                </>
                            )
                        }

                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default UserModal;

// The following code is private and should not be shared.
const Private_SectionTitle = ({ title }) => {
    return (
        <h2 className="text-2xl text-[var(--titles-foreground)] mb-4">{title}</h2>
    );
}

const Private_Container = ({ children }) => {
    return (
        <div className='flex flex-col justify-center items-start w-full h-full my-4'>
            {children}
        </div>
    );
}