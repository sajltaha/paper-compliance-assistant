# Review of the corrected package before integration

This guide describes the review procedure. Review completion is recorded separately in the relevant PR.

Kaisar reviews the changes in the PCA-16-audit-fixes PR and checks the complete package. The review identifies the checked SHA and his own conclusions from his account. Technical tool checks and participant review are recorded separately.

1. Proposal: check the problem, scope, expected outcomes and roles against the agreed topic; identify MVP exclusions.
2. Literature: open key sources, check limitations and project implications, and explain at least two specific decisions supported by those sources.
3. FR/NFR: check criterion sources and stages, four result states, evidence availability, DOCX anchors, conversion gate and the exact 20 MiB limit.
4. Technologies: assess PostgreSQL/SQLite and Docling/GROBID arguments through local operation and verifiable quality. Keep provisional choices identified as proposals.
5. Architecture: trace saving and reopening a run, deleting dependent data, confirming external transmission, and consistency between API and diagrams.
6. Run `node tests/prototype_smoke.cjs`; if Go is available, run `go test ./...` from backend. Demonstrate the synthetic interface and explain the validator's scope.

Record findings with files or passages, the decision for each and the checked result. If no changes are required, explain the checks and acceptance rationale. The reviewer writes their own assessment. After corrections, check the new SHA before integration. Record review dates as they occurred.

For the supervisor, show the updated report, MVP scope, requirements, technology trade-offs, corpus/metrics and relevance evidence. Ask for substantive decisions and comments. If substitution of public-data analysis for the 3–5 discussion condition is still needed, ask explicitly. Record the actual response date, materials reviewed, decisions and private reference to the original response. Describe general approval only within its documented scope.
