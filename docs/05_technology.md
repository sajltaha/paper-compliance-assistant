# 5 Technology comparison and decisions

Six technical decisions are compared with three reasonable alternatives each. Vue 3, TypeScript, Tailwind CSS, Pinia, Go, REST and Docker Compose are already specified in the team justification. Storage, parsing, model choice and evidence selection remain proposals until the team and supervisor review them.

| Decision | Alternative A | Alternative B | Alternative C |
| --- | --- | --- | --- |
| Backend | Go net/http or Gin | Python FastAPI | Node.js with TypeScript |
| Data storage | PostgreSQL | SQLite | MongoDB |
| Document conversion | Docling adapter | GROBID plus DOCX parser | Plain PDF text plus DOCX parser |
| Evaluation strategy | Rules plus schema-validated LLM | Rules only | Single unconstrained LLM prompt |
| Component interaction | REST and JSON | gRPC | Direct in-process library calls |
| Evidence selection | Section/block selection | Whole document context | Vector retrieval |

Backend: Go selected in team justification; keep orchestration, storage and validation here. Python remains a possible internal parser adapter, not a replacement backend.

Data storage: Propose PostgreSQL for relational versioned runs; SQLite is a simpler local alternative. Decision requires pilot and supervisor review; no database implemented yet.

Document conversion: Propose Docling pilot for layout; compare GROBID on scholarly PDFs. Plain text baseline cannot verify fonts/margins. [S09,S10,D03]

Evaluation strategy: Propose hybrid checks: deterministic for counts/structure, LLM for semantic criteria; compare both baselines. [S02,S05,D04]

Component interaction: REST/JSON selected in justification; easier boundary inspection and language-independent parser interface. No latency advantage claimed.

Evidence selection: Start with section/block selection and explicit limits; compare full-context baseline; vector retrieval only if tests show need. [S07,S08,S11,S13]

## Model and deployment boundary

The OpenAI model identifier is configured through the server environment and recorded in every run. Select an available model that supports the chosen structured-output workflow after a small pilot; this report does not lock a model, token price or context limit. There is no paid model call in the prototype and no purchased cloud hosting. Local deployment still requires internet and an API key for external AI analysis; local startup does not mean the AI model runs offline.

Parser dependencies should remain behind a stable interface. A Python adapter is a proposed implementation route for Docling, while Go remains the application backend. Keep a rules-only mode for baseline evaluation and for checks supported without an LLM. A pilot must establish extraction quality before adding OCR or retrieval complexity.
