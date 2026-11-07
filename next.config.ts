import type { NextConfig } from "next";
import { siteBasePath } from "./src/data/site-path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: siteBasePath,
  images: { unoptimized: true },
};

export default nextConfig;
