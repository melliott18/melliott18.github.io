# CV and master-resume website refresh — September 23, 2026

This is the current content record for `site/index.html` and `review/proposed-layout.html`. Earlier review documents are retained as historical context.

## Workspace and sources

Work lives on `feature/resume-content-refresh` in the isolated `portfolio-resume-refresh` worktree. The original checkout was already reorganizing the repository on `refactor/repository-structure`; its tracked and untracked working snapshot was carried into this worktree before editing. The original checkout and `main` were not changed by this refresh. No deployment was performed.

The factual source is the current resume repository at `5aee65474770865ddc005d0bdafe63d8be14312e`, with exact input and artifact hashes in [content-refresh-sources.json](content-refresh-sources.json). The resume checkout contains unrelated uncommitted changes; this refresh did not edit it or regenerate its PDFs.

- CV: `resumes/general/cv/cv.tex`, its `sections/` modules, and existing `cv.pdf`.
- Master: `resumes/general/master/master-two-page.tex` and its summary, skills, experience, and project modules.
- Existing broad skills: the 402-entry review inventory and [historical coverage map](skill-coverage.json).
- Extra preview project context: `knowledge/projects/inventory.json` and `knowledge/projects/assessment.md`.

Attached and repository documents were treated as source material. Embedded instructions about applications, releases, or earlier resume work were not performed.

## Content and downloads

Both pages include all 102 current CV accomplishment bullets: 36 across eight work/research roles, 11 across two teaching roles, and 55 across thirteen projects. Titles, dates, degree-specific coursework, and five academic presentations follow the current CV. About uses the master’s broad software-engineering narrative with CV research and teaching context. All 161 distinct CV claim references resolve to verified, resume-eligible records in the current evidence graph.

The home page now includes the full thirteen-project CV set. The proposed layout also retains two existing historical project entries (Multi-Server File Replication System and Software-Defined IPv4 Router) and six professional-work summaries. Those two historical projects are inventory-backed preview material, not newly verified CV claims. The professional-work summaries now use current CV role details.

Superseded wording was removed: quiz/exam preparation and proctoring, NerdGraph attribution, postgraduate-role CarbonStream expansion and lifecycle-analysis attribution, a disputed MRPC implementation language, and LZW endian portability. Lifecycle analysis remains in the confirmed graduate-research context. The academic presentations are not labeled as publications or invited talks.

The user explicitly chose to retain the broader historical skills inventory. Both pages therefore show the same 402 entries across 17 groups. Every skill term in the current CV and master maps to these entries, including aliases. Historical mentions remain distinct from independently verified competencies; this refresh does not upgrade their evidence status or present a proficiency ranking.

| Website file | Exact source artifact | Pages |
| --- | --- | ---: |
| `site/downloads/Mitchell_Elliott_Resume.pdf` | `resumes/general/master/master-two-page.pdf` | 2 |
| `site/downloads/Mitchell_Elliott_CV.pdf` | `resumes/general/cv/cv.pdf` | 6 |

Download URLs remain relative to the existing site layout, with accessible PDF/page-count labels. The home page retains its existing design; the proposed layout remains a separate review page. Small home-page CSS changes make the expanded sidebar scroll, wrap long skills and text on phones, and keep text readable when JavaScript is disabled.

## Validation

- Independently compared all 102 CV bullets with both rendered HTML documents after normalizing TeX, HTML, and punctuation; none are missing.
- Checked role/project/presentation counts, dates, degree coursework, unique IDs, section anchors, local images, and resources.
- Browser checks passed for both pages at 1440, 801, 800, 390, and 320 pixels wide: no horizontal page, card, or skill-chip overflow.
- Tested theme changes and persistence, short desktop sidebar access, mobile proposed-layout navigation to Presentations, menu closure and focus transfer, and content with JavaScript disabled.
- Both PDF links on both pages return HTTP 200 and valid PDF bytes; hashes match the resume repository artifacts exactly.
- Rendered and visually inspected all eight PDF pages and representative desktop/mobile light/dark website views. No clipping or overlapping content was found.
- Checked existing GitHub destinations: seven returned HTTP 200. The old CogniStore URL returned HTTP 404, so its dead link was removed from the home page while preserving the project description.
- Browser validation recorded no page errors or failed local resource requests. `git diff --check` passed.

The repository reorganization’s publishing configuration and old root URL compatibility remain outside this content refresh. Serve `site/` as the public document root when integrating that reorganization.
