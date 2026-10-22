package document

import (
	"archive/zip"
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"path/filepath"
	"strings"
)

const DefaultMaxSize int64 = 20 * 1024 * 1024

var (
	ErrEmptyDocument     = errors.New("document is empty")
	ErrInvalidFilename   = errors.New("invalid document filename")
	ErrUnsupportedFormat = errors.New("unsupported document format")
	ErrDocumentTooLarge  = errors.New("document exceeds the size limit")
	ErrInvalidContent    = errors.New("document content does not match its format")
)

type Kind string

const (
	KindPDF  Kind = "pdf"
	KindDOCX Kind = "docx"
)

type Metadata struct {
	Filename  string `json:"filename"`
	Kind      Kind   `json:"kind"`
	SizeBytes int64  `json:"size_bytes"`
	SHA256    string `json:"sha256"`
}

// ValidateAndDescribe performs the checks required before a document enters
// the parsing pipeline. It does not extract or persist manuscript content.
func ValidateAndDescribe(filename string, content []byte, maxSize int64) (Metadata, error) {
	cleanName, err := validateFilename(filename)
	if err != nil {
		return Metadata{}, err
	}
	if len(content) == 0 {
		return Metadata{}, ErrEmptyDocument
	}
	if maxSize <= 0 {
		maxSize = DefaultMaxSize
	}
	if int64(len(content)) > maxSize {
		return Metadata{}, fmt.Errorf("%w: maximum is %d bytes", ErrDocumentTooLarge, maxSize)
	}

	kind, err := validateFormat(cleanName, content)
	if err != nil {
		return Metadata{}, err
	}
	sum := sha256.Sum256(content)
	return Metadata{
		Filename:  cleanName,
		Kind:      kind,
		SizeBytes: int64(len(content)),
		SHA256:    hex.EncodeToString(sum[:]),
	}, nil
}

func validateFilename(filename string) (string, error) {
	trimmed := strings.TrimSpace(filename)
	if trimmed == "" || trimmed == "." || filepath.Base(trimmed) != trimmed {
		return "", ErrInvalidFilename
	}
	return trimmed, nil
}

func validateFormat(filename string, content []byte) (Kind, error) {
	switch strings.ToLower(filepath.Ext(filename)) {
	case ".pdf":
		if !bytes.HasPrefix(content, []byte("%PDF-")) {
			return "", fmt.Errorf("%w: missing PDF signature", ErrInvalidContent)
		}
		return KindPDF, nil
	case ".docx":
		if err := validateDOCX(content); err != nil {
			return "", err
		}
		return KindDOCX, nil
	default:
		return "", ErrUnsupportedFormat
	}
}

func validateDOCX(content []byte) error {
	reader, err := zip.NewReader(bytes.NewReader(content), int64(len(content)))
	if err != nil {
		return fmt.Errorf("%w: malformed DOCX container", ErrInvalidContent)
	}
	required := map[string]bool{
		"[Content_Types].xml": false,
		"word/document.xml":   false,
	}
	for _, file := range reader.File {
		if _, ok := required[file.Name]; ok {
			required[file.Name] = true
		}
	}
	for name, found := range required {
		if !found {
			return fmt.Errorf("%w: DOCX entry %s is missing", ErrInvalidContent, name)
		}
	}
	return nil
}
