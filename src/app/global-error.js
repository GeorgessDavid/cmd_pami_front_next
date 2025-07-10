'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Opcional: Log del error para debugging
    console.error('Error global capturado:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-red-300">500</h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Error crítico del sistema
            </h2>
            <p className="text-gray-600 mb-8">
              Ha ocurrido un error crítico en la aplicación. Por favor, recarga la página.
            </p>
            <div className="space-x-4">
              <button
                onClick={reset}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Intentar de nuevo
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 