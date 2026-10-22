# Proposed API contract
No endpoints are implemented yet. The prototype does not call these endpoints.

| Method | Resource | Input | Output |
|---|---|---|---|
| POST | /api/documents | multipart file | document_id, hash, extraction_status, warnings |
| GET | /api/documents/{id}/blocks | document ID | extracted text with stable anchors |
| POST | /api/criteria-sets | source and confirmed criteria | criteria_set_id, version |
| POST | /api/analyses | document_id, criteria_set_id, version | run_id, status |
| GET | /api/analyses/{id} | run ID | configuration, findings, failures and timing |
| GET | /api/analyses | optional pagination | saved run summaries |
| DELETE | /api/documents/{id} | document ID | deletion status and linked-data handling |

Error envelope: {"error":{"code":"UNSUPPORTED_FORMAT","message":"...","retryable":false}}.
Use documented client errors for invalid files and criteria, explicit provider failures, and no successful placeholder output.

Final response shape is defined in ai_contract.schema.json. A schema validator is necessary but insufficient: check exactly one finding per confirmed criterion, block ownership, quote matches and no ungrounded page numbers. Provider-specific schema compatibility must be tested during implementation.
