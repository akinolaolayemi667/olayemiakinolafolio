/**
 * JSON-LD script tag for SEO / AEO / GEO structured data.
 * Renders a single application/ld+json block (safe for static export).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
