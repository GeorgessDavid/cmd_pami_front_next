export const metadata ={
    title: "Iniciar Sesión - CMD PAMI"
}

export default function LoginLayout({ children}) {
    return (
        <div className="min-h-screen w-full flex flex-col bg-[url('/pami_bg_login.jpg')] bg-cover bg-center">
            {children}
        </div>
    )
}