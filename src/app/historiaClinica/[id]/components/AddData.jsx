'use client';

import {Button, TextField} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function AddData ({patientId, submitFunction, loading, profesionalId, clinicalStoryId}){
     const [edited, setEdited] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const router = useRouter();
    useEffect(() => {
        const handlePreventClose = (e) => {
            if (edited) {
                e.preventDefault();
                e.returnValue= 'Tenés cambios sin guardar, ¿estás seguro que querés salir?'; // Chrome requires returnValue to be set
            }
        }

        window.addEventListener('beforeunload', handlePreventClose);

        return () => {
            window.removeEventListener('beforeunload', handlePreventClose);
        }
    }, [edited])

    useEffect(() => {
        const originalPush = router.push
    
        const customPush = (url) => {
          if (edited) {
            const confirmLeave = window.confirm(
              'Tenés cambios sin guardar. ¿Estás seguro que querés salir?'
            )
            if (!confirmLeave) return
          }
          originalPush(url)
        }
    
        router.push = customPush
    
        return () => {
          router.push = originalPush
        }
      }, [edited])

      return (
        <form className="w-full my-3">
            <h2 className="font-bold text-2xl">Agregar datos a la historia clínica</h2>
            <TextField
                id='outlined-multiline-static'
                label='Historia Clínica'
                multiline
                rows={5}
                defaultValue=''
                variant='standard'
                sx={{
                    margin: '1rem 0'
                }}
                color='primary'
                {...register('historia', { required: true })}
                onChange={(e) => {
                    if (e.target.value !== '') setEdited(true);
                    else setEdited(false);
                }}
                disabled={disabled}
                fullWidth />
            <Button loading={loading} variant='contained' color='primary' disabled={!edited} sx={{float: 'right'}} type='submit' onClick={handleSubmit(submitFunction)}>
                {loading ? 'Cargando...' : 'Guardar'}
            </Button>
        </form>
      )
}