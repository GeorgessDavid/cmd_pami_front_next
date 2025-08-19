'use client';

import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const deleteUser = useCallback(async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/desactivate/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            });
            if (!response.ok) throw new Error('Error al eliminar el usuario');
            setSuccess(true);
            toast.success('Usuario eliminado correctamente');
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (error) {
            toast.error(error.message || 'Error al eliminar el usuario');
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, success, error, deleteUser };
}