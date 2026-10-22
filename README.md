# Scientific Paper Compliance Assistant

Development of an Intelligent Web System for Analyzing Scientific Articles for Compliance with Scientific Conference Requirements and Generating Recommendations

Astana IT University | Software Engineering | Checkpoint: 24 October 2026, 18:00 Asia/Almaty.

## Problem and users
Authors need to check a manuscript against conference requirements and understand what to revise. The planned system accepts PDF/DOCX plus user-confirmed criteria and returns criterion-level findings, evidence and recommendations. Primary intended users are students and early-career researchers preparing conference papers. Direct user evidence is still pending.

## Team and supervisor
| Member | Group | GitHub | Planned role |
|---|---|---|---|
| Сайлаубеков Талғат Ерханұлы | SE-2429 | [sajltaha](https://github.com/sajltaha) | Frontend, Backend, DevOps, QA |
| Нұрышев Қайсар Серікұлы | SE-2413 | [stqnlee](https://github.com/stqnlee) | UI/UX, AI/LLM, QA |

Supervisor: Солтан Гульжан Жексенбаевна.

## Scope and status
Prepared: proposal, critical literature review (17 sources, 13 research entries), four-system comparison, six technology comparisons, 20 requirements with acceptance criteria, three source-editable diagrams, API/schema draft, interactive UX mockup, evaluation plan and task/evidence templates.
Not implemented: PDF/DOCX parsing, Go API, Vue application, database, OpenAI integration and Docker deployment. Not yet obtained: actual user discussions, supervisor review, peer reviews, live YouTrack links and screenshot evidence. The package is AI-assisted preparation; individual ownership must be established through real revisions and review.

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
Open prototype/index.html in a current browser; no installation, API key or network is required. Choose Load demo, confirm criteria, run the mock and inspect evidence. This is a synthetic UX demonstration; selected file contents are not parsed or sent externally. There are no setup/run/test commands for a real backend yet; they will be added with implemented code.

## Documentation and tracking
Start with docs/01_proposal.md and docs/SUBMISSION_CHECKLIST.md. Report sections are in docs/01_*.md through docs/11_*.md; references are in docs/references.md. The report DOCX/PDF is provided in the preparation package. These source documents and the UX prototype are uploaded on checkpoint-preparation for team review; main remains the reviewed baseline.
YouTrack workspace: https://paper-compliance-assistant.youtrack.cloud/ (created). Live project, board and issues are pending; docs/youtrack_tasks.csv contains proposed tasks, not actual issue IDs.
Submission tag: pending final reviewed revision; this form requires prob-period-1.

## Evaluation
Compare rules-only B0, whole-document LLM B1 and the hybrid evidence-validated pipeline B2 on a frozen rights-cleared corpus. Measure violation macro-F1, coverage/abstention, supported evidence, stability, latency, cost and usability. No benchmark has been run.

## Access and privacy
The repository is private. Supervisor/committee access must be verified before submission. Do not commit API keys, private manuscripts, personal interview details or fabricated research evidence. Follow CONTRIBUTING.md for actual-task branches and peer-reviewed PRs.
