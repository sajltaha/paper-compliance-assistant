# Findings from three potential-user discussions

Records from three participants were supplied in the private file interview.docx. Original labels UO1–UO3 were normalized to U01–U03. The original file is stored separately; names and contact details are excluded from public materials. U01 explicitly consented to anonymized notes in the record; Kaisar separately confirmed U02 and U03 consent in correspondence. All three discussions took place on 20 October 2026, as confirmed by Kaisar. He also confirmed all three participants' consent to publishing anonymized findings and the log in the public project repository.

U01 is a student and author/coauthor of conference papers. U02 is a master's student with four submission experiences who also helped check another manuscript. U03 has authored two student papers and is preparing a third. Participants described specific workflows and manuscript-return cases. Their experience is relevant to paper preparation; this is a small convenience sample of authors, with limited generalizability to the market or independent editors.

## Observations and decisions

All three collect requirements from several sources and describe contradictions. This supports FR03–FR04: retain original wording and sources, highlight conflicts and confirm the interpretation before a run.

All three want each finding linked to a rule and a specific manuscript location. This supports FR06/NFR02. They prefer manual review when evidence is insufficient or a rule is ambiguous, supporting FR05/NFR08. Autonomous scientific-merit decisions, acceptance decisions and text rewriting remain outside the confirmed need for the current MVP.

U01 described returns caused by references and filenames; U02 described page counting that included references; U03 described captions and table fonts. These cases motivate formal checks, while feasibility still needs testing. Text extraction alone cannot establish fonts or margins. Full GOST bibliography checking, metadata-based anonymity checking and source LaTeX processing require separate implementation and tests.

U01 and U03 conditionally allow external processing. U02 is more likely to refuse processing of an unpublished method without laboratory permission. All ask about processing conditions. This supports FR12/NFR03: disclose the actual provider terms and obtain permission before transmission. Claims about retention or training require a verified provider policy. Consent to interview notes does not automatically cover manuscript processing. A local formal-checking mode is recorded as a future-stage proposal.

U01 and U03 mention saving progress and rechecking, supporting FR08/FR10. U03 wants a report for a supervisor: FR09 provides structured JSON, with PDF export retained as an extension. Priorities and the distinction between critical and cosmetic findings support FR04/FR06.

## Limitations and PCA-22 status

The log contains 15 observations from three unique participants. U01's preparation-time estimate of 2–3 hours, U02's estimate of about one hour or 4–5 hours when problems arise, and U03's estimate of 3–4 hours are self-reports. They do not measure system time savings. Some examples concern Russian-language events; transfer to the English PDF/DOCX MVP requires separate checking. These discussions provide neither usability-test nor benchmark results.

PCA-22 is Done in the live 24 October 2026, 02:58 Asia/Almaty snapshot. Three participant records dated 20 October 2026, consent and 15 mapped observations were accepted through Talgat's PR #7 review: https://github.com/sajltaha/paper-compliance-assistant/pull/7#issuecomment-6373878035 . The accepted records remain distinct from product usability or benchmark results.

Detailed log: docs/user_discussions_log.csv. The decisions above confirm and refine existing scope; proposed features remain implementation-stage work.
