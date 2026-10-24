# Available tests

Run the standalone prototype handler regressions from the repository root with Node.js and built-in Blob support:

```bash
node tests/prototype_smoke.cjs
```

The suite covers the synthetic UX flow, confirmation, result states, evidence, filters, rechecking, file validation and JSON export. It uses a minimal simulated DOM. Coverage and recorded successful local/CI runs are documented in [Prototype verification](../docs/PROTOTYPE_VERIFICATION.md).

The Go intake unit tests are in [backend/internal/document/validator_test.go](../backend/internal/document/validator_test.go). With Go 1.23 or a compatible newer version:

```bash
cd backend
go test ./...
```

These tests cover the available prototype and intake library. The application-level procedures in [docs/test_plan.csv](../docs/test_plan.csv) remain planned until the corresponding services are implemented.
