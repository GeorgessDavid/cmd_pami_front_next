'use client';

function obtenerIniciales({ nombre, apellido }) {
    const primeraInicial = nombre?.split(" ")[0]?.charAt(0).toUpperCase() || "";
    const segundaInicial = apellido?.split(" ")[0]?.charAt(0).toUpperCase() || "";

    return `${primeraInicial}${segundaInicial}`;
}

export default obtenerIniciales;