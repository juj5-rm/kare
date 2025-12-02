import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Configura las fuentes Jura y Roboto
        jura: ["Jura", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "sigca-blue": "#7495b2",
        "sigca-contraste":"#005469",
        "sigca-black": "#111111",
        "sigca-white": "#ffffff",
        "aventureros-fondo": "#1b5289",
        "aventureros-azul": "#2062af",
        "aventureros-rojo": "#800000",
        "aventureros-verde": "#40ab35",
        "conquistadores-fondo":"#b21b2d",
        "conquistadores-azul": "#000abb",
        "conquistadores-rojo": "#d9272e",
        "conquistadores-amarillo": "#ffce00",
        "guias-mayores-fondo":"#f3b415",
        "guias-mayores-azul": "#001e61",
        "guias-mayores-amarillo": "#ffce00",
        "gris-soporte": "#242426",
        "gris-container-clubes": "#f8f8f8",
        "sigca-bordes":"#2062AF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
