# PA 103 Reviewer Site: Blueprint

Built on what is already in this folder: the North Star (Part A theories, Part B regional organizations), the notes in `01_FINAL_NOTES/topics/`, and the empty `05_CLOUDFLARE_SITE/` target. Where the blueprint uses real numbers, they come from those files.

## 0. The short version

- Two pillars, one shared glue: **Theories** (29 readings in 8 clusters) and **Regional Organizations** (25 organizations in 7 regional groups plus an Unverified group (MECA, WAICO)). Every organization page links to the theory it illustrates, and every theory page links back to its example organizations. That cross-link is the whole value of the site.
- Every page carries a **source badge** (CLASS, WEB, DRAFT, DONE). The North Star rule is that web research is never presented as professor content, so the UI has to enforce it.
- Stack: **Astro (static) + Markdown content collections + Pagefind search**, deployed on the Cloudflare Pages project you already planned. Your notes stay as `.md` files, so nothing gets rewritten.

## 1. Sitemap and information architecture

### 1.1 Top level

```
/                          Home (two big doors + study progress + search)
/theories/                 Pillar 1
/organizations/            Pillar 2
/compare/                  Cross-pillar tools (matrix, timeline, theory-to-org map)
/sources/                  Source index, citations, what is CLASS vs WEB
/about/                    How to use this reviewer, status legend
```

### 1.2 Pillar 1: Theories (`/theories/`)

Tabs (sub-navigation) on the pillar landing page. Each tab is its own URL so it can be linked and bookmarked.

| Tab | URL | What it shows |
| --- | --- | --- |
| Overview | `/theories/` | One paragraph per cluster, the five guiding questions, progress bar |
| By cluster (default) | `/theories/clusters/` | 8 cluster cards, each expands to its readings |
| Reading list | `/theories/readings/` | All 29 readings, sortable by number, author, year, status |
| Timeline | `/theories/timeline/` | 1943 to 2022, readings placed by year, colored by cluster |
| Five-question matrix | `/theories/matrix/` | Rows = readings, columns = the 5 A3 questions. Comparable at a glance |

Detail pages:

```
/theories/clusters/functionalism/
/theories/clusters/neo-functionalism/
/theories/clusters/transactionalism/
/theories/clusters/economic-integration/
/theories/clusters/critique-and-measurement/
/theories/clusters/institutions-and-governance/
/theories/clusters/crisis-and-new-regionalism/
/theories/clusters/collective-security/
/theories/readings/mitrany-1966/        (one page per reading, slug = author-year)
/theories/readings/haas-1970/
...
```

Reading page template (same every time, so students learn where things are):

1. Citation + source badge
2. One-sentence claim ("in plain words")
3. The five questions (integration, drivers, actors, measurement, builds on or argues against)
4. Key concepts (glossary chips)
5. Simplified story (where it exists: Haas, Balassa, Lindberg)
6. **Seen in** (organizations that illustrate it)
7. Previous / next in cluster

### 1.3 Pillar 2: Regional Organizations (`/organizations/`)

| Tab | URL | What it shows |
| --- | --- | --- |
| By region (default) | `/organizations/regions/` | 6 groups, card grid |
| By theory lens | `/organizations/lenses/` | Same 25 orgs grouped by the theory they illustrate |
| By type | `/organizations/types/` | Security, Economic, Political, Sectoral, Global forum |
| All (table) | `/organizations/all/` | Sortable, filterable table: founded, members, type, status |

Regional grouping (draft, adjust freely). 23 confirmed organizations, plus MECA and WAICO kept as placeholders with `name_verified: false`:

| Region | Organizations |
| --- | --- |
| Europe and Atlantic | EU, NATO, COMECON |
| Asia-Pacific | ASEAN, APEC, SEATO, Maphilindo, PIF, IORA, SCO |
| South Asia | SAARC |
| Africa | AU, EAC, Nile Basin Initiative |
| Middle East and Gulf | Arab League, GCC, OPEC |
| Americas | CARICOM, Mercosur, LAFTA |
| Global or cross-regional | League of Nations, BRICS, G20 |
| Unverified names | MECA, WAICO (placeholders) |

Note: SCO and IORA could sit in two groups. Pick one primary region and let the type and lens tabs handle the rest, so every org has exactly one home URL.

Detail pages: `/organizations/asean/`, `/organizations/eu/`, and so on. Flat slugs, because an organization has one canonical URL no matter which tab you came from.

Organization page template (mirrors your existing note format):

1. Name, acronym, source badge, assigned reporter
2. At a glance box: founded, place, members, type
3. What it is, founding, members, purpose, relevance (your existing sections 1 to 5)
4. **Theory lens** (links to the theory readings)
5. Citations
6. Related organizations (predecessor and successor: LAFTA to LAIA, SEATO to nothing, OAU to AU)

Page-level flags to keep from the North Star: MECA and WAICO are unconfirmed names. Show an "unverified name" banner on those two instead of hiding them.

### 1.4 Cross-pillar: `/compare/`

| Tool | URL | Purpose |
| --- | --- | --- |
| Theory to organization map | `/compare/map/` | Matrix: clusters down, regions across, cells list the orgs |
| Balassa stages | `/compare/balassa-stages/` | Free trade area to full union, with orgs placed on the ladder (LAFTA, Mercosur, EU, CARICOM, EAC) |
| Side-by-side | `/compare/?a=eu&b=asean` | Pick any two orgs and compare founding, members, decision style, lens |
| Glossary | `/glossary/` | Spillover, supranational, new regionalism, collective security, and so on |

## 2. UI/UX strategy

Audience: a student studying for an exam, often on a phone, often late, switching between "what does this author say" and "which organization shows that".

### 2.1 Principles

1. **Two doors, not twenty.** The home page shows only the two pillars. Everything else is one click inside.
2. **Same shape every time.** Every reading page has the same five-question block. Every org page has the same at-a-glance box. Predictability beats cleverness for revision.
3. **Honest about sourcing.** Source badge on every card and page. CLASS = professor's slides, WEB = outside research, DRAFT = written but unreviewed, DONE = reviewed. WEB pages get a quiet banner: "Outside research, not class content."
4. **Read first, decorate later.** Long-form notes need good typography more than they need animation.

### 2.2 Visual hierarchy

- Two pillar colors, used consistently for headers, tabs and chips. For example deep indigo for Theories, deep teal for Organizations. The cross-link chips use the other pillar's color, so you always see which pillar you are about to jump into.
- Eight cluster colors are overkill as backgrounds. Use them only as a small dot or left border on cards and timeline points.
- Status badges are text plus icon, not color alone (accessibility).
- Type scale: page title, section heading, body at 17 to 18 px, 65 to 75 character line length, 1.6 line height. Notes are paragraphs, so this matters more than anything else on the list.
- One serif or readable text face for body, one clean sans for UI. Dark mode from day one (late-night studying).

### 2.3 Page layout

```
Desktop (>= 1024px)
+---------------------------------------------------------------+
| Logo   [Theories v] [Organizations v] [Compare]   [Search /]  |
+----------+-------------------------------------+--------------+
| Sidebar  |  Breadcrumb                         | On this page |
| (tree of |  Title + badges                     | (h2 links,   |
| current  |  Tabs (when on a pillar landing)    |  sticky)     |
| pillar)  |  Content                            |              |
|          |  Seen in / Related                  |              |
+----------+-------------------------------------+--------------+

Mobile
+--------------------------+
| [=] PA 103       [search]|
| Breadcrumb               |
| Title + badges           |
| Tabs (scroll-x)          |
| Content                  |
| [bottom bar: T | O | C]  |
+--------------------------+
```

### 2.4 Accessibility and content rules

- Keyboard navigable menus, visible focus ring, skip-to-content link.
- Contrast AA minimum in both themes.
- Tabs are real links (page navigation), so the back button and sharing work. Do not build them as JS-only panels.
- Citations are plain text with the URL and access date, copyable.

## 3. Navigation patterns

| Pattern | Use it for | Why |
| --- | --- | --- |
| **Two-pillar header with a light mega-menu** | Theories menu shows the 8 clusters; Organizations menu shows the 6 regions | Both menus fit in one panel without scrolling, and users see the whole structure without clicking. On mobile it becomes an accordion drawer |
| **Tabs as sub-navigation** | Inside each pillar landing (by cluster / reading list / timeline, by region / lens / type) | Same data, different views. Each tab is a URL |
| **Left sidebar tree** | Inside a pillar only: cluster then readings, or region then orgs | Shows where you are and lets you hop to a sibling quickly. Collapses to a drawer on mobile |
| **Breadcrumbs** | Every page below the pillar landing: `Home / Theories / Neo-functionalism / Haas 1970` | Orientation and one-click way up |
| **"Seen in" and "Illustrates" chips** | Bottom of reading and org pages | The cross-pillar link. This is the feature that makes it a reviewer, not two lists |
| **Prev / next within cluster or region** | Bottom of detail pages | Linear study flow, like a textbook |
| **Global search (press `/`)** | Everywhere | Search by author, acronym, concept. Pagefind runs fully static |
| **Filter chips** | Reading list and org table | Status (CLASS/WEB/DRAFT/DONE), cluster, region, type |
| **Study progress** | Home and pillar landings | Counts of DONE vs total, from the status field in front matter |
| **Compare drawer** | Org cards | Tick two orgs, open the side-by-side |

What to skip: carousels, auto-playing anything, infinite scroll, full-page hero animations. They cost reading time and break on phones.

## 4. Technical recommendation

### 4.1 Stack

| Layer | Choice | Reason |
| --- | --- | --- |
| Framework | **Astro** | Static output, content collections for Markdown, almost no JavaScript shipped, easy islands for the few interactive parts |
| Content | Markdown + front matter in `src/content/` | Your notes are already Markdown |
| Styling | Tailwind CSS, or plain CSS variables if you want zero tooling | Tokens for the two pillar colors and dark mode |
| Interactive bits | Small Preact or vanilla islands | Filters, compare drawer, matrix, timeline |
| Search | **Pagefind** | Static index built after the build, no server |
| Diagrams | Inline SVG or Mermaid at build time | Balassa ladder, timeline |
| Hosting | **Cloudflare Pages** | Matches your README |

Cloudflare Pages settings change slightly from your README:

- Build command: `npm run build`
- Build output directory: `dist`
- If you would rather keep "no build", the fallback is hand-written static HTML generated by a small Node script from the Markdown. That works, but you lose search, content validation and layouts. Astro is the better trade.

### 4.2 Content model

Two collections, one front-matter schema each, validated at build time so a typo fails the build instead of shipping.

```yaml
# theories collection: src/content/readings/mitrany-1966.md
title: A Working Peace System
author: Mitrany, David
year: 1966
cluster: functionalism        # one of 8 slugs
source: class | web           # where it came from
status: todo | draft | done   # review state
citation: "Mitrany, David. 1966. ..."
doi: "10.1007/..."
questions:                    # the five A3 questions, short answers
  integration: "..."
  drivers: "..."
  actors: "..."
  measurement: "..."
  builds_on: "..."
concepts: [functionalism, spillover]
illustrated_by: [nile-basin-initiative]   # org slugs
argues_against: [haas-1970]
```

```yaml
# organizations collection: src/content/orgs/asean.md
name: Association of Southeast Asian Nations
acronym: ASEAN
region: asia-pacific
type: political-economic      # security | economic | political-economic | sectoral | global-forum
founded: 1967
members_count: 10
reporter: Gumobao
source: web
status: draft
name_verified: true           # false for MECA, WAICO
lenses: [new-regionalism, etzioni-deutsch]   # theory slugs or cluster slugs
predecessor: null
successor: null
```

Keep `illustrated_by` and `lenses` as the single source of truth for the cross-links, and generate the reverse direction at build time. Authors only edit one side.

### 4.3 Routing

| Route | File | Notes |
| --- | --- | --- |
| `/` | `pages/index.astro` | Two-door home |
| `/theories/` and tabs | `pages/theories/[...tab].astro` | Tab list is a typed constant |
| `/theories/clusters/[cluster]/` | `pages/theories/clusters/[cluster].astro` | `getStaticPaths` from cluster list |
| `/theories/readings/[slug]/` | `pages/theories/readings/[slug].astro` | From the readings collection |
| `/organizations/` and tabs | `pages/organizations/[...tab].astro` | |
| `/organizations/[slug]/` | `pages/organizations/[slug].astro` | Flat canonical URL |
| `/compare/...` | `pages/compare/*` | Islands |

Rules: one canonical URL per entity, trailing slashes, redirects file for any renamed slug (`public/_redirects` on Cloudflare Pages).

### 4.4 Component structure

```
src/
  content/
    readings/        29 md files
    orgs/            25 md files
    config.ts        zod schemas for both collections
  data/
    clusters.ts      8 clusters: slug, name, color, blurb
    regions.ts       6 regions
    lenses.ts
  layouts/
    BaseLayout.astro
    PillarLayout.astro      sidebar + tabs + breadcrumb
    DetailLayout.astro      content + on-this-page + prev/next
  components/
    nav/   SiteHeader, MegaMenu, MobileDrawer, Breadcrumbs, PillarTabs, SidebarTree
    cards/ ReadingCard, OrgCard, ClusterCard
    ui/    StatusBadge, SourceBanner, Chip, AtAGlance, CitationBlock
    links/ SeenIn, Illustrates, PrevNext
    interactive/ (islands)  FilterBar, CompareDrawer, QuestionMatrix, Timeline, BalassaLadder
    search/ SearchDialog (Pagefind UI)
  styles/ tokens.css (colors, type scale, dark mode)
```

### 4.5 Build-time checks (small, high value)

- Every `cluster`, `region`, `illustrated_by`, `lenses` value must resolve to a real slug.
- Any page with `source: web` must render the outside-research banner (enforced in the layout, not by the author).
- Any org with `name_verified: false` renders the unverified-name banner.
- Citations must include an access date when `source: web`.

## 5. Build order

1. Tokens, layouts, header, breadcrumbs, status badges.
2. Content schemas, then copy existing notes in (the 25 org notes and the 29 readings, 27 web notes plus the Haas and Balassa topic notes, already match the template closely, mostly a front-matter job).
3. Pillar landings with tabs, then detail pages.
4. Cross-links (`illustrated_by` / `lenses`) and the "Seen in" blocks.
5. Search, filters, compare drawer.
6. Matrix, timeline, Balassa ladder.
7. Deploy to Cloudflare Pages, check on a phone.

Steps 1 to 4 already give a usable reviewer. Steps 5 to 6 are polish.

## 6. Open questions

- **Scope of A2:** the North Star still asks whether readings 19 to 29 are examinable. If not, the reading list tab should default to hiding them behind a toggle.
- **Numbering:** the North Star says 18 + 11 readings, but the web reading files are named `read02` to `read29`. Pick one numbering for URLs (author-year slugs avoid the problem).
- **Organization grouping:** confirm whether the professor groups organizations by region or by type, and match the default tab to that.
- **Class slides:** most A1 readings still show GAP in the master reviewer. The site will show them as `todo` pages rather than hide them, so gaps stay visible.
- **MECA and WAICO:** names unconfirmed with the students.
