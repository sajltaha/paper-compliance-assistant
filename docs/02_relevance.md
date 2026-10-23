# 2 Evidence of relevance

## Executive summary

Scientific submissions face a combination of measurable limits, venue-specific document rules and requirements that need interpretation. This study examines five official conference rule sets, covering six initial-submission profiles, and an independently published conference screening report. Six recent research publications provide a separate basis for choosing an evidence-oriented technical approach.

The strongest operational evidence comes from CHI 2025: organisers report 495 desk rejections among 5,014 complete submissions. Anonymisation, template and length categories account for 229 reported cases. These data establish that submission compliance has observable consequences in at least one real conference process. They do not estimate how many cases our proposed system could prevent. [H]

The policy comparison identifies different page limits and exclusion rules, while the research evidence cautions against treating fluent AI feedback as a verified judgement. Together, these findings support a narrowly scoped assistant: configurable criteria, deterministic checks where possible, evidence-linked interpretation where needed, and explicit uncertainty.

## Research questions and method

RQ1: Which submission constraints are shared across venues, and which require configurable rules? RQ2: Is there published operational evidence of compliance-related screening? RQ3: What does recent research imply for document processing and AI-generated recommendations?

Sources were selected purposively for relevance to English-language computer-science manuscripts. The policy sample comprises ICML 2026, NeurIPS 2025, ACL 2026, CVPR 2026 and ICLR 2026. ACL long and short papers are separate profiles of one venue, not independent conferences. Policy fields were manually coded from explicit statements; unrecorded information means not coded, rather than no requirement. The comparison concerns initial submissions unless a stage change is explicitly discussed.

Operational counts are transcribed from the official CHI report and recomputed with declared denominators. Research findings are a targeted synthesis, not a pooled experiment or systematic review. The six research sources date from 2023-2025. Official policies cover 2025-2026 events; generic guidance is identified as a current web revision. Sources were accessed on 22 October 2026.

## Conference policy comparison

| Initial-submission profile | Main-text limit | Excluded material recorded | Submission conditions |
| --- | --- | --- | --- |
| ICML 2026 [A] | 8 pages | References and appendices | Anonymous; ICML LaTeX style |
| NeurIPS 2025 [B] | 9 pages | References, checklist, technical appendices | Anonymous; NeurIPS style; checklist required |
| ACL 2026 long [C,E,F] | 8 pages | References and appendices; current ARR guidance additionally excludes Limitations and Ethical considerations | Anonymous; ACL format |
| ACL 2026 short [C,E,F] | 4 pages | Same recorded exclusions as long papers | Anonymous; ACL format |
| CVPR 2026 [D] | 8 pages | Extra reference-only pages; supplementary content is separate | Anonymous; CVPR template |
| ICLR 2026 [G] | 9 pages | References and appendices; optional ethics statement subject to its own conditions | Anonymous; ICLR LaTeX style |

## Observations

All five sampled rule sets specify a main-text limit, anonymity and a prescribed format or style. Across the six profiles, initial-submission limits take three values: 4, 8 and 9 pages. These are sample descriptions, not estimates of the wider conference population.

The main-text limit cannot be applied to the total PDF page count without identifying excluded sections. The rule configuration also needs a submission stage: ICLR allows 9 pages initially and 10 during discussion/rebuttal and camera-ready preparation. The same guide contains later wording that calls the limit identical while giving 10 pages; a parser must retain the stage-specific context instead of selecting the last number it sees. [G]

Mandatory, recommended and optional are distinct statuses. For example, the NeurIPS checklist is required [B], while ICLR recommends an ethics statement where appropriate [G]. A missing optional statement must not become a generic violation.

## Consequence for the product

A single universal checklist is insufficient for this sample. A profile should retain venue, edition, track, paper type, stage, source location and rule status. Automatically extracted criteria should be editable before a run. This is a design inference from the comparison, not a finding about users' interface preferences.

The ACL event page delegates detailed rules to ARR. Current ARR and ACLPUB guidance can have changed since the event's submission cycle; historical runs require a frozen source version. This analysis records that temporal limitation rather than treating current guidance as an archived January snapshot. [C,E,F]

## Operational evidence CHI 2025

The official Papers Track report, published in December 2024 for the 2025 conference, records 5,014 complete submissions and 495 desk rejections. It identifies the following categories. [H]

| Reported reason | Count | Share of 495 desk rejections |
| --- | --- | --- |
| Context | 187 | 37.78% |
| Anonymization | 134 | 27.07% |
| Template | 86 | 17.37% |
| Scope | 34 | 6.87% |
| Incomplete submission | 19 | 3.84% |
| Miscellaneous | 16 | 3.23% |
| Length | 9 | 1.82% |
| Incomplete paper | 5 | 1.01% |
| Plagiarism | 5 | 1.01% |
| Total | 495 | 100.00% before rounding |

## Recalculated indicators

Desk-rejection share: 495 / 5,014 x 100 = 9.87%. The organisers round this to 9.9%. The three categories directly relevant to formal screening in this analysis are anonymization, template and length: 134 + 86 + 9 = 229 cases. Their share is 46.26% of desk rejections and 4.57% of complete submissions.

These categories provide a prioritisation signal for potential checks. They are not a measured detection rate, preventable fraction or forecast of product impact. In particular, template compliance and anonymity can require information beyond extracted plain text. The source also notes missing data in some of its analyses; this calculation uses only the explicitly reported screening table.

## Interpretation

The context category is the largest and should not be relabelled as a formatting defect. Scope, scientific completeness and plagiarism likewise require different evidence and judgement. Our MVP should avoid collapsing every screening category into a general AI quality score.

CHI is used as operational evidence, not added to the five-venue policy denominator. Its statistics cannot establish rates for ML/NLP conferences or for our intended student users. Local error prevalence and time savings remain unmeasured.

## Research evidence and engineering implications

## Reliable feedback is narrower than fluent feedback

Zhou, Chen and Yu (2024) evaluate score prediction and review generation and introduce 197 review-revision multiple-choice questions. Their reported weaknesses include long-paper processing and critical feedback. This motivates evaluating specific failure types rather than assuming a plausible review is correct. The study concerns the models and tasks tested; it does not supply an accuracy estimate for our system. [S02]

Li et al. (2025) analyse 1,683 papers and 6,495 expert reviews using five LLMs. They find stronger descriptive feedback than identification of weaknesses and quality-sensitive criticism. Therefore, our recommendations should be tied to explicit requirements and supporting passages. A conference compliance assistant has a more constrained target than autonomous scientific review. The source is the 2025 arXiv version, whose metadata reports acceptance as an ICDM short paper. [S12]

## Evidence and document position need separate evaluation

Buchmann, Liu and Gurevych (2024) introduce LAB, covering six long-document tasks and experiments on five models. Their findings distinguish response quality from attribution quality, particularly for complex claims. A quoted passage should therefore be checked for support, not merely for existence in the document. In our design, citation validation and semantic support are separate checks. [S08]

Liu et al. (2024) show position-sensitive performance in multi-document question answering and key-value retrieval, with weaker access to information in the middle of long contexts. This motivates testing relevant evidence at the beginning, middle and end of manuscripts. It does not prove that every current model has the same failure rate or that retrieval will always outperform whole-document input. [S07]

## Conversion is an independent source of uncertainty

The Docling Technical Report (Auer et al., 2024) describes document conversion using layout and table-structure models. It offers a candidate conversion approach; its abstract does not establish accuracy on our manuscripts. Parser selection requires local evidence on reading order, headings and tables. [S10]

Nougat (Blecher et al., 2023) investigates optical conversion of academic PDFs into markup, including the semantic difficulty of mathematical content. It supplies an alternative for comparison, not evidence that OCR or formula recovery is already implemented. Low-quality conversion must not silently become a successful compliance result. [S09]

## Synthesis

The evidence supports a hybrid design hypothesis: deterministic rules for reliably measurable properties, document-aware evidence selection for interpretive criteria, and abstention when the available representation is inadequate. Whether that design improves accuracy, cost or usefulness must be established by the project's own benchmark.

## Derived system requirements

DA-R identifiers are local to this analysis. These are proposed acceptance conditions, not claims of implemented functionality.

| Proposed requirement | Evidence | Acceptance condition |
| --- | --- | --- |
| DA-R1. Versioned submission profile | Different limits and stage changes [A-G] | Store venue, edition, type, stage and source. ACL long/short and ICLR initial/revised profiles retain distinct limits. |
| DA-R2. Section-aware counting | Different excluded sections [A-G] | A labelled PDF with 8 main-text pages plus 2 reference pages is not rejected solely because total length is 10 pages under the recorded ICML profile. |
| DA-R3. Rule modality | Required checklist versus optional statements [B,G] | Missing required content, optional content and unreadable content produce different states. |
| DA-R4. Traceable findings | Attribution research [S08]; policy consequences [D,H] | Each finding includes a rule source, manuscript location and supporting text, or a reason why it cannot be checked. |
| DA-R5. Qualified anonymity warnings | Anonymous submission rules and observed screening [A-D,G,H] | Explicit identifying content in a test fixture produces a located warning. No finding is not represented as guaranteed anonymity. |
| DA-R6. Conversion-quality gate | PDF conversion research [S10,S09] | Empty, scanned or structurally unreliable extraction triggers a declared unsupported/uncertain state rather than an automatic pass. |
| DA-R7. User-confirmed criteria | Ambiguous context and stage [C,G] | Show interpreted rules and their sources before execution; preserve confirmed edits with the run. |
| DA-R8. Evidence-grounded recommendations | Feedback limitations [S02,S12,S08] | A recommendation names the unmet rule and relevant evidence; unsupported novelty or acceptance predictions are excluded. |

## Worked example identical PDF different rule contexts

Consider a synthetic PDF with 9 pages of main text and 2 pages of references. Under the recorded initial ICML limit, the main-text count exceeds 8. Under initial NeurIPS or ICLR limits it does not exceed 9. Under an ICLR discussion-stage profile, a 10-page main text is permitted. This is a logical test fixture derived from policies, not an experiment on real submissions. [A,B,G]

The correct workflow first confirms the applicable profile, then locates the body/reference boundary, and only then compares the count. If that boundary cannot be established, the result should expose uncertainty. The example explains why a simple total-page counter would produce misleading results.

## Evaluation priorities and limits

## Planned verification based on the findings

Freeze the exact rule texts and a rights-cleared manuscript corpus before evaluation. Label individual criteria as satisfied, violated or not assessable, and record rule evidence separately from manuscript evidence. Include different paper types, stage changes, optional statements, malformed files, difficult layouts and deliberately missing sections.

Compare three declared baselines: B0 deterministic checks only; B1 whole-document LLM input with the same criteria; B2 deterministic checks plus document-aware evidence and validated outputs. Hold documents, rule versions and applicable model settings constant. These are planned comparisons; no performance result is reported here.

| Evaluation question | Proposed measure | Reason |
| --- | --- | --- |
| Are violations detected? | Per-criterion precision, recall and macro-F1 | A fluent summary is insufficient [S02,S12]. |
| Is the result supported? | Rule-source accuracy; manuscript-anchor validity; support labels | Existing quotation and valid support differ [S08]. |
| Are uncertain cases handled? | Coverage, abstention rate and error rate on answered cases | Conversion failures should be visible [S10,S09]. |
| Does evidence position matter? | Results stratified by beginning/middle/end | Long-context behaviour can be position-sensitive [S07]. |
| Is the workflow practical? | Latency, cost per run, repeated-run stability | Engineering suitability requires project-specific measurement. |

## What the evidence establishes

Official rules contain meaningful variation. Published conference data show real screening cases in categories relevant to compliance checks. Recent research identifies document-conversion, feedback-reliability and evidence-attribution concerns that affect implementation choices.

## What remains unknown

This study does not measure demand among our target users, their willingness to send manuscripts to an external API, their preferred interface, actual time savings or the accuracy of the proposed system. It does not infer a causal reduction in desk rejection from the CHI counts. This secondary-data study contains no interviews or product measurements; separately supplied participant notes are reported below with their own limitations. No local usability sessions or manuscript benchmark runs are claimed.

## Conclusion

The project addresses a documented document-checking problem with a bounded engineering response. Its defensible contribution is an inspectable mapping from confirmed conference rules to manuscript-level findings and revisions. Success should be assessed through correctly detected mismatches, useful evidence and appropriate uncertainty, rather than predicted acceptance or generic review scores.

## External evidence condition

Three anonymized participant records (U01–U03) were supplied in interview.docx. U01 consent is explicit in the notes; Kaisar separately confirmed U02/U03 consent. All three interviews took place on 20 October 2026, as confirmed by the interviewer. Consent to public publication of anonymized findings and the log was also confirmed. Fifteen observations are mapped to existing FR/NFR in docs/user_discussions_log.csv; three participants, not fifteen interviews, are counted. The findings support multi-source criteria, grounded explanations, explicit uncertainty, privacy controls and rechecking. See docs/INTERVIEW_FINDINGS.md. PCA-22 now has three dated records, consent, findings and requirement mappings prepared for acceptance review. The secondary-data analysis and interview evidence have distinct limitations.



## Participant evidence

All three collect requirements from several sources and describe contradictions. This supports FR03–FR04: retain original wording and sources, highlight conflicts and confirm the interpretation before a run.

All three want each finding linked to a rule and a specific manuscript location. This supports FR06/NFR02. They prefer manual review when evidence is insufficient or a rule is ambiguous, supporting FR05/NFR08. Autonomous scientific-merit decisions, acceptance decisions and text rewriting remain outside the confirmed need for the current MVP.

U01 described returns caused by references and filenames; U02 described page counting that included references; U03 described captions and table fonts. These cases motivate formal checks, while feasibility still needs testing. Text extraction alone cannot establish fonts or margins. Full GOST bibliography checking, metadata-based anonymity checking and source LaTeX processing require separate implementation and tests.

U01 and U03 conditionally allow external processing. U02 is more likely to refuse processing of an unpublished method without laboratory permission. All ask about processing conditions. This supports FR12/NFR03: disclose the actual provider terms and obtain permission before transmission. Claims about retention or training require a verified provider policy. Consent to interview notes does not automatically cover manuscript processing. A local formal-checking mode is recorded as a future-stage proposal.

U01 and U03 mention saving progress and rechecking, supporting FR08/FR10. U03 wants a report for a supervisor: FR09 provides structured JSON, with PDF export retained as an extension. Priorities and the distinction between critical and cosmetic findings support FR04/FR06.


Full record and limitations: docs/INTERVIEW_FINDINGS.md.
