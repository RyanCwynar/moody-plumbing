import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/moody-plumbing",
  assetPrefix: "/moody-plumbing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
