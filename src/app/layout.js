import "./globals.css";
import Header from "@/components/Header";


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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
