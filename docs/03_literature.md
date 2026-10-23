# 3 Critical literature review

The review uses 16 sources: 12 research publications or research reports from 2023-2025 and 4 primary technical/product sources. Preprints and technical reports are explicitly labelled. Search terms combined manuscript evaluation, conference compliance, rubric-based evaluation, LLM-as-a-Judge, PDF parsing, attribution, document understanding and retrieval-augmented generation. Primary publication pages, author repositories and official documentation were consulted on 22 October 2026.

Selection favoured work that affects one of four decisions: the reliability of AI feedback, criterion-level evaluation, document conversion, or evidence selection. Vendor pages were used only for documented features. This is a focused engineering review, not a systematic review; it does not claim exhaustive retrieval or a meta-analysis.

## Scientific feedback and evaluation validity

Liang et al. [S01] support the potential usefulness of generated manuscript feedback, whereas Zhou et al. [S02] show why helpfulness must not be confused with reliable technical judgment. SEA [S03] offers a staged scientific-review framework; Li et al. [S12] further motivate evaluation of contextual grounding and criticism. For this project, the resulting design choice is to verify bounded criteria and show evidence rather than issue an overall scientific acceptance score.

## Rubrics and evidence

MT-Bench [S04], G-Eval [S05] and Prometheus [S06] motivate explicit criteria and structured judgments, while exposing transfer and bias concerns. Their tasks are different from conference compliance; their reported performance cannot be reused as our accuracy. Attribute or Abstain [S08] motivates inspectable evidence and abstention. A source anchor must therefore be both structurally valid and semantically supportive; JSON validity alone [D04] cannot demonstrate either correctness or usefulness.

## Document conversion and long context

Nougat [S09], Docling [S10] and GROBID [D03] provide different routes to structured scholarly text. The project must measure conversion errors separately, because a missed section in extraction can become a false compliance failure. Lost in the Middle [S07] motivates positional sensitivity tests. Self-RAG [S11] illustrates retrieval-based self-reflection, but retrieval can omit evidence needed for exhaustive checking. A vector database is therefore an option to test, not an assumed requirement.

## Structured publication analysis

| Source and method | Limitation | Design implication |
| --- | --- | --- |
| S01  /  Liang et al. (2023) LLM manuscript feedback can be useful, but utility is not equivalent to correct conference compliance. | Retrospective review overlap and researcher perceptions do not validate an arbitrary checklist. | Use feedback as assistance and validate every criterion on an independently annotated set. |
| S02  /  Zhou, Chen and Yu (2024) Review generation and score prediction expose limitations in critical and long-document reasoning. | Scores and fluent reviews can conceal factual mistakes. | Separate formal checks from semantic judgments; permit insufficient_evidence and human review. |
| S03  /  Yu et al. (2024) SEA separates standardization, evaluation and consistency analysis in scientific reviewing. | Its training and review-generation setting differs from user-supplied conference criteria. | Use a staged pipeline and check consistency between a finding and the cited manuscript text. |
| S04  /  Zheng et al. (2023) LLM judges approximate some human preferences but have position, verbosity and self-enhancement biases. | Chat-assistant preference agreement is not manuscript-compliance accuracy. | Evaluate criterion order sensitivity, repeated-run stability and agreement with human labels. |
| S05  /  Liu et al. (2023) Explicit evaluation criteria and structured judging can improve alignment in NLG tasks. | Summarization and dialogue findings do not establish validity for scientific paper assessment. | Use an explicit rubric and structured outputs; retain a separate human reference. |
| S06  /  Kim et al. (2024) Custom rubrics support fine-grained feedback and evaluation. | Rubric-conditioned response evaluation and reference answers differ from checking unseen conference rules. | Store criterion definitions and rubric versions; benchmark a fixed rubric rather than one global score. |
| S07  /  Liu et al. (2024) Performance can depend on the location of relevant evidence in a long input. | The experiments study retrieval tasks, not this project or every future model. | Preserve section anchors; test evidence moved to the beginning, middle and end. |
| S08  /  Buchmann, Liu and Gurevych (2024) Attribution makes long-document responses more verifiable; evidence quality remains task dependent. | A citation alone does not guarantee support for a complex claim. | Validate quoted spans and ask human annotators whether evidence supports each finding. |
| S09  /  Blecher et al. (2023) Visual document recognition converts academic PDF content into structured markup. | A neural parser may introduce recognition errors; reliable formatting checks require retained layout data. | Compare layout-aware conversion with plain extraction and explicitly flag unsupported scanned files. |
| S10  /  Auer et al. (2024) Layout and table models support structured local PDF conversion. | The v1 report does not validate the current package on our PDF/DOCX corpus. | Pilot Docling as a parser adapter; measure heading and reading-order accuracy on representative files. |
| S11  /  Asai et al. (2024) Retrieval decisions and critique can improve grounded generation in studied tasks. | The trained retrieval-reflection framework is not equivalent to merely adding a vector database. | Treat retrieval as an experimental extension; start with explicit section evidence and compare baselines. |
| S12  /  Li et al. (2025) Structured and descriptive reviews can coexist with weak critical reasoning and contextual grounding. | Review-generation benchmarks differ from deterministic and semantic compliance checks. | Evaluate correctness, unsupported claims and actionable feedback separately from writing quality. |

The project gap is an engineering combination to be validated: author-confirmed conference criteria, explicit formal/semantic check boundaries, traceable PDF/DOCX evidence and reproducible local evaluation. Existing products already cover configurable checks and critique, so universal novelty or superiority is not claimed. The complete source matrix and URLs are provided in the repository.
