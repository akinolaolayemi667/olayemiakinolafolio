# Project Documentation Schema

Canonical field dictionary for every project under `documentation/projects/`.

Use these names and meanings in `PROJECT.md` and satellite templates.  
Values marked **Required** must be filled (or explicitly `TBD` / `N/A` / `CONFIDENTIAL`) before status `ready`.

---

## Identity

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `id` | Yes | string | Stable internal id (`kebab-case`) |
| `slug` | Yes | string | URL segment `/projects/{slug}` |
| `title` | Yes | string | Public case study title |
| `subtitle` | Yes | string | One-line product framing |
| `doc_status` | Yes | enum | `draft` \| `review` \| `ready` \| `published` \| `archived` |
| `project_status` | Yes | enum | `shipped` \| `in-production` \| `ongoing` \| `archived` |
| `year` | Yes | number | Primary delivery year |
| `featured` | Yes | boolean | Home flagship eligibility |
| `category` | Yes | enum | Primary filter category (see Enums) |
| `categories` | Yes | list | All matching filter categories |
| `industry` | Yes | string | Vertical / domain |
| `client_type` | Yes | string | Buyer persona (not always a named client) |
| `client_name` | No | string | Use `CONFIDENTIAL` if undisclosed |
| `timeline` | Yes | object | See Timeline |

---

## Narrative (core story)

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `overview` | Yes | short prose | What was built (product framing) |
| `executive_summary` | Yes | short prose | Client-facing TL;DR |
| `business_problem` | Yes | prose | Pain before the engagement |
| `client_goals` | Yes | list | Measurable or clear goals |
| `features` | Yes | list | Capabilities delivered |
| `results` | Yes | list | Outcomes (label estimates) |
| `business_impact` | Yes | list | Business value framing |
| `lessons_learned` | No | list | For internal quality |
| `future_improvements` | No | list | Roadmap / next bets |

---

## Role & team

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `my_role` | Yes | string + list | Title + responsibilities |
| `team_size` | Yes | string | e.g. `Solo` / `2 engineers + founder` |
| `responsibilities` | Yes | list | Concrete ownership bullets |

---

## Technology & architecture

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `technologies` | Yes | list | Stack badges / keywords |
| `architecture` | Yes | prose | System overview |
| `database` | No | prose / list | Stores, models, notes |
| `apis` | No | prose / list | Internal + external APIs |
| `authentication` | No | prose | AuthN/AuthZ approach |
| `deployment` | No | prose | Hosting, CI/CD, environments |
| `automation` | No | prose / list | Workflows, jobs, agents ops |
| `ai_features` | No | prose / list | Models, agents, guardrails |
| `integrations` | No | list | Third-party systems |

---

## Engineering quality

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `engineering_challenges` | Yes | list | Hard problems faced |
| `engineering_decisions` | Yes | list | Key trade-offs and why |
| `security_considerations` | No | list | Threats / controls |
| `scalability` | No | prose / list | Scale assumptions & design |
| `performance_optimizations` | No | list | Concrete perf work |
| `accessibility` | No | prose / list | a11y approach |
| `seo_implementation` | No | prose / list | On-product SEO (if applicable) |
| `testing` | No | prose / list | Strategy & coverage notes |

---

## Media & links

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `screenshots_needed` | Yes | list | Capture plan (see `screenshots.md`) |
| `gallery` | No | list | `{ path, alt, is_placeholder }` when assets exist |
| `demo_links` | No | list | `{ label, url, status }` — omit fake URLs |
| `live_demo` | No | object \| null | Primary public demo if any |

---

## Repository & confidentiality

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `repository_visibility` | Yes | enum | `public` \| `private` \| `nda` |
| `repository_label` | Yes | string | Display label for UI |
| `repository_url` | No | url \| null | Only if public and allowed |
| `client_confidentiality` | Yes | enum | `public` \| `anonymized` \| `nda` \| `embargoed` |
| `confidentiality_notes` | No | prose | What cannot be disclosed |

---

## Discovery & SEO

| Field | Required | Type | Notes |
|-------|----------|------|--------|
| `keywords` | Yes | list | Search / AEO phrases |
| `seo_title` | Yes | string | Metadata title |
| `seo_description` | Yes | string | Metadata description |
| `og_title` | No | string | Defaults to seo_title |
| `og_description` | No | string | Defaults to seo_description |
| `og_image` | No | path | Prefer real screenshot; else site OG |
| `schema_type` | Yes | enum | Usually `CreativeWork` or `SoftwareApplication` |
| `schema_notes` | No | prose | Extra JSON-LD fields / caveats |

---

## Enums

### `category` / `categories`

- AI Automation  
- Full Stack  
- SaaS  
- E-commerce  
- CRM  
- Business Platforms  
- Chrome Extensions  
- APIs  
- Internal Tools  

### `repository_visibility`

| Value | UI treatment |
|-------|----------------|
| `public` | Link to repository |
| `private` | “Private Client Repository” (or custom `repository_label`) |
| `nda` | “Source Code Protected by Client NDA” (or custom label) |

### `client_confidentiality`

| Value | Meaning |
|-------|---------|
| `public` | Client may be named |
| `anonymized` | Industry / type only |
| `nda` | Contractual non-disclosure |
| `embargoed` | Temporary hold on naming / metrics |

### Timeline object

```yaml
timeline:
  start: YYYY-MM       # or TBD
  end: YYYY-MM | ongoing
  duration: string     # e.g. "14 weeks"
  milestones:          # optional list
    - name: string
      date: YYYY-MM
```

---

## Empty-value conventions

| Token | Meaning |
|-------|---------|
| `TBD` | Unknown; must resolve before `ready` |
| `N/A` | Not applicable to this project |
| `CONFIDENTIAL` | Known but must not appear publicly |
| `PLACEHOLDER` | Temporary public wording / asset |

Never leave a Required section blank without one of these tokens.
