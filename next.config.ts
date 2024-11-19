import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
