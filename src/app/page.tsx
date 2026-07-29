import type { Metadata } from "next";
import HomePage from "@views/Home/Home";
import { JsonLd } from "@components/seo/JsonLd";
import { metadataForPage } from "@lib/seo";
import { buildHomeGraph } from "@lib/schema";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

export const metadata: Metadata = metadataForPage("home");

export default function Index() {
  return (
    <>
      <JsonLd data={buildHomeGraph()} />
      <HomePage />
    </>
  );
}
