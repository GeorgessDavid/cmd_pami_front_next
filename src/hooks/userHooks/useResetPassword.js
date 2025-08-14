'use client';

import {useState, useCallback} from 'react';
import { toast } from 'react-toastify';

export const useRequestReset = () => {
    const [ loading, setLoading] = useState(false);
    const [ error, setError ] = useState(null);
    const [ requested, setRequested ] = useState(false);

    const requestReset = useCallback(async (email) => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/forgotPasswordRequest`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Error al solicitar el restablecimiento de contraseña');
            }

            setRequested(true);
            toast.success('Se ha enviado un correo para restablecer la contraseña');
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, error, requested, requestReset };
}