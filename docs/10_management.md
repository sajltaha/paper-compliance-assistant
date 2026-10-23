# 10 Project management and risks

The public repository is https://github.com/sajltaha/paper-compliance-assistant. The task list is https://paper-compliance-assistant.youtrack.cloud/issues/PCA and the board is https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1. The 21 assigned issues cover checkpoint preparation and later implementation. The verified snapshot contains 11 Done, 3 Review, 3 Develop and 4 Backlog tasks. PCA-13 is assigned to the checkpoint coordinator.

PRs #1, #2 and #3 are merged into main. This report and the corrected source sections are prepared in PCA-16-submission-alignment. The fixed prob-period-1 tag must identify the agreed integrated revision before submission. The public-reader role in YouTrack is limited to the PCA project and includes only basic project reading, issue reading and issue-comment reading. Anonymous opening of the supplied links still needs a separate session check.

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
