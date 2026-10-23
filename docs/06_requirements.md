# 6 Requirements specification

Requirements use Must, Should and Could priorities. The current MVP has 12 functional and 8 non-functional requirements. Every requirement has a test identifier and an acceptance criterion. Numerical limits below are proposed engineering targets, not measured achievements, and require review against stakeholder evidence.

| ID and priority | Requirement | Acceptance criterion |
| --- | --- | --- |
| FR01 Must | Upload a scientific paper in PDF or DOCX | A valid supported file at or below 20 MiB (20,971,520 bytes) creates a document ID; unsupported, malformed, encrypted or oversize files return an explicit error. |
| FR02 Must | Extract document text and retain provenance | Text blocks have stable block IDs, reading order, section labels and PDF pages where available; DOCX uses paragraph/table anchors, not fabricated page numbers. |
| FR03 Must | Enter or attach conference requirements | A user can paste criteria or attach PDF/DOCX; original wording and source identifiers are retained. Source metadata records venue, edition, track/paper type, submission stage, rule source/version and capture date; unknown fields are explicitly unknown. |
| FR04 Must | Confirm normalized criteria before analysis | User can edit criterion wording, category, threshold, priority and applicability; analysis uses the confirmed version. Preserve mandatory/recommended/optional modality and user-confirmed applicability. |
| FR05 Must | Run a criterion-based analysis | Every applicable criterion returns pass, fail or insufficient_evidence; excluded criteria return not_applicable with a reason. No criterion silently disappears. |
| FR06 Must | Show grounded findings and recommendations | Each evaluable finding includes criterion ID, explanation, valid source anchors and an actionable recommendation when appropriate; invalid anchors are rejected. Findings identify both the requirement source and manuscript anchor; anonymity warnings do not guarantee anonymity. |
| FR07 Must | Keep formal and semantic checks distinct | Results identify engine=rule or engine=llm and state unsupported layout checks; plain text is never used to certify font size or margins. |
| FR08 Must | Save and retrieve analysis history | Restarting the local system preserves document metadata, criterion versions, results and run configuration; a run can be reopened. |
| FR09 Should | Export a structured result | An analysis can be downloaded as JSON with document hash, criterion version and model/prompt configuration; PDF export is a later enhancement. |
| FR10 Must | Recheck a revised manuscript | A new manuscript creates a new document version and run; the earlier result remains identifiable. |
| FR11 Must | Handle external AI failures | Timeout, refusal, invalid JSON and provider errors produce explicit failed states with a documented retryable flag. Transient failures allow bounded retry; refusals and permanent errors require an appropriate input/configuration change and are not retried automatically. No successful assessment is invented. |
| FR12 Must | Explain processing and deletion controls | Before external analysis, UI explains that extracted content goes to the configured provider; user can delete stored files and results. |
| NFR01 Must | Reproducible evaluation | Each run records document hash, confirmed criteria, parser/model ID and version, prompt/schema version, sampling settings and timestamp. |
| NFR02 Must | Validate structured data | All accepted results satisfy the shared JSON schema; each criterion occurs once; all cited block IDs exist and quoted text matches source text after documented whitespace normalization. |
| NFR03 Must | Protect secrets and local files | API keys only in server environment; examples contain placeholders; uploads use generated paths and size/type validation; external content cannot execute instructions or tools. |
| NFR04 Must | Reproduce local setup | On a documented supported Docker environment, one Docker Compose command starts the implemented services after environment setup; smoke checks are documented. Target for implementation stage. |
| NFR05 Should | Measure user-visible latency and cost | Report p50/p95 latency, provider tokens and estimated cost per run on specified hardware and corpus; proposed target p95 <= 120 s for <= 10 text-PDF pages and <= 10 criteria, to be revised after pilot. |
| NFR06 Must | Assess correctness against human labels | Evaluate >= 20 rights-cleared manuscripts with 8-12 criteria each using a frozen test split; report macro-F1, abstention coverage and supported-evidence rate. These are planned measurements, not achieved results. |
| NFR07 Should | Make key flows accessible | Core controls support keyboard navigation, visible focus and labeled error/status messages on desktop and narrow screens. |
| NFR08 Must | Expose unsupported capabilities honestly | UI and reports distinguish unavailable OCR/layout checks from checked failures, and demonstrate that unknown evidence is not treated as a pass. Failed conversion and unreadable/scanned content pass a quality gate before rule evaluation. |

Four result states avoid conflating absent evidence with compliance: pass, fail, insufficient_evidence and not_applicable. A document with no extractable text must fail the extraction stage rather than receive a compliant result. Criteria that require unsupported visual metadata remain explicitly unverified. Ambiguous requirements must be confirmed by the user before being treated as executable rules.

The versioned result contract requires criterion_id, status, engine, explanation, evidence and recommendation. Evidence contains a block_id and a matching quote; page numbers are nullable and derived from the PDF parser, while DOCX uses stable paragraph/table anchors. The backend checks completeness, uniqueness, schema conformance and anchor validity before presenting a result.

## Analysis to requirements and tasks

| Analysis | Requirements | Implementation tasks | Design consequence |
| --- | --- | --- | --- |
| DA-R1 | FR03 FR04 FR08 NFR01 | PCA-17 PCA-19 | Venue/edition/type/stage and frozen rule source belong to the confirmed version. |
| DA-R2 | FR02 FR05 FR07 | PCA-18 PCA-19 | Use labelled main-text/reference sections; abstain if counting cannot be established. |
| DA-R3 | FR04 FR05 NFR08 | PCA-19 | Required/optional/unknown have different applicability and result states. |
| DA-R4 | FR06 NFR02 | PCA-18 PCA-19 | Both rule source and manuscript anchors are checked. |
| DA-R5 | FR05 FR06 NFR08 | PCA-19 PCA-20 | Located identifier warnings are limited checks, never anonymity certification. |
| DA-R6 | FR02 NFR08 | PCA-18 | Conversion failures cannot become a pass. |
| DA-R7 | FR03 FR04 NFR01 | PCA-17 PCA-19 PCA-21 | Confirm editable source-derived rules and preserve version. |
| DA-R8 | FR06 NFR02 | PCA-19 PCA-20 | Check evidence support separately from quote existence. |

