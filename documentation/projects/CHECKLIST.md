# Project Publish Checklist

Complete before setting `doc_status: ready` or shipping site updates.

Project slug: `________________`

---

## Identity & confidentiality

- [ ] `id` and `slug` are final and registered in `_registry.md`
- [ ] `category` / `categories` match filter taxonomy in SCHEMA
- [ ] `client_confidentiality` set; public copy does not leak NDA details
- [ ] `repository_visibility` + `repository_label` set (private/NDA OK)
- [ ] No secrets, tokens, or private staging URLs in Markdown

---

## Story completeness

- [ ] Overview + executive summary written (short, scannable)
- [ ] Business problem and client goals are clear
- [ ] My role, team size, timeline filled
- [ ] Architecture paragraph is accurate
- [ ] Features are bullet-level (not essays)
- [ ] Engineering challenges + decisions captured
- [ ] Results and business impact use honest language (estimates labeled)

---

## Engineering depth (or explicit N/A)

- [ ] Database / APIs / auth / deployment addressed or `N/A`
- [ ] Automation / AI / integrations addressed or `N/A`
- [ ] Security, scalability, performance, a11y, SEO, testing addressed or `N/A`

---

## Media & links

- [ ] `screenshots.md` lists required shots
- [ ] Placeholder vs real assets clearly marked
- [ ] Demo links are real or omitted (`null` / empty) — never fake `#`
- [ ] Repository section never blank

---

## SEO & schema

- [ ] Keywords, SEO title, SEO description filled
- [ ] OG fields set or documented as “inherit from SEO”
- [ ] Schema type chosen; notes do not claim false metrics
- [ ] Slug matches intended public URL

---

## Featured gate

- [ ] `featured: true` only when checklist is complete **or** study remains `isRepresentative: true` with UI badge
- [ ] `isRepresentative: false` only with approved client disclosure / real assets
- [ ] `outcomesAreEstimates` matches whether metrics are verified
- [ ] Docs pack exists under `documentation/projects/{slug}/` when moving off representative

---

## Site sync

- [ ] Fields mapped per MAPPING.md into portfolio data
- [ ] Featured flag intentional (Home allows four flagships)
- [ ] Build passes; case study page renders
- [ ] `doc_status` updated; registry row updated

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Author | | |
| Reviewer | | |
