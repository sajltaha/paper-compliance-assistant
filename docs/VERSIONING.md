# Submission versions

The assignment names the first pre-defense tag `pre-defense-1`. The inspected Microsoft form separately requests `prob-period-1`. These are two distinct requirements, not interchangeable spellings.

Existing `prob-period-1` is retained at `86141520e74e46f433be94ae29639844ec4e3760`, including its historical report-source snapshot. It has not been moved or deleted. PRs #1-#4 are integrated there. Corrections from PRs #5–#7 are now integrated in main at `deca7d761aa449f7f8223c8514707706fb44d034`. Review acceptance, final submission tagging and form completion remain separately documented.

After actual review, resolve findings, integrate the exact approved revision and create `pre-defense-1` on the final integrated commit. Do not create a final submission tag on an unreviewed candidate merely to make a checklist green. Rebuild PDFs from that exact revision and store their hashes in the packaging manifest.

Before submitting a revised package to a form that insists on the existing `prob-period-1`, obtain a decision accepting `pre-defense-1` (or an explicitly named corrected version) as the revised submission reference. Keep the original tag visible and explain the correction. Never silently move a previously published or submitted tag. The current files are a review candidate, not a claim that the original snapshot was updated.

Report generation substitutes the immutable source commit for `{{REVISION}}` in report_content.json. This is a declared build parameter, not a second independently authored report source. The packaging manifest records the source commit and output checksums.
