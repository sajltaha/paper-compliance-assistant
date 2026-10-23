# Short package demonstration

1. Open README and explain the scope: research, design, mock prototype and intake validator. The complete AI application is still planned.
2. Show the Git history and its recorded dates. Talgat explains the proposal, requirements, API, persistence and integration. Kaisar explains document intake, planned extraction and evidence handling, and the AI evaluation plan. Each member explains their own decisions and contribution.
3. Trace PCA-18 → PR #2 → backend/internal/document → tests and CI. Explain why signature validation is only the first step of PDF/DOCX parsing.
4. Trace PCA-2 → PR #3 → DATA_ANALYSIS and the source CSVs. Recalculate 495/5014 and 229/495; explain the denominators and their limits for product evaluation.
5. Open prototype/index.html: load the synthetic example, confirm criteria, run the mock, inspect evidence, filters and insufficient_evidence. Show the notice explaining that parsing and AI calls are unavailable in this demonstration.
6. Run `node tests/prototype_smoke.cjs`. If Go is available, run `go test ./...` from backend. Record the checks actually executed.
7. Show the review → correction → checked-SHA sequence, including the review record and decisions.
8. Show the task register and outstanding external conditions. For submission, use the agreed tag and PDFs built from the same revision.
