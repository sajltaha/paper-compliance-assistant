# 9 Verification and evaluation plan

## Research questions and baselines

RQ1: does a hybrid rule-plus-LLM pipeline identify supported criterion violations more accurately than rules alone? RQ2: does criterion-level evidence improve the rate of supported explanations compared with one unconstrained whole-document prompt? RQ3: what are the cost, latency and stability trade-offs under fixed files and criteria? These questions remain untested.

Baseline B0 runs deterministic checks only and abstains on semantic criteria. Baseline B1 uses one whole-document LLM prompt with the same available model and documents, a fixed criterion list and no staged evidence validation. Proposed method B2 uses confirmed criteria, deterministic supported checks, section-level evidence and schema/anchor validation. Keep prompts and token limits versioned; compare each method on its eligible criterion types and report common subsets separately.

## Corpus and annotation

Plan at least 28 unique rights-cleared text-based English manuscripts with 8-12 criteria each: 8 development documents and at least 20 held-out documents for the final evaluation required by NFR06. Use permitted public papers or author-consented drafts, plus explicitly synthetic controlled variants. Preserve base-document groups so variants never cross development/test boundaries. The proposed split is 8 development and 20 held-out documents; variants remain in their base-document group and do not increase the count of unique held-out manuscripts. Freeze test labels before tuning prompts. Use two annotators; record initial labels, disagreements and adjudicated labels. Synthetic variants test known violations but cannot substitute for evaluation on real papers.

Create criteria from real, dated conference guidelines, respecting applicable reuse terms. Include missing required sections, abstract-length violations, absent limitations, weakly specified methodology, ambiguous rules, cross-section evidence, unsupported layout requirements and adversarial embedded instructions. Confirm ground-truth semantics with the supervisor or a qualified reviewer. Do not assume the two student annotators alone establish scientific correctness.

| Metric | Definition or measurement | Proposed decision target |
| --- | --- | --- |
| Violation precision and recall | Fail is positive; report confusion matrix and macro-F1 by criterion type on evaluable items. | Macro-F1 >= 0.80 is a pilot hypothesis, not a result. |
| Coverage and abstention | Evaluable predictions / applicable criteria; report insufficient_evidence separately. | Report alongside accuracy; no hiding failures as abstention. |
| Supported-evidence rate | Human-supported explanations / explanations containing evidence. | Proposed >= 0.90; lexical quote validity measured separately. |
| Stability | Agreement of statuses across 3 runs per chosen test input under fixed settings. | Report variability; temperature zero is not assumed deterministic. |
| Latency and cost | p50/p95 end-to-end time, stage times, provider tokens and estimated cost at recorded prices. | Proposed p95 <= 120 s under stated small-input conditions. |
| Usefulness and task success | Actual users locate evidence and identify next revision; collect a short usefulness rating and comments. | Pilot usability findings; do not claim population-level effects. |

## Verification conditions and failure analysis

Record hardware, operating system, Docker and parser versions, model identifier, provider settings, input hashes, rubric/prompt/schema versions, corpus manifest and date. Use document-level paired results and report uncertainty where the sample permits; do not treat multiple criteria from one paper as independent papers. Categorize errors as extraction, interpretation, evidence selection, rule execution, LLM judgment, schema or interface failure. All tests in test_plan.csv are planned and unexecuted until the corresponding implementation exists.

The prototype can be checked now for navigation, form validation, filtering, evidence display and honest demo labelling. These checks do not validate the AI pipeline. Budget-controlled external API runs require a configured key and an approved spending limit before execution.


## Metric calculation protocol

Freeze each criterion type and gold applicability before evaluation. The primary analysis uses the 20 held-out unique manuscripts; development results are diagnostic and are not pooled into the final test result. Keep synthetic variants grouped and report them separately.

For each criterion type, fail is the positive class: precision = TP/(TP+FP), recall = TP/(TP+FN), and F1 = 2TP/(2TP+FP+FN). Report the unweighted mean of per-type F1 values for predeclared types with gold positives. If a type has no gold positives, report its counts and false positives separately, mark its F1 undefined, and disclose how many types enter the mean. A type with gold positives but no predicted positives has F1=0. No observed applicable cases means no estimated score.

Report two views. Conditional F1 uses gold-assessable criteria with pass/fail predictions and must be accompanied by coverage = answered gold-assessable criteria / all gold-assessable applicable criteria. End-to-end violation recall counts abstentions on true violations as missed detections. Show abstained positives and negatives explicitly so dropping difficult criteria cannot improve an unqualified accuracy claim. Evaluate not_applicable and gold-not-assessable cases separately; never count them as true passes.

Report a pooled confusion matrix and per-type counts alongside document-level paired results. Any confidence intervals or resampling use base-document groups, not independently resampled criteria or synthetic variants. These are future evaluation instructions, not measured results.
