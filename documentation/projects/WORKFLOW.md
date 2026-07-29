# Project Documentation Workflow

How to open, fill, review, and publish a project using this framework.

---

## 1. Open a project doc

1. Choose a **slug** (`kebab-case`, stable, descriptive).
2. Copy the template pack:

```text
documentation/projects/templates/
  → documentation/projects/{slug}/
```

3. Rename nothing inside the folder except fill content.
4. Set frontmatter-style identity at the top of `PROJECT.md`:
   - `id`, `slug`, `doc_status: draft`
5. Add a row to [`_registry.md`](./_registry.md).

---

## 2. Fill order (recommended)

Fill in this order so narrative stays coherent:

1. Identity + confidentiality  
2. Overview + executive summary  
3. Business problem + client goals  
4. Role, team, timeline  
5. Architecture + technologies  
6. Features  
7. Challenges + decisions  
8. Quality (security, scale, perf, a11y, SEO, testing) — use `N/A` where irrelevant  
9. Results + business impact  
10. Lessons + future improvements  
11. Screenshots plan (`screenshots.md`)  
12. Demo + repository (`repository.md`)  
13. Keywords + SEO / OG / schema (`seo.md`)  

Sync satellite files so they do not contradict `PROJECT.md`.

---

## 3. Review gates

| Gate | `doc_status` | Criteria |
|------|--------------|----------|
| Structure complete | `draft` → `review` | All Required sections have values or tokens |
| Facts verified | `review` → `ready` | No invented metrics; confidentiality respected |
| Live on site | `ready` → `published` | Data layer + pages updated; checklist passed |

---

## 4. Promote to the portfolio site

Only when `doc_status` is `ready` or `published`:

1. Map fields using [MAPPING.md](./MAPPING.md).
2. Update `src/data/projects.ts` (or future CMS) from the doc — do not invent in code.
3. Add real assets under `/public` when screenshots leave `PLACEHOLDER`.
4. Run the site build; verify `/projects/{slug}`.
5. Set `doc_status: published` and update `_registry.md`.

---

## 5. Updates after publish

- Edit the Markdown doc first (source of truth).
- Then sync the site data layer.
- Note material changes under a short **Changelog** at the bottom of `PROJECT.md`.

---

## 6. Confidential projects

- Set `client_confidentiality` and `repository_visibility` early.
- Prefer anonymized industry language over fake client names.
- Keep secrets and private URLs out of the repo.
- Public site may show repository **status labels** without URLs.
