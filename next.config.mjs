/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Mude de 'domains' para 'remotePatterns'
    remotePatterns: [
      {
        protocol: 'https', // Ou 'http' se necessário, mas HTTPS é padrão
        hostname: 'lh3.googleusercontent.com',
        // Você pode especificar pathname para ser mais restritivo
        // pathname: '/a/**',
      },
      // Se tiver outros domínios, adicione objetos semelhantes aqui
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },
};

import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default pwaConfig(nextConfig);