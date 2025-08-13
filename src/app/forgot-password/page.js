import ForgotPasswordContent from "./ForgotPasswordContent"

export default function ForgotPasswordPage() {
    return (
        <div className="m-8">
            <h1 className="text-3xl font-bold">Recuperar contraseña</h1>
            <p>Introduce el correo electrónico con el que se encuentra registrado en el sistema para poder iniciar el proceso de restablecimiento de contraseña.</p>
            <ForgotPasswordContent />
        </div>
    )
}
