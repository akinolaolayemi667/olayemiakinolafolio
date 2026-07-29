import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static hosting (Netlify / GitHub Pages). Image optimizer unavailable in export mode.
  output: isProd ? "export" : "standalone",
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  webpack: (config, { dev }) => {
    // Persistent pack cache can OOM on Windows after many HMR recompiles.
    // Memory cache keeps Fast Refresh without PackFileCacheStrategy disk packs.
    if (dev) {
      config.cache = { type: "memory" };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/views"),
      "@views": path.resolve(__dirname, "src/views"),
      "@ui-kit": path.resolve(__dirname, "src/ui-kits"),
      "@type": path.resolve(__dirname, "src/types"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@data": path.resolve(__dirname, "src/data"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    };
    return config;
  },
  images: {
    // Required for `output: "export"` — serve optimized source assets from /public.
    unoptimized: isProd ? true : false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Local `/public` assets only — no remote image hosts in production UI.
  },
};

export default nextConfig;
