// src/pages/_app.tsx
import { AppProps } from "next/app";
import Head from "next/head";
import { Jura, Roboto } from "next/font/google";
import Layout from "@/components/Layout";
import "@/styles/globals.css"; // Asegúrate de importar tus estilos globales

// Cargar las fuentes con next/font
const jura = Jura({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jura.className} ${roboto.className}`}>
      <Head>
        <title>KARE - Sistema de Gestión</title>
        <meta name="description" content="Descripción de mi sitio web" />
      </Head>
      {/* Envolver el contenido de todas las páginas con el layout */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;

