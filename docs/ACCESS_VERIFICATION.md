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
