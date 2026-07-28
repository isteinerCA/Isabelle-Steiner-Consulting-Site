import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/product-lab",
        destination: "/product-sandbox",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
