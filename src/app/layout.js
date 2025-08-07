import "./globals.css";
import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry";
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: "CMD App - PAMI",
  description: "Sistema de Gestión de historias clínicas para PAMI en los Consultorios Médicos David",
};

export default function RootLayout({ children }) {
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
            toastStyle={{ background: "#101219", minWidth: "400px", maxWidth:"800px", color: "#fff" }}
          />
          <Header />
          <main style={{ width: "100%", minWidth: "100vw" }}>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
