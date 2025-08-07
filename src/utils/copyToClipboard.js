'use client';
import { toast } from 'react-toastify';

const copyToClipboard = async (text, message, errorMessage) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success(message || 'Texto copiado al portapapeles');
    } catch (err) {
        console.error("Error al copiar:", err);
        toast.error(errorMessage || 'Error al copiar el texto.');
        toast.error(err);
    }
};


export default copyToClipboard;