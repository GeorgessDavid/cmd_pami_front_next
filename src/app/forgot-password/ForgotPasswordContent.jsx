'use client';

import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { useRequestReset } from '@/hooks';

export default function ForgotPasswordContent() {
    const { register, handleSubmit } = useForm();
    const { requestReset, loading, requested } = useRequestReset();

    return (
        <div className='w-[30rem] my-8'>
            <form onSubmit={handleSubmit(values => requestReset(values.email))}>
                <TextField label='Correo Electrónico' fullWidth variant='standard' color='primary' {...register('email', { required: 'Debe introducir una dirección de correo electrónico.' })} disabled={loading || requested} />
                {requested && <span style={{
                    color: 'green',
                    display: 'block',
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                }}>Se ha enviado un correo electrónico con las instrucciones para restablecer la contraseña.</span>}
                <LoadingButton type='submit' variant='contained' color='primary' loading={loading} disabled={requested} loadingPosition='start' sx={{ marginTop: '1rem', float: 'right' }} >Confirmar</LoadingButton>
            </form>
        </div>
    )
}