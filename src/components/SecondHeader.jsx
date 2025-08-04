'use client';
import Link from 'next/link';

export default function SecondHeader({ rol }) {
    return (
        <div className="py-4 px-8 bg-[#f8f9fa] shadow-[0_2px_10px_rgba(0,0,0,0.5)] flex justify-between items-center">
            <nav className="flex items-center gap-4">
                {rol === 'admin' && <LinkTo href="/usuarios" title="Usuarios" />}
                <LinkTo href="/pacientes" title="Pacientes" />
            </nav>
        </div>
    )
}

const LinkTo = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="relative text-[#0b2344] font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0b2344] after:transition-all after:duration-300 hover:after:w-full"
        >
            {title}
        </Link>
    )
}