# Scientific Paper Compliance Assistant

Development of an Intelligent Web System for Analyzing Scientific Articles for Compliance with Scientific Conference Requirements and Generating Recommendations

Astana IT University | Software Engineering | First checkpoint: 24 October 2026.

## Problem and scope

Authors need to compare manuscripts with conference requirements and understand what to revise. The planned local web application accepts PDF/DOCX and user-confirmed criteria, then returns criterion-level findings with evidence, recommendations and explicit uncertainty. Primary users are students and early-career researchers preparing conference papers.

The MVP covers English text-based manuscripts, supported formal and semantic checks, saved versioned results and rechecking. It excludes autonomous acceptance decisions, replacement of scientific peer review, plagiarism certification and unsupported formatting guarantees.

## Team

| Member | Group | GitHub | Responsibilities |
| --- | --- | --- | --- |
| Saylaubekov Talgat Yerkhanuly | SE-2429 | [sajltaha](https://github.com/sajltaha) | Vue frontend, Go backend, storage, integration, DevOps and functional QA |
| Nuryshev Kaisar Serikuly | SE-2413 | [stqnlee](https://github.com/stqnlee) | UI/UX, document processing, AI/LLM and quality evaluation |

Supervisor: Soltan Gulzhan Zheksenbayevna.

## Current implementation

Available: standalone synthetic UX prototype; Go PDF/DOCX intake validation, filename/size checks, metadata, SHA-256, unit tests and CI. The prototype does not read or upload selected file contents and makes no AI request. Intake validation is partial PCA-18 work, not full extraction or criterion evaluation.

Planned: PDF/DOCX extraction and provenance, Go HTTP API, persistence, criteria normalization/evaluation, OpenAI integration, Vue application, Docker Compose startup and controlled evaluation. The full application and measured accuracy are not available yet.

## Technologies

Specified stack: Vue 3, TypeScript, Tailwind CSS, Pinia, Go, REST/JSON, OpenAI API and Docker Compose. PostgreSQL and a Docling adapter are provisional choices. Alternatives and decision criteria are in [Technology comparison](docs/05_technology.md).

## Run available materials

Open [prototype/index.html](prototype/index.html) locally in a current browser. Load the synthetic example, confirm its criteria and inspect findings, evidence and status filters. No installation, API key or network is required.

Prototype handler checks, from the repository root with Node.js and built-in Blob support:

```bash
node tests/prototype_smoke.cjs
```

Intake package tests, with Go 1.23 or a compatible newer version:

```bash
cd backend
go test ./...
```

These commands do not start an HTTP server, database or AI service. Handler tests use a simulated DOM; their scope is recorded in [Prototype verification](docs/PROTOTYPE_VERIFICATION.md).

## Project documentation

| Material | Contents |
| --- | --- |
| [1 Proposal](docs/01_proposal.md) | Problem, users, objectives, scope and roles |
| [2 Relevance](docs/02_relevance.md) | Conference-policy analysis, CHI screening data and user evidence |
| [3 Literature review](docs/03_literature.md) | Critical synthesis; [16-source matrix](docs/literature_matrix.csv) and [references](docs/references.md) |
| [4 Existing systems](docs/04_existing_systems.md) | Four systems compared across eight criteria |
| [5 Technologies](docs/05_technology.md) | Alternatives, decisions and provisional choices |
| [6 Requirements](docs/06_requirements.md) | 12 FR and 8 NFR; [acceptance criteria](docs/requirements.csv) and [test procedures](docs/test_plan.csv) |
| [7 Architecture](docs/07_architecture.md) | Context, use cases, components and data model; [editable diagrams](diagrams/) |
| [8 UX](docs/08_ux.md) | Prototype scenarios and implementation boundaries |
| [9 Evaluation](docs/09_evaluation.md) | B0/B1/B2, corpus split, annotation, metrics and measurement conditions |
| [10 Management](docs/10_management.md) | Milestones, risks, access, review records and submission version |
| [11 Supervisor feedback](docs/11_supervisor_feedback.md) | Recorded feedback, decisions and evidence limits |

Technical specifications: [API contract](docs/API_CONTRACT.md), [findings schema](docs/ai_contract.schema.json) and [requirement/component/data mapping](docs/ARCHITECTURE_TRACEABILITY.md).

Research evidence: [interview findings](docs/INTERVIEW_FINDINGS.md), [anonymized discussion log](docs/user_discussions_log.csv), [conference profiles](docs/conference_policy_data.csv), [CHI counts](docs/chi2025_screening_data.csv) and [analysis-to-requirement mapping](docs/data_requirement_mapping.csv). Three discussions dated 20 October 2026 provide 15 observations and are accepted under completed PCA-22; self-reported preparation times are not measured product improvements.

Tracking: [task register](docs/YOUTRACK_LIVE_TASKS.md) and [task/PR traceability](docs/TRACEABILITY.md). The 24 October 2026, 02:58 Asia/Almaty snapshot contains 22 issues: 11 Done, 5 Review, 2 Develop and 4 Backlog. Live [YouTrack tasks](https://paper-compliance-assistant.youtrack.cloud/issues/PCA) and [board](https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1) record subsequent changes. Supervisor responses are recorded in [the feedback log](docs/supervisor_feedback_log.csv); substantive dated evidence remains unverified in the available records.

## Structure and report source

- `docs/`: project specification, research evidence, evaluation and tracking records.
- `diagrams/`: editable SVG sources and PNG exports.
- `prototype/`: standalone synthetic UX demonstration.
- `backend/`, `frontend/`, `ai/`: implementation components and current boundaries.
- `tests/`: executable prototype checks and implementation-stage test notes.
- `config/`: configuration examples with placeholder values.
- `tools/build_report.py`: DOCX report builder using `docs/report_content.json`.

Report generation requires Python and python-docx:

```bash
python3 tools/build_report.py --source-sha <40-character-source-commit> --output-dir <output-directory>
```

The generated DOCX can be exported to PDF. The source commit identifies the matching report links and project snapshot. The team-selected `prob-period-1` points to `deca7d761aa449f7f8223c8514707706fb44d034`. The original `86141520e74e46f433be94ae29639844ec4e3760` target is retained under `prob-period-1-before-update` and `archive/prob-period-1-before-update`. Later main documentation is a different source snapshot. The assignment/form naming difference and outstanding submission records are described in [Management](docs/10_management.md#submission-version).

## Evaluation and privacy

The planned comparison uses rules-only B0, whole-document LLM B1 and hybrid B2 on a rights-cleared frozen corpus: 8 development and at least 20 unique held-out manuscripts. Metrics include violation macro-F1, coverage/abstention, supported evidence, stability, latency, cost and usability. No benchmark result is claimed.

The repository is public; selected YouTrack guest views were verified for reading. API keys belong in server-side environment variables. Private manuscripts, original interview records and supervisor correspondence are excluded from Git. External processing and deletion requirements are specified in the architecture and API contract.
