import type { Metadata } from "next";
import AboutPage from "@views/About/About";
import { JsonLd } from "@components/seo/JsonLd";
import { metadataForPage } from "@lib/seo";
import { buildPageGraph } from "@lib/schema";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

export const metadata: Metadata = metadataForPage("about", { type: "profile" });

export default function Index() {
  return (
    <>
      <JsonLd data={buildPageGraph("about")} />
      <AboutPage />
    </>
  );
}
