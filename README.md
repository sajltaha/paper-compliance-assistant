# Scientific Paper Compliance Assistant

Development of an Intelligent Web System for Analyzing Scientific Articles for Compliance with Scientific Conference Requirements and Generating Recommendations

Astana IT University | Software Engineering | Checkpoint: 24 October 2026, 18:00 Asia/Almaty.

## Problem and users
Authors need to check a manuscript against conference requirements and understand what to revise. The planned system accepts PDF/DOCX plus user-confirmed criteria and returns criterion-level findings, evidence and recommendations. Primary intended users are students and early-career researchers preparing conference papers. Relevance evidence is documented in docs/DATA_ANALYSIS.md using public policies, published screening statistics and recent research.

## Team and supervisor
| Member | Group | GitHub | Planned role |
|---|---|---|---|
| Сайлаубеков Талғат Ерханұлы | SE-2429 | [sajltaha](https://github.com/sajltaha) | Frontend, Backend, storage, integration, DevOps, functional QA |
| Нұрышев Қайсар Серікұлы | SE-2413 | [stqnlee](https://github.com/stqnlee) | UI/UX, document processing, AI/LLM, AI quality checks |

Supervisor: Солтан Гульжан Жексенбаевна.

## Scope and status
Prepared: proposal, critical literature review (16 sources, 12 research entries), four-system comparison, six technology comparisons, 20 requirements with acceptance criteria, three source-editable diagrams, API/schema draft, interactive UX mockup, evaluation plan and task/evidence templates.
Implemented foundation: PDF/DOCX intake validation, SHA-256 and unit tests in merged PR #2; CI passed. The PR is partial PCA-18 work, not PCA-19 criterion evaluation. Not implemented: text extraction, Go HTTP API, Vue application, database, OpenAI integration and Docker deployment. General supervisor feedback and the board screenshot PDF are available. Public PCA reading is configured. Audit correction: representative acceptance is retained; separate other-participant review, substantive supervisor evidence and external discussion/substitution evidence remain open. See docs/EVIDENCE_REGISTER.md. PRs #1-#4 are merged; this correction branch awaits genuine other-participant review. 

In scope: author-supplied conference criteria, supported formal and semantic checks, uncertainty, evidence and saved versioned runs. Out of scope: replacing scientific peer review, autonomous acceptance decisions, plagiarism certification and unsupported formatting guarantees.

## Technologies
Specified: Vue 3, TypeScript, Tailwind CSS, Pinia, Go, REST/JSON, OpenAI API, Git/GitHub, Docker Compose. Proposed for review: PostgreSQL and a Docling parser adapter. No model identifier or database implementation is fixed by this package.

## Structure
- docs/: versionable report sections, source matrix, requirements, evaluation, schema and evidence logs.
- diagrams/: editable SVG sources and PNG exports.
- prototype/: standalone interactive synthetic-data demonstration.
- backend/, frontend/, ai/, tests/: implementation-stage areas.
- config/: placeholder configuration; no secrets.

## Open the prototype
Open prototype/index.html in a current browser; no installation, API key or network is required. Choose Load demo, confirm criteria, run the mock and inspect evidence. This is a synthetic UX demonstration; selected file contents are not parsed or sent externally. For the implemented intake package only, run `cd backend && go test ./...` with Go 1.23 or compatible newer Go. This does not start an HTTP server or an AI service.

## Documentation and tracking
Start with docs/01_proposal.md and docs/SUBMISSION_CHECKLIST.md. Report sections are in docs/01_*.md through docs/11_*.md; references are in docs/references.md. The report DOCX/PDF is provided in the preparation package. The main branch contains the checkpoint documentation, interactive prototype and intake-validation foundation. Detailed relevance evidence and source links are in docs/DATA_ANALYSIS.md.
YouTrack project: https://paper-compliance-assistant.youtrack.cloud/issues/PCA . Board: https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1 . There are 22 live issues after the audit correction. See docs/YOUTRACK_LIVE_TASKS.md for the verified mapping and current progress. The import CSV is historical planning data.
Historical tag: prob-period-1 at 86141520e74e46f433be94ae29639844ec4e3760. Assignment tag pre-defense-1 is reserved for the final reviewed revision; see docs/VERSIONING.md for the separate form-name conflict.

## Evaluation
Compare rules-only B0, whole-document LLM B1 and the hybrid evidence-validated pipeline B2 on a frozen rights-cleared corpus. Measure violation macro-F1, coverage/abstention, supported evidence, stability, latency, cost and usability. No benchmark has been run.

## Access and privacy
The repository is public. GitHub content is publicly accessible; PCA guest reading is configured without write permissions; anonymous API reading is verified with a cookie-free guest request; see docs/ACCESS_VERIFICATION.md. Do not commit API keys, private manuscripts, personal interview details or fabricated research evidence. Follow CONTRIBUTING.md for task branches and PRs.



## Run available checks

From the repository root run `node tests/prototype_smoke.cjs` with a current Node runtime. This tests handlers in a simulated DOM and is not an AI or full visual browser test. For Go use `go test ./...` from backend with Go 1.23 or compatible newer Go. No HTTP server, database, LLM service or Compose application is available yet.

## Review and submission

Use [audit resolution](docs/AUDIT_RESOLUTION.md), [evidence register](docs/EVIDENCE_REGISTER.md), [task traceability](docs/TRACEABILITY.md) and [review guide](docs/REVIEW_HANDOFF_RU.md). Download this revision and open [prototype HTML](prototype/index.html); editable [diagram sources](diagrams/) and all report sections are included. Generated PDFs substitute their exact source commit into full artifact URLs. No private correspondence belongs in this public repository.

The actual visible history is concentrated on 22–23 October 2026; no multi-week development history is claimed. Future changes must be meaningful, task-linked and reviewed before merge.


## Follow-up technical audit

The follow-up based on PR #5 fixes stale manuscript selection, empty-file handling and run/export filename consistency in the synthetic prototype, demonstrates all four result states, and adds prototype CI. It also corrects CONTRIBUTING version instructions and clarifies the findings payload versus API/export envelopes. See docs/FOLLOWUP_AUDIT_2026_10_23.md and docs/PROTOTYPE_VERIFICATION.md. These assistant-assisted checks do not close personal teammate review, supervisor feedback or external user evidence.

## Repeat audit and user discussions

See [repeat audit](docs/REPEAT_AUDIT_2026_10_23.md) for the full 22-task assessment, PR #5 technical findings and integration limits. [PCA-22 action guide](docs/PCA22_ACTION_GUIDE_RU.md) provides a practical protocol for real discussions; it contains no fabricated responses. The new document corrections require review and do not alter the already checked PR #6.
