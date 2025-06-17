/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Elimina completamente el uso de turbo (ya lo resolviste desde el script)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
