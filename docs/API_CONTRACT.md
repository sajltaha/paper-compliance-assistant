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


## Proposed request and lifecycle examples

All examples describe implementation targets. Upload intake cap is exactly 20 MiB (20,971,520 bytes); bound the streaming request before full allocation and bound archive expansion. Signature checks alone do not prove full format validity.

POST /api/documents returns 202 {"document_id":"d1","extraction_status":"queued"}. GET blocks returns 202 while pending; 200 includes {"document_id":"d1","blocks":[{"block_id":"b1","section":"abstract","text":"...","page":1,"anchor":"pdf:1"}],"warnings":[]}. DOCX page is null and anchor names a paragraph or table location. Unsupported OCR/layout is a declared warning or failure.

POST /api/criteria-sets accepts {"source":{"venue":"example","edition":"2026","paper_type":"long","stage":"initial","source_hash":"...","captured_at":"..."},"criteria":[{"id":"c1","wording":"...","modality":"mandatory","applicability":"applicable"}],"confirmed":true}; returns 201 with immutable id/version. Missing source fields are explicitly unknown, not guessed.

POST /api/analyses accepts {"document_id":"d1","criteria_set_id":"cs1","version":1,"provider_consent":{"confirmed":true,"provider":"configured-provider"}} and returns 202 {"run_id":"r1","status":"queued"}. A local worker moves queued → processing → completed or failed. GET /api/analyses/r1 returns 200 with the current state. A completed run contains stored configuration and validated findings; reopening never calls the provider again. Retrying a failed run creates a traceable new attempt, preserving the failure.

GET /api/analyses returns 200 {"items":[{"run_id":"r1","document_id":"d1","status":"completed"}],"next_cursor":null}. DELETE /api/documents/d1 requires UI confirmation; 204 means linked runs/findings/blocks/local files were removed, 404 means absent, and partial deletion failure is explicit and retryable. Do not claim provider-side deletion merely because local copies were removed.

| HTTP | Error code | Meaning |
| --- | --- | --- |
| 400 | INVALID_REQUEST | Invalid criterion metadata/version or missing confirmation |
| 413 | FILE_TOO_LARGE | More than 20,971,520 bytes |
| 415 | UNSUPPORTED_FORMAT | Type is not supported |
| 422 | INVALID_DOCUMENT / EXTRACTION_FAILED | Malformed/encrypted/unreadable supported input |
| 404 | NOT_FOUND | Document/run missing or deleted |
| 409 | CRITERIA_NOT_CONFIRMED | Analysis blocked until confirmation |
| 502 | PROVIDER_FAILURE / INVALID_RESULT | Refusal, invalid structured result or provider error |
| 504 | PROVIDER_TIMEOUT | Explicit retryable failure; no generated assessment |

Provider data is untrusted. Validate schema, one result per confirmed criterion, applicability, block ownership, normalized quotes and semantic evidence support. JSON schema alone cannot enforce these relational checks.
