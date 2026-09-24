# Portfolio review and proposed overhaul

> Historical review baseline. The September 23, 2026 [CV and master-resume refresh](content-refresh-2026-09-23.md) supersedes the content, download status, and evidence caveats below where noted. The broader skills inventory is retained at the user’s request.

> Repository organization update: these notes live in `docs/portfolio-review/`. The refreshed design is now the single root `index.html`, with assets in `assets/` and the current resume/CV PDFs at their original root filenames. The former `site/` and `review/` layouts remain in Git history. The observations, paths, public URLs, branch names, and validation below describe the earlier review baseline unless dated otherwise. The root layout uses the existing GitHub Pages `main` / repository-root source without configuring a custom GitHub Actions workflow. See the [repository guide](../../README.md) for the current file layout and publishing workflow.

Prepared September 17, 2026. Review baseline: website commit `234906d`; resume evidence repository commit `64c8e28`. Work is local on `feature/portfolio-review`. The existing website, PDF downloads, resume repository, and public LinkedIn profile have not been edited.

**Revised direction:** preserve the original navy/gold palette, full content, and use of the available screen width. The first concept changed the palette and condensed the material too aggressively. The revised concept keeps the desktop sidebar, improves mobile navigation and readability, and expands the descriptions from the recent two-page base resumes without removing existing sections or history. Lead with **cloud, platform, and DevOps**, as confirmed in this review, with systems and storage research providing technical depth.

To preview the [current home page](../../index.html), run from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit [the local home page](http://127.0.0.1:4173/). The current resume and CV files are `Mitchell_Elliott_Resume.pdf` and `Mitchell_Elliott_CV.pdf` at the repository root. References below to pending PDF refreshes or a separate local concept describe the historical review, not the current files. Optional case studies can add depth later without replacing the full portfolio content.

## What works today

- The single static page is fast to understand and inexpensive to maintain. No framework migration is needed.
- Blue and gold, the portrait, and direct language give it a recognizable personal identity.
- Section links, downloadable career material, and direct contact links are useful.
- The site already includes the 2026 research role and workload-trace project. This is an update and editorial overhaul, not recovery of an abandoned portfolio.

## Findings from the current site

| Priority | Finding | Proposed change |
| --- | --- | --- |
| High | On a 390 × 844 viewport, About starts about 857px from the top; the whole first screen is header/navigation. Projects starts about 7,776px down. | Replace the vertical mobile sidebar with compact horizontal/wrapping navigation. Keep every section reachable directly. |
| High | The latest UCSC role and workload-trace project still say Present, though the evidence records August 2026 end dates. Some titles and affiliations differ too. | Reconcile facts before expanding copy; use the corrections below. |
| High | Four About paragraphs, extensive coursework, and the full experience/teaching history precede the projects. | Improve headings, spacing, and section navigation while retaining the About narrative, coursework, complete experience, and teaching history. |
| High | At 1280 × 600, the fixed sidebar's theme button ends at about 679px and is clipped below the viewport. The sidebar has no internal scrolling. | Use a font-relative desktop sidebar wide enough for the larger single-line name, with internal scrolling so every control remains reachable at short heights and zoom. |
| High | CogniStore's current GitHub destination returns HTTP 404 to an anonymous request. CarbonStream shows a link icon with no link; Workload Trace has no evidence destination. | Label unavailable evidence clearly and avoid dead links; retain each project description. A 404 may indicate a private, renamed, or unavailable repository; do not assume which. A case study is optional enrichment. |
| High | Without the script-applied theme class, `.section-item` uses near-white text on a pale-gray background, about 1.10:1 contrast. | Make baseline CSS readable independently of JavaScript. |
| Medium | 107 skill badges across eight groups; MIPS, RISC-V, and REST API are duplicated. Some languages are under Query & Config. | Include every original skill and the full 350-entry resume skills inventory, organized into 17 subject groups. Preserve recognizable aliases and record the mapping so regrouping does not hide omissions. |
| Medium | 10px gold section borders surround 6px blue entry borders, with repeated shadows competing with the text. | Keep the exact navy/gold colors and broad fluid content area; reduce border weight and shadows, then use typography and spacing to distinguish entries. |
| Medium | No main landmark or skip link; project and experience titles are bold text rather than headings. Theme controls use emoji without purpose/state labels or Escape dismissal. | Use semantic headings and navigation, a skip link, visible focus, and an accessible labeled theme control. |
| Lower | The portrait is 2000 × 2000 and about 891KB, rendered at 130px. Metadata is minimal; footer says 2025. | Prepare an appropriately sized portrait, a useful page description/social preview, and the current footer year. |

Current source locations: [site styles](../../assets/css/site.css) contain layout, borders, sidebar, card text, and mobile rules; [index.html](../../index.html) contains the page content and controls; [site behavior](../../assets/js/site.js) contains navigation, alignment, and theme behavior, with early theme restoration in [theme-init.js](../../assets/js/theme-init.js). The original single-file baseline is retained in Git at commit `234906d`.

## Revised layout and content scope

The confirmed preference is a broad, simple page that preserves the original identity and information. Keep the seven visible sections and their navigation destinations: **About, Experience, Teaching, Projects, Skills, Education, and Contact**. Content remains expanded and readable; disclosures or separate case studies must not become the only way to access original material.

| Area | Required scope in the revised concept |
| --- | --- |
| About | Preserve the full professional narrative; make the current focus easy to identify. |
| Experience | All eight existing roles, with expanded contributions drawn from the recent two-page bases and corrected titles, dates, and affiliations. |
| Teaching | Both the teaching-assistant and undergraduate-tutor roles, with expanded teaching, course-infrastructure, and grading details. |
| Projects | All 15 named projects in the resume inventory, including the ten original projects, plus six employer work initiatives. Work initiatives retain their employer and dates and are not counted as extra jobs. |
| Skills | 402 entries across 17 subject groups: all 350 resume-inventory skills, 45 additional original-site names, and seven verified catalog additions. Every original token and every named skill in the 25 current two-page bases maps to a visible entry; the coverage map records aliases and source status. |
| Education | Both UCSC degrees, dates, coursework, and listed achievements. |
| Contact and downloads | Phone, email, LinkedIn, GitHub, and both existing resume/CV PDF links. The existing PDF downloads are still pending refresh; the local proposal bar has been removed for a clean visual preview. |

### Visual direction

Spacing uses two shared CSS tokens: `--layout-gap: 20pt` (about 26.67px) and `--compact-gap: 10pt` (about 13.33px). Main frames, content-card interiors, dividers, and section gaps use the larger token; navigation/download controls, theme controls, skill chips, and compact gaps use the smaller token. Mobile page gutters and narrow-phone section insets use the smaller token to preserve reading width. Below 23em, navigation and downloads stack in one column, and content-card padding also uses 10pt to keep large headings readable. Borders, icon dimensions, and font sizes are independent of these spacing tokens.

Use only the original **navy `#004080` and gold `#ffcc00`** for blue/yellow accents in both themes, and retain the original light/dark surfaces: light page `#f5f5f5`, white sections, pale-gray entries `#ededed`; dark page/sections `#181818` and entries `#232323`. The header and sidebar share the content sections’ light/dark background and text colors. Sidebar controls follow the theme: pale-gray backgrounds with dark text in light mode, and charcoal backgrounds with white text in dark mode, with blue outlines in both. All box outlines use an equal 2px width on desktop and mobile, retaining gold outer frames and blue entry borders. On desktop, sidebar controls and content entries share a 20pt inset inside their gold frames; native sidebar scrollbar space is accounted for so the visible left and right gaps stay equal. Blue content boxes use the shared 20pt internal padding, reduced to 10pt below 23em, with text-box trimming at their text edges to avoid extra font leading above and below the content. Header and content gutters remain aligned. At the top of the desktop page, the top edge of the About box aligns with the top edge of the Sections control; header text and sidebar profile measurements keep those edges aligned when text wraps or font sizes change. The mobile header stays compact. Use 22px body text with 1.6 line spacing, approximately 29px entry titles, and 44px desktop section headings (39.6px on mobile), at the standard browser font setting. Use the existing portrait at the full desktop sidebar content width (220px at the standard font setting), with 20pt above and on both sides and a 20pt gap to the name below. Trim the sidebar name’s font leading so that gap follows its visible text. Keep the portrait at 96px in the wider mobile header and 80px on narrow phones, retaining its circular crop and gold border, with familiar system typography. Improve border weight, spacing, line height, and heading hierarchy without changing the palette.

The main area should expand across the available desktop width beside a sidebar sized for 10rem of content plus two 20pt insets and two 2px borders (about 277px at the standard font setting), inset 20pt from the viewport edges, matching the gaps between content sections and framed with the same gold border as the content sections: 2px on desktop and mobile, with rounded corners; do not constrain the entire portfolio to a 900px band. Give the fixed desktop sidebar its own scrolling when needed. At mobile widths, combine the portrait and name in one header and hide the duplicate sidebar identity. A native Sections disclosure starts closed and opens a two-column grid of links; selecting a link closes it before native anchor navigation and moves focus to the destination. Downloads and theme controls share a compact row when space allows and stack on narrow phones. Desktop shows the same Sections disclosure, expanded by default and available to collapse. Header alignment uses the profile above Sections, so toggling the menu does not shift the main content. Without JavaScript, the disclosure starts open and remains usable. Give all seven section links the same theme-aware fill and text, 2px blue outline, and rounded corners as the Resume and CV links. All nine links share a minimum height derived from the desktop icon size, two 10pt padding insets, and the borders (about 56px at the standard font setting). Their text and download icons are centered vertically and horizontally. The Sections disclosure and theme selector use the same control height; link buttons can grow if enlarged text wraps. All sidebar controls share bold Arial at 1.15rem on desktop and .9rem on mobile. Sections and Theme use identical decorative SVG arrows, each inset 10pt from the inner right border. The native theme select retains its label and keyboard behavior with its browser arrow replaced by the shared icon. Button outlines use the same navy as the content entry borders in both themes; the Sections disclosure and theme selector match. Content links use navy in light mode and the same gold in dark mode for readability. Skill chips use navy text on gold in light mode and gold text on navy in dark mode, using these exact accent colors without alternate blue tints. Sidebar controls change background shade on hover and keyboard focus; sidebar links stay free of underlines on hover. Separate the profile, navigation, downloads, and theme controls with the same subtle divider color as the content headings. Use the shared 20pt layout gap between gray dividers and adjacent blue-outlined boxes, including section/project heading margins and sidebar divider spacing. Section and project-group headings use [CSS text-box trimming](https://www.w3.org/TR/css-inline-3/#text-box-trim) to remove the font’s extra leading above the capitals and below the baseline. This makes the visible heading spacing follow the shared 20pt gap, rather than adding font-metric whitespace to it; font sizes and multiline line spacing are preserved. Browsers without text-box support retain the readable, more spacious heading layout. Resume and CV include decorative download icons while retaining their existing PDF destinations. Use a stacked header on narrow phones and a portrait/text row at wider mobile widths; keep the name on one line and retain 22px body text. Provide a labeled system/light/dark choice, keyboard-visible focus, a skip link, semantic headings, and readable baseline CSS before JavaScript runs.

Use plain entries and familiar links. Avoid giant slogans, stat counters, animated text, decorative gradients, glass effects, fake terminal panels, and technology-logo walls. Actual diagrams or project output can enrich the content where they explain the work.

### Proposed opening

**Mitchell Elliott**  
**Software Engineer**  
Cloud, platform & DevOps · Systems research · San Francisco Bay Area

The About section retains four paragraphs covering the engineering focus, UCSC research, teaching, and industry work. Its opening now foregrounds cloud infrastructure, platform engineering, and DevOps while keeping systems and storage research visible. This describes the work without implying current employment in the role that ended in August.

## Content corrections and additions

| Current wording | Proposed factual update |
| --- | --- |
| Research and Development Engineer, Jan. 2026–Present | Research Software Engineer, Platform Infrastructure; Jan.–Aug. 2026; use past tense. |
| Postgraduate Researcher | Research Software Engineer, Storage Systems; Dec. 2024–Jan. 2026. |
| Sustainable Systems Lab / Center for Research in Storage Systems | Use the confirmed Center for Research in Systems and Storage (CRSS) for the corresponding roles and projects. |
| uLab: Software Engineer Intern | Site Reliability Engineer Intern; June–Sept. 2021. |
| Workload Trace Analysis, Jan. 2026–Present | Jan.–Aug. 2026. |
| CogniStore, 2025–Present | Sept. 2025–Present. |
| CarbonStream, 2024–Present, Carbon TCO Analyzer | Jan. 2024–Present; CarbonStream: Data Center Carbon TCO Simulator. |
| ParkourSC: eliminated false-positive alerts | Reduced false-positive production alerts by approximately 80%. |
| Perfectly Snug: MySQL | Use SQL while MySQL-versus-SQLite attribution is unresolved. |
| Mentored over 1,000 students | Head TA across six quarters for a course serving 1,000+ students. |

The 2026 UCSC public title is owner-confirmed descriptive wording. It is distinct from the formal appointment title, Junior Research Engineer - NR, and its HR job code. The portfolio can use the confirmed descriptive title without presenting it as an exact HR record.

### Optional case-study enrichment

| Existing work to expand | Evidence to emphasize | Material needed for an optional case study |
| --- | --- | --- |
| Shared research platform · UCSC · Jan.–Aug. 2026 | Three-person engineering team; NRP Nautilus Kubernetes; Ceph persistent storage; repeatable multi-user experiments and data workflows. | One accurate architecture diagram and a concrete launch/monitor workflow. The trace extraction → Parquet → DuckDB → validated simulator-input path is useful supporting detail. |
| Automated grading infrastructure · UCSC · Jan. 2023–Dec. 2024 | GitLab submission checks; authored Python orchestration and C test harness; separate Docker grading on an Ubuntu VM; score reconciliation; estimated 50% reduction in overall grading time. | An original diagram distinguishing hosted checks from full grading, plus an appropriate example of personal contributions. |
| Production observability · ParkourSC · July–Sept. 2022 | Environment spanning 100+ Kubernetes clusters; New Relic/NRQL alert tuning; approximately 80% fewer false-positive alerts; Jira maintenance automation and incident investigation. | A worked alert or maintenance-suppression example and an explanation of how the reported outcome was assessed. |
| AWS delivery infrastructure · uLab · June–Sept. 2021 | Lightsail-to-EC2 migration; network/access/monitoring controls; GitHub, AWS CodeBuild, and ECS delivery; Terraform provisioning and recovery documentation. | Diagram of the actual workflow and a clear description of the contribution and operational tradeoffs. |

These case studies supplement the full experience and project sections; they do not replace or reduce them. The employer examples describe employment work, not separate jobs or newly invented product names. Keep dates and employer context attached to them. The grading example must distinguish maintained/shared components from personally authored components; use synthetic examples rather than student records or private course data.

### Full project collection and additions

- **CarbonStream:** the strongest research differentiator; describe simulation, validation, and storage tradeoffs. Add a reproducible result when one is ready. Do not present simulated results as proven real-world carbon savings.
- **Workload Trace Analysis:** data extraction, local reuse, validation, and tooling. It can also support the platform case study without counting shared work twice.
- **CogniStore:** storage abstraction, metadata/semantic indexing, and placement policies. Repair its public evidence destination; avoid implying model training or LLM use from the policy-engine name.
- **Automated grading infrastructure, Jan. 2023–Dec. 2024:** add the verified project alongside the retained teaching history; preserve the contribution and architecture distinctions above.
- **SimOps Workbench, June 2026:** add the missing personal project for configure/run/compare/history workflows. Do not imply employment at Sedaro.
- **Distributed Key-Value Store, Oct.–Dec. 2021:** add as supporting systems depth. Confirm a usable public artifact before promoting a repository link or making current buildability/performance claims.

The complete local concept also includes Multi-Server File Replication System (February 2022) and Software-Defined IPv4 Router (November 2021), alongside the older shell, file-system, compression, locking, RPC, and hockey projects. Six separately labeled professional initiatives cover ParkourSC observability, the uLab AWS migration, Perfectly Snug MRP and mobile integration, and Nevtec service-ticket monitoring and workstation provisioning. Several lack explicit verification gates in the source graph. That does not prove their existing descriptions are false; retaining baseline content in a local review is not new verification. Reconcile source eligibility before public release. Apply the same caveat to the retained Graduate Student Researcher and undergraduate tutor history; do not invent new achievement claims.

### Skills presentation and evidence

Use all 17 groups from the resume skills inventory: languages; software design; web and APIs; databases; storage; data; cloud; delivery and tools; operating systems; networking; security; reliability; performance; AI; research; collaboration; and business systems. Include all 350 inventory skills, preserve every original-site skill through direct text or an explicit displayed alias, and add supported base-resume and verified-competency gaps. Use readable text, consistent spacing, and wrapping rather than a curated shortlist. The coverage map records each source entry and its displayed label.

The inventory spans professional work, projects, coursework, and historical resume material; inclusion does not assert equal proficiency in every topic. Unsupported job-demand-only competencies are not personal skills and are excluded. Source statuses and unresolved historical wording are documented separately from the portfolio copy. Tie GitHub Actions to CogniStore testing; GitHub in the uLab workflow does not establish GitHub Actions there. PyTorch is currently candidate/noneligible in the competency catalog: keep its existing token in this local review, but flag its eligibility for reconciliation before public release instead of treating its presence as a newly verified claim.

### Resume and CV downloads

The existing two PDFs resolve locally, but their hashes differ from the current master/CV files in the resume repository. That establishes they are different artifacts, not that every current master claim is publication-ready. Select the intended broad or platform-focused resume, verify its facts and rendered output, and record the source/version before replacing the download. Keep stable download URLs if practical. The revised concept retains both original download links. The proposal bar has been removed at the user’s request; these downloads are still pending refresh and have not been updated.

## LinkedIn alignment

Direct browsing reached LinkedIn's sign-in wall. This is proposed replacement copy from the career records, not a complete audit of the current signed-in profile. No profile edits have been made.

**Proposed headline:**  
Software Engineer | Cloud, Platform & DevOps | Kubernetes, AWS, Terraform | CI/CD & Observability

**Proposed About:**

> I build cloud infrastructure, automate delivery workflows, and create tools that make engineering work more repeatable. My experience spans production Kubernetes operations, AWS deployments, observability, and shared research platforms.
>
> At UC Santa Cruz's Center for Research in Systems and Storage, I led a three-person engineering team developing and operating shared research infrastructure. I built containerized environments on Kubernetes with Ceph storage and developed tools for launching and monitoring long-running experiments.
>
> At ParkourSC, I worked with production infrastructure spanning 100+ Kubernetes clusters and helped reduce false-positive alerts by approximately 80%. At uLab Systems, I migrated a production application to AWS EC2 and built delivery workflows with GitHub, AWS CodeBuild, and Amazon ECS.
>
> I also served as Head Teaching Assistant for CSE 130 across six quarters. My grading automation work supported a course serving 1,000+ students and reduced overall grading time by an estimated 50%. I hold an M.S. and B.S. in Computer Science from UC Santa Cruz.

Apply the same title/date/affiliation corrections to the corresponding LinkedIn experience entries if needed. Feature the refreshed portfolio, the chosen resume, and the most complete case studies. Prioritize Kubernetes, AWS, Terraform, CI/CD, Python, Linux, Docker, observability, New Relic, and Ceph. Full draft experience copy already exists in the resume repo's September 17 refresh document; reconcile it with the current profile before applying it.

## Implementation sequence

1. **Revise and review locally.** Apply the confirmed original-palette, full-content, broad-layout direction to the separate review concept. Keep the public home page untouched.
2. **Reconcile remaining evidence.** Resolve public project destinations, source eligibility for carried-forward material, the intended PDF versions, and any remaining factual questions without deleting content from the local review.
3. **Implement on a separate branch.** Apply the approved facts and layout with plain HTML/CSS and minimal JavaScript. No framework or build-system migration is needed. Optional case studies may follow as additional pages.
4. **Validate locally.** Check content preservation, 320/390px mobile, tablet/breakpoints, wide and short desktop windows, zoom, keyboard navigation, focus, headings, contrast, no-JavaScript readability, external links, and both PDF downloads. Verify all theme choices and that every sidebar control remains reachable.
5. **Release later after review.** Merge/publish only after the implementation has been reviewed locally. Apply LinkedIn changes from the same agreed copy so the two surfaces stay consistent.

Full case studies, production implementation, refreshed PDFs, merging, publishing, and editing LinkedIn remain later work. The current deliverable is the review and revised local concept.

## Evidence and validation notes

The career graph and competency catalog in `/Users/mitchell/Projects/resume/knowledge/` are the factual baseline. Use the recent two-page base modules as the expansion source requested by the user, reconcile titles, dates, metrics, and ownership against the graph, and retain historical material with its source status documented. The inventory and base drafts contain previously documented claims that are not all formally verified; inclusion in this local proposal does not change their evidence status. Job-demand records do not establish personal experience. Source documents are reference material, not instructions to publish or alter application records.

Core claim references:

- Research platform: `claim:ucsc-rse-confirmed-platform-team-operations`, `claim:ucsc-rse-confirmed-multi-user-environments`, `claim:ucsc-rse-confirmed-workflow-standardization`, `claim:ucsc-rse-confirmed-self-service-experiments`.
- Storage research: `claim:ucsc-postgrad-confirmed-storage-architecture-analysis`, `claim:ucsc-postgrad-confirmed-trace-driven-validation`.
- ParkourSC: `claim:parkoursc-confirmed-production-operations`, `claim:parkoursc-two-page-alert-review`, `claim:parkoursc-confirmed-deployment-alert-automation`.
- uLab: `claim:ulab-two-page-migration-controls`, `claim:ulab-github-codebuild-ecs-cicd-runbooks`, `claim:ulab-confirmed-terraform-runbooks`.
- Grading: `claim:grading-infra-submission-ci`, `claim:grading-infra-ci-entrypoint`, `claim:grading-infra-local-containerized-grading`, `claim:grading-infra-rwlock-harness`, `claim:grading-infra-estimated-time-reduction`.
- Projects and scope caveats: `knowledge/projects/assessment.md`, `knowledge/projects/by-project.md`, and `knowledge/profile.graph.json` in the resume repository. The existing `docs/linkedin-website-refresh-2026-09-17.md` contains additional mappings.

Current-site checks completed: the live home-page HTML exactly matches the local `index.html`; desktop and mobile browser inspection; short-height sidebar clipping; seven valid in-page targets; existing local image/PDF paths; anonymous HTTP checks on GitHub links. Six older project repositories and the GitHub profile returned 200; CogniStore returned 404. These checks establish availability, not project correctness or a full accessibility audit. LinkedIn returned an authentication wall. No automated performance score or exhaustive accessibility compliance claim is made.

**Expanded-concept validation:**

- The integrated page includes all seven original sections, all ten roles (eight Experience and two Teaching), all 15 named projects, and all six work initiatives. Project inventory IDs and role graph IDs each appear exactly once.
- Experience expands from 37 to 46 bullets and approximately 665 to 1,388 words; Teaching expands from eight to 12 bullets and approximately 154 to 373 words. Projects expand from 13 entries / 39 bullets to 21 entries / 78 bullets and approximately 2,105 words. Counts include headings and metadata; wording is expanded from the two-page bases with source corrections.
- All 350 skill-inventory names, all 107 original-site tokens, all 116 previous-concept tokens, all 130 distinct terms across 25 current two-page base skills modules, and all 135 verified eligible catalog names map to one of 402 visible skill entries in 17 groups. Repeated chips and spelling aliases are consolidated without dropping the underlying skill. Source-only historical mentions retain their original evidence status.
- The four About paragraphs remain. Education and the Contact details are preserved; the copyright now sits inside the Contact section. HTML nesting, unique IDs, all local paths and in-page destinations, both PDF links, and retention of six working project repository destinations pass the local checks.
- The September 23 readability revision increases body text from 18px to 22px with 35.2px line spacing, entry titles to approximately 29px, and desktop section headings to 44px at the standard browser font setting. The root size uses 137.5% so it also respects the browser’s default font preference. Original navy `rgb(0, 64, 128)` and gold `rgb(255, 204, 0)` are unchanged. The larger header/sidebar revision uses 66px desktop name text, approximately 29px sidebar identity text, and 25px desktop navigation, download, and theme-selector text. The copyright sits inside the Contact section, so its outer frame aligns with the fixed sidebar’s bottom edge at the end of the page. Both desktop name placements stay on one line; mobile shows the name only once; the header name scales with the available header width to fit its gold frame. The main area fills the remaining desktop width beside the sidebar. The sidebar’s outer gutters, its gap to the content, the header-to-content gap, and the gaps between sections all use 18px. The mobile breakpoint is 50em to follow browser font preferences.
- Expanded Experience and Projects were visually inspected on desktop; Skills and Projects were inspected on mobile. At 390px and 320px, the complete page has no horizontal overflow, including the long skill labels. Light and dark rendering were inspected; the theme was restored to System.
- At 1280 × 600, keyboard navigation brings the theme control fully into view through the sidebar’s internal scrolling. The skip link moves focus to the main landmark. Temporary viewport overrides were reset, and the active preview was refreshed with the latest draft.
- The portrait/title/navigation revision uses a 190px desktop portrait and an 80–96px responsive mobile portrait, the title “Software Engineer,” and matching outlined boxes for all nine sidebar links. Browser checks confirm valid section anchors, a single-line name and no horizontal overflow at 320px, and keyboard access to the theme control at 1280 × 600.
- The header now matches content-section backgrounds and text in both light and dark themes, with aligned gold frames. Native desktop section links use an 18px top scroll offset to align the selected content frame with the sidebar. The preceding section ends at or above the viewport edge; destinations near the document bottom retain the natural scrolling limit and bottom-frame alignment. Mobile navigation keeps a zero top offset because its sidebar is in normal flow. Mobile Experience navigation and direct-hash reload also align within subpixel rounding; Contact clamps at the bottom. The header name stays on one line without overflow at 320px.
- The mobile correction removes the repeated identity, places the portrait in the header, and makes the section navigation a native disclosure with aligned two-column links. About begins approximately 419px down at 644px width, 592px at 390px, and 589px at 320px, as measured before the local proposal bar was removed. All tested widths have no horizontal overflow; body text remains 22px and all main-section HTML is byte-identical to the preceding draft. Keyboard open, Escape dismissal, section focus, menu auto-close, native anchor alignment, direct-hash reload, and automatic menu state across the 800/801px breakpoint were verified. Desktop retains the 190px sidebar portrait, 66px name, and expanded links. Light/dark presentation was inspected, System restored, and no browser console errors were recorded.
- The main `index.html` and both PDF downloads remain identical to `main`. These are focused content and browser checks, not an exhaustive accessibility or performance audit.

The latest spacing revision uses 20pt/10pt tokens in place of the earlier pixel values recorded above. Browser checks at 1440px, 801px, 390px, and 320px confirmed the intended computed spacing, retained About/header alignment, and no page overflow; all navigation labels and 402 skill chips fit their boxes. The 320px view uses compact card insets to preserve heading readability. Desktop anchor navigation follows the updated 20pt sidebar inset, and no console errors were recorded.

Detailed provenance is in [experience and teaching sources](experience-sources.md), [project sources](project-sources.md), and [skill sources](skill-sources.md). The [skill coverage map](skill-coverage.json) records every input-to-display mapping, including aliases, source paths, and eligibility caveats.

Work remains local on the review branch. No push, merge, or deployment was performed. The resume repository's existing untracked September 17 refresh document was read and left unchanged.
