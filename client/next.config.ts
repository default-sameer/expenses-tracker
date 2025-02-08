import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://exp.sameer-joshi.com.np/api/:path*", // Proxy to Backend
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
