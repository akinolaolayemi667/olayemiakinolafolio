import { navlinks, footerExploreLinks } from "@data/nav";
import { projects } from "@data/projects";
import { sitePages } from "@data/seo";

export type CommandItem = {
  id: string;
  label: string;
  href: string;
  group: "Pages" | "Case studies" | "Sections" | "Actions";
  keywords?: string;
};

function normalizeHref(href: string) {
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

/** Build-time search index for the command palette. */
export function buildCommandIndex(): CommandItem[] {
  const pages: CommandItem[] = sitePages.map((page) => ({
    id: `page-${page.path}`,
    label: page.title,
    href: page.path,
    group: "Pages",
    keywords: page.path,
  }));

  const nav: CommandItem[] = navlinks.map((link) => ({
    id: `nav-${link.href}`,
    label: link.title,
    href: normalizeHref(link.href),
    group: "Pages",
    keywords: link.href,
  }));

  const sections: CommandItem[] = footerExploreLinks.map((link) => ({
    id: `section-${link.href}`,
    label: link.title,
    href: normalizeHref(link.href),
    group: "Sections",
    keywords: link.href,
  }));

  const caseStudies: CommandItem[] = projects.map((project) => ({
    id: `project-${project.slug}`,
    label: project.title,
    href: `/projects/${project.slug}`,
    group: "Case studies",
    keywords: `${project.category} ${project.subtitle} ${project.technologyStack.join(" ")}`,
  }));

  const actions: CommandItem[] = [
    {
      id: "action-contact",
      label: "Start a project",
      href: "/connect",
      group: "Actions",
    },
    {
      id: "action-github",
      label: "View GitHub profile",
      href: "https://github.com/akinolaolayemi667",
      group: "Actions",
    },
  ];

  const seen = new Set<string>();
  return [...pages, ...nav, ...sections, ...caseStudies, ...actions].filter(
    (item) => {
      const key = `${item.group}:${item.href}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }
  );
}

export const commandIndex = buildCommandIndex();

export function filterCommandIndex(query: string): CommandItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return commandIndex;

  return commandIndex.filter((item) => {
    const haystack = `${item.label} ${item.keywords ?? ""} ${item.group}`.toLowerCase();
    return haystack.includes(q);
  });
}
