# 1 Project proposal

Development of an Intelligent Web System for Analyzing Scientific Articles for Compliance with Scientific Conference Requirements and Generating Recommendations. This report prepares the first probationary-period submission due on 24 October 2026 at 18:00 Asia/Almaty. The project assists authors in checking a manuscript against explicitly supplied conference requirements and produces evidence-linked recommendations.

The current deliverable includes an analysis and design package, an interactive mock prototype and an initial Go intake-validation module. The complete application, external AI integration and empirical benchmark are not implemented. The relevance analysis uses public conference policies and published screening data. Supervisor feedback and measured system performance remain outstanding.

## Problem and intended users

Conference requirements combine document structure, measurable limits and qualitative expectations. Authors must locate these rules, inspect a PDF or DOCX and explain what needs revision. The working problem hypothesis is that a reusable, criterion-level checking workflow can reduce missed requirements and make revision more systematic. Its local relevance still requires direct user evidence; literature and product pages alone do not establish demand among our intended users.

Primary users are students and early-career researchers preparing conference submissions. A supervisor may inspect the exported results, but the MVP does not require a separate supervisor account or conference-administration role. Initially, validation focuses on English-language, text-based manuscripts and explicit criteria; support for Russian or Kazakh is a later evaluation decision.

## Aim and objectives

The aim is to design and evaluate a locally runnable web system that identifies supported formal and semantic mismatches between a manuscript and user-confirmed requirements, explains findings with source evidence, and recommends concrete revisions. Objectives are to specify requirements; compare related approaches; normalize documents and criteria; implement deterministic and LLM-assisted checks; preserve evidence and run versions; and measure accuracy, coverage, latency and usefulness against declared baselines.

| In scope | Out of scope |
| --- | --- |
| One paper per run; PDF/DOCX; editable requirements; source anchors; criterion-level findings; saved runs; local Docker deployment. | Autonomous accept/reject decisions, replacement of peer review, plagiarism certification, guarantees of novelty or scientific correctness. |
| Supported counts, section checks and semantic reporting requirements; explicit unsupported/uncertain states. | Universal font/margin verification from plain text, arbitrary scanned handwritten PDFs, external conference submission and multi-tenant production hosting. |

| Member | Roles | Planned responsibility |
| --- | --- | --- |
| Сайлаубеков Талғат Ерханұлы / SE-2429 / sajltaha | Frontend, Backend, DevOps | Vue 3/TypeScript/Tailwind/Pinia, Go REST API, database and file storage, integration, local Docker Compose and functional tests. |
| Нұрышев Қайсар Серікұлы / SE-2413 / stqnlee | UI/UX, document processing, AI/LLM, QA | UX scenarios, PDF/DOCX conversion, criterion interpretation, OpenAI integration, prompt design and AI quality evaluation. |

Supervisor: Солтан Гульжан Жексенбаевна. Expected outcomes are a functioning local web application in the implementation phase, a traceable evaluation dataset and protocol, and documentation explaining limitations. The team justification fixes Vue 3 and Go; detailed parser, storage and model decisions below are engineering proposals pending review.
