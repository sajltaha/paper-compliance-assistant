# Prototype verification

22 October 2026: JavaScript syntax check passed. A smoke check of the actual prototype handlers in a minimal simulated DOM passed: empty-input error, required confirmation, four-result demonstration, evidence toggle, status filter, recheck, custom-criterion insufficient-evidence result and file type/size validation.

This is not a visual browser or accessibility audit, real PDF/DOCX parsing test, or AI quality evaluation. The application and planned backend tests remain unimplemented.

Reproduce the handler check from the repository root with `node tests/prototype_smoke.cjs` (Node.js with built-in Blob support; no dependencies).


## 23 October follow-up verification

Technical verification against PR #5 base commit 80e850649725a3cccefde9a612926e4e7ea8ba31 and the follow-up working files used AI support for checks. Participant review and acceptance are tracked separately from these test results.

A regression reproduction failed on the base: choosing an unsupported file after loading the synthetic example left selectedName pointing to the old manuscript. The corrected handler clears selection on invalid replacement or an empty chooser and rejects zero-byte files. Exact 20 MiB and limit-plus-one byte cases are covered.

`node tests/prototype_smoke.cjs` passed on Node v24.19.0, Linux x86_64. It covers five synthetic findings and all four result states, evidence toggle, each tested filter, recheck, custom-criterion abstention, disabled inputs during the asynchronous mock run, invalid replacement, empty files, cleared selection and byte boundaries. A Node 22 GitHub Actions workflow now runs this same check for prototype/tests changes; its actual run result must be inspected on the follow-up PR.

JSON files parse; 20 requirement IDs and 20 test IDs map one-to-one; the literature matrix has 16 entries including 12 research entries. These are consistency checks, not completed application tests or an independent scientific publication assessment.

Not run locally: Go tests (Go executable unavailable), browser/visual/accessibility tests (no local browser binary), JSON Schema conformance validation (validator dependency unavailable), parser/AI/corpus evaluation (not implemented). None of these are recorded as passed. T01-T20 remain planned application procedures.
