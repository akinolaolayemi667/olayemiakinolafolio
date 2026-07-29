import type { Metadata } from "next";
import WorkExperiencePage from "@views/Work/Work";
import { JsonLd } from "@components/seo/JsonLd";
import { metadataForPage } from "@lib/seo";
import { buildPageGraph } from "@lib/schema";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

export const metadata: Metadata = metadataForPage("work");

export default function Index() {
  return (
    <>
      <JsonLd data={buildPageGraph("work")} />
      <WorkExperiencePage />
    </>
  );
}
