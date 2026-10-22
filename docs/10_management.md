# 10 Project management and risks

The project uses one repository throughout development. The current private repository is https://github.com/sajltaha/paper-compliance-assistant. The YouTrack workspace has been created at https://paper-compliance-assistant.youtrack.cloud/. Live project, board and issue setup is still pending. The included CSV is a task-preparation file with local planning keys P01-P21; these keys are not real YouTrack issue IDs. Actual assignments, due dates, review states and issue links must be recorded in the live tracker.

The package was prepared with AI assistance on 22 October 2026. It is not evidence of earlier continuous development or independent work by both students. Each student must read, verify and revise their own work using their own account. Meaningful documentation, prototype and design revisions are valid contributions; do not backdate commits or attribute generated changes to another account.

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

Use branches named with actual issue IDs and descriptive commits. A PR explains changes, linked tasks and verification; the other team member reviews it before merge. Keep main as the reviewed baseline. Do not create the submission tag until the chosen revision and uploaded documents agree. This form specifically asks for prob-period-1; the general guide also lists later pre-defense tags. Existing submitted tags must remain unchanged.
