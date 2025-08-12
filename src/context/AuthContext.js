'use client';

import { useState, useContext, createContext, useEffect } from 'react';
export const LoggedContext = createContext();

export const useLogged = () => {
    const context = useContext(LoggedContext);
    if (!context) {
        throw new Error('useLogged must be used within a LoggedProvider');
    }
    return context;
}

export const LoggedProvider = ({ children, initialData }) => {
    const [logged, setLogged] = useState(initialData?.logged || false);
    const [rol, setRol] = useState(initialData?.rol || '');
    const [id, setId] = useState(initialData?.id || '');
    const [nombre, setNombre] = useState(initialData?.nombre || '');
    const [apellido, setApellido] = useState(initialData?.apellido || '');

    useEffect(() => {
        if (initialData) {
            setLogged(initialData.logged);
            setRol(initialData.rol);
            setId(initialData.id);
            setNombre(initialData.nombre);
            setApellido(initialData.apellido);
        }
    }, [initialData]);

    return (
        <LoggedContext.Provider value={{ logged, setLogged, rol, id, setRol, setId, nombre, setNombre, apellido, setApellido }}>
            {children}
        </LoggedContext.Provider>
    );
}