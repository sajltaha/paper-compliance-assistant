# Completing PCA-22 with documented evidence

Current evidence: records U01–U03 contain 15 observations from three participants. Consent is confirmed and all discussions are dated 20 October 2026. See INTERVIEW_FINDINGS.md. The next step is acceptance review and updating the live task. The protocol below remains available for any additional discussions; further participants are not required by the evidence currently documented.

## Discussion protocol

The assignment's discussion route calls for three actual discussions of 10–15 minutes, with up to two additional participants if useful. Suitable participants include students with paper-preparation experience, master's students, early-career researchers and lecturers who have checked papers. Confirm relevant experience when selecting participants.

Discussions may be in person, by video or in writing. Audio recordings and manuscript transfer are unnecessary. Obtain consent to anonymized notes. Exclude full names, telephone numbers and private manuscripts from the public report. Use codes U01, U02 and U03 and record the actual date and channel.

Suggested invitation for the team to send: “Hello! Our diploma project is an assistant for checking a scientific paper against conference requirements. Have you prepared or checked such papers? If so, may we ask a few questions about your experience? It takes 10–15 minutes. We want to understand real difficulties and workflows; please do not send manuscripts or personal information.”

Suggested consent request: “May I record anonymized notes of your answers for our diploma? The report will contain only your role and participant code. You may skip any question.” If consent is declined, exclude the exchange from the consented discussion log.

## Questions

1. When did you last prepare or check a conference paper? What was your role?
2. Where did you find the requirements? Which files or pages did you compare, and in what order?
3. Describe a specific checking difficulty or revision before submission. How did you identify and resolve it?
4. Which checks are hardest: length, sections, anonymity, template or semantic requirements? Ask for an example without suggesting an answer.
5. What should an automated result contain so that you can verify it? Which information should accompany a finding?
6. Which content could you send to an external AI service, and which content is restricted? What retention and deletion conditions do you expect?
7. Which checks must remain under human control? What should the system do when evidence is insufficient?
8. If showing the synthetic prototype, ask the participant to confirm criteria and locate the basis of one finding. Record observed difficulties. Explain that the demonstration does not analyze the selected file.
9. Which two requirements matter most to you, and why?

Keep questions neutral. Avoid advance claims about usefulness, accuracy, time savings or acceptance. Record negative responses as well as positive ones and preserve what the participant actually said.

## Record for one discussion

Use this template for each actual participant:

- ID: U01
- Actual date and channel:
- Anonymized role and relevant experience:
- Consent to anonymized notes:
- Current requirement-checking workflow:
- Specific difficulty and example:
- Desired checking result:
- Restrictions on external AI and storage:
- Short quotation or clearly labelled paraphrase:
- Prototype observation, if demonstrated:
- Private location of original correspondence or notes:

After the discussion, record interpretation, FR/NFR mapping and a decision separately. Finding verifiability may relate to FR06/NFR02 and privacy to FR12/NFR03; these are possible mappings to check against responses.

Each user_discussions_log.csv row represents one significant observation. Several rows with one ID still represent one participant. Count unique IDs with relevant experience and consent. For each conclusion, change a requirement, retain it with a reason, or investigate later. State the limits of a three-person sample.

## After the discussions

Retain originals privately. Use anonymized responses, actual dates, roles and consent to update the CSV, relevance findings, evidence register, report_content.json and PCA-22. Propagate requirement changes to requirements.csv, the test plan and architectural mappings. Close PCA-22 after evidence acceptance.

AI tools can support neutral follow-up questions, completeness checks and analysis organization. Participant answers and consent must come from the actual participants.

## Accepted alternatives

A substantive agreement with an actual client can establish the need, users, scenarios, scope and requirements. A diploma supervisor's role alone does not establish client status.

Alternatively, obtain explicit permission from the authorized receiving party to substitute the prepared data analysis for the 3–5 discussion condition. Name the condition directly and retain the actual date, exact decision and primary evidence. Update status after the decision.

If needed, also clarify the tag conflict: “The assignment specifies pre-defense-1, while the form specifies prob-period-1. The published historical prob-period-1 will be preserved. May the corrected package use pre-defense-1 with a link to the final commit?” The final tag follows completion of the changes and integration.
