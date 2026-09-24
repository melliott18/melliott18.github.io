# Comprehensive portfolio skills: source and coverage notes

> Historical review baseline. The September 23, 2026 [CV and master-resume refresh](content-refresh-2026-09-23.md) supersedes the content, download status, and evidence caveats below where noted. The broader skills inventory is retained at the user’s request.

The fragment is a complete local-review inventory, not a proficiency ranking or a declaration that every historical mention is independently verified. The original website and resume sources remain unchanged.

## Coverage

- **402 displayed entries in 17 groups:** 350 inventory names + 45 names retained only from the original website + 7 verified catalog additions.
- **107 original website tokens / 104 unique names** and **116 previous-concept tokens / 113 unique names** are fully mapped to displayed entries. Repeated MIPS, RISC-V, and REST API chips are represented once; spelling and product-name aliases do not create duplicate chips.
- **135 verified, resume-eligible catalog competency names** are represented. This includes the catalog credential “Computer science education”; the existing degree records provide its context, and its inclusion is not a new technical-proficiency claim.
- Read the skills modules selected by **25 current reusable two-page base resumes** under `resumes/general`, `resumes/categories`, and `resumes/fields`. All **130 distinct named terms** (1,029 mentions, including repeated conditional branches) map to the displayed inventory. No additional base-only skill was missing after inventory/site/catalog reconciliation.
- Coverage checks parsed the generated HTML and verified that every inventory name, original token, previous-concept token, base term, and verified eligible catalog name maps to an actually displayed label. This checks completeness and structure, not source truth or browser layout.

## Provenance

- `/Users/mitchell/Projects/resume/knowledge/skills/inventory.json` supplies the normalized 350-name inventory and 17 groups; its compilation date is September 11, 2026. It includes current/shared resumes, archived releases, available Git history, named coursework, and owner-confirmed additions.
- `knowledge/skills/README.md` explicitly separates mention inventory from verification/eligibility. Historical and candidate entries are retained in this local concept as requested.
- `knowledge/competencies.v1.json` (last updated September 14, 2026) supplies verified eligible additions and separate status caveats. No unsupported catalog-only requirement was converted into a skill.
- Current `*two-page.tex` base wrappers identify 25 skills modules in `content/sections/skills/` and `content/sections/base-pairs-2026-09/`. The JSON lists every module, referring wrapper, line, named term, and display mapping. Company-targeted resumes were not substituted for these current reusable bases.
- The unchanged original `index.html` and the preceding `review/proposed-layout.html` provide exact carried-forward skill tokens. Original-site-only entries retain that provenance rather than inheriting verified status.

**Seven catalog additions:** PowerShell; Windows Server; XML; Cross-functional collaboration; Computer science education; Storage lifecycle management; AI-driven storage placement policy. Other catalog names map to existing inventory names through recorded aliases, for example AWS → Amazon Web Services (AWS), RPC → Remote procedure calls (RPC), and Simulation → Simulation (Simulation frameworks). Neighboring concepts such as Linux/Ubuntu, Docker/Containers, and Concurrency/Multithreading remain distinct rather than being collapsed through broad catalog aliases.

## Review caveats

- PyTorch is retained but cataloged as candidate/noneligible. Incident response and Scalable systems are retained but cataloged as adjacent/noneligible.
- OpenTelemetry and SLOs have actual historical inventory mentions and remain visible. They do **not** establish the unsupported broader catalog claims Distributed tracing or SLI/SLO ownership; those claims are not added.
- The remaining inventory/site mentions without an exact verified catalog record are not independently reverified by this task. The JSON preserves original source references and wording, exact catalog status where available, and related-scope caveats.
- All 14 catalog-only noneligible entries below are excluded from the displayed inventory because there is no actual inventory/site/base mention or verified eligible record for the named claim. An adjacent or unsupported broad concept is not inferred from a related technology.

| Excluded catalog-only name | Catalog status |
| --- | --- |
| High availability | unsupported |
| Machine learning | unsupported |
| AI-assisted development | unsupported |
| Embedded systems | unsupported |
| Robotics and autonomy | unsupported |
| Rust | unsupported |
| Microsoft Azure | adjacent |
| Production on-call ownership | unsupported |
| SLI/SLO ownership | unsupported |
| Large language models | adjacent |
| CUDA | unsupported |
| Production model serving | unsupported |
| Distributed tracing | unsupported |
| Datadog | unsupported |

## Group counts

| Group | Displayed entries |
| --- | ---: |
| Programming and query languages | 18 |
| Software design and development | 42 |
| Web development and APIs | 24 |
| Databases and search | 21 |
| Storage and filesystems | 26 |
| Data engineering and analytics | 33 |
| Cloud and containers | 30 |
| Automation, delivery, and developer tools | 41 |
| Operating systems and concurrency | 41 |
| Networking | 25 |
| Security and access | 16 |
| Reliability and observability | 23 |
| Performance and debugging | 23 |
| AI and machine learning | 4 |
| Research, simulation, and sustainability | 16 |
| Collaboration and project delivery | 11 |
| Business systems and technical support | 8 |

## Files

- [Preview Skills section](../../review/proposed-layout.html#skills): complete replacement Skills section using `.section-item`, `h3`, and `.skills-inline span`.
- `skill-coverage.json`: source-by-source mappings, alias information, catalog additions/exclusions, status caveats, group counts, and complete display-entry provenance.
- `skill-sources.md`: these notes.
