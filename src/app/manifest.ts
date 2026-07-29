import type { MetadataRoute } from "next";
import { profile } from "@data/profile";
import { seo } from "@data/seo";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.siteName,
    short_name: profile.brand,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07090c",
    theme_color: "#07090c",
    lang: "en-US",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
