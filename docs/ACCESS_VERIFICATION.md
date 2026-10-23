# Anonymous access verification

Checked 2026-10-23T12:52:11.858280+00:00 (UTC; Asia/Almaty is UTC+05:00).

Requests used Python urllib with no Cookie or Authorization header. No owner session was used.

| Resource | Result | Meaning |
| --- | --- | --- |
| identity | HTTP 200 | Current unauthenticated identity is guest. |
| project | HTTP 200 | Project PCA metadata is readable. |
| board | HTTP 200 | Named Kanban board metadata is readable. |
| task | HTTP 200 | PCA-2 summary and full description are readable. |

This verifies anonymous API reading, not every interactive browser view or edit permission. Existing guest rights remain read-only and PCA-scoped. The check does not sign the owner out.

Endpoints: /api/users/me?fields=login,name ; /api/admin/projects/PCA?fields=id,name,shortName ; /api/agiles/204-1?fields=id,name ; /api/issues/PCA-2?fields=idReadable,summary,description .


## Guest browser follow-up on 23 October 2026

The Kanban board /agiles/204-1/218-1 and full PCA-18/PCA-16 pages opened in the connected Chrome browser with a visible Sign in control and guest-only disabled actions. Board totals were 22 issues: 5 Backlog, 2 Develop, 5 Review, 0 Test, 0 Staging and 10 Done. Descriptions, priorities, anonymized assignees, stages, target dates and existing PR links were readable. This verifies these selected browser views, not every page, personal identity visibility or edit rights. No account login or owner sign-out was performed.

A separate YouTrack_Board_and_Tasks.pdf contains live screenshots with overlap for readability. It is a review snapshot; refresh after final integration/evidence changes. Live PCA-16 still references PR #5 and must be updated by an authorized editor to link follow-up PR #6 and the eventual final version. No guest write was attempted.
