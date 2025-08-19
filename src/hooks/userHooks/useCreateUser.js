'use client';

import { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useCreateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [progress, setProgress] = useState(0);

    const createUser = useCallback(async (userData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        setProgress(10);
        try {
            setProgress(70);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/create`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                toast.error(data.message || 'Error al crear el usuario.');
                throw new Error('Error creating user');
            }
            setProgress(100);
            if (response.status === 201) setSuccess(true);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (error) {
            toast.error("Ha ocurrido un error");
            if (error.message) toast.error(error.message);
        }
    }, [error]);


    useEffect(() => {
        if (success) {
            toast.success("Usuario creado exitosamente");
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    }, [success])
    return { createUser, loading, error, success, progress };
}