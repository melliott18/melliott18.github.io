# Expanded portfolio project source map

> Historical review baseline. The September 23, 2026 [CV and master-resume refresh](content-refresh-2026-09-23.md) supersedes the content, download status, and evidence caveats below where noted. The broader skills inventory is retained at the user’s request.

Local review content only. This fragment does not publish a site or change resume sources.

## Coverage and counts

- Before: 13 named project entries, 0 standalone descriptions, 39 bullets, approximately 704 text words.
- After: 15 named projects and 6 professional-work initiatives, 21 descriptions, 78 bullets, approximately 2186 text words.
- All 21 inventory IDs appear exactly once in `data-project-id` attributes; the existing 13 named projects remain.
- Grading infrastructure is a named project and is not duplicated as a professional-work initiative.
- The two added named projects are Multi-Server File Replication System and Software-Defined IPv4 Router.

## Source hierarchy

- Exhaustive membership and descriptions: `knowledge/projects/inventory.json` and `knowledge/projects/by-project.md`.
- Recent paired base editions: `resumes/general/master/master-two-page.tex`, `resumes/categories/devops/devops-two-page.tex`, `resumes/fields/networking/networking-two-page.tex` and their referenced expanded modules.
- Current corrected dates, titles, ownership, qualifiers, and technologies: `knowledge/profile.graph.json`.
- Sparse historical projects use the linked historical modules/notes. Local review inclusion does not mark those claims verified.
- Source paths below are relative to `/Users/mitchell/Projects/resume/` unless prefixed with `git:`. The git reference is read-only historical provenance.

## Per-entry provenance

### `workload-trace-analysis-platform` → Workload Trace Analysis Platform

- Group: project; 4 bullets.
- Dates/context: Jan. 2026 – Aug. 2026; UCSC Center for Research in Systems and Storage.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-workload-expanded.tex`.
- Source: `content/sections/projects/field-paired/trace-expanded.tex`.
- Source: `knowledge/profile.graph.json`.

### `sedaro-nano` → SimOps Workbench: Simulation Experiment Dashboard

- Group: project; 5 bullets.
- Dates/context: June 2026; Personal simulation project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-simops-expanded.tex`.
- Source: `content/sections/projects/items/sedaro-nano.notes.md`.
- Source: `knowledge/profile.graph.json`.
- Review note: Personal project extending an existing application, not employment at Sedaro. The project notes record disclosed AI assistance and owner responsibility; the copy does not claim wholly independent authorship of the underlying simulator.

### `cognistore` → CogniStore: AI-Powered Data Lifecycle Manager

- Group: project; 4 bullets.
- Dates/context: Sept. 2025 – Present; Storage lifecycle project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-cognistore-expanded.tex`.
- Source: `knowledge/sources/2026-09-10-cognistore-github-actions-confirmation.md`.
- Source: `knowledge/profile.graph.json`.
- Review note: Existing public GitHub URL returned404 during parent review and is intentionally omitted. Policy-engine implementation does not establish model training, LLM usage, or a natural-language interface.

### `carbonstream` → CarbonStream: Data Center Carbon TCO Simulator

- Group: project; 6 bullets.
- Dates/context: Jan. 2024 – Present; UCSC Center for Research in Systems and Storage.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-carbonstream-expanded.tex`.
- Source: `content/sections/projects/field-paired/carbon-profile-expanded.tex`.
- Source: `content/sections/projects/items/carbonstream.notes.md`.
- Source: `knowledge/profile.graph.json`.
- Review note: SLO checks describe simulator functionality, not production SLO ownership. No measured energy/carbon reduction is claimed.

### `ucsc-automated-grading` → Automated Grading Infrastructure

- Group: project; 6 bullets.
- Dates/context: Jan. 2023 – Dec. 2024; UCSC CSE 130: Principles of Computer System Design.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-grading-auto-expanded.tex`.
- Source: `content/sections/base-pairs-2026-09/project-grading-systems-expanded.tex`.
- Source: `content/sections/base-pairs-2026-09/project-grading-backend-expanded.tex`.
- Source: `knowledge/sources/2026-09-11-automated-grading-infrastructure-review.md`.
- Source: `knowledge/sources/2026-09-11-grading-infrastructure-technical-details.md`.
- Source: `knowledge/profile.graph.json`.
- Review note: The approximately50% figure is an owner estimate of overall grading time, not a test-runtime benchmark. Hosted checks and local full grading are separate. The authored lock harness is distinct from the standalone NRWLock library. Shared framework, Canvas code, and fault-injection components are not presented as wholly original work.

### `nrwlock` → NRWLock: Thread-Safe Reader-Writer Lock Library

- Group: project; 3 bullets.
- Dates/context: Oct. 2023 – Nov. 2023; Systems programming project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-nrwlock-expanded.tex`.
- Source: `content/sections/projects/items/nrwlock.tex`.
- Source: `knowledge/verification-workbook.md`.
- Review note: Historical project/claims lack explicit verified eligibility gates. Included as local review content. Avoids the stronger correctness guarantees present in some historical wording.

### `in-memory-file-system` → In-Memory File System

- Group: project; 3 bullets.
- Dates/context: Apr. 2022; Systems programming project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/projects/field-paired/in-memory-expanded.tex`.
- Source: `content/sections/projects/items/in-memory-file-system.tex`.
- Preserved existing public URL: https://github.com/melliott18/memory-fs.
- Review note: Historical project/claims lack explicit verified eligibility gates; retained as local review content. Described as an in-memory simulation, not a persistent production filesystem.

### `multi-server-file-replication-system` → Multi-Server File Replication System

- Group: project; 3 bullets.
- Dates/context: Feb. 2022; Network programming project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `resumes/companies/joby/sections/projects.tex`.
- Source: `git:386a1fab58919bc81b08de849549e52155943eed^:resumes/fields/networking.tex`.
- Review note: Inventory-only historical project without an explicitly verified graph node. Date Feb2022 is recorded in the Joby source and historical networking base. No loss-rate benchmark or quantified correctness claim is added.

### `cse138-distributed-key-value-store` → Distributed Key-Value Store

- Group: project; 4 bullets.
- Dates/context: Oct. 2021 – Dec. 2021; Distributed systems project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-cse138-expanded.tex`.
- Source: `content/sections/projects/items/cse138-distributed-key-value-store.notes.md`.
- Source: `knowledge/sources/2026-09-14-distributed-key-value-store-confirmation.md`.
- Source: `knowledge/profile.graph.json`.
- Review note: Sept14 owner confirmation establishes personal implementation of the complete final system. Earlier team provenance remains in source notes. No production availability or measured correctness claims are introduced.

### `software-defined-ipv4-router` → Software-Defined IPv4 Router

- Group: project; 3 bullets.
- Dates/context: Nov. 2021; Simulated network project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `git:386a1fab58919bc81b08de849549e52155943eed^:resumes/fields/networking.tex`.
- Source: `resumes/companies/mistral/sections/projects.tex`.
- Review note: Inventory-only historical project without an explicitly verified graph node. November2021 recovered from the historical standalone networking entry, not from a composite MRPC/Networked Systems heading. No physical enterprise deployment is claimed.

### `ddfs` → DDFS: Deduplicating Key-Value Block Store

- Group: project; 3 bullets.
- Dates/context: May 2021 – June 2021; Team course prototype on FreeBSD.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-ddfs-expanded.tex`.
- Source: `content/sections/projects/items/ddfs.tex`.
- Source: `knowledge/verification-workbook.md`.
- Preserved existing public URL: https://github.com/melliott18/ddfs.
- Review note: Historical project/claims lack explicit verified gates. Inventory/review identifies a team course prototype with unfinished larger-filesystem integration. Copy limits scope to userspace block operations and avoids implying a complete filesystem or sole authorship.

### `unix-shell` → Unix Shell

- Group: project; 3 bullets.
- Dates/context: Apr. 2021; Systems programming project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/projects/field-paired/unix-shell-expanded.tex`.
- Source: `content/sections/projects/items/unix-shell.tex`.
- Source: `knowledge/verification-workbook.md`.
- Preserved existing public URL: https://github.com/melliott18/cshell.
- Review note: Historical project/claims lack explicit verified gates. Inventory review narrows broad historical pipeline/robustness language: the copy uses single-pipe forms and describes error checks without claiming complete robustness. Remaining edge cases are recorded in the project review sources.

### `mrpc` → MRPC: Multithreaded RPC Server

- Group: project; 4 bullets.
- Dates/context: Oct. 2020 – Dec. 2020; Networked systems project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/base-pairs-2026-09/project-mrpc-expanded.tex`.
- Source: `content/sections/projects/items/mrpc.tex`.
- Source: `knowledge/verification-workbook.md`.
- Preserved existing public URL: https://github.com/melliott18/rpc-server.
- Review note: Historical project/claims lack explicit verified gates. Copy uses concrete documented mechanisms rather than broad scalability/fault-tolerance guarantees.

### `jakes-hockey-pool` → Jake’s Hockey Pool

- Group: project; 3 bullets.
- Dates/context: June 2020 – Oct. 2020; Full-stack application project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/projects/field-paired/hockey-expanded.tex`.
- Source: `content/sections/projects/items/jakes-hockey-pool.tex`.
- Source: `content/sections/projects/items/jakes-hockey-pool.notes.md`.
- Preserved existing public URL: https://github.com/melliott18/jakes-hockey-pool.
- Review note: Historical project/claims lack explicit verified gates. Contribution/team wording retained; no sole authorship or current API availability is implied.

### `lzw-file-compressor` → LZW File Compressor

- Group: project; 3 bullets.
- Dates/context: Dec. 2019; Systems programming project.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/projects/items/lzw-file-compressor.tex`.
- Source: `knowledge/verification-workbook.md`.
- Preserved existing public URL: https://github.com/melliott18/file-compressor.
- Review note: Historical project/claims lack explicit verified gates. No quantified performance or cross-platform correctness claim is added.

### `perfectly-snug-mrp` → Material Requirements Planning System

- Group: work; 4 bullets.
- Dates/context: July 2023 – Sept. 2023; Perfectly Snug · Software Engineer Intern.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/experience/master-expanded.tex`.
- Source: `content/sections/experience/category-devops.tex`.
- Source: `knowledge/profile.graph.json`.
- Review note: Verified graph wording supersedes inventory historical wording: SQL is used because MySQL/SQLite role attribution is unresolved, and roughly50% manual planning time is preserved. Historical thousands-of-orders claim is not promoted.

### `perfectly-snug-product-testing-mobile` → Product-Testing Mobile Integration

- Group: work; 1 bullets.
- Dates/context: July 2023 – Sept. 2023; Perfectly Snug · Software Engineer Intern.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `resumes/companies/blue-origin/sections/experience.tex`.
- Source: `knowledge/projects/inventory.json`.
- Review note: Single historical implementation claim in source, without an explicitly verified claim gate. Kept to one substantive bullet instead of fabricating a mobile framework, transport, device scope, or measured outcome.

### `parkoursc-observability-alerting` → Production Monitoring and Alert Automation

- Group: work; 4 bullets.
- Dates/context: July 2022 – Sept. 2022; ParkourSC · DevOps Engineer Intern.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/experience/master-expanded.tex`.
- Source: `content/sections/experience/category-devops.tex`.
- Source: `knowledge/projects/by-project.md`.
- Source: `knowledge/profile.graph.json`.
- Review note: Scope is work within a100+cluster environment, not exclusive ownership. Approximate false-positive reduction retained; no on-call rotation, incident command, or SLO ownership claim.

### `ulab-cloud-migration` → AWS Migration and Deployment Infrastructure

- Group: work; 5 bullets.
- Dates/context: June 2021 – Sept. 2021; uLab Systems · Site Reliability Engineer Intern.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/experience/master-expanded.tex`.
- Source: `content/sections/experience/category-devops.tex`.
- Source: `knowledge/profile.graph.json`.
- Review note: Confirmed public SRE Intern title used. GitHub source hosting is not changed into GitHub Actions; no CodePipeline or ECS launch type is inferred.

### `nevtec-ticket-monitoring` → Service Ticket Monitoring and Dashboards

- Group: work; 4 bullets.
- Dates/context: June–Sept. 2019; June–Sept. 2020; Nevtec · Data Analyst Intern.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/experience/jobs/nevtec-data-analyst-intern.tex`.
- Source: `knowledge/profile.graph.json`.
- Review note: Two seasonal internships are listed separately in the date string rather than implying continuous Jun2019–Sept2020 employment. Dashboards tracked SLO policies; no ownership of those policies is claimed.

### `nevtec-workstation-provisioning` → Workstation Provisioning Automation

- Group: work; 3 bullets.
- Dates/context: June 2018 – Sept. 2018; Nevtec · Computer Technician Intern.
- Inventory source: `knowledge/projects/inventory.json`; matching heading in `knowledge/projects/by-project.md`.
- Source: `content/sections/experience/jobs/nevtec-computer-technician-intern.tex`.
- Source: `knowledge/profile.graph.json`.
- Review note: Owner-confirmed graph adds Windows Server/PowerShell/XML and batch-level timing beyond the older inventory summary. Timing applies to an entire batch, not a per-machine benchmark.

## Scope caveats

The product-testing mobile integration has only one substantive implementation claim. That entry intentionally has one bullet; adding three would repeat the same claim or invent technical detail.

The older DDFS, NRWLock, MRPC, filesystem, shell, LZW, hockey, router, UDP replication, and mobile-testing records are retained for the requested exhaustive local review. Their recorded details are not upgraded into production readiness, quantified performance, complete-system correctness, or exclusive ownership claims.

## Reconciliation of original project details

- Every original named project remains, with the same dates or the already established corrected dates. Existing six working repository destinations remain unchanged.
- Workload trace processing expands the original ingestion/analytics/CLI story into verified BigQuery → Parquet → DuckDB → schema-validation stages; older “schema mirroring” wording is replaced by the supported validation workflow.
- CarbonStream’s original lifecycle-analysis/optimization/energy-efficiency language is replaced by device/carbon modeling, configuration search, and evaluation. The verification workbook warns against conflating carbon and financial costs or treating scenario evaluation as demonstrated algorithmic optimization.
- NRWLock retains reader/writer coordination, N-way admissions between waiting writers, priority policies, and intended web-server use. Fairness/starvation language is design intent, not a proven outcome.
- DDFS retains 160-bit keys, 4 KiB blocks, superblock/inode metadata, and FreeBSD/C implementation. Its scope is a team course prototype with userspace block operations and disk formatting. Original memory-mounted-disk wording is withheld because the workbook flags disk-image/memory-disk behavior for further review.
- The filesystem retains hierarchy, GNU Core Utilities-style commands, and inode mappings.
- The distributed key-value store retains causal consistency, replication, sharding, proxy/HTTP handlers, vector clocks, and replica updates, with owner-confirmed full final-system implementation.
- Unix Shell retains parsing, process management, redirection, built-ins, return-value checks, and malformed-input handling. The source review narrows broad pipeline/robustness language to single-pipe forms and acknowledges remaining edge cases.
- MRPC retains arithmetic/file services, concurrency, network byte order, recursive lookup, and persistent key-value state. Broad scalability/fault-tolerance adjectives are replaced with concrete worker/queue/protocol/logging mechanisms.
- LZW retains text/binary compression/decompression, buffered I/O, variable-width codes, tries/word tables, and endian-aware I/O. It avoids an unmeasured performance gain or broad cross-platform guarantee.
- Hockey Pool retains live NHL feed mapping, data structures/schema contributions, architecture discussion, and modular development/testing, without upgrading shared contributions to sole authorship.
- SimOps, CogniStore, and grading retain the already established recent content and add documented implementation detail.
