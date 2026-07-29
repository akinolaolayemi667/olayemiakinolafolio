# Repository & Confidentiality — {{SLUG}}

> Satellite of `PROJECT.md`. Private / NDA is a valid professional state — document it explicitly.

---

## Repository information

| Field | Value |
|-------|-------|
| hosting | `GitHub` \| `GitLab` \| `Bitbucket` \| `other` \| `TBD` |
| repository_name | `TBD` \| `CONFIDENTIAL` |
| default_branch | `TBD` |
| monorepo | `yes` \| `no` \| `TBD` |
| package_areas | `TBD` |

---

## Repository visibility

| Field | Value |
|-------|-------|
| visibility | `public` \| `private` \| `nda` |
| repository_label | e.g. `Private Client Repository` / `Source Code Protected by Client NDA` / `View repository` |
| repository_url | `null` or public HTTPS URL only |
| mirror_allowed | `yes` \| `no` |

### Visibility rules

- `public` — URL allowed on site; label typically “View repository”
- `private` — no public URL; show status label
- `nda` — no public URL; stronger confidentiality framing

---

## Client confidentiality

| Field | Value |
|-------|-------|
| client_confidentiality | `public` \| `anonymized` \| `nda` \| `embargoed` |
| may_name_client | `yes` \| `no` |
| may_share_metrics | `yes` \| `no` \| `anonymized_only` |
| may_share_screens | `yes` \| `no` \| `redacted_only` |
| embargo_until | `TBD` \| `N/A` |

### Confidentiality notes

```text
TBD
```

### Public-safe wording (for site)

```text
TBD
```

---

## Access (internal only — do not commit secrets)

| Need | Holder | Notes |
|------|--------|-------|
| Repo access | TBD | No tokens in this file |
| Staging URL | TBD | Mark CONFIDENTIAL if needed |
| Design files | TBD | |

---

## Site sync

| Site field | Value |
|------------|-------|
| `repository.visibility` | from above |
| `repository.label` | from above |
| `repository.url` | `null` unless public + allowed |
