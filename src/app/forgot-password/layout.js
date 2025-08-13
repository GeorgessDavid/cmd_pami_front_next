export const metadata = {
    title: "Recuperar contraseña - CMD PAMI"
}

export const dynamic = "force-dynamic";


export default function ForgotPasswordLayout({ children}) {
    return (
        <div className="w-full flex flex-col">
            {children}
        </div>
    )
}