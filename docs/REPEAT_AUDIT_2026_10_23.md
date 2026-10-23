# Repeat audit of the first submission

Updated on 24 October 2026, Asia/Almaty. The assignment, report, justification, logs, repository documentation, prototype, PRs and live YouTrack data were compared again. This is a technical assessment of the available materials; the committee determines the official assessment. Integration and board details below describe the recorded audit snapshot, before subsequent merges.

## Completed materials

Interviews U01–U03 from 20 October 2026 are documented. Kaisar confirmed the date and all participants' consent to public anonymized findings. The log contains 15 observations from three participants with FR/NFR-linked conclusions and decisions. The private interview.docx remains outside the repository. PCA-22 is prepared for Review; the available records do not require additional interviews.

The package contains the proposal and scope, public rules from five conferences and CHI screening statistics, 16 sources including 12 research entries, four systems compared across eight criteria, technology comparisons, 12 FR and 8 NFR mapped to T01–T20, three editable diagrams, the prototype and an evaluation plan. All 11 assignment components are mapped to artifacts. Nine components were prepared, management/integration was partially complete, and substantive dated supervisor evidence remained open. With equal weights, the indicative calculation is (9 + 0.5) / 11 = 86.4%. This describes first-submission materials and does not measure application readiness or an official grade.

Checks covered stale selection, empty files, disabled inputs and completed-run export. The prototype shows five synthetic findings and four states. Handler smoke checks passed. JSON parses and 20 requirements map to 20 test procedures. The plan specifies 28 unique documents, split into 8 development and 20 held-out documents, metric definitions, requirement mapping and transient/permanent retries. Full T01–T20 execution, the benchmark, product browser tests and server-side analysis remain implementation-stage work. Interview time estimates remain self-reports.

## PRs and integration at the audit snapshot

PR #5: 80e850649725a3cccefde9a612926e4e7ea8ba31, https://github.com/sajltaha/paper-compliance-assistant/pull/5 . Technical review: https://github.com/sajltaha/paper-compliance-assistant/pull/5#pullrequestreview-5632920719 .

PR #6: f9282959be1045934c890afa465102fb2717f2cf, https://github.com/sajltaha/paper-compliance-assistant/pull/6 . Technical review: https://github.com/sajltaha/paper-compliance-assistant/pull/6#pullrequestreview-5633430095 . At this checked revision, Talgat's personal review had not occurred; the earlier contrary statement was withdrawn. Participant review was tracked as a separate assignment condition.

PR #7: https://github.com/sajltaha/paper-compliance-assistant/pull/7 . Includes later evaluation and requirement clarifications, dated interview evidence and report updates. Report links use the exact source commit supplied during the build.

A previous PR #6 merge attempt was rejected by automatic approval review because a recorded review and sufficient authorization for that specific merge were missing. No bypass was performed. At this historical snapshot, PRs #5–#7 were open, main and prob-period-1 pointed to 86141520e74e46f433be94ae29639844ec4e3760, and pre-defense-1 had not been created. A review package was prepared; submission was still pending. Consult current GitHub records for subsequent integration.

## All tasks at the audit snapshot

The board showed 10 Done, 5 Review, 2 Develop and 5 Backlog: 10/22 = 45.5%. This is the task distribution for the entire project. Interview records had not yet been accepted in the live task.

| Task | Recorded stage | Audit finding and next step |
| --- | --- | --- |
| PCA-1 | Review | Proposal checked technically; record scope explanation and traceable acceptance. |
| PCA-2 | Done | Secondary-data analysis available; PCA-22 has a separate acceptance condition. |
| PCA-3 | Review | Matrix and sources checked technically; record participant source review separately. |
| PCA-4 | Done | Four systems, eight criteria and bounded claims. |
| PCA-5 | Done | Alternatives and trade-offs documented; parser/storage pilots remain planned. |
| PCA-6 | Review | FR/NFR and mappings checked; review the added clarifications. |
| PCA-7 | Done | Diagrams and API design available; mappings clarified; endpoints still planned. |
| PCA-8 | Done | Synthetic prototype and handler checks passed; browser/user evaluation remains planned. |
| PCA-9 | Done | Plan available; split and metrics corrected; review new changes. |
| PCA-10 | Done | Two GitHub contributors and public repository; access does not establish that a recipient opened the materials. |
| PCA-11 | Done | Live board available with 22 tasks, owners, priorities and dates. |
| PCA-12 | Done | Risks, responsibilities, dependencies and provisional milestones documented. |
| PCA-13 | Review | Record actual date, original evidence and substantive supervisor decisions. |
| PCA-14 | Review | Contribution links and technical checks available; participant review of PRs #5–#7 remained open. |
| PCA-15 | Done | Board/tasks PDF available; refresh snapshot and links after final changes. |
| PCA-16 | Develop | Integration, final tag, form agreement and receipt remained outstanding. |
| PCA-17 | Backlog | Go upload/persistence API is a later stage. |
| PCA-18 | Develop | Intake validator available; parsing, blocks/anchors and OCR policy remain. |
| PCA-19 | Backlog | Criterion normalization/evaluation is a later stage. |
| PCA-20 | Backlog | Corpus, labels and controlled evaluation are a later stage. |
| PCA-21 | Backlog | Vue integration and Docker startup are a later stage. |
| PCA-22 | Backlog | Three interviews dated 20 October 2026, 15 observations, consent and mappings ready for Review. |

## YouTrack and form

YouTrack was readable as a guest, with editing disabled. Prepared texts for PCA-22/14/16/13 are in docs/YOUTRACK_UPDATE.md. No task status was changed in that session. Review was recommended for PCA-22 because dates, consent, records and mappings were documented.

Form pages 1–2 were inspected and a verification draft was prepared with the project title, supervisor, team, repository, responsibilities and limitations. Page 3 requires one PDF of board/task screenshots below 10 MB. YouTrack_Board_and_Tasks.pdf was below that limit; proceeding required upload. Pages 4–5 were not checked in that pass. The form was not submitted and no receipt was available.

The form requests prob-period-1; the assignment requests pre-defense-1. The historical prob-period-1 identifies an earlier main snapshot. Agree the corrected version reference with the supervisor/coordinator while preserving that tag.

## Remaining submission actions recorded by the audit

1. Obtain substantive dated supervisor feedback on scope, requirements, technologies and evaluation; link decisions to revisions. Retain the general positive response within its documented scope.
2. Complete participant review of the relevant PR revisions, recording checked SHAs, findings and decisions.
3. Update YouTrack from an authorized editing account and accept PCA-22 and other evidence-dependent tasks as appropriate.
4. Integrate reviewed changes, settle the tag names, freeze the exact revision and rebuild the matching package.
5. Complete uploads and inspect all form pages; the representative submits once and retains the receipt.

The first checkpoint does not require the complete application. PCA-17–PCA-21 cover parsing/provenance, Go API/persistence, evaluator, Vue/Docker, corpus and controlled evaluation in later stages. Documentation and handler smoke checks establish only their stated scope.
