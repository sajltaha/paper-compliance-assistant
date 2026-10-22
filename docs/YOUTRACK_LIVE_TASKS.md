# Live YouTrack task register

Project: [Paper Compliance Assistant](https://paper-compliance-assistant.youtrack.cloud/issues/PCA)  
Board: [Paper Compliance Assistant: Kanban board](https://paper-compliance-assistant.youtrack.cloud/agiles/204-1/218-1)

This register maps the local planning keys used in the preparation documents to the live YouTrack issue IDs created on 22 October 2026. Snapshot updated on 23 October 2026 Asia/Almaty. Statuses below reflect the verified live board and must be updated only when the corresponding work is actually completed.

| Planning key | YouTrack issue | Summary | Responsible member | Current stage |
|---|---|---|---|---|
| P01 | [PCA-1](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-1) | Confirm proposal and scope | Talgat | Review |
| P02 | [PCA-2](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-2) | Conduct 3–5 real user discussions | Kaisar | Queue |
| P03 | [PCA-3](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-3) | Review scientific literature and matrix | Kaisar | Review |
| P04 | [PCA-4](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-4) | Review comparison of four existing systems | Kaisar | Review |
| P05 | [PCA-5](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-5) | Select storage and document parser after review | Talgat | Review |
| P06 | [PCA-6](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-6) | Review functional and non-functional requirements | Talgat | Review |
| P07 | [PCA-7](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-7) | Review architecture and API contract | Talgat | Review |
| P08 | [PCA-8](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-8) | Review interactive UX prototype | Kaisar | Review |
| P09 | [PCA-9](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-9) | Approve verification corpus and baselines | Kaisar | Review |
| P10 | [PCA-10](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-10) | Connect GitHub and configure team access | Talgat | Development |
| P11 | [PCA-11](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-11) | Create YouTrack project and import work items | Talgat | Review |
| P12 | [PCA-12](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-12) | Review risks and project milestones | Talgat | Review |
| P13 | [PCA-13](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-13) | Obtain supervisor review and apply revisions | Both; unassigned | Queue |
| P14 | [PCA-14](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-14) | Make individual contributions and peer PR reviews | Both; unassigned | Development |
| P15 | [PCA-15](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-15) | Prepare PDF of live YouTrack board and tasks | Talgat | Queue |
| P16 | [PCA-16](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-16) | Finalize report, access checks and submission tag | Talgat | Development |
| P17 | [PCA-17](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-17) | Implement Go upload and persistence API | Talgat | Queue |
| P18 | [PCA-18](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-18) | Implement PDF/DOCX extraction adapter | Kaisar | Development |
| P19 | [PCA-19](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-19) | Implement criterion normalization and evaluation | Kaisar | Queue |
| P20 | [PCA-21](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-21) | Implement Vue interface and Docker startup | Talgat | Queue |
| P21 | [PCA-20](https://paper-compliance-assistant.youtrack.cloud/issue/PCA-20) | Run controlled evaluation and analyse errors | Kaisar | Queue |

Assignee note: Kaisar has joined as Kaisar Nuryshev. His eight tasks are PCA-2, PCA-3, PCA-4, PCA-8, PCA-9, PCA-18, PCA-19 and PCA-20. Shared tasks PCA-13 and PCA-14 still require a single accountable assignee.

## Verified progress and remaining gates

- PCA-10 stays in Development: team GitHub access is verified; supervisor/committee access remains unverified.
- PCA-11 is in Review: the project and 21 tasks exist; shared accountability needs a final check.
- PCA-14 is in Development: PR #2 is merged; full-package and reciprocal human feedback remain outstanding. Account activity is AI-assisted, not evidence of independent human authorship.
- PCA-16 is in Development: report and status reconciliation are in progress; no final submission or tag is claimed.
- PCA-18 is in Development: PR #2 delivers intake validation only. Extraction/provenance and production hardening remain outstanding.
- PCA-19 stays in Queue: criterion normalization and LLM evaluation are not implemented. The original PR #2 label PCA-19 was incorrect and has been corrected to PCA-18 without rewriting Git history.
- PR #2: https://github.com/sajltaha/paper-compliance-assistant/pull/2
- Successful CI: https://github.com/sajltaha/paper-compliance-assistant/actions/runs/39837668052
- Merged commit in checkpoint-preparation: 2ed14d639a7576069c3cb35e64a5ab0f4c72bbdf

No task is marked Done solely because a draft or prerequisite was created. Stakeholder discussions, supervisor feedback, screenshot PDF, external access and final tag remain submission gates.
