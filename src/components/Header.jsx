'use client';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#0b2344] shadow-md">
      <div className="flex items-center gap-4">
        <img src="/cmd_isologo_white.png" alt="CMD Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">CMD App - PAMI</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}