import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export const role = async (req) => {
    // Obtener el almacén de cookies
    const cookieStore = await cookies();

    // Obtener la cookie `userSession`
    const role = cookieStore.get('rol');

    if (!role) {
        return null;
    }

    try {
        // Decodificar el token usando jose
        const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

        // Verificar y decodificar el token
        const { payload } = await jwtVerify(role.value, secret);

        return {
            rol: payload.rol,
            id: payload.id
        };

    } catch (err) {
        console.error('Error al decodificar el token:', err);
        if (err.name === 'TokenExpiredError') throw new Error("El token de autenticación ha expirado");
        throw new Error("Error al decodificar el token de validación");
    }
};
