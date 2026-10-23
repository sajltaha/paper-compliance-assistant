# 10 Project management and risks

Repository: https://github.com/sajltaha/paper-compliance-assistant . Tasks: https://paper-compliance-assistant.youtrack.cloud/issues/PCA . Board: https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1 . The live task snapshot of 24 October 2026, 02:58 Asia/Almaty contains 22 issues: 11 Done, 5 Review, 2 Develop and 4 Backlog. Issue fields, target dates, descriptions and comments are reflected in docs/YOUTRACK_LIVE_TASKS.md.

Team members are responsible for project decisions, implementation, source verification and acceptance of changes. AI tools support consultation, suggestions, editorial work and technical checks. Contributions and reviews are recorded through linked tasks, commits and PRs.

PRs #1–#4 were integrated at 86141520e74e46f433be94ae29639844ec4e3760, the original checkpoint revision now retained as prob-period-1-before-update. PRs #5–#7 were integrated on 24 October 2026 at deca7d761aa449f7f8223c8514707706fb44d034. Task-to-artifact and PR links are recorded in docs/TRACEABILITY.md. The recorded development history starts on 22 October 2026.

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

Project changes and reviews are recorded through task-linked commits and PRs. Submission references and any authorized retargeting are recorded with their exact commit SHAs. Implementation status is determined by the corresponding acceptance criteria.

## Review and evidence records

The interview findings and consent record cover three participants and 15 observations from 20 October 2026; see docs/INTERVIEW_FINDINGS.md and docs/user_discussions_log.csv. PCA-22 is Done following acceptance in Talgat's PR #7 review. It remains separate from the completed secondary-data analysis in PCA-2.

Talgat (sajltaha) posted Approve with nits comments on 24 October 2026, Asia/Almaty, for PR #6 at f9282959be1045934c890afa465102fb2717f2cf and PR #7 at 8610bd5635ee25976e429915af1358d00dcc26b1:

- PR #6: https://github.com/sajltaha/paper-compliance-assistant/pull/6#issuecomment-6373921286
- PR #7: https://github.com/sajltaha/paper-compliance-assistant/pull/7#issuecomment-6373878035

PCA-14 records those comments and completed merges, but remains Review for remaining package-level acceptance. PCA-1, PCA-3 and PCA-6 remain Review; the new comments do not establish personal reading or acceptance of every proposal/literature item. Earlier technical reviews remain available at https://github.com/sajltaha/paper-compliance-assistant/pull/5#pullrequestreview-5632920719 and https://github.com/sajltaha/paper-compliance-assistant/pull/6#pullrequestreview-5633430095 . Historical PRs #1/#3/#4 have no registered other-participant reviews, and PR #2's review is explicitly qualified as AI-assisted; subsequent comments do not change those dates. Supervisor evidence remains in docs/11_supervisor_feedback.md and docs/supervisor_feedback_log.csv.

The committed prototype suite does not yet exercise JSON export. PR #6's export regression recommendation remains a test follow-up; the three PR #7 wording/link issues are reflected in the current project documents. These follow-ups do not turn the synthetic prototype into a working analysis service.

## Submission version

The assignment specifies pre-defense-1, while the inspected form specifies prob-period-1. PCA-16 now records the team's explicit decision to use the form's prob-period-1 name and authorization to correct its target. GitHub references confirm:

| Reference | Commit | Purpose |
| --- | --- | --- |
| prob-period-1 | deca7d761aa449f7f8223c8514707706fb44d034 | Reviewed integrated checkpoint selected by the team |
| prob-period-1-before-update | 86141520e74e46f433be94ae29639844ec4e3760 | Original checkpoint tag target, retained as an archive |
| archive/prob-period-1-before-update | 86141520e74e46f433be94ae29639844ec4e3760 | Archive branch retaining the original commit |

Submission link: https://github.com/sajltaha/paper-compliance-assistant/tree/prob-period-1 . Release: https://github.com/sajltaha/paper-compliance-assistant/releases/tag/prob-period-1 . No pre-defense-1 tag is present in the checked GitHub references. The team's recorded naming decision is not documented here as university approval of the assignment's different tag name.

Later documentation changes on main are distinct from the fixed deca7d761aa449f7f8223c8514707706fb44d034 checkpoint. PDFs uploaded for prob-period-1 must use that tagged source; a build from later main is a different source revision. PCA-16 remains Develop for substantive dated supervisor feedback, remaining package acceptance, refreshed matching PDFs, final uploads and a successful receipt. The task records inspection of form pages 1–2 and the mandatory board-PDF upload on page 3; no submission or receipt is claimed.

The submission includes the consolidated report and a PDF of the board and representative tasks. Report links use the exact source commit supplied to tools/build_report.py through --source-sha; source revisions and output checksums identify the corresponding package. The recorded board PDF is a dated snapshot, not a live view of task state.
