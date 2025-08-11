'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useLogin = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState(null);

    const login = useCallback(async (values) => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!res.ok) {
                const errorData = await res.json();
                console.log(errorData);
                setErrors(errorData.errors[0]);
                return;
            }
            setIsLogged(true);
            toast.success('Inicio de sesión exitoso.');
            if (res.status === 200) window.location.href = '/';
        } catch (err) {
            setErrors(err);
            toast.error('Ha ocurrido un error.');
        } finally {
            setLoading(false);
        }
    }, []);


    const resetErrors = () => setErrors(null);
    return { isLogged, loading, error, login, resetErrors };
};

