# 10 Project management and risks

Repository: https://github.com/sajltaha/paper-compliance-assistant . Tasks: https://paper-compliance-assistant.youtrack.cloud/issues/PCA . Board: https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1 . The live task snapshot checked on 24 October 2026, 05:01 Asia/Almaty contains 22 issues: 16 Done, 0 Review, 2 Develop and 4 Backlog. Assigned students, priorities, target dates and deliverables are recorded in docs/YOUTRACK_LIVE_TASKS.md.

Team members are responsible for project decisions, implementation, source verification and acceptance of changes. Contributions and reviews are recorded through linked tasks, commits and PRs.

PRs #1-#7 are merged into main. PRs #5-#7 integrated the checkpoint corrections, prototype verification, evaluation design and dated participant evidence. Task-to-artifact and PR links are recorded in docs/TRACEABILITY.md. The recorded development history starts on 22 October 2026.

Public access was checked on 23 October 2026. Requests without Cookie or Authorization identified the YouTrack user as guest and returned HTTP 200 for project PCA, board 204-1 and the full PCA-2 description. Selected browser views of the board and PCA-18/PCA-16 were also readable with guest actions disabled. This confirms those read-only views, not unrestricted page coverage or editing rights. Private manuscripts, interview originals and supervisor correspondence are excluded from the public repository.

PR #2 provides PDF/DOCX intake validation, a 20 MiB default limit, filename checks, metadata and SHA-256. Its format and unit checks passed. It is partial PCA-18 work; extraction, provenance, OCR policy and criterion evaluation remain unfinished. The original PCA-19 branch label is historical and does not change the actual task mapping.

| Stage | Deliverable | Target and dependency |
| --- | --- | --- |
| Checkpoint | Research/design package, data analysis, report, board evidence and versioned submission. | 24 October 2026, 18:00 Asia/Almaty; final alignment and form checks. |
| PCA-18 | Document extraction and source anchors. | 31 October 2026; provisional internal target. |
| PCA-17 | Upload and persistence API. | 7 November 2026; provisional internal target. |
| PCA-19 | Criterion normalization and evaluation. | 14 November 2026; extraction and API integration. |
| PCA-21 | Vue interface and Docker startup. | 21 November 2026; integrated API and evaluator. |
| PCA-20 | Frozen-corpus evaluation and error analysis. | 28 November 2026; working implementation and agreed corpus. |

Dates after the checkpoint are provisional internal planning targets, not university deadlines.

| Risk | Impact | Mitigation and owner |
| --- | --- | --- |
| Incorrect PDF reading order | Missing sections become false failures. | Compare parser outputs, retain provenance, test multi-column files. Kaisar. |
| LLM hallucinations or injection | Unsupported recommendations or manipulated assessment. | Validate source anchors, abstain, isolate document content, use adversarial tests. Kaisar and Talgat. |
| Unverifiable formatting | Plain text cannot prove fonts, margins or column geometry. | Declare unsupported checks; add layout extraction only with tests. Kaisar. |
| API cost or service failure | Unbounded calls or stalled analysis. | Explicit limits, retries, failure states, budget records and configurable model. Talgat. |
| Small biased evaluation set | Apparent quality does not generalize. | Document split, independent labels, task-level error analysis and limited claims. Kaisar. |
| Deadline and external dependencies | Incomplete evidence, supervisor feedback or access can block submission. | Prioritize live evidence and access today; track unresolved items explicitly. Both. |
| Contribution traceability | Responsibilities and completed work become difficult to trace. | Task-linked commits, descriptive branches and linked PRs. Both. |

Project changes and reviews are recorded through task-linked commits and PRs. The submission uses prob-period-1 and an exact source commit recorded in this report. Implementation status is determined by the corresponding acceptance criteria.

## Review and evidence records

The interview findings and consent record cover three participants and 15 observations from 20 October 2026; see docs/INTERVIEW_FINDINGS.md and docs/user_discussions_log.csv. PCA-22 is Done following acceptance in Talgat's PR #7 review. It remains separate from the completed secondary-data analysis in PCA-2.

Talgat (sajltaha) posted Approve with nits comments on 24 October 2026, Asia/Almaty, for PR #6 at f9282959be1045934c890afa465102fb2717f2cf and PR #7 at 8610bd5635ee25976e429915af1358d00dcc26b1:

PR #6 review: https://github.com/sajltaha/paper-compliance-assistant/pull/6#issuecomment-6373921286 . PR #7 review: https://github.com/sajltaha/paper-compliance-assistant/pull/7#issuecomment-6373878035 .

PCA-1, PCA-3, PCA-6 and PCA-14 are Done. Kaisar relayed joint acceptance on behalf of himself and Talgat on 24 October 2026 for the proposal, literature, requirements and consolidated checkpoint package. The linked PR #6/#7 review comments and resulting corrections remain recorded. Historical PRs #1/#3/#4 have no registered other-participant review before merge; current package acceptance does not change those historical dates. The supervisor response dated 24 October 2026, 03:00 Asia/Almaty is recorded in docs/11_supervisor_feedback.md and docs/supervisor_feedback_log.csv; PCA-13 is Done.

The committed prototype suite checks JSON export, including preservation of the completed run filename and findings after selecting another manuscript. The handler checks passed locally and in GitHub Actions. At checkpoint source 30a182266c6682a3f3c521b71b8c0ff60256623b, Prototype checks passed at https://github.com/sajltaha/paper-compliance-assistant/actions/runs/40037489875 and Backend checks passed at https://github.com/sajltaha/paper-compliance-assistant/actions/runs/40037489851 . PR #7 wording/link issues are resolved. These checks cover the existing mock and intake library; the complete application and AI benchmark remain future work.

## Submission version

The sole submission reference is prob-period-1. It identifies the final source revision printed in this report and used for its artifact links. After form submission, preserve the submitted tag target and continue development through subsequent commits.

| Reference | Source commit | Purpose |
| --- | --- | --- |
| prob-period-1 | Exact commit recorded in the report metadata | First probationary-period submission |

Submission source: https://github.com/sajltaha/paper-compliance-assistant/tree/prob-period-1 . The Git tag and exact source commit identify this submission; a separate GitHub Release is not required for access to the materials.

PCA-16 remains Develop for final uploads, form submission and a successful receipt. Proposal, literature, requirements and package acceptance are recorded in completed PCA-1, PCA-3, PCA-6 and PCA-14. Supervisor feedback is recorded in completed PCA-13. No successful form submission is claimed. Final documentation updates directly on main were authorized by the project representative; this does not change historical PR review dates.

The submission includes this consolidated report and a dated PDF of the YouTrack board and representative tasks. The board PDF contains six pages and records 16 Done, 0 Review, 2 Develop and 4 Backlog. Report links use the exact source commit supplied to tools/build_report.py through --source-sha. A board PDF is a dated snapshot of task state.
