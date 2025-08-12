'use client';

import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState(null);

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/logout`, {
                method: 'POST',
                credentials: 'include',
            });
            if (!res.ok) {
                const errorData = await res.json();
                console.log(errorData);
                setErrors(errorData.errors[0]);
                return;
            }
            toast.success('Sesión cerrada exitosamente.');
            window.location.href = '/login';
        } catch (err) {
            setErrors(err);
            toast.error('Ha ocurrido un error.');
        } finally {
            setLoading(false);
        }
    }, []);

    const resetErrors = () => setErrors(null);
    return { loading, error, logout, resetErrors };
}