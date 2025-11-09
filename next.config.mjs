/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Repository: scheda-allenamento
  basePath: '/scheda-allenamento',
};

export default nextConfig;
