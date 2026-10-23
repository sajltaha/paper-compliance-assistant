# Prototype verification

The standalone HTML prototype is checked by tests/prototype_smoke.cjs using its actual JavaScript handlers in a minimal simulated DOM. Run from the repository root with Node.js (built-in Blob support; no dependencies):

```bash
node tests/prototype_smoke.cjs
```

## Recorded results

The 23 October 2026 handler check passed on Node v24.19.0, Linux x86_64. Coverage includes empty input, required criterion confirmation, five synthetic findings across all four result states, evidence toggling, status filters, rechecking, custom-criterion abstention, disabled inputs during a run, invalid file replacement, zero-byte files, cleared selection and the exact 20 MiB boundary.

The regression case reproduced stale selection on 80e850649725a3cccefde9a612926e4e7ea8ba31 and passed after the PR #6 correction. Exports retain the completed run's manuscript name rather than the current input selection.

Prototype CI on 13b7abe87f941d416886e9daaff2535544c94a8c passed for push and pull_request events: https://github.com/sajltaha/paper-compliance-assistant/actions/runs/39999575759 and https://github.com/sajltaha/paper-compliance-assistant/actions/runs/39999594482 . The workflow is .github/workflows/prototype.yml.

The 24 October 2026 handler check also passed on Node v24.19.0, Linux x86_64. The committed test now captures the exported JSON and asserts that selecting replacement-B.pdf after a completed run leaves the exported manuscript_name and findings attached to that completed run. This closes the nonblocking regression-test recommendation from PR #6. The Go toolchain was unavailable for this local rerun; no new backend-test result is claimed.

## Scope

These results cover handler behavior, not visual layout, accessibility, real PDF/DOCX parsing, backend semantic validation or AI quality. No product benchmark is established. T01–T20 in docs/test_plan.csv remain planned implementation-stage procedures. Backend intake tests and their instructions are in backend/README.md and backend/internal/document/validator_test.go. Personal review acceptance is recorded in the relevant PR and task records.
