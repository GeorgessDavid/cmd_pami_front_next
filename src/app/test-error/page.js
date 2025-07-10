'use client';

import { useState } from 'react';

export default function TestErrorPage() {
  const [errorType, setErrorType] = useState('');

  const throwError = (type) => {
    setErrorType(type);
    
    switch (type) {
      case 'client':
        throw new Error('Error de cliente forzado');
      case 'server':
        // Simular un error del servidor
        throw new Error('Error del servidor forzado');
      default:
        break;
    }
  };

  const simulate404 = () => {
    // Redirigir a una ruta que no existe
    window.location.href = '/ruta-que-no-existe';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Página de Prueba de Errores
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={() => throwError('client')}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Forzar Error de Cliente (500)
          </button>
          
          <button
            onClick={() => throwError('server')}
            className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Forzar Error del Servidor (500)
          </button>
          
          <button
            onClick={simulate404}
            className="w-full bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Simular Error 404
          </button>
          
          <a
            href="/"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </a>
        </div>
        
        {errorType && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              Último error simulado: {errorType}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 