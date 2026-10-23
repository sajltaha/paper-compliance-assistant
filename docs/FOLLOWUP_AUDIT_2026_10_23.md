# Follow-up audit of the first submission

23 October 2026, Asia/Almaty. Tasks: [PCA-16](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-16) and [PCA-8](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-8).

This is AI-assisted technical checking requested by Kaisar, not his personal academic review or independent teammate acceptance. The four supplied files were read: the 24 October requirements DOCX, the 23-page report PDF, team justification DOCX and Remaining Audit. Repository base checked: PR #5, 80e850649725a3cccefde9a612926e4e7ea8ba31. Live GitHub returned PR #5 open with no submitted reviews, main and prob-period-1 at 86141520e74e46f433be94ae29639844ec4e3760, and no pre-defense-1 tag.

## Additional corrections

1. CONTRIBUTING.md still instructed freezing prob-period-1, contradicting VERSIONING.md. It now requires preserving the old tag, creating pre-defense-1 after review/integration, and resolving the form conflict.
2. A reproduced prototype defect retained the old selected filename after rejecting a replacement file. Clearing the chooser had the same stale-state problem. Both now clear selection. Zero-byte files are rejected.
3. Input controls are disabled while the asynchronous mock runs; JSON export uses the completed run's filename. No real file parsing or provider call was added.
4. The prototype lacked a visible not_applicable example/filter. A fifth conditional synthetic criterion now demonstrates this state with a reason. It is explicitly demo data.
5. Prototype handler tests now cover the new cases and exact 20 MiB boundaries. A path-filtered prototype GitHub Actions workflow was added; its server-side outcome is separate from the local test result.
6. API_CONTRACT.md now distinguishes the findings-only schema from the run lifecycle envelope and future FR09 export. This clarifies a design contract; endpoints are still unimplemented.
7. UX documentation and report source JSON reflect the corrected prototype. Verification/evidence/traceability records distinguish assistant checks from human review.
8. The supplied justification still contained grammatical errors despite the earlier audit's statement of completion. They were corrected in the private document, preserving the exact topic, identities, roles, GPA and unsigned fields. Its private contact information is not copied into Git.

## Requirement coverage

| Assignment component | Evidence in the checked candidate | Remaining condition |
| --- | --- | --- |
| Proposal | docs/01_proposal.md and report section 1 | Actual teammate review of scope |
| Relevance | Public policy/CHI analysis and DA-R mapping | 3-5 real discussions, actual-client agreement, or explicit substitution permission |
| Literature | 16 matrix entries, including 12 research entries | Personal source reading and substantive review; counts alone are insufficient |
| Existing systems | Four systems across eight criteria | Prepared comparison; no hands-on benchmark claimed |
| Technologies | Backend/storage/parser comparisons with three alternatives; interaction/evaluation options | Parser/storage pilot is future work, not an immediate complete-app requirement |
| Requirements | 12 FR and eight NFR, priorities and acceptance criteria | Personal AI requirement review; full implementation is later work |
| Architecture | Three editable SVGs and matching PNGs, API and traceability | Design only; no implemented endpoints claimed |
| UX | Standalone synthetic HTML and handler tests | Personal walkthrough; browser/accessibility/user tests remain unverified |
| Evaluation plan | B0/B1/B2, corpus plan, metrics, 20 procedures | Not completed product evaluation |
| Management | Task register, PR/commit links, risks and provisional milestones | Teammate reviews, final version, updated board/submission evidence |
| Supervisor | Relayed general positive reply | Dated primary evidence, substantive coverage and actual decisions |

## Actual checks and limits

Local `node tests/prototype_smoke.cjs` passed on Node v24.19.0, Linux x86_64. JSON syntax and the one-to-one requirement/test mapping passed. The stale-selection regression failed on the original candidate and passed after correction. The supplied report's 23 pages and corrected justification's three rendered pages were visually inspected. Primary pages for S02, S08 and Penelope were checked for their stated scope; this does not constitute rereading all sources or the student's personal review.

Go, a local browser binary and a JSON Schema validator were unavailable; no local pass is claimed for them. The prototype workflow's remote outcome must be recorded after it actually runs. Product parsing, provider calls, benchmarks and user discussions were not performed.

## Remaining external evidence and finalization

Keep PCA-1/3/6/13/14/22 open as applicable. Obtain genuine personal review and real stakeholder/supervisor evidence, resolve findings, integrate the checked version, create pre-defense-1 without moving the historical tag, settle the form's tag-name conflict, and rebuild final PDFs plus board evidence from that exact version. The required board PDF and a successful form receipt were not among the four attachments. They are not represented as produced or submitted by this audit. No private correspondence was accessed or sent, and no final merge, release tag or form submission was performed.
