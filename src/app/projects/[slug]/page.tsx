import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@views/Projects/CaseStudy";
import { JsonLd } from "@components/seo/JsonLd";
import { buildPageMetadata } from "@lib/seo";
import { buildCaseStudyPageGraph } from "@lib/schema";
import { profile } from "@data/profile";
import {
  getProjectBySlug,
  getProjectSlugs,
  isCaseStudyNarrativeReady,
} from "@data/projects";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }

  const hero = project.gallery.find((item) => !item.isPlaceholder);
  const ready = isCaseStudyNarrativeReady(project);

  return buildPageMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/projects/${project.slug}`,
    keywords: project.seo.keywords,
    type: "article",
    image: hero?.src,
    imageAlt: hero?.alt,
    article: {
      section: project.category,
      tags: project.seo.keywords,
      authors: [profile.name],
      // No invented publishedTime — year alone is not a calendar date.
    },
    // Thin stubs stay crawlable via /projects but should not compete as indexed landing pages
    noIndex: !ready,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildCaseStudyPageGraph(project)} />
      <CaseStudyView project={project} />
    </>
  );
}
