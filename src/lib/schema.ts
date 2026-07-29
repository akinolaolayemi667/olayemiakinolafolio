import { absoluteUrl, getSiteOrigin } from "@lib/seo";
import { pageSeo, seo, sitePages } from "@data/seo";
import { profile } from "@data/profile";
import { isPublishableSocialUrl, socialLinks } from "@data/socials";
import { services } from "@data/services";
import { faqItems } from "@data/faq";
import {
  getAllPortfolioProjects,
  getFeaturedProjects,
  isCaseStudyNarrativeReady,
} from "@data/projects";
import { TPortfolioProject } from "@type/Project";
import { contact } from "@data/contact";
import { techStack } from "@data/tech-stack";

type JsonLd = Record<string, unknown>;

const personId = () => `${getSiteOrigin()}/#person`;
const orgId = () => `${getSiteOrigin()}/#organization`;
const websiteId = () => `${getSiteOrigin()}/#website`;
const serviceId = () => `${getSiteOrigin()}/#professionalservice`;
const breadcrumbId = (path: string) =>
  `${absoluteUrl(path).replace(/\/$/, "") || getSiteOrigin()}/#breadcrumb`;

function sameAs(): string[] {
  return socialLinks
    .filter((link) => link.id !== "email" && link.id !== "phone")
    .map((link) => link.url)
    .filter(isPublishableSocialUrl);
}

function emailAddress(): string | undefined {
  const mailto = socialLinks.find((link) => link.id === "email")?.url;
  return mailto?.replace(/^mailto:/i, "");
}

function phoneNumber(): string | undefined {
  const tel = socialLinks.find((link) => link.id === "phone")?.url;
  return tel?.replace(/^tel:/i, "");
}

/** Short nav label for breadcrumbs — never the long SEO title. */
function navLabelForPath(path: string, fallback: string): string {
  const page = sitePages.find((item) => item.path === path);
  return page?.title ?? fallback;
}

function projectHero(project: TPortfolioProject) {
  return project.gallery.find((item) => !item.isPlaceholder);
}

function projectImage(project: TPortfolioProject): string {
  const real = projectHero(project);
  // Never emit placeholder gallery assets into JSON-LD — align with OG fallback.
  return absoluteUrl(real?.src || seo.ogImage);
}

function projectImageAlt(project: TPortfolioProject): string {
  const real = projectHero(project);
  return real?.alt?.trim() || seo.ogImageAlt;
}

function projectUrl(project: TPortfolioProject): string {
  return absoluteUrl(`/projects/${project.slug}`);
}

function imageObject(
  url: string,
  options?: {
    width?: number;
    height?: number;
    name?: string;
    caption?: string;
  }
): JsonLd {
  const path = url.startsWith("http")
    ? (() => {
        try {
          return new URL(url).pathname;
        } catch {
          return url;
        }
      })()
    : url;

  return {
    "@type": "ImageObject",
    url: absoluteUrl(path),
    ...(options?.width ? { width: options.width } : {}),
    ...(options?.height ? { height: options.height } : {}),
    ...(options?.name ? { name: options.name } : {}),
    ...(options?.caption ? { caption: options.caption } : {}),
    ...(options?.name || options?.caption
      ? { description: options.caption || options.name }
      : {}),
  };
}

/** CreativeWork schema for a single case study — verified fields only. */
export function buildCaseStudySchema(project: TPortfolioProject): JsonLd {
  const description = project.isRepresentative
    ? `Representative engagement (anonymized): ${project.summary}`
    : project.summary;
  const hero = projectHero(project);

  return {
    "@type": "CreativeWork",
    "@id": `${projectUrl(project)}#creativework`,
    name: project.title,
    ...(project.subtitle ? { headline: project.subtitle } : {}),
    description,
    creator: { "@id": personId() },
    author: { "@id": personId() },
    ...(project.industry && project.industry !== "To be documented"
      ? { about: project.industry }
      : {}),
    keywords: [...project.seo.keywords, ...project.technologyStack]
      .filter(Boolean)
      .join(", "),
    url: projectUrl(project),
    image: imageObject(projectImage(project), {
      name: projectImageAlt(project),
      caption: projectImageAlt(project),
      ...(hero && !hero.isPlaceholder
        ? {}
        : { width: seo.ogImageWidth, height: seo.ogImageHeight }),
    }),
    // Omit dateCreated — project.year alone is not a verified calendar date.
    ...(project.category ? { genre: project.category } : {}),
    ...(project.repository.url && project.repository.visibility === "public"
      ? { codeRepository: project.repository.url }
      : {}),
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId() },
  };
}

/** Featured case studies for Home graph (slug URLs). */
export function buildCaseStudySchemas(): JsonLd[] {
  return getFeaturedProjects()
    .filter(isCaseStudyNarrativeReady)
    .map(buildCaseStudySchema);
}

/** ItemList for /projects index — narrative-ready case studies only. */
export function buildPortfolioItemListSchema(): JsonLd {
  const all = getAllPortfolioProjects().filter(isCaseStudyNarrativeReady);
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/projects")}#itemlist`,
    name: "HOLASVISION case studies",
    numberOfItems: all.length,
    itemListElement: all.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: projectUrl(project),
      item: { "@id": `${projectUrl(project)}#creativework` },
    })),
  };
}

export function buildCaseStudyPageGraph(project: TPortfolioProject): JsonLd {
  const ready = isCaseStudyNarrativeReady(project);
  const graph: JsonLd[] = [
    {
      "@type": "WebPage",
      "@id": `${projectUrl(project)}#webpage`,
      url: projectUrl(project),
      name: project.seo.title,
      description: project.seo.description,
      isPartOf: { "@id": websiteId() },
      inLanguage: "en-US",
      ...(ready
        ? { about: { "@id": `${projectUrl(project)}#creativework` } }
        : {}),
      primaryImageOfPage: imageObject(projectImage(project), {
        name: projectImageAlt(project),
        caption: projectImageAlt(project),
      }),
    },
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path: `/projects/${project.slug}` },
    ]),
  ];

  if (ready) {
    graph.splice(1, 0, buildCaseStudySchema(project));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildPersonSchema(): JsonLd {
  const profiles = sameAs();
  const email = emailAddress();
  const phone = phoneNumber();

  return {
    "@type": "Person",
    "@id": personId(),
    name: profile.name,
    givenName: profile.firstName,
    ...(profile.middleName ? { additionalName: profile.middleName } : {}),
    familyName: profile.lastName,
    url: absoluteUrl("/about"),
    image: imageObject(profile.avatarSrc, {
      name: profile.avatarAlt,
      caption: profile.avatarAlt,
    }),
    jobTitle: profile.title,
    description: seo.answerSummary,
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(profiles.length ? { sameAs: profiles } : {}),
    knowsAbout: seo.knowsAbout,
    worksFor: { "@id": orgId() },
    brand: { "@id": orgId() },
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
  };
}

export function buildOrganizationSchema(): JsonLd {
  const profiles = sameAs();
  const email = emailAddress();
  const phone = phoneNumber();

  return {
    "@type": "Organization",
    "@id": orgId(),
    name: profile.brand,
    url: absoluteUrl("/"),
    logo: imageObject(profile.avatarSrc, {
      name: `${profile.brand} mark`,
      caption: profile.avatarAlt,
    }),
    image: imageObject(seo.ogImage, {
      width: seo.ogImageWidth,
      height: seo.ogImageHeight,
      name: seo.ogImageAlt,
      caption: seo.ogImageAlt,
    }),
    description: seo.answerSummary,
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(profiles.length ? { sameAs: profiles } : {}),
    founder: { "@id": personId() },
    // Country derived from published location (Nigeria); no invented street address.
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      ...(email ? { email } : {}),
      ...(phone ? { telephone: phone } : {}),
      url: absoluteUrl("/connect"),
      availableLanguage: ["English"],
      areaServed: seo.serviceArea,
    },
  };
}

export function buildProfessionalServiceSchema(): JsonLd {
  const priceRange = seo.priceRange?.trim();

  return {
    "@type": "ProfessionalService",
    "@id": serviceId(),
    name: `${profile.brand} — Full Stack Development & AI Automation`,
    url: absoluteUrl("/"),
    image: imageObject(seo.ogImage, {
      width: seo.ogImageWidth,
      height: seo.ogImageHeight,
      name: seo.ogImageAlt,
      caption: seo.ogImageAlt,
    }),
    description: seo.answerSummary,
    provider: { "@id": orgId() },
    brand: { "@id": orgId() },
    // Geographic area only — industries are not Place entities.
    areaServed: seo.serviceArea,
    ...(priceRange ? { priceRange } : {}),
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development & automation services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          "@id": `${getSiteOrigin()}/#service-${service.id}`,
          name: service.title,
          description: service.problem
            ? `${service.problem} ${service.description}`
            : service.description,
          provider: { "@id": orgId() },
        },
      })),
    },
  };
}

export function buildWebSiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    url: absoluteUrl("/"),
    name: seo.siteName,
    description: seo.description,
    inLanguage: "en-US",
    publisher: { "@id": orgId() },
    author: { "@id": personId() },
  };
}

export function buildWebPageSchema(pageKey: keyof typeof pageSeo): JsonLd {
  const page = pageSeo[pageKey];
  const typeByPage: Record<string, string> = {
    home: "WebPage",
    about: "AboutPage",
    work: "CollectionPage",
    projects: "CollectionPage",
    connect: "ContactPage",
  };

  const pageTitle = page.absoluteTitle
    ? page.title
    : `${page.title} | ${profile.brand}`;

  return {
    "@type": typeByPage[pageKey] ?? "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: pageTitle,
    description: page.description,
    isPartOf: { "@id": websiteId() },
    about: { "@id": personId() },
    inLanguage: "en-US",
    primaryImageOfPage: imageObject(seo.ogImage, {
      width: seo.ogImageWidth,
      height: seo.ogImageHeight,
      name: seo.ogImageAlt,
      caption: seo.ogImageAlt,
    }),
    breadcrumb: { "@id": breadcrumbId(page.path) },
  };
}

export function buildBreadcrumbSchema(
  crumbs: { name: string; path: string }[]
): JsonLd {
  const pagePath = crumbs[crumbs.length - 1]?.path ?? "/";
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(pagePath),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function buildFaqSchema(): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${getSiteOrigin()}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Featured case studies for Home graph (slug URLs). */
export function buildHomeGraph(): JsonLd {
  const techEntities = techStack.flatMap((group) => group.items);

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema("home"),
      buildProfessionalServiceSchema(),
      buildFaqSchema(),
      buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
      ...buildCaseStudySchemas(),
      {
        "@type": "ItemList",
        "@id": `${getSiteOrigin()}/#services`,
        name: "Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
          url: absoluteUrl("/#services"),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${getSiteOrigin()}/#technologies`,
        name: "Core technologies",
        itemListElement: techEntities.slice(0, 24).map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
        })),
      },
    ],
  };
}

export function buildPageGraph(
  pageKey: keyof typeof pageSeo,
  extras: JsonLd[] = []
): JsonLd {
  const page = pageSeo[pageKey];
  const crumbs =
    pageKey === "home"
      ? [{ name: "Home", path: "/" }]
      : [
          { name: "Home", path: "/" },
          {
            name: navLabelForPath(page.path, page.title.split("|")[0].trim()),
            path: page.path,
          },
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(pageKey),
      buildBreadcrumbSchema(crumbs),
      ...extras,
    ],
  };
}

export function buildContactPageGraph(): JsonLd {
  const email = emailAddress();
  const phone = phoneNumber();

  return buildPageGraph("connect", [
    {
      "@type": "ContactPoint",
      "@id": `${absoluteUrl("/connect")}#contact-point`,
      contactType: "customer support",
      ...(email ? { email } : {}),
      ...(phone ? { telephone: phone } : {}),
      url: absoluteUrl("/connect"),
      availableLanguage: ["English"],
      areaServed: seo.serviceArea,
      significantLink: contact.primaryCtaHref.startsWith("http")
        ? contact.primaryCtaHref
        : absoluteUrl("/#contact"),
    },
  ]);
}
