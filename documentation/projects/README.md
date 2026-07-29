# Project Documentation System

Single source of truth **workflow** for every HOLASVISION portfolio project.

> **Runtime note (current):** Until each slug has a filled `documentation/projects/{slug}/` pack and registry row, the **live site data** in `src/data/projects.ts` is the operational source of truth. Markdown docs remain the intended human SoT — keep them in sync before marking a study non-representative (`isRepresentative: false`).

This folder holds the **framework** — not live project content yet.
Each real project gets its own directory created from the template.

## Purpose

- Capture engineering, business, and SEO truth before site copy is written
- Keep case studies consistent across the portfolio
- Feed `src/data/projects.ts` without inventing facts in the UI
- Support private / NDA projects without treating confidentiality as a gap

## Quick start

1. Read SCHEMA.md
2. Follow WORKFLOW.md
3. Copy templates/ to documentation/projects/{slug}/
4. Fill PROJECT.md; use TBD / N/A / CONFIDENTIAL
5. Run CHECKLIST.md before site sync
6. Register in _registry.md
7. Only set isRepresentative: false when client-ready assets exist

## Rules

- One folder per project (slug)
- Never invent metrics or client names
- Mark placeholders explicitly (matches site badges)
- Featured requires CHECKLIST Featured gate
