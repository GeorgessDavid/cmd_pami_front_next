import "./globals.css";
import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry";
import { ToastContainer } from 'react-toastify';
import { LoggedProvider } from "@/context/AuthContext";
import { isLogged, role, nombre, apellido } from "@/middlewares";

export const metadata = {
  title: "CMD App - PAMI",
  description: "Sistema de Gestión de historias clínicas para PAMI en los Consultorios Médicos David",
};

export default async function RootLayout({ children }) {
  let name, lastname, logged, user_id, rol;

  try {
    logged = await isLogged();
    let role_data = await role();

    if (!role_data) logged = false;
    if (logged && role_data) {
      const { id, rol: user_rol } = role_data;
      user_id = id;
      rol = user_rol;

      name = await nombre();
      lastname = await apellido();
    }
  } catch (err) {
    console.error("Error crítico en la obtención de datos del usuario:", err);
    logged = false;
    throw err;
  }

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/cmd_isologo_white.png" />
      </head>
      <body>
        <ThemeRegistry>
          <ToastContainer position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastStyle={{ background: "#101219", minWidth: "400px", maxWidth: "800px", color: "#fff" }}
          />
          <LoggedProvider initialData={{ logged, id: user_id, rol, nombre: name, apellido: lastname }}>
            <Header />
          </LoggedProvider>
          <main style={{ width: "100%", minWidth: "100vw" }}>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
