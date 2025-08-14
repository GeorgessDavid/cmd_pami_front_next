'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useUsers = (limit, offset, filterValue) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    const getAllUsers = useCallback(async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/getAll?limit=${limit}&offset=${offset}${filterValue != 0 ? `&role=${filterValue}` : ''}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                console.log("res no ta ok")
                const data = await res.json();
                throw new Error(data.message || 'Error al obtener los usuarios');
            }


            const data = await res.json();
            console.log(data);
            setUsers(data);

        } catch (err) {
            
            setError(err);

        } finally {
            console.log(users);
            setLoading(false);
        }
    }, [limit, offset, filterValue]);

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    useEffect(() => {
        if (error?.message) toast.error(error.message);
    }, [error]);

    return { loading, error, users, getAllUsers };
}

export const useUser = (id) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const getUser = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Error al obtener el usuario');
            }

            const data = await res.json();
            setUser(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        if (error?.message) toast.error(error.message);
    }, [error]);

    return { loading, error, user, getUser };
}
