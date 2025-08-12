import { cookies } from 'next/headers';

export const isLogged = async (req) => {
    try {

        // Obtener el almacén de cookies
        const cookieStore = await cookies();

        // Obtener la cookie `userSession`
        const auth = cookieStore.get('user');

        if (!auth) {
            return null; // No hay cookie válida
        }

        return true;
    } catch (error) {
        console.error('Error al verificar la sesión del usuario:', error);
        throw new Error("Error al verificar la sesión del usuario");
    }
};
