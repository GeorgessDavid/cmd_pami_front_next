'use client';
import Link from 'next/link';
import SecondHeader from './SecondHeader';

export default function Header({ logged }) {
  logged = true;
  return (
    <>
      <header className="flex items-center justify-between p-4 bg-[#0b2344] shadow-xl border-bottom z-50">
        <div className="flex items-center gap-4">
          <Link href="https://app.consultoriosmedicosdavid.com.ar/" title="Volver a CMD App">
            <img src="/cmd_isologo_white.png" alt="CMD Logo" className="h-10 w-10" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://prestadores.pami.org.ar/" title="Ir a Prestadores PAMI">
            <img src="/logo_pami_blanco.png" alt="PAMI Logo" className="w-20" />
          </Link>
        </div>
      </header>
      {logged && <SecondHeader rol="admin" />}
    </>
  );
}