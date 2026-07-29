import type { Metadata } from "next";
import ContactMePage from "@views/ContactMe/ContactMe";
import { JsonLd } from "@components/seo/JsonLd";
import { metadataForPage } from "@lib/seo";
import { buildContactPageGraph } from "@lib/schema";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

export const metadata: Metadata = metadataForPage("connect");

export default function Index() {
  return (
    <>
      <JsonLd data={buildContactPageGraph()} />
      <ContactMePage />
    </>
  );
}
