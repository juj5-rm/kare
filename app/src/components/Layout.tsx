import Navbar from "./navbar/navbar"; // Asegúrate de que este sea el path correcto
import Footer from "./footer/footer";
import { LayoutProps } from "../interfaces/LayoutProps.interface";




export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Bloque de espacio debajo de la navbar */}
      <div className="navbar-placeholder">
        {/* Aquí va el contenido que no debe ser cubierto por la navbar */}
      </div>

      {/* Contenido principal */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
