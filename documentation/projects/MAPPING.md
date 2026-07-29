# Documentation → Portfolio Mapping

How `PROJECT.md` (and satellites) map to the site case-study system.

Update this file if the data model changes.

---

## Primary targets

| Documentation | Site |
|---------------|------|
| `documentation/projects/{slug}/PROJECT.md` | Source of truth |
| → | [`src/data/projects.ts`](../../src/data/projects.ts) (`TPortfolioProject`) |
| → | Home previews (`featured: true`) |
| → | `/projects` index + filters |
| → | `/projects/[slug]` case study page |
| → | JSON-LD / metadata builders in `src/lib/schema.ts`, `src/lib/seo.ts` |

---

## Field map

| Doc field | `TPortfolioProject` / site usage |
|-----------|----------------------------------|
| `id` | `id` |
| `slug` | `slug` |
| `title` | `title` |
| `subtitle` | `subtitle` |
| `category` | `category` |
| `categories` | `categories` |
| `industry` | `industry` |
| `client_type` | `clientType` |
| `executive_summary` | `summary` |
| `business_problem` | `problem` |
| `client_goals` | `goals` |
| `overview` + solution narrative | `solution` (compose carefully) |
| `architecture` | `architecture` |
| `responsibilities` / `my_role` | `responsibilities` |
| `features` | `features` |
| `technologies` | `technologyStack` |
| `engineering_challenges` | `engineeringChallenges` |
| `results` | `results` |
| `business_impact` | `businessImpact` |
| `gallery` / screenshots | `gallery[]` |
| `live_demo` / demo_links | `liveDemo` |
| `repository_*` | `repository` |
| `project_status` | `projectStatus` |
| `year` | `year` |
| `featured` | `featured` |
| testimonial (if added later) | `testimonial` |
| `isRepresentative` / representative badge | UI StatusChip + schema description prefix |
| `outcomesAreEstimates` | Results disclaimer via `outcomesDisclaimer` |

---

## Doc-only fields (not always on site)

Keep in Markdown even if the UI has no section yet:

- Timeline detail / milestones  
- Team size  
- Database, APIs, auth, deployment (fold into `architecture` for UI if needed)  
- Automation, AI features, integrations (may surface as features or architecture)  
- Engineering decisions  
- Security, scalability, performance, accessibility, SEO implementation, testing  
- Lessons learned, future improvements  
- Screenshots needed (production checklist)  
- Client confidentiality notes  
- Schema notes  

Promote to UI only when the case-study layout gains a section — **docs stay richer than the page**.

---

## Composition tips

- **Solution:** Combine overview + how the system solves the problem; keep UI copy short.
- **Architecture:** Prefer the architecture section; optionally weave database / APIs / auth / deployment into one paragraph for the page.
- **Repository label:**  
  - `private` → “Private Client Repository”  
  - `nda` → “Source Code Protected by Client NDA”  
  - `public` → “View repository” (or custom)
- **Never** map `TBD` demo URLs into `liveDemo.url`.
