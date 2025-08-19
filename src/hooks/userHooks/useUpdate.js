'use client';

import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const updateUser = useCallback(async (userData) => {
        const { id } = userData;
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/update/${id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el usuario');
            }

            const data = await response.json();
            toast.success('Usuario actualizado con éxito');

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
            setError(null);

            return data;
        } catch (err) {
            setError(err);
            toast.error('Error al actualizar el usuario');
        } finally {
            setLoading(false);
        }
    }, []);

    return { updateUser, loading, error, success }; 
}