import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ariainterview.com",
      },
    ],
  },
};

export default nextConfig;
