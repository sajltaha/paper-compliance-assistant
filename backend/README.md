# Backend status

The document-intake library in internal/document validates basic PDF/DOCX signatures, file size and filename and calculates SHA-256. Run `go test ./...` from backend with Go 1.23 or a compatible newer version.

There is no HTTP server or persistence implementation yet. Extraction, storage, upload hardening and external AI integration are tracked separately in PCA-17 through PCA-19.
