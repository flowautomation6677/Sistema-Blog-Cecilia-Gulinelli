import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forced rebuild
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
