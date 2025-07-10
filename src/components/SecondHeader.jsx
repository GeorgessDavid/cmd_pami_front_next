'use client';
import Link from 'next/link';

export default function SecondHeader({ rol }) {
    return (
        <div className="flex items-center justify-between p-4 bg-[#efefef] shadow-xl border-bottom z-50">
            <nav className="flex items-center gap-4">
                <Link href="/pacientes" className="text-[#0b2344] font-semibold hover:underline">Pacientes</Link>
            </nav>
        </div>
    )
}