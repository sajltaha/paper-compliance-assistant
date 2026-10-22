# 10 Project management and risks

The private repository is https://github.com/sajltaha/paper-compliance-assistant. The live YouTrack project is https://paper-compliance-assistant.youtrack.cloud/issues/PCA and the Kanban board is https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1. The board contains 21 real issues, PCA-1 to PCA-21, covering checkpoint preparation and later implementation. Eight tasks are assigned to Kaisar Nuryshev and the Talgat tasks to Talgat Sailaubekov. PCA-13 and PCA-14 remain shared and have no single assignee. docs/YOUTRACK_LIVE_TASKS.md maps local planning keys to real issue IDs; the original import CSV is a planning artefact, not the live status source.

The package and implementation were prepared with AI assistance. PR #2 was created through stqnlee: https://github.com/sajltaha/paper-compliance-assistant/pull/2. It adds initial Go document-intake checks for PDF/DOCX, a default 20 MiB size limit, filename checks, metadata and SHA-256. Format and unit tests passed in GitHub Actions run 39837668052 for commit 933d7188b4f11b3dfe75d955b2d3de395b8bfff5. Talgat relayed Kaisar's approval in the project conversation. An AI-assisted technical review and merge were performed through sajltaha, producing commit 2ed14d639a7576069c3cb35e64a5ab0f4c72bbdf in checkpoint-preparation. This records account activity and relayed approval, not independent authorship or an independent human code review.

Traceability correction: PR #2 was originally labelled PCA-19, but the live task PCA-19 covers criterion normalization and evaluation. Document processing belongs to PCA-18. PR metadata now points to PCA-18; historical branch and commit names remain unchanged. Intake validation is only prerequisite work: text extraction, provenance, scanned-file handling, upload/archive hardening, the HTTP API, database, Vue application, LLM evaluator and Docker startup are not delivered by this PR. Neither PCA-18 nor PCA-19 is complete.

| Milestone | Deliverable | Dependency |
| --- | --- | --- |
| 22 October | Research/design draft, local prototype, repository initialization | Team justification and checkpoint requirements. |
| 23 October | User evidence, owner reviews, supervisor comments and resulting changes | Real discussions, supervisor availability and live tracker. |
| 24 October before 18:00 | Reviewed matching report, board PDF, accessible links and prob-period-1 version | Team reviews, source verification, permissions and final checks. |
| Next implementation stage | Real upload, parsing, judgment and saved results | Approved requirements, parser pilot, database and model configuration. |
| Evaluation stage | Frozen corpus, baseline comparison and documented results | Implementation, labelled corpus and budget-controlled API runs. |

| Risk | Impact | Mitigation and owner |
| --- | --- | --- |
| Incorrect PDF reading order | Missing sections become false failures. | Compare parser outputs, retain provenance, test multi-column files. Kaisar. |
| LLM hallucinations or injection | Unsupported recommendations or manipulated assessment. | Validate source anchors, abstain, isolate document content, use adversarial tests. Kaisar and Talgat. |
| Unverifiable formatting | Plain text cannot prove fonts, margins or column geometry. | Declare unsupported checks; add layout extraction only with tests. Kaisar. |
| API cost or service failure | Unbounded calls or stalled analysis. | Explicit limits, retries, failure states, budget records and configurable model. Talgat. |
| Small biased evaluation set | Apparent quality does not generalize. | Document split, independent labels, task-level error analysis and limited claims. Kaisar. |
| Deadline and external dependencies | Missing interviews, supervisor feedback or access blocks submission. | Prioritize live evidence and access today; track unresolved items explicitly. Both. |
| Contribution traceability | Generated package mistaken for individual completed work. | Real owner revisions, task-linked branches and peer PR reviews. Both. |

Changes are prepared in task-linked branches with explicit verification and AI-assistance disclosure. For a PR through stqnlee, technical review and merge use sajltaha; for a PR through sajltaha, Kaisar is asked to inspect the result and give genuine feedback before acceptance. Automated reviews are labelled as automated. PR #1 remains a draft; main and the submission tag prob-period-1 are not finalized. Do not create the tag until the chosen revision and submitted documents agree, and do not move a submitted tag.
