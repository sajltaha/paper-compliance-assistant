# 5 Technology comparison and decisions

The following comparisons use the same requirement-driven criteria for each alternative. They are qualitative design judgements, not measured benchmarks. Vue, Go, REST and local Docker Compose follow the team justification. Storage and parser choices remain provisional until a pilot and substantive review.

## Backend alternatives

| Option | Local setup and team maintenance | Document processing and validation | Decision |
| --- | --- | --- | --- |
| Go | Fits the agreed stack; a compiled server is straightforward to package. | Explicit API and concurrency boundaries; Python parsers require an adapter. | Selected by the team justification; keep application orchestration here. |
| FastAPI | Would add a different application stack to the planned Vue/Go project. | Direct access to Python parsing libraries; still needs schema and provenance checks. | Retain as a possible internal parser adapter, not a second application backend. |
| Node TypeScript | Shares language with the frontend; would replace the agreed Go backend. | External parsing still required; runtime validation remains necessary. | Reasonable alternative, but insufficient benefit to justify changing the agreed stack. |

## Storage alternatives

| Option | Local operation and maintenance | Versions provenance and consistency | Trade-off |
| --- | --- | --- | --- |
| PostgreSQL | Extra service and configuration in Compose. | Relational constraints and transactions fit documents, criterion versions, runs and findings. | Proposed reference design for FR08, FR10 and NFR01; pilot not yet run. |
| SQLite | Simplest single-machine deployment; no database service. | Can represent the same relations; concurrent writes and worker access need explicit tests. | Strong fallback for the single-user MVP; choose if reduced setup outweighs concurrency needs. |
| MongoDB | Another database service and operational model. | Flexible nested results, but cross-version references and consistency still need application design. | No demonstrated need for schema flexibility; not the initial proposal. |

## Document conversion alternatives

| Option | PDF DOCX and source anchors | Local cost and maintainability | Decision and pilot condition |
| --- | --- | --- | --- |
| Docling adapter | Candidate for layout-aware conversion; PDF pages and DOCX paragraph/table anchors must be verified. | Python dependency behind a Go-facing interface; conversion errors still possible. | Proposed pilot; compare reading order, section retention, tables, failure signals and anchors. |
| GROBID plus DOCX parser | Scholarly PDF structure; separate DOCX path adds mapping work. | More adapter integration; no universal DOCX/page guarantee. | Compare on the same permitted fixtures; select if scholarly structure improves measurable extraction quality. |
| Plain PDF text plus DOCX parser | Useful simple baseline; cannot certify fonts, margins or complex reading order. | Lowest initial integration complexity but weaker layout evidence. | Keep as baseline; do not use unsupported formatting checks to claim compliance. |

## Interaction and evaluation choices

| Decision | Alternatives and common criteria | Current rationale |
| --- | --- | --- |
| Interaction | REST JSON / gRPC / in-process; inspectability, language boundary, local maintenance. | REST JSON matches the planned UI/API and parser boundary. gRPC adds schema/tooling overhead without a measured need. In-process calls are useful inside one service but cannot be the browser API. |
| Evaluation | Hybrid / rules only / one whole-document LLM prompt; supported checks, evidence and reproducibility. | Hybrid is proposed: rules for measurable supported checks, LLM for semantic criteria, backend validates evidence. Keep both simpler methods as experimental baselines. |
| Evidence | Section/block selection / whole context / vector retrieval; source anchors, context limits and complexity. | Start with blocks and explicit limits. Whole context is a baseline. Add vector retrieval only if a pilot demonstrates benefit; retrieval does not itself validate support. |

No parser, database or model performance result has been measured on the project corpus. Record versions, rights-cleared fixtures, reading-order/anchor errors and setup effort before selecting the parser. Model identifiers are configured and recorded at implementation time; no particular model, price or context limit is promised. Local startup requires an internet connection and a server-side API key for external AI processing.
