import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Activa renderizado estricto de React
  reactStrictMode: true,

  // Habilita imágenes externas si usas íconos o servicios CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Puedes filtrar por dominio más adelante
      },
    ],
  },

  // (Opcional futuro) Rutas con prefijo
  // basePath: "/lufatsec", 

  // (Opcional futuro) Soporte multiidioma
  // i18n: {
  //   locales: ["es"],
  //   defaultLocale: "es",
  // },
};

export default nextConfig;
