# SEO, Open Graph & Schema — {{SLUG}}

> Satellite of `PROJECT.md`. Keep public metadata honest; never invent metrics.

---

## Keywords

Primary:

- TBD

Secondary:

- TBD

AEO / answer-engine phrases (optional):

- TBD

---

## SEO metadata

| Field | Value |
|-------|-------|
| seo_title | `TBD` |
| seo_description | `TBD` (≈150–160 chars target) |
| canonical_path | `/projects/{{SLUG}}` |
| robots | `index,follow` (default) |

---

## Open Graph metadata

| Field | Value |
|-------|-------|
| og_title | `TBD` (or inherit seo_title) |
| og_description | `TBD` (or inherit seo_description) |
| og_image | `TBD` path under `/public` |
| og_image_alt | `TBD` |
| og_type | `article` |

---

## Twitter / X (optional)

| Field | Value |
|-------|-------|
| twitter_card | `summary_large_image` |
| twitter_title | inherit OG/SEO unless overridden |
| twitter_description | inherit |
| twitter_image | inherit og_image |

---

## Schema.org data

| Field | Value |
|-------|-------|
| schema_type | `CreativeWork` \| `SoftwareApplication` |
| name | inherit title |
| description | inherit executive summary / seo_description |
| creator | Person / Organization `@id` from site graph |
| about | industry / domain |
| keywords | join SEO keywords + technologies |
| url | `https://{site}/projects/{{SLUG}}` |
| image | prefer non-placeholder gallery; else site OG |
| dateCreated | year or more precise date if known |
| codeRepository | **only** if public URL allowed |

### Schema notes / caveats

```text
TBD
```

Do not emit:

- Fake ratings or review counts  
- Undisclosed client names  
- Private repository URLs  

---

## Sync checklist

- [ ] Titles unique vs other case studies  
- [ ] Description does not overclaim  
- [ ] OG image is real or intentionally site default  
- [ ] Mapped into `seo` object in portfolio data  
