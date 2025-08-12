import { cookies } from 'next/headers';

export const nombre = async (req) => {
    // Obtener el almacén de cookies
    const cookieStore = await cookies();

    // Obtener la cookie `userSession`
    const nombre = cookieStore.get('nombre');

    if (!nombre) return null

    return nombre.value;
};

export const apellido = async (req) => {
    const cookieStore = await cookies();

    const apellido = cookieStore.get('apellido');

    if(!apellido) return null;

    return apellido.value;
}