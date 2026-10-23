# Requirement component data and API mapping

All rows are proposed implementation responsibilities. Current validator and mock do not implement the complete contracts.

| Requirement | Component | Data | API |
| --- | --- | --- | --- |
| FR01 | Go orchestration and storage | Document / Run | POST documents; GET analyses |
| FR02 | Parser adapter + Go quality gate | Block + provenance | GET documents/{id}/blocks |
| FR03 | Vue criteria editor + Go version store | SourceProfile + CriteriaSet + Criterion | POST criteria-sets |
| FR04 | Vue criteria editor + Go version store | SourceProfile + CriteriaSet + Criterion | POST criteria-sets |
| FR05 | Rules / LLM adapter + Go result validator | Criterion + Block + Finding + Run | POST analyses; GET analyses/{id} |
| FR06 | Rules / LLM adapter + Go result validator | Criterion + Block + Finding + Run | POST analyses; GET analyses/{id} |
| FR07 | Rules / LLM adapter + Go result validator | Criterion + Block + Finding + Run | POST analyses; GET analyses/{id} |
| FR08 | Go persistence + Vue history | DocumentVersion + Run | GET analyses; GET analyses/{id} |
| FR09 | Vue export + Go result reader | Run manifest + findings | GET analyses/{id} |
| FR10 | Go intake/orchestration + Vue recheck/history | DocumentVersion + CriteriaSetVersion + Run | POST documents; POST analyses; GET analyses/{id} |
| FR11 | Rules / LLM adapter + Go result validator | Criterion + Block + Finding + Run | POST analyses; GET analyses/{id} |
| FR12 | Vue consent/delete + Go controller | Consent + Document + dependent records | POST analyses; DELETE documents/{id} |
| NFR01 | Go orchestration and storage | Document / Run | POST documents; GET analyses |
| NFR02 | Rules / LLM adapter + Go result validator | Criterion + Block + Finding + Run | POST analyses; GET analyses/{id} |
| NFR03 | Go orchestration and storage | Document / Run | POST documents; GET analyses |
| NFR04 | Docker Compose configuration + service health checks | Environment/dependency versions + startup log | Deployment concern; documented local startup and service smoke checks |
| NFR05 | Go timing instrumentation + provider adapter | Run stage durations + provider token/cost records | GET analyses/{id}; offline aggregation over recorded runs |
| NFR06 | Offline evaluation runner + independent annotation/adjudication | Frozen corpus manifest + gold labels + predictions + metrics | Evaluation procedure; application findings exported for comparison |
| NFR07 | Vue controls, focus management and status/error announcements | UI labels + focus order + accessibility check records | UI concern across UC1-UC6; no dedicated REST endpoint |
| NFR08 | Rules / LLM adapter + Go result validator | Criterion + Block + Finding + Run | POST analyses; GET analyses/{id} |

