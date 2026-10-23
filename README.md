# Scientific Paper Compliance Assistant

Development of an Intelligent Web System for Analyzing Scientific Articles for Compliance with Scientific Conference Requirements and Generating Recommendations

Astana IT University | Software Engineering | Checkpoint: 24 October 2026, 18:00 Asia/Almaty.

## Problem and users
Authors need to check a manuscript against conference requirements and understand what to revise. The planned system accepts PDF/DOCX plus user-confirmed criteria and returns criterion-level findings, evidence and recommendations. Primary intended users are students and early-career researchers preparing conference papers. Relevance evidence is documented in docs/DATA_ANALYSIS.md using public policies, published screening statistics and recent research.

## Team and supervisor
| Member | Group | GitHub | Planned role |
|---|---|---|---|
| Сайлаубеков Талғат Ерханұлы | SE-2429 | [sajltaha](https://github.com/sajltaha) | Frontend, Backend, storage, integration, DevOps |
| Нұрышев Қайсар Серікұлы | SE-2413 | [stqnlee](https://github.com/stqnlee) | UI/UX, document processing, AI/LLM, AI quality checks |

Supervisor: Солтан Гульжан Жексенбаевна.

## Scope and status
Prepared: proposal, critical literature review (16 sources, 12 research entries), four-system comparison, six technology comparisons, 20 requirements with acceptance criteria, three source-editable diagrams, API/schema draft, interactive UX mockup, evaluation plan and task/evidence templates.
Implemented foundation: PDF/DOCX intake validation, SHA-256 and unit tests in merged PR #2; CI passed. The PR is partial PCA-18 work, not PCA-19 criterion evaluation. Not implemented: text extraction, Go HTTP API, Vue application, database, OpenAI integration and Docker deployment. General supervisor feedback and the board screenshot PDF are available. Public PCA reading is configured. Remaining: participant confirmations, final PR integration, anonymous link verification, fixed tag and form checks. 

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
YouTrack workspace: https://paper-compliance-assistant.youtrack.cloud/ (created). Live project and 21 issues exist. See docs/YOUTRACK_LIVE_TASKS.md for the verified mapping and current progress. The import CSV is historical planning data.
Submission tag: pending final reviewed revision; this form requires prob-period-1.

## Evaluation
Compare rules-only B0, whole-document LLM B1 and the hybrid evidence-validated pipeline B2 on a frozen rights-cleared corpus. Measure violation macro-F1, coverage/abstention, supported evidence, stability, latency, cost and usability. No benchmark has been run.

## Access and privacy
The repository is public. GitHub content is publicly accessible; PCA guest reading is configured without write permissions; anonymous opening still requires a separate-session check. Do not commit API keys, private manuscripts, personal interview details or fabricated research evidence. Follow CONTRIBUTING.md for task branches and PRs.


## Current preparation links

- [Prototype HTML](https://github.com/sajltaha/paper-compliance-assistant/blob/PCA-16-submission-alignment/prototype/index.html)
- [Editable diagrams](https://github.com/sajltaha/paper-compliance-assistant/tree/PCA-16-submission-alignment/diagrams)
- [Current task register](docs/YOUTRACK_LIVE_TASKS.md)
- [Supervisor feedback](docs/11_supervisor_feedback.md)

The current form requires `prob-period-1`. It is not created until the matching revision is integrated and ready.
