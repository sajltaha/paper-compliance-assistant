# 10 Project management and risks

The public repository is https://github.com/sajltaha/paper-compliance-assistant. Task list: https://paper-compliance-assistant.youtrack.cloud/issues/PCA . Board: https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1 . The audit-corrected snapshot has 22 issues: 10 Done, 5 Review, 2 Develop and 5 Backlog. PCA-1, PCA-3, PCA-6, PCA-13 and PCA-14 are in Review because separate evidence conditions remain unverified. Representative acceptance is retained. PCA-22 tracks the external discussion/client-agreement condition separately from completed data analysis PCA-2.

PRs #1-#4 are merged into main at 86141520e74e46f433be94ae29639844ec4e3760. prob-period-1 identifies that historical baseline and is retained unchanged. The source assignment requests pre-defense-1, while the inspected form requests prob-period-1. The audit-fix revision must pass actual other-participant review before integration and final tagging; do not pretend the historical merges had that review. docs/VERSIONING.md documents the exact-name conflict and the finalization sequence.

A cookie-free, authorization-free HTTP check on 23 October 2026 identified login=guest and returned HTTP 200 for the PCA project, board and PCA-2 description. This establishes anonymous read access at the API level; it does not test every browser presentation or claim anonymous edit rights. See docs/ACCESS_VERIFICATION.md.

PR #2 provides PDF/DOCX intake validation, a 20 MiB default limit, filename checks, metadata and SHA-256. Its format and unit checks passed. It is partial PCA-18 work; extraction, provenance, OCR policy and criterion evaluation remain unfinished. The original PCA-19 branch label is historical and does not change the actual task mapping.

| Stage | Deliverable | Target and dependency |
| --- | --- | --- |
| Checkpoint | Research/design package, data analysis, report, board evidence and versioned submission. | 24 October 2026, 18:00 Asia/Almaty; final alignment and form checks. |
| PCA-18 | Document extraction and source anchors. | 31 October 2026; provisional internal target. |
| PCA-17 | Upload and persistence API. | 7 November 2026; provisional internal target. |
| PCA-19 | Criterion normalization and evaluation. | 14 November 2026; extraction and API integration. |
| PCA-21 | Vue interface and Docker startup. | 21 November 2026; integrated API and evaluator. |
| PCA-20 | Frozen-corpus evaluation and error analysis. | 28 November 2026; working implementation and agreed corpus. |

Dates after the checkpoint are provisional internal planning targets, not university deadlines. Confirm them against the next university milestone and revise dependencies when implementation is decomposed into smaller tasks.

| Risk | Impact | Mitigation and owner |
| --- | --- | --- |
| Incorrect PDF reading order | Missing sections become false failures. | Compare parser outputs, retain provenance, test multi-column files. Kaisar. |
| LLM hallucinations or injection | Unsupported recommendations or manipulated assessment. | Validate source anchors, abstain, isolate document content, use adversarial tests. Kaisar and Talgat. |
| Unverifiable formatting | Plain text cannot prove fonts, margins or column geometry. | Declare unsupported checks; add layout extraction only with tests. Kaisar. |
| API cost or service failure | Unbounded calls or stalled analysis. | Explicit limits, retries, failure states, budget records and configurable model. Talgat. |
| Small biased evaluation set | Apparent quality does not generalize. | Document split, independent labels, task-level error analysis and limited claims. Kaisar. |
| Deadline and external dependencies | Incomplete evidence, supervisor feedback or access can block submission. | Prioritize live evidence and access today; track unresolved items explicitly. Both. |
| Contribution traceability | Generated package mistaken for individual completed work. | Task-linked commits, descriptive branches and linked PRs. Both. |

Changes use task-linked branches and PRs. Keep main as the integrated baseline and retain the original contribution history. Do not move a submitted tag. Implementation tasks remain open until their acceptance criteria are met.

The visible Git history is concentrated on 22-23 October 2026; it does not establish weeks of progressive work. Keep the existing history unchanged, record future substantive work as it happens and avoid artificial commits or backdated evidence. Every significant artifact is mapped to a task, historical PR and immutable baseline in docs/TRACEABILITY.md. Assigned roles are not proof of personal authorship or understanding.


## Repeat audit status

Technical COMMENT reviews are recorded for PR #5 (5632920719) and PR #6 (5633430095). Talgat has not reviewed PR #6; the earlier contrary report was withdrawn. These comments do not fulfil the required other-participant review. PR #5/#6/#7 remain unmerged. A previous merge attempt was rejected by automatic approval review; main and the historical tag remain unchanged. PR #7 contains evaluation, mapping and retry corrections. The interview synthesis and anonymized observation log are included in this revision with the interviewer-confirmed date and publication consent. Substantive supervisor evidence, personal team review, authorized integration, final tag/form agreement and submission receipt remain open.

See docs/REPEAT_AUDIT_2026_10_23.md and docs/PCA22_ACTION_GUIDE_RU.md.
