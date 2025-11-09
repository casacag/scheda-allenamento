/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Repository: scheda-allenamento
  basePath: '/scheda-allenamento',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Force static export
  distDir: 'out',
  trailingSlash: true,
};

export default nextConfig;
