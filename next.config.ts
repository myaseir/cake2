import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NAME: process.env.NAME,
  },
};

export default nextConfig;