import type { Metadata } from "next";
import ProjectsIndex from "@views/Projects/Projects";
import { JsonLd } from "@components/seo/JsonLd";
import { metadataForPage } from "@lib/seo";
import { buildPageGraph, buildPortfolioItemListSchema } from "@lib/schema";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

export const metadata: Metadata = metadataForPage("projects");

export default function Index() {
  return (
    <>
      <JsonLd
        data={buildPageGraph("projects", [buildPortfolioItemListSchema()])}
      />
      <ProjectsIndex />
    </>
  );
}
