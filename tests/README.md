# Tests

Run node tests/prototype_smoke.cjs from the repository root. The script uses Node.js built-ins and a simulated DOM to check input validation, criterion confirmation, synthetic result states, filters, evidence controls and rechecking.

Backend intake unit tests are in backend/internal/document/validator_test.go. Run go test ./... from backend/ with Go 1.23 or a compatible newer version.

The available checks do not cover browser layout, accessibility or manuscript analysis. Application acceptance procedures and experiments remain planned in docs/test_plan.csv and docs/09_evaluation.md.
