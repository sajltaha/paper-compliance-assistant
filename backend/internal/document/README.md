# Document intake validation

This package is the first boundary of the planned document-processing pipeline.
It validates a user-supplied filename, size and container signature before a
manuscript can be passed to a PDF/DOCX parser.

Implemented checks:

- PDF extension and `%PDF-` signature;
- DOCX ZIP container with `[Content_Types].xml` and `word/document.xml`;
- configurable upload limit (20 MiB by default);
- basename-only filenames to prevent path traversal;
- SHA-256 fingerprint and normalized document metadata.

The package deliberately does not extract text, persist files or call an LLM.
Those steps remain separate tasks so that validation errors can be reported
before manuscript content enters later processing stages.
